import { saira } from "@/utils/Font";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdReplay } from "react-icons/md";

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

export default function BorrowSection() {
  // const [collateral, setCollateral] = useState("");
  const [collateralCoin, setCollateralCoin] = useState<CoinData>(
    testCoinData[0]
  );
  const [isCollateralSelectionOpen, setIsCollateralSelectionOpen] =
    useState(false);

  const [borrowCoin, setBorrowCoin] = useState<CoinData>(testCoinData[1]);
  const [isBorrowSelectionOpen, setIsBorrowSelectionOpen] = useState(false);
  //   const [borrow, setBorrow] = useState("");

  const collateralSelectHandler = (data: CoinData) => {
    setCollateralCoin(data);
    setIsCollateralSelectionOpen(false);
    setIsBorrowSelectionOpen(false);
  };

  const borrowSelectHandler = (data: CoinData) => {
    setBorrowCoin(data);
    setIsCollateralSelectionOpen(false);
    setIsBorrowSelectionOpen(false);
  };

  return (
    <div className=" mt-16 rounded-lg mx-auto flex flex-col md:flex-row justify-between gap-12">
      {/* Left Side */}
      <div className="w-full ">
        {/* heading */}
        <h2 className={` ${saira.className} text-2xl font-semibold mb-6`}>
          Borrow with Flexible Rates to Trade <br /> or Stake and Maximize
          Returns.
        </h2>
        {/*  */}
        <ul className="mb-6 space-y-4 text-xs">
          <li className="flex items-center gap-2">
            &#10003; Repay at any time
          </li>
          <li className="flex items-center gap-2">
            {" "}
            &#10003; No transaction fee
          </li>
        </ul>

        <div className="flex gap-4 text-sm font-medium pt-2">
          <button className="px-6 py-2 rounded-lg dark:bg-[#161735] bg-slate-700/15 flex gap-1 items-center">
            <MdReplay className="text-2xl rotate-y-180" />
            <span>Ongoing Orders</span>
          </button>
          <button className=" px-6 py-2 rounded-lg dark:bg-[#161735] bg-slate-700/15 flex gap-1 items-center">
            <IoFolderOpenOutline className="text-2xl" />
            <span>Asset overview</span>
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full space-y-4 ">
        {/* collateral input */}
        <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
          {/* label */}
          <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-[#eff0f2]  dark:bg-[#06062a] px-1 ">
            Collateral
          </label>
          <input
            type="text"
            className="outline-none border-none w-full bg-transparent text-[12px]"
            placeholder="Enter Amount"
          />

          <div className="opacity-70 text-green-600 text-[12px]">Max</div>
          {/* coin selection collateral */}
          <div
            className=" ml-2 mr-4  dark:bg-slate-200/15 bg-slate-700/15 rounded-full px-2 py-[2px] flex gap-6 items-center relative"
            onClick={() => {
              setIsCollateralSelectionOpen(true);
              setIsBorrowSelectionOpen(false);
            }}
          >
            <div className="flex gap-1 items-center">
              {/* coin */}
              <Image
                src={collateralCoin.icon}
                width={30}
                height={30}
                alt=""
                className="w-4 h-auto py-1"
              />
              {/* name */}
              <p className="text-[12px]">{collateralCoin.symbol}</p>
            </div>

            {isCollateralSelectionOpen && (
              <div className="absolute w-full min-w-[100px] h-[200px] border top-[100%] translate-y-1 rounded-md left-0 overflow-y-auto bg-white dark:bg-[#1d1f38] z-[40] border-black/30 dark:border-white/30 flex flex-col gap-2 p-1.5">
                {testCoinData.map((val) => (
                  <div
                    key={val.symbol}
                    className="p-1 px-2 bg-slate-300/30 dark:bg-slate-500/20 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      collateralSelectHandler(val);
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

        {/* Borrow Input */}
        <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
          {/* label */}
          <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-[#eff0f2]  dark:bg-[#06062a] px-1 ">
            I want to borrow
          </label>
          <input
            type="text"
            className="outline-none border-none w-full bg-transparent text-[12px]"
            placeholder="Enter Amount"
          />

          {/* coin selection */}
          <div
            className=" ml-2 mr-4  dark:bg-slate-200/15 bg-slate-700/15 rounded-full px-2 py-[2px] flex gap-6 items-center relative"
            onClick={() => {
              setIsCollateralSelectionOpen(false);
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
                className="w-4 h-auto py-1"
              />
              {/* name */}
              <p className="text-[12px]">{borrowCoin.symbol}</p>
            </div>

            {isBorrowSelectionOpen && (
              <div className="absolute w-full min-w-[100px] h-[200px] border top-[100%] translate-y-1 rounded-md left-0 overflow-y-auto bg-white dark:bg-[#1d1f38] z-[40] border-black/30 dark:border-white/30 flex flex-col gap-2 p-1.5">
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
          {false && (
            <div className=" ml-2 mr-4  dark:bg-slate-200/15 bg-slate-700/15 rounded-full px-2 py-[2px] flex gap-6 items-center">
              <div className="flex gap-1 items-center">
                {/* coin */}
                <Image
                  src="/images/coins/ethereumrounded.png"
                  width={30}
                  height={30}
                  alt=""
                  className="w-4 h-auto py-1"
                />
                {/* name */}
                <p className="text-[12px]">ETH</p>
              </div>

              <IoIosArrowDown className=" text-xl cursor-pointer" />
            </div>
          )}
        </div>

        {/* Details Dropdown - Placeholder */}
        <div className="dark:bg-[#161735] bg-slate-700/15 px-4 py-2 rounded-lg">
          <button className="text-left w-full flex gap-2 items-center">
            <span className="text-[12px]">Details</span>
            <IoIosArrowDown className=" text-sm cursor-pointer" />
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full mt-4 text-[14px] bg-green-600 hover:bg-green-700 text-white dark:text-black  font-semibold py-2 rounded-full cursor-pointer transition-all duration-300">
          Log in / Sign up
        </button>
      </div>
    </div>
  );
}
