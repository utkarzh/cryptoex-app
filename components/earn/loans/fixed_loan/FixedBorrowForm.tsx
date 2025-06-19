"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosAddCircleOutline, IoIosArrowDown } from "react-icons/io";
import { useTranslations } from "next-intl";

type CoinData = {
  symbol: string;
  name: string;
  icon: string;
};

const testCoinData: CoinData[] = [
  {
    symbol: "SOL",
    name: "Solana",
    icon: "/images/coins/solanarounded.png",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: "/images/coins/ethereumrounded.png",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: "/images/coins/btc.png",
  },
  {
    symbol: "POL",
    name: "Polygon",
    icon: "/images/coins/polygonrounded.png",
  },
  {
    symbol: "NLG",
    name: "Gulden",
    icon: "/images/coins/btc.png",
  },
];

export default function FixedBorrowForm() {
  const t = useTranslations("loansPage.fixedLoan.borrowForm");
  const [tab, setTab] = useState<"borrow" | "supply">("borrow");
  const [duration, setDuration] = useState(30);
  const [autoRepay, setAutoRepay] = useState(true);

  const [borrowCoin, setBorrowCoin] = useState<CoinData>(testCoinData[1]);
  const [isBorrowSelectionOpen, setIsBorrowSelectionOpen] = useState(false);

  const borrowSelectHandler = (data: CoinData) => {
    setBorrowCoin(data);
    setIsBorrowSelectionOpen(false);
  };

  return (
    <div className="w-full mb-8 bg-white/80 dark:bg-[#161735] rounded-2xl  shadow-lg p-4   ">
      {/* Tabs */}
      <div className="flex text-[14px] xl:text-[0.9rem] justify-evenly mb-6">
        {["borrow", "supply"].map((val) => (
          <button
            key={val}
            className={`pb-1 capitalize cursor-pointer ${
              tab === val ? "text-green-400 border-b-2 border-green-400" : ""
            }`}
            onClick={() => setTab(val as "borrow" | "supply")}
          >
            {t(`${val}.label`)}
          </button>
        ))}
      </div>

      {/* Borrow Amount */}
      <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
        {/* label */}
        <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
          {t("borrow.terms.bAmount")}
        </label>
        <input
          type="text"
          className="outline-none border-none w-full bg-transparent text-xs"
          placeholder={t("borrow.terms.min")}
        />
        {/* coin selection */}
        {/* coin selection */}
        <div
          className=" ml-2 mr-4  dark:bg-slate-200/15 bg-slate-700/15 rounded-full px-2 py-[2px] flex gap-6 items-center relative"
          onClick={() => {
            setIsBorrowSelectionOpen(true);
          }}
        >
          <div className="flex gap-1 items-center">
            {/* coin */}
            <Image
              src={borrowCoin.icon}
              width={30}
              height={30}
              alt=""
              className="w-4 xl:w-5 h-auto py-1"
            />
            {/* name */}
            <p className="text-xs">{borrowCoin.symbol}</p>
          </div>

          {isBorrowSelectionOpen && (
            <div className="absolute w-full min-w-[100px] xl:min-w-[120px] h-[200px] border top-[100%] translate-y-1 rounded-md left-0 overflow-y-auto bg-white dark:bg-[#1d1f38] z-[40] border-black/30 dark:border-white/30 flex flex-col gap-2 p-1.5">
              {testCoinData.map((val) => (
                <div
                  key={val.symbol}
                  className="p-1 px-2 bg-slate-300/30 dark:bg-slate-500/20 rounded-full cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    borrowSelectHandler(val);
                  }}
                >
                  <div className="w-full flex gap-1 items-center">
                    {/* coin */}
                    <Image
                      src={val.icon}
                      width={30}
                      height={30}
                      alt=""
                      className="w-4 xl:w-5 h-auto py-1"
                    />
                    {/* name */}
                    <p className="text-xs">{val.symbol}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <IoIosArrowDown className=" text-xl cursor-pointer" />
        </div>
      </div>

      {/* Expected Interest Rate */}
      <div className="w-full mt-6 border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
        {/* label */}
        <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
          {t("borrow.terms.expRate")}
        </label>
        <input
          type="text"
          className="outline-none border-none w-full bg-transparent text-xs"
          placeholder={t("borrow.terms.intRate")}
        />
        {/* coin selection */}
        <div className=" ml-2 mr-4  px-2 py-[2px] flex gap-6 items-center">
          %
        </div>

        <p className="absolute -bottom-5 xl:-bottom-5.5 left-3 text-[10px] xl:text-xs   font-extralight dark:opacity-60 opacity-100">
          {t("borrow.terms.refMarket")}: 5.04%
        </p>
      </div>

      {/* Duration */}
      <div className="ml-2 mt-10">
        <label className="block text-xs ml-2 mb-2">
          {t("borrow.terms.duration")}
        </label>
        <div className="flex gap-3">
          {[30, 90, 180].map((d) => (
            <button
              key={d}
              onClick={() => setDuration(d)}
              className={`px-5 py-1 rounded-full cursor-pointer text-xs font-light border  ${
                duration === d
                  ? "text-green-100 bg-green-600 dark:bg-green-500/20  dark:text-green-600 "
                  : " border-slate-600/20 dark:border-slate-200/20 "
              }`}
            >
              {d} D
            </button>
          ))}
        </div>
      </div>

      {/* Collateral */}
      <div className="w-full mt-6 border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
        {/* label */}
        <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
          {t("borrow.terms.collateral")}
        </label>

        <div className="w-full flex gap-1 justify-center items-center text-xs font-extralight opacity-70 dark:opacity-40">
          <IoIosAddCircleOutline className="text-lg" />
          <span>{t("borrow.terms.setUp")}</span>
        </div>
      </div>

      {/* Auto-Repay */}
      <div className="flex mt-6 items-center justify-between ">
        <span className="text-xs ml-2 ">{t("borrow.terms.autoRepay")}</span>
        {/* Custom Toggle */}
        <div
          onClick={() => setAutoRepay(!autoRepay)}
          className={`w-8 h-4 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
            autoRepay ? "bg-green-500" : "bg-gray-500"
          }`}
        >
          <div
            className={`bg-white dark:bg-black/70 w-3 h-3 rounded-full shadow-md transform transition-transform ${
              autoRepay ? "translate-x-3" : ""
            }`}
          />
        </div>
      </div>

      {/* Button */}
      <button className="w-full mt-6 text-[14px] xl:text-xs bg-green-600 hover:bg-green-700 text-white dark:text-black  font-semibold py-2 rounded-full cursor-pointer transition-all duration-300">
        {t("button")}
      </button>
    </div>
  );
}
