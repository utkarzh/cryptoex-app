"use client";

import { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { BiDotsVertical } from "react-icons/bi";
import { useTranslations } from "next-intl";
import {
  useGetOrderBookQuery as useGetTradeHistoryQuery,
  useGetIndoexDepthQuery as useGetOrderBookDepthQuery,
} from "@/redux/newapi/trade/newtradeApi";
import { useGetCombinationInfoMutation } from "@/redux/masternode/events/eventsApi";
import { extractTime } from "@/utils/ExtractTime";
import { formatToMaxDigitsDecimal } from "@/utils/fotmatFixedDigits";
import { formatSmartNumber } from "@/utils/formatSmartNumber";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";
import { OrderBook_int } from "../types";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Props = {
  pair: string;
};

const TradeBook: FC<Props> = ({ pair }) => {
  const t = useTranslations("tradePage.tradeBook");

  const [activeTab, setActiveTab] = useState<"orderbook" | "tradehistory">(
    "orderbook"
  );
  const [filterView, setFilterView] = useState<"both" | "buy" | "sell">("both");
  const [decimalPlaces, setDecimalPlaces] = useState(2);
  const [isUIValid, setIsUIValid] = useState(false);
  const [usdConversion, setUsdConversion] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [getCombinationInfo] = useGetCombinationInfoMutation();
  const { data: depthData, refetch: refetchDepth } = useGetOrderBookDepthQuery({
    pair,
  });
  const { data: tradeHistoryData, refetch: refetchHistory } =
    useGetTradeHistoryQuery({ pair });

  const [base, quote] = pair.split("_");
  const latestTrade = (tradeHistoryData as OrderBook_int)?.orderbook?.[0];

  useEffect(() => {
    const vendor = base;
    const market = quote;

    const fetchInitialData = async () => {
      try {
        const res: any = await getCombinationInfo({ vendor, market }).unwrap();
        const valid = res?.uistatus === 200;
        setIsUIValid(valid);

        if (valid) {
          setUsdConversion(res?.marketinfo?.vendors_usdrate ?? null);
          await refetchDepth();
          await refetchHistory();
        }
      } catch (err) {
        console.error("Error fetching combination info", err);
        setIsUIValid(false);
      }
    };

    fetchInitialData();
  }, [pair, getCombinationInfo, refetchDepth, refetchHistory, base, quote]);

  useEffect(() => {
    const asksLen = depthData?.asks?.length ?? 0;
    const bidsLen = depthData?.bids?.length ?? 0;
    const shouldPoll = isUIValid && asksLen >= 15 && bidsLen >= 15;

    if (shouldPoll && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        // refetchDepth();
        // refetchHistory();
      }, 200);
    } else if (!shouldPoll && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [
    isUIValid,
    depthData?.asks?.length,
    depthData?.bids?.length,
    refetchDepth,
    refetchHistory,
  ]);

  const renderOrderRow = (
    price: number,
    quantity: number,
    type: "buy" | "sell"
  ) => {
    const total = (price * quantity).toFixed(decimalPlaces);
    return (
      <div
        key={`${type}-${price}-${quantity}`}
        className={`flex gap-1 py-1 text-xs rounded-sm ${
          type === "buy"
            ? "text-green-600 dark:text-green-500"
            : "text-red-500 dark:text-[#d24e4c]"
        }`}
      >
        <span className="w-full">{price.toFixed(decimalPlaces)}</span>
        <span className="w-full text-center">
          {quantity.toFixed(decimalPlaces)}
        </span>
        <span className="w-full text-end">{total}</span>
      </div>
    );
  };

  const getLatestTradeColor = () => {
    return latestTrade?.type === "Buy Order"
      ? "text-green-600"
      : "text-red-500 dark:text-[#d24e4c]";
  };

  const getLatestTradeArrow = () => {
    return latestTrade?.type === "Buy Order" ? <FaArrowUp /> : <FaArrowDown />;
  };

  return (
    <div className="h-full overflow-hidden w-full lg:max-w-xs rounded-xl border-2 border-[#161735]/10 dark:border-white/10 text-sm text-gray-700 dark:text-gray-400 bg-transparent shadow-lg flex flex-col gap-3">
      {/* Tabs */}
      <div className="flex justify-around pt-2 border-b-2 border-[#161735]/10 dark:border-white/10">
        {["orderbook", "tradehistory"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "orderbook" | "tradehistory")}
            className={`text-xs font-medium capitalize pb-2 ${
              activeTab === tab
                ? "text-green-400 border-b-2 relative top-[2px]"
                : ""
            }`}
          >
            {t(`tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* Orderbook Controls */}
      {activeTab === "orderbook" && (
        <div className="px-4 flex justify-between items-center text-xs">
          <div className="flex space-x-1">
            {["both", "buy", "sell"].map((type) => (
              <button key={type} onClick={() => setFilterView(type as any)}>
                <Image
                  src={`/images/icons/${
                    type === "both" ? "sellnbuy" : type
                  }.png`}
                  className={`w-4 h-auto transition-all cursor-pointer hover:scale-105 ${
                    filterView === type ? "opacity-100" : "opacity-40"
                  }`}
                  alt={type}
                  width={20}
                  height={20}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-1 items-center">
            <select
              className="px-2 py-0.5 border-none outline-none dark:bg-transparent"
              value={decimalPlaces}
              onChange={(e) => setDecimalPlaces(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((d) => (
                <option key={d} value={d} className="dark:bg-[#06062a]">
                  {1 / 10 ** d}
                </option>
              ))}
            </select>
            <BiDotsVertical className="text-xl opacity-40 cursor-pointer" />
          </div>
        </div>
      )}

      {/* Table Header */}
      <div
        className={`flex justify-between text-xs px-4 ${
          activeTab === "orderbook" ? "pt-4" : ""
        }`}
      >
        <span className="w-full">{t("tHead.price")}</span>
        <span className="w-full text-center translate-x-1/5">
          {t("tHead.vol")} ({base})
        </span>
        <span className="w-full text-end">
          {activeTab === "orderbook"
            ? `${t("tHead.total")} (${quote})`
            : t("tHead.time")}
        </span>
      </div>

      {/* Orderbook Content */}
      {activeTab === "orderbook" && (
        <div className="h-[78%] px-4 pt-2 custom-scroll flex flex-col">
          {filterView !== "buy" && (
            <div
              className={`${
                filterView === "sell" ? "h-full" : "h-[50%]"
              } overflow-hidden flex flex-col`}
            >
              {(depthData?.asks?.slice(0, 7).reverse() ?? []).map((ask) =>
                renderOrderRow(ask.price, ask.quantity, "sell")
              )}
            </div>
          )}

          {/* Latest Trade Price Center Divider */}
          {latestTrade && (
            <div className="flex py-1.5 my-1 text-[16px] bg-transparent font-bold">
              <span
                className={`flex-[1] flex items-center gap-1 ${getLatestTradeColor()}`}
                style={{ fontFamily: "monospace" }}
              >
                {latestTrade.price.toFixed(3)}
                <span className="text-sm">{getLatestTradeArrow()}</span>
              </span>
              <span
                className="flex-[1] text-center text-white/60"
                style={{ fontFamily: "monospace" }}
              >
                {usdConversion
                  ? `$${(latestTrade.price * usdConversion).toFixed(3)}`
                  : "—"}
              </span>
              <span
                className="flex-[1] text-right text-xs cursor-pointer"
                style={{ fontFamily: "monospace" }}
              >
                {t("more")}
              </span>
            </div>
          )}

          {filterView !== "sell" && (
            <div
              className={`${
                filterView === "buy" ? "h-full" : "h-[50%]"
              } overflow-hidden flex flex-col`}
            >
              {(depthData?.bids ?? []).map((bid) =>
                renderOrderRow(bid.price, bid.quantity, "buy")
              )}
            </div>
          )}
        </div>
      )}

      {/* Trade History Content */}
      {activeTab === "tradehistory" && (
        <div className="h-full px-4 pt-2 custom-scroll overflow-auto">
          {!(tradeHistoryData as OrderBook_int)?.orderbook ? (
            <LoadingTableSkeleton rows={5} columns={3} />
          ) : (
            (tradeHistoryData as OrderBook_int).orderbook.map((trade) => (
              <div
                key={trade.tradeID}
                className={`flex gap-1 py-1 text-xs rounded-sm ${
                  trade.type === "Buy Order"
                    ? "text-green-700 dark:text-green-600"
                    : "text-red-500 dark:text-[#d24e4c]"
                }`}
              >
                <span className="w-full" style={{ fontFamily: "monospace" }}>
                  {formatToMaxDigitsDecimal(trade.price, 12)}
                </span>
                <span
                  className="w-full text-center"
                  style={{ fontFamily: "monospace" }}
                >
                  {formatSmartNumber(trade.baseVolume)}
                </span>
                <span
                  className="w-full text-end"
                  style={{ fontFamily: "monospace" }}
                >
                  {extractTime(trade.time)}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TradeBook;
