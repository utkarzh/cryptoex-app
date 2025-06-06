"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { BiDotsVertical } from "react-icons/bi";

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
];

const TradeBook = () => {
  const t = useTranslations("tradePage.tradeBook");

  const [activeTab, setActiveTab] = useState<"orderbook" | "tradehistory">(
    "orderbook"
  );
  const [filterView, setFilterView] = useState<"both" | "buy" | "sell">("both");
  const [decimalPlaces, setDecimalPlaces] = useState(2);

  return (
    <div className=" h-[100%] overflow-hidden bg-transparent border-2 dark:border-white/10 border-[#161735]/10 text-gray-700 dark:text-gray-400 text-sm  w-full  lg:max-w-xs rounded-xl shadow-lg space-y-3 flex flex-col ">
      {/* Tab Header */}
      <div className="flex justify-around border-b-2 dark:border-white/10 border-[#161735]/10 pt-2  ">
        {["orderbook", "tradehistory"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`text-[12px] font-medium capitalize pb-2 cursor-pointer  ${
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
        <div className="mx-4 h-[100%] flex flex-col ">
          {/*Filter & Decimal Selector */}
          <div className="h-fit flex justify-between  items-center text-xs">
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

          {/* Table Header */}
          <div className=" h-fit flex justify-between   text-xs  pt-4  ">
            <span>{t("tHead.price")}</span>
            <span>{t("tHead.amount")}</span>
            <span>{t("tHead.total")}</span>
          </div>

          {/* Order Rows */}
          <div className="h-full  w-full flex flex-col  custom-scroll mt-2">
            {/* sell rows */}
            {/* <div className="flex flex-col h-full"> */}
            {filterView !== "buy" && (
              <div
                className={` ${
                  filterView === "sell" ? "h-fit" : "h-full"
                }   flex flex-col`}
              >
                {MOCK_DATA_SELL.map((row, i) => (
                  <div
                    key={i}
                    className={`flex  gap-1 w-full  py-0.5 rounded-sm transition-colors  ${
                      row.type === "buy"
                        ? "text-green-400 text-xs"
                        : row.type === "sell"
                        ? "text-red-500 text-xs"
                        : "text-bold text-[15px]"
                    }`}
                  >
                    <span className="w-full">
                      {Number(row.price).toFixed(decimalPlaces)}
                    </span>

                    {row.type === "mid" ? (
                      <span className="font-light">{row.total}</span>
                    ) : (
                      <span className="w-full text-end"> {row.amount}</span>
                    )}

                    {row.type === "mid" ? (
                      <span>{t("more")}</span>
                    ) : (
                      <span className="w-full text-end">{row.total}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
            {/* </div> */}

            {/* recent activity row */}
            <div className="h-fit flex flex-col ">
              {MOCK_DATA_RECENT.map((row, i) => (
                <div
                  key={i}
                  className={`flex gap-1  py-0.5 rounded-sm transition-colors  ${
                    row.type === "buy"
                      ? "text-green-400 text-xs"
                      : row.type === "sell"
                      ? "text-red-500 text-xs"
                      : "text-bold text-[15px]"
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
                    <span className="w-full text-end text-[12px] cursor-pointer">
                      {t("more")}
                    </span>
                  ) : (
                    <span>{row.total}</span>
                  )}
                </div>
              ))}
            </div>
            {/* buy rows */}
            {/* <div className="flex flex-col h-full"> */}
            {filterView !== "sell" && (
              <div
                className={` ${
                  filterView === "buy" ? "h-fit" : "h-full"
                }   flex flex-col`}
              >
                {MOCK_DATA_BUY.map((row, i) => (
                  <div
                    key={i}
                    className={`flex gap-1 py-0.5 rounded-sm transition-colors  ${
                      row.type === "buy"
                        ? "text-green-400 text-xs"
                        : row.type === "sell"
                        ? "text-red-500 text-xs"
                        : "text-bold text-[15px]"
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
            )}
            {/* </div> */}
          </div>
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
