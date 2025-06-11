"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const AmountCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("sidebar");
  return (
    <div className="w-[90%] 2xl:w-[98%] mx-auto mb-6 rounded-md border border-slate-500/50 p-4 flex flex-col gap-4">
      {/* details */}
      <div className="w-full flex justify-between">
        <div className="space-y-2">
          <p className="space-x-1 flex items-center ">
            <span className="text-xs font-medium">
              {isVisible ? "123445" : "*********"}
            </span>
            <span className="text-slate-600 dark:text-slate-500 text-[11px] font-medium ">
              USDT
            </span>
          </p>

          <p className="space-x-1 flex items-center">
            <span className="text-slate-600 dark:text-slate-500 text-[11px]">
              {isVisible ? "10324342" : "*********"}
            </span>
            <span className="text-slate-600 dark:text-slate-500 text-[11px] font-medium ">
              USD
            </span>
          </p>
        </div>
        <div
          className="mr-4 cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <IoMdEye /> : <IoMdEyeOff />}
        </div>
      </div>
      {/* buttons */}
      <div className="flex justify-between gap-2 ">
        <Link
          href="#"
          className="w-full flex gap-[2px] items-center p-2 rounded-md border border-green-600 text-green-600 hover:border-green-700 hover:text-green-700 dark:hover:border-green-500 dark:hover:text-green-500"
        >
          <GoArrowUpRight className="text-md" />
          <span className="text-xs">{t("withdraw")}</span>
        </Link>
        <Link
          href="#"
          className="w-full flex gap-[2px] items-center p-2 rounded-md bg-green-600 text-white dark:text-black dark:hover:bg-green-500 hover:bg-green-700 transition-all duartion-200"
        >
          <GoArrowDownRight className="text-md" />
          <span className="text-xs">{t("deposit")}</span>
        </Link>
      </div>
    </div>
  );
};

export default AmountCard;
