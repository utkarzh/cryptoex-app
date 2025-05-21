"use client";

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
  // { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  // { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
  // { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "buy" },
  // { price: "19355.18", amount: "0.00100", total: "19355.18", type: "buy" },
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
  // { price: "19355.18", amount: "0.00100", total: "1965535.18", type: "sell" },
];

export default function OrderBook() {
  const [activeTab, setActiveTab] = useState<"orderbook" | "tradehistory">(
    "orderbook"
  );
  const [filterView, setFilterView] = useState<"both" | "buy" | "sell">("both");
  const [decimalPlaces, setDecimalPlaces] = useState(2);

  // const filteredData = MOCK_DATA.filter((row) => {
  //   if (row.type === "mid") return true;
  //   if (filterView === "both") return true;
  //   return row.type === filterView;
  // });

  return (
    <div className="bg-transparent border-2 dark:border-white/40 border-[#161735]/40 text-gray-700 dark:text-gray-400 text-sm  w-full  max-w-xs rounded-xl shadow-lg space-y-3 flex flex-col ">
      {/* Tab Header */}
      <div className="flex justify-around border-b-2 dark:border-white/40 border-[#161735]/40 pt-2  ">
        {["orderbook", "tradehistory"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`text-sm font-medium capitalize pb-2 cursor-pointer  ${
              activeTab === tab
                ? "text-green-400 border-b-[4px] relative top-[2px]"
                : ""
            }`}
          >
            {tab
              .replace("orderbook", "Order book")
              .replace("tradehistory", "Trade history")}
          </button>
        ))}
      </div>

      {activeTab === "orderbook" && (
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
                {[1, 2, 3].map((d) => (
                  <option key={d} value={d} className="dark:bg-[#06062a]">
                    {1 / 10 ** (d + 1)}
                  </option>
                ))}
              </select>

              <BiDotsVertical className="text-xl opacity-40 cursor-pointer" />
            </div>
          </div>

          {/* Table Header */}
          <div className=" h-fit flex justify-between   text-xs  pt-4  ">
            <span>Price(USDT)</span>
            <span>Amount(BTC)</span>
            <span>Total</span>
          </div>

          {/* Order Rows */}
          <div className="h-full  w-full flex flex-col overflow-y-hidden custom-scroll mt-2">
            {/* sell rows */}
            {filterView !== "buy" && (
              <div className="h-full overflow-hidden flex flex-col ">
                {MOCK_DATA_SELL.map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between  py-0.5 rounded-sm transition-colors  ${
                      row.type === "buy"
                        ? "text-green-400 text-xs"
                        : row.type === "sell"
                        ? "text-red-500 text-xs"
                        : "text-bold text-[15px]"
                    }`}
                  >
                    <span>{Number(row.price).toFixed(decimalPlaces)}</span>

                    {row.type === "mid" ? (
                      <span className="font-light">{row.total}</span>
                    ) : (
                      <span> {row.amount}</span>
                    )}

                    {row.type === "mid" ? (
                      <span>More</span>
                    ) : (
                      <span>{row.total}</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* recent activity row */}
            <div className="h-fit flex flex-col ">
              {MOCK_DATA_RECENT.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between  py-0.5 rounded-sm transition-colors  ${
                    row.type === "buy"
                      ? "text-green-400 text-xs"
                      : row.type === "sell"
                      ? "text-red-500 text-xs"
                      : "text-bold text-[15px]"
                  }`}
                >
                  <span>{Number(row.price).toFixed(decimalPlaces)}</span>

                  {row.type === "mid" ? (
                    <span className="font-light">{row.total}</span>
                  ) : (
                    <span> {row.amount}</span>
                  )}

                  {row.type === "mid" ? (
                    <span>More</span>
                  ) : (
                    <span>{row.total}</span>
                  )}
                </div>
              ))}
            </div>
            {/* buy rows */}
            {filterView !== "sell" && (
              <div className="h-full overflow-hidden flex flex-col ">
                {MOCK_DATA_BUY.map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between  py-0.5 rounded-sm transition-colors  ${
                      row.type === "buy"
                        ? "text-green-400 text-xs"
                        : row.type === "sell"
                        ? "text-red-500 text-xs"
                        : "text-bold text-[15px]"
                    }`}
                  >
                    <span>{Number(row.price).toFixed(decimalPlaces)}</span>

                    {row.type === "mid" ? (
                      <span className="font-light">{row.total}</span>
                    ) : (
                      <span> {row.amount}</span>
                    )}

                    {row.type === "mid" ? (
                      <span>More</span>
                    ) : (
                      <span>{row.total}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "tradehistory" && (
        <div className="text-gray-400 text-sm p-4">
          Trade history content here...
        </div>
      )}
    </div>
  );
}
