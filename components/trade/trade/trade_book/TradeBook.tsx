"use client";

import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";
import { useGetOrderBookQuery } from "@/redux/newapi/trade/newtradeApi";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import { OrderBook_int } from "../types";
import { extractTime } from "@/utils/ExtractTime";
import { formatToMaxDigitsDecimal } from "@/utils/fotmatFixedDigits";
import { formatSmartNumber } from "@/utils/formatSmartNumber";

const MOCK_DATA_BUY = [
  // Buy orders (green)
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
];

const MOCK_DATA_RECENT = [
  {
    price: "19355.18",
    amount: "-",
    total: "$19,351.17",
    type: "mid",
  },
];

const MOCK_DATA_SELL = [
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
  { price: "19355.18", amount: "0.00100", total: "19355.18", type: "sell" },
];

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

  const { data, refetch } = useGetOrderBookQuery({ pair });
  useEffect(() => {
    refetch();
  }, [pair]);

  return (
    <div className=" h-[100%] overflow-hidden bg-transparent border-2 dark:border-white/10 border-[#161735]/10 text-gray-700 dark:text-gray-400 text-sm  w-full lg:max-w-xs rounded-xl shadow-lg gap-3 flex flex-col">
      {/* Tab Header */}
      <div className="flex h-fit justify-around border-b-2 dark:border-white/10 border-[#161735]/10 pt-2  ">
        {["orderbook", "tradehistory"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`text-xs font-medium capitalize pb-2 cursor-pointer  ${
              activeTab === tab
                ? "text-green-400 border-b-2 relative top-[2px]"
                : ""
            }`}
          >
            {t(`tabs.${tab}`)}
          </button>
        ))}
      </div>

      {(activeTab === "orderbook" || activeTab === "tradehistory") && (
        <div className=" h-full  flex flex-col   ">
          {/*Filter & Decimal Selector */}
          {activeTab === "orderbook" && (
            <div className=" px-4 h-fit flex justify-between  items-center text-xs">
              {/* filter */}
              <div className="flex space-x-1">
                {/* both */}
                <button onClick={() => setFilterView("both")}>
                  <Image
                    src="/images/icons/sellnbuy.png"
                    className={`${
                      filterView === "both" ? "opacity-100" : "opacity-40"
                    } w-4 h-auto cursor-pointer hover:scale-105 transition-all `}
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
                {/* buy */}
                <button onClick={() => setFilterView("buy")}>
                  <Image
                    src="/images/icons/buy.png"
                    className={`${
                      filterView === "buy" ? "opacity-100" : "opacity-40"
                    } w-4 h-auto cursor-pointer hover:scale-105 transition-all `}
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
                {/* sell */}
                <button onClick={() => setFilterView("sell")}>
                  <Image
                    src="/images/icons/sell.png"
                    className={`${
                      filterView === "sell" ? "opacity-100" : "opacity-40"
                    } w-4 h-auto cursor-pointer hover:scale-105 transition-all `}
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              {/* deci selector */}
              <div className="flex gap-1">
                <select
                  className="  border-none outline-none px-2 py-0.5 dark:bg-transparent "
                  value={decimalPlaces}
                  onChange={(e) => setDecimalPlaces(Number(e.target.value))}
                >
                  {[1, 2, 3, 4].map((d) => (
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
            className={`w-full  h-fit flex justify-between   text-xs px-4 ${
              activeTab === "orderbook" ? "pt-4 " : ""
            } `}
          >
            <span className="w-full flex">{t("tHead.price")}</span>
            <span className="w-full flex justify-center relative translate-x-1/5 ">
              {t("tHead.vol")}({data && data?.name.split("_")[0]})
            </span>
            <span className="w-full flex justify-end">
              {activeTab === "orderbook"
                ? `${t("tHead.total")}(${data && data?.name.split("_")[1]})`
                : t("tHead.time")}
            </span>
          </div>

          {/* Order Rows */}
          {activeTab === "orderbook" && (
            <div className="h-[78%] 2xl:h-[78%] px-4  w-full flex flex-col  custom-scroll pt-2 ">
              {/* sell rows */}
              {/* <div className={"flex flex-col h-[50%] overflow-hidden"}> */}
              {/* {filterView !== "buy" && ( */}
              <div
                className={` ${
                  filterView === "sell"
                    ? "h-full overflow-hidden"
                    : filterView === "buy"
                    ? "hidden"
                    : "h-[50%] overflow-hidden"
                }   flex flex-col`}
              >
                {MOCK_DATA_SELL.map((row, i) => (
                  <div
                    key={i}
                    className={`flex  gap-1 w-full  py-1 2xl:py-0.5 rounded-sm transition-colors  ${
                      row.type === "buy"
                        ? "text-green-700 dark:text-green-600 text-xs"
                        : row.type === "sell"
                        ? "text-red-500 dark:text-[#d24e4c] text-xs"
                        : "text-bold text-[15px] xl:text-[1rem]"
                    }`}
                  >
                    <span className="w-full">
                      {Number(row.price).toFixed(decimalPlaces)}
                    </span>

                    {row.type === "mid" ? (
                      <span className="font-light">{row.total}</span>
                    ) : (
                      <span className="w-full text-center"> {row.amount}</span>
                    )}

                    {row.type === "mid" ? (
                      <span>{t("more")}</span>
                    ) : (
                      <span className="w-full text-end">{row.total}</span>
                    )}
                  </div>
                ))}
              </div>
              {/* )} */}
              {/* </div> */}

              {/* recent activity row */}
              {/* <div className="h-fit flex flex-col "> */}
              {MOCK_DATA_RECENT.map((row, i) => (
                <div
                  key={i}
                  className={`flex gap-1  py-1.5 2xl:py-0.5 rounded-sm transition-colors  ${
                    row.type === "buy"
                      ? "text-green-400 text-xs"
                      : row.type === "sell"
                      ? "text-red-500 text-xs"
                      : "text-bold text-[15px] my-1 xl:text-[1rem]"
                  }`}
                >
                  <span className="w-full text-green-600">
                    {Number(row.price).toFixed(decimalPlaces + 1)}
                  </span>

                  {row.type === "mid" ? (
                    <span className="w-full text-start font-light">
                      {row.total}
                    </span>
                  ) : (
                    <span className="w-full text-end"> {row.amount}</span>
                  )}

                  {row.type === "mid" ? (
                    <span className="w-full text-end text-xs cursor-pointer">
                      {t("more")}
                    </span>
                  ) : (
                    <span>{row.total}</span>
                  )}
                </div>
              ))}
              {/* </div> */}
              {/* buy rows */}
              {/* <div className="flex flex-col h-[50%] overflow-hidden"> */}
              {/* {filterView !== "sell" && ( */}
              <div
                className={` ${
                  filterView === "buy"
                    ? "h-full"
                    : filterView === "sell"
                    ? "hidden"
                    : "h-[50%] overflow-hidden"
                }   flex flex-col`}
              >
                {MOCK_DATA_BUY.map((row, i) => (
                  <div
                    key={i}
                    className={`flex gap-1 py-1 2xl:py-0.5 rounded-sm transition-colors  ${
                      row.type === "buy"
                        ? "text-green-700 dark:text-green-600 text-xs"
                        : row.type === "sell"
                        ? "text-red-500 text-xs"
                        : "text-bold  text-[15px] xl:text-[1rem]"
                    }`}
                  >
                    <span className="w-full">
                      {Number(row.price).toFixed(decimalPlaces)}
                    </span>

                    {row.type === "mid" ? (
                      <span className="font-light">{row.total}</span>
                    ) : (
                      <span className="w-ful text-end"> {row.amount}</span>
                    )}

                    {row.type === "mid" ? (
                      <span className="text-[10px]">{t("more")}</span>
                    ) : (
                      <span className="w-full text-end">{row.total}</span>
                    )}
                  </div>
                ))}
              </div>
              {/* )} */}
              {/* </div> */}
            </div>
          )}

          {activeTab === "tradehistory" ? (
            (data as OrderBook_int) && data.status === 1 ? (
              <div className="h-full px-4 mb-2 overflow-auto custom-scroll  w-full flex flex-col  custom-scroll pt-2 ">
                {(data as OrderBook_int).orderbook.map((val) => (
                  <div
                    key={val.tradeID}
                    className={`flex  gap-1 w-full  py-1 2xl:py-0.5 rounded-sm transition-colors  ${
                      val.type === "Buy Order"
                        ? "text-green-700 dark:text-green-600 text-xs"
                        : val.type === "Sell Order"
                        ? "text-red-500 dark:text-[#d24e4c] text-xs"
                        : "text-bold text-[15px] xl:text-[1rem]"
                    }`}
                  >
                    <span
                      className="w-full"
                      title={val.price.toString()}
                      style={{ fontFamily: "monospace" }}
                    >
                      {formatToMaxDigitsDecimal(val.price, 12)}
                    </span>

                    {/* volume */}
                    <span
                      className="w-full  flex justify-center  "
                      title={val.baseVolume.toString()}
                      style={{ fontFamily: "monospace" }}
                    >
                      {formatSmartNumber(val.baseVolume)}
                    </span>
                    {/*time*/}
                    <span
                      className="w-full flex-1 "
                      style={{ fontFamily: "monospace" }}
                    >
                      {extractTime(val.time)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <LoadingTableSkeleton rows={5} columns={3} />
            )
          ) : (
            ""
          )}
        </div>
      )}

      {/* {activeTab === "tradehistory" && (
        <div className="text-gray-400 text-sm p-4">
          Trade history content here...
        </div>
      )} */}
    </div>
  );
};

export default TradeBook;
