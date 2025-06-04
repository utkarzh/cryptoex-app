"use client";
import React, { useState } from "react";

const TradeForm = () => {
  const [activeSide, setActiveSide] = useState<"buy" | "sell">("buy");
  const [activeMode, setActiveMode] = useState<"spot" | "cross" | "isolated">(
    "spot"
  );
  const [activeType, setActiveType] = useState<"limit" | "market" | "stop">(
    "limit"
  );

  const [crossModeTypes, setCrossModeTypes] = useState<
    "normal" | "borrow" | "repay"
  >("borrow");

  const [percentSelected, setPercentSelected] = useState<number>(0);

  const percentageSelectHandler = (data: number) => {
    console.log("The value is :- ", data);
    setPercentSelected(data);
  };

  return (
    <div className="w-full lg::max-w-xs bg-white dark:bg-[#161735] text-gray-700 dark:text-gray-400 p-3 px-3 rounded-xl   text-sm shadow-md flex flex-col gap-4 h-fit">
      {/* Buy/Sell Tabs */}
      <div className="flex justify-between gap-2  p-1 rounded-full ">
        {["buy", "sell"].map((side) => (
          <button
            key={side}
            onClick={() => setActiveSide(side as typeof activeSide)}
            className={`flex-1 py-1 rounded-full text-sm capitalize cursor-pointer ${
              activeSide === side
                ? side === "buy"
                  ? "bg-green-500 text-white dark:text-black"
                  : "bg-red-500 text-white dark:text-black"
                : " bg-[#eff0f2] dark:bg-[#222248] text-black dark:text-gray-400 "
            }`}
          >
            {side}
          </button>
        ))}
      </div>

      {/* Spot/Cross/Isolated Tabs */}
      <div className="flex justify-between border-b border-[#eff0f2] dark:border-[#222248]  px-3">
        {["spot", "cross", "isolated"].map((mode) => (
          <button
            key={mode}
            onClick={() => setActiveMode(mode as typeof activeMode)}
            className={`capitalize relative top-[1px] pb-2 cursor-pointer ${
              activeMode === mode ? "text-green-600 border-b-2 " : ""
            } `}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Order Type */}
      <div className="flex  px-1 justify-between mt-2">
        {["limit", "market", "stop"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type as typeof activeType)}
            className={`capitalize px-2 py-1 rounded-full text-xs cursor-pointer ${
              activeType === type
                ? "bg-green-600 text-green-100 dark:bg-green-600/20 dark:text-green-500"
                : ""
            }`}
          >
            {type === "stop" ? "Stop limit" : type}
          </button>
        ))}
      </div>

      {/* Normal/borrow/repay */}
      {activeMode === "cross" && (
        <div className="flex  px-1 justify-between mt-2">
          {["normal", "borrow", "repay"].map((type) => (
            <button
              key={type}
              onClick={() => setCrossModeTypes(type as typeof crossModeTypes)}
              className={`capitalize px-2 py-1 rounded-full text-xs cursor-pointer ${
                crossModeTypes === type
                  ? "bg-green-600 text-green-100 dark:bg-green-600/20 dark:text-green-500"
                  : ""
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {/* Input Fields */}
      <div className="space-y-3 mt-2">
        <div className="bg-[#eff0f2] dark:bg-[#222248] rounded-md px-3 py-2 flex justify-between items-center">
          <input
            placeholder="Price"
            className="bg-transparent outline-none w-full placeholder-gray-400 dark:placeholder-gray-500 "
          />
          <span className="text-gray-600 dark:text-gray-400 text-xs font-medium ml-2">
            USDT
          </span>
        </div>
        <div className="bg-[#eff0f2] dark:bg-[#222248] rounded-md px-3 py-2 flex justify-between items-center">
          <input
            placeholder="Amount"
            className="bg-transparent outline-none w-full placeholder-gray-400 dark:placeholder-gray-500 "
          />
          <span className="text-gray-600 dark:text-gray-400 text-xs font-medium ml-2">
            BTC
          </span>
        </div>
      </div>

      {/* percentage row */}

      <div className="w-full ">
        <div className="flex justify-between text-gray-400 text-[10px] mt-1">
          {[0, 50, 75].map((val) => (
            <div key={val} className="w-full flex">
              <div
                className="w-fit flex flex-col items-center space-y-1 cursor-pointer"
                onClick={() => percentageSelectHandler(val)}
              >
                <div
                  className={` ${
                    percentSelected >= val
                      ? "bg-green-600 size-2 mt-0"
                      : "bg-black/40 dark:bg-white/40 size-1 mt-[2px] "
                  }  rounded-full `}
                ></div>
                <span className=" font-extralight text-black dark:text-inherit">
                  {val}%
                </span>
              </div>
              {/* border line */}
              <div
                className={`w-full mt-[2px] ${
                  percentSelected > val
                    ? "bg-green-600 size-2 mt-0"
                    : "bg-black/40 dark:bg-white/40 size-1 mt-[2px] "
                } rounded h-1 transition-all duration-200`}
              ></div>
            </div>
          ))}

          <div
            className="w-fit flex flex-col items-center space-y-1 cursor-pointer"
            onClick={() => percentageSelectHandler(100)}
          >
            <div
              className={` ${
                percentSelected >= 100
                  ? "bg-green-600 size-2 mt-0"
                  : "bg-black/40 dark:bg-white/40 size-1 mt-[2px]"
              }  rounded-full `}
            ></div>
            <span className=" text-black dark:text-inherit font-extralight">
              100%
            </span>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="bg-[#eff0f2] dark:bg-[#222248] rounded-md px-3 py-2 flex justify-between items-center mt-2">
        <input
          placeholder="Total"
          className="bg-transparent outline-none w-full placeholder-gray-400 dark:placeholder-gray-500 "
        />
        <span className="text-gray-600 dark:text-gray-400 text-xs font-medium ml-2">
          USDT
        </span>
      </div>

      {/* Info */}
      <div className=" text-xs pl-1 font-extralight space-y-1">
        <p>Available: 0 USDT</p>
        <p>Txn Fee: 0 BTC</p>
        {activeMode === "cross" && <p>Borrowing: 0 USDT</p>}
      </div>

      {/* Login/Sign up */}
      <button className="w-full bg-green-500 hover:bg-green-600  text-white dark:text-black font-medium py-2 rounded-full mb-2 cursor-pointer transition-all duration-300">
        Log in / Sign up
      </button>
    </div>
  );
};

export default TradeForm;
