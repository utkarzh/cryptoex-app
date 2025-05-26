"use client";

import Image from "next/image";
import React from "react";
import { CiCalculator1 } from "react-icons/ci";
import { LiaCoinsSolid } from "react-icons/lia";
import { LuMessageCircleQuestion, LuWallet } from "react-icons/lu";
import {
  MdOutlineHelpOutline,
  MdOutlineKeyboardArrowDown,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

const FaqArray = [
  "How long do withdrawals take?",
  "Why was my withdrawal rejected?",
  "Can I cancel a withdrawal?",
];

const WithdrawalForm = () => {
  return (
    <div className="bg-white dark:bg-[#161735] p-6 rounded-xl flex flex-col md:flex-row gap-10">
      {/* Form Area */}
      <div className="w-full pl-10 space-y-1">
        {/* Select Crypto */}
        <div className="relative border border-transparent pb-20 ">
          {/* side line and icon */}
          <div className="absolute -top-0 left-0 -translate-x-10 h-full flex flex-col items-center gap-2">
            <span
              className={`w-fit p-1 rounded ${
                true
                  ? "bg-green-600 text-white dark:text-black"
                  : "bg-slate-500/20 dark:bg-slate-500/15 text-black/40 dark:text-white/40"
              }  h-fit`}
            >
              <LiaCoinsSolid className=" text-md" />
            </span>

            <div className="h-full w-fit border-r border-slate-400/30 dark:border-slate-600/50"></div>
          </div>

          <label className="text-xs font-light flex items-center gap-2 mb-2">
            Select Crypto
          </label>
          {/* slection input of coin */}
          <div className=" dark:bg-slate-500/20 bg-slate-500/15 rounded px-2 py-2 flex justify-between items-center">
            <div className="flex gap-1 items-center">
              {/* coin */}
              <Image
                src="/images/coins/btc.png"
                width={30}
                height={30}
                alt=""
                className="w-[18px] h-auto "
              />
              {/* name */}
              <p className="text-[10px]">BTC</p>
            </div>

            <MdOutlineKeyboardArrowDown className=" text-xl cursor-pointer" />
          </div>
        </div>

        {/* Withdraw To */}
        <div className=" relative w-full  border-transparent pb-10">
          {/* side line and icon */}
          <div className="absolute -top-0 left-0 -translate-x-10 h-full flex flex-col items-center gap-2">
            <span
              className={`w-fit p-1 rounded ${
                false
                  ? "bg-green-600 text-white dark:text-black"
                  : "bg-slate-500/20 dark:bg-slate-500/15 text-black/40 dark:text-white/40"
              }  h-fit`}
            >
              <LuWallet className=" text-md" />
            </span>

            <div className="h-full w-fit border-r border-slate-400/30 dark:border-slate-600/50"></div>
          </div>
          <label
            className={` ${
              false ? "opacity-100" : "opacity-50"
            } text-xs font-light flex items-center gap-2 mb-2`}
          >
            Withdraw to
          </label>
          <div className="space-y-3">
            <div className="dark:bg-slate-500/20 bg-slate-500/15 rounded-md px-2 py-2 flex items-center justify-between">
              <span className="text-xs opacity-50 font-light indent-1.5">
                Select withdrawal Network
              </span>
              <MdOutlineKeyboardArrowDown className=" text-xl cursor-pointer" />
            </div>
            {/*  */}
            <div className="relative">
              {/* max valued div */}
              <div className="absolute top-1/2 -translate-y-1/2 right-2 opacity-50 text-xs">
                Max
              </div>
              <input
                type="text"
                placeholder="Enter your withdrawal address"
                className="w-full dark:bg-slate-500/20 bg-slate-500/15 rounded-md px-4 py-3 text-xs font-light  placeholder-gray-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Withdrawal Amount */}
        <div className=" relative w-full  border-transparent pb-2">
          {/* side line and icon */}
          <div className="absolute -top-0 left-0 -translate-x-10 h-full flex flex-col items-center gap-2">
            <span
              className={`w-fit p-1 rounded ${
                false
                  ? "bg-green-600 text-white dark:text-black"
                  : "bg-slate-500/20 dark:bg-slate-500/15 text-black/40 dark:text-white/40"
              }  h-fit`}
            >
              <CiCalculator1 className=" text-md" />
            </span>
          </div>

          <label
            className={` ${
              false ? "opacity-100" : "opacity-50"
            } text-xs font-light flex items-center gap-2 mb-2`}
          >
            Withdrawal Amount
          </label>
        </div>
      </div>

      {/* Side Panel: Tips & FAQ */}
      <div className="w-full md:w-fit flex flex-col gap-8 ">
        {/* Tips */}
        <div className="flex flex-col gap-3">
          {/* heading */}
          <h3 className="text-sm font-normal flex items-center gap-2">
            <MdOutlineTipsAndUpdates className="text-lg" />
            Tips
          </h3>
          {/* border */}
          <div className="w-full border-t opacity-20"></div>
          {/* content */}
          <div className="space-y-1 text-[10px] font-light opacity-70 dark:opacity-50">
            <p className=" ">
              For the safety of your funds, our customer support team may
              contact you by phone to confirm your withdrawal.
            </p>
            <p className="">
              For the safety of your funds, our customer support team may
              contact you by phone to confirm your withdrawal.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-3">
          {/* heading */}
          <h3 className="text-sm font-normal flex items-center gap-2">
            <MdOutlineHelpOutline className="text-lg" />
            FAQs
            <span className="ml-auto text-xs font-light hover:scale-105 transition-all duration-200 opacity-50  cursor-pointer flex  items-center">
              View more
              <RiArrowRightSLine className="text-lg" />
            </span>
          </h3>

          {/* border */}
          <div className="w-full border-t opacity-20"></div>
          {/* content */}
          <ul className="space-y-3 text-[10px] opacity-70 dark:opacity-50">
            {FaqArray.map((val, index) => (
              <li className="flex gap-1 items-center" key={index}>
                <LuMessageCircleQuestion className="text-[16px]" />{" "}
                <span>{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalForm;
