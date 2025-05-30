"use client";
import { saira } from "@/utils/Font";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdTrendingUp } from "react-icons/md";
import { TbArrowsDownUp } from "react-icons/tb";

type CoinData = {
  symbol: string;
  name: string;
  icon: string;
  avl_bal: number;
  input_val: number;
  apprx_dol: number;
};

const testCoinData: CoinData[] = [
  {
    symbol: "SOL",
    name: "Solana",
    icon: "/images/coins/solanarounded.png",
    avl_bal: 120.3,
    input_val: 10.5,
    apprx_dol: 140.03,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: "/images/coins/ethereumrounded.png",
    avl_bal: 12.3,
    input_val: 1.5,
    apprx_dol: 130.03,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: "/images/coins/btc.png",
    avl_bal: 0.15,
    input_val: 0.0015,
    apprx_dol: 140.03,
  },
  {
    symbol: "POL",
    name: "Polygon",
    icon: "/images/coins/polygonrounded.png",
    avl_bal: 120.3,
    input_val: 10.5,
    apprx_dol: 140.03,
  },
  {
    symbol: "NLG",
    name: "Gulden",
    icon: "/images/coins/btc.png",
    avl_bal: 120.3,
    input_val: 10.5,
    apprx_dol: 140.03,
  },
];

export default function CryptoConvertForm() {
  const [fromCoin, setFromCoin] = useState<CoinData>(testCoinData[2]);
  const [toCoin, setToCoin] = useState<CoinData>(testCoinData[1]);

  const [isFromFormOpne, setIsFromFormOpen] = useState(false);
  const [isToFormOpen, setIsToFormOpem] = useState(false);

  const fromCoinSelectionHandler = (data: CoinData) => {
    setFromCoin(data);
    setIsFromFormOpen(false);
    setIsToFormOpem(false);
  };

  const toCoinSelectionHandler = (data: CoinData) => {
    setToCoin(data);
    setIsFromFormOpen(false);
    setIsToFormOpem(false);
  };

  const swapHandler = () => {
    const tempData: CoinData = fromCoin;
    setFromCoin(toCoin);
    setToCoin(tempData);
  };
  return (
    <div className="mt-8 mb-10 flex flex-col  items-center ">
      {/* heading */}
      <div className="flex flex-col justify-center items-center text-center max-w-[300px]">
        <h2 className={` ${saira.className} text-2xl font-semibold mb-1`}>
          Convert
        </h2>
        <p className="text-xs">
          Quickly and easily convert hundreds of cryptocurrencies with instant
          execution.
        </p>
      </div>

      {/* Conversion Box */}
      <div className="w-full max-w-md mt-10 ">
        {/* From Box */}
        <div className=" border relative top-1 flex  rounded-xl p-4 z-[20] border-black/30 dark:border-white/30">
          {/* left section */}
          <div className="w-full  ">
            {/* available balance */}
            <p className="text-nowrap text-[10px] dark:text-slate-400">
              Available balance : {fromCoin.avl_bal}
            </p>
            <input
              type="text"
              className="outline-none w-fit bg-transparent text-md font-bold py-0.5"
              value={fromCoin.input_val}
              placeholder="Min 0.005 BTC"
            />
            {/* approx $ */}
            <p className=" text-[10px] text-nowrap dark:text-slate-400">
              ≈ ${fromCoin.apprx_dol}
            </p>
          </div>
          {/* right section */}
          <div className="w-full flex  justify-end ">
            {/* right:- coin selection section */}
            <div className="w-fit flex flex-col items-end gap-2  ">
              <p className="text-[10px] dark:text-slate-400 pr-2">From</p>
              <div className="flex gap-1 items-center">
                <div className="text-green-600 text-xs">Max</div>
                {/* coin selection */}
                <div
                  className="  dark:bg-slate-200/15 bg-slate-700/15 rounded-full px-2 py-[2px] flex gap-6 items-center relative"
                  onClick={() => {
                    setIsFromFormOpen(true);
                  }}
                >
                  <div className="flex gap-1 items-center">
                    {/* coin */}
                    <Image
                      src={fromCoin.icon}
                      width={30}
                      height={30}
                      alt=""
                      className="w-4 h-auto py-1"
                    />
                    {/* name */}
                    <p className="text-[12px]">{fromCoin.symbol}</p>
                  </div>

                  {isFromFormOpne && (
                    <div className="absolute w-full min-w-[100px] h-[200px] border top-[100%] translate-y-1 rounded-md left-0 overflow-y-auto bg-white dark:bg-[#1d1f38] border-black/30 dark:border-white/30 flex flex-col gap-2 p-1.5 z-[30]">
                      {testCoinData.map((val) => (
                        <div
                          key={val.symbol}
                          className="p-1 px-2 bg-slate-300/30 dark:bg-slate-500/20 rounded-full cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            fromCoinSelectionHandler(val);
                          }}
                        >
                          <div className="w-full flex gap-1 items-center">
                            {/* coin */}
                            <Image
                              src={val.icon}
                              width={30}
                              height={30}
                              alt=""
                              className="w-4 h-auto py-1"
                            />
                            {/* name */}
                            <p className="text-[12px]">{val.symbol}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <IoIosArrowDown className=" text-xl cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Icon */}
        <div
          className="flex justify-center relative z-[30] cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={swapHandler}
        >
          <div className="bg-slate-100 dark:bg-[#1B1E3F] p-2 rounded-full border border-slate-200 dark:border-[#2a2e5a]">
            <TbArrowsDownUp className="text-green-400 text-xl" />
          </div>
        </div>

        {/* To Box */}
        <div className=" border flex  rounded-xl p-4 relative -top-1 border-black/30 dark:border-white/30">
          {/* left section */}
          <div className="w-full  ">
            {/* available balance */}
            <p className="text-nowrap text-[10px] dark:text-slate-400">
              Available balance : {toCoin.avl_bal}
            </p>
            <input
              type="text"
              className="outline-none w-fit bg-transparent text-md font-bold py-0.5"
              value={toCoin.input_val}
              placeholder="Min 0.005 BTC"
            />
            {/* approx $ */}
            <p className=" text-[10px] text-nowrap dark:text-slate-400">
              ≈ ${toCoin.apprx_dol}
            </p>
          </div>
          {/* right section */}
          <div className="w-full flex  justify-end ">
            {/* right:- coin selection section */}
            <div className="w-fit flex flex-col items-end gap-2  ">
              <p className="text-[10px] dark:text-slate-400 pr-2">From</p>
              <div className="flex gap-1 items-center">
                {/* coin selection */}
                <div
                  className="  dark:bg-slate-200/15 bg-slate-700/15 rounded-full px-2 py-[2px] flex gap-6 items-center relative"
                  onClick={() => {
                    setIsToFormOpem(true);
                  }}
                >
                  <div className="flex gap-1 items-center">
                    {/* coin */}
                    <Image
                      src={toCoin.icon}
                      width={30}
                      height={30}
                      alt=""
                      className="w-4 h-auto py-1"
                    />
                    {/* name */}
                    <p className="text-[12px]">{toCoin.symbol}</p>
                  </div>

                  {isToFormOpen && (
                    <div className="absolute w-full min-w-[100px] h-[200px] border top-[100%] translate-y-1 rounded-md left-0 overflow-y-auto bg-white dark:bg-[#1d1f38] border-black/30 dark:border-white/30 flex flex-col gap-2 p-1.5 z-[30]">
                      {testCoinData.map((val) => (
                        <div
                          key={val.symbol}
                          className="p-1 px-2 bg-slate-300/30 dark:bg-slate-500/20 rounded-full cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            toCoinSelectionHandler(val);
                          }}
                        >
                          <div className="w-full flex gap-1 items-center">
                            {/* coin */}
                            <Image
                              src={val.icon}
                              width={30}
                              height={30}
                              alt=""
                              className="w-4 h-auto py-1"
                            />
                            {/* name */}
                            <p className="text-[12px]">{val.symbol}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <IoIosArrowDown className=" text-xl cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rate */}
        <p className="text-start text-xs text-gray-500 my-3">
          Rate : 1 ETH ≈ 0.01886 BTC
        </p>

        {/* Action Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-full transition text-xs cursor-pointer">
          Log in / Sign up
        </button>

        {/* trade spot */}

        <div className="w-fit mx-auto flex gap-2 justify-center items-center mt-4 cursor-pointer text-slate-500 hover:scale-105 transition-all duration-200">
          <MdTrendingUp />
          <span className="text-xs ">Trade spot</span>
        </div>
      </div>
    </div>
  );
}
