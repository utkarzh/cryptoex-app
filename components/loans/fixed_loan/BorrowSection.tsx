import { saira } from "@/utils/Font";
import Image from "next/image";
import React from "react";
import { FaClock, FaSyncAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
// import { MdOutlineVisibility } from "react-icons/md";

// type Props = {}

const BorrowSection = () => {
  return (
    <div className=" mt-16 rounded-lg mx-auto flex flex-col md:flex-row justify-between gap-12">
      {/* Left Side */}
      <div className="w-full ">
        {/* heading */}
        <h2 className={` ${saira.className} text-2xl font-semibold mb-6`}>
          Borrow or Lend at a Fixed Interest Rate You Choose
        </h2>
        {/*  */}
        <div className="flex h-fit items-center gap-3 text-sm mb-8">
          <div className="">
            <p className="text-[12px] opacity-70 font-light">Total borrowed</p>
            <p className="text-xs font-bold">$173.02M</p>
          </div>

          <div className="flex h-full opacity-30 ">|</div>

          <div>
            <p className="text-[12px] opacity-70 font-light">Current orders</p>
            <p className="text-xs font-bold">$39.11M</p>
          </div>

          <div className="flex h-full opacity-30 ">|</div>

          <div>
            <p className="text-[12px] opacity-70 font-light">
              Customized interest rate
            </p>
            <p className="text-[12px] opacity-70 font-light">
              Multi-Asset Collateral Supported
            </p>
          </div>
        </div>

        {/* order section */}
        {/* My Order Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-semibold">My order</h3>
          <div className="] p-2 rounded-lg">
            {/* <MdOutlineVisibility size={20} /> */}
          </div>
        </div>

        {/* Order Options */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between  p-4 rounded-xl transition dark:bg-[#161735] bg-slate-700/15">
            <div className="flex items-center gap-3">
              <FaClock />
              <div className="text-left">
                <p className="font-medium">Pending orders</p>
                <p className="text-sm text-gray-400">
                  Check and manage unmatched orders
                </p>
              </div>
            </div>
          </button>

          <button className="w-full flex items-center justify-between  p-4 rounded-xl  transition dark:bg-[#161735] bg-slate-700/15">
            <div className="flex items-center gap-3">
              <FaSyncAlt />
              <div className="text-left">
                <p className="font-medium">Ongoing Orders</p>
                <p className="text-sm text-gray-400">
                  Check, adjust LTV, and repay matched orders
                </p>
              </div>
            </div>
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
          <div className=" ml-2 mr-4  dark:bg-slate-200/15 bg-slate-700/15 rounded-full px-2 py-[2px] flex gap-6 items-center">
            <div className="flex gap-1 items-center">
              {/* coin */}
              <Image
                src="/images/coins/btc.png"
                width={30}
                height={30}
                alt=""
                className="w-4 h-auto py-1"
              />
              {/* name */}
              <p className="text-[12px]">BTC</p>
            </div>

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

          {/* coin selection collateral */}
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
};

export default BorrowSection;
