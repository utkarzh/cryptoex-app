"use client";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import OverviewCard from "./OverviewCard";
import { useTranslations } from "next-intl";

const Overview = () => {
  const t = useTranslations("stakingPage.stakeHero.overview");
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  const test = [
    {
      title: t("terms.assets"),
      value: 1234.5,
    },
    {
      title: t("terms.yesProfit"),
      value: 234,
    },
    {
      title: t("terms.totalProfit"),
      value: 1230,
    },
  ];
  const overViewChangeHandler = () => {
    setIsOverviewVisible((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col gap-4">
      {/* heading and button */}
      <div className="flex gap-2 items-center ml-3">
        <span className="text-sm font-bold">{t("label")}</span>
        <div
          className="p-[3px] flex justify-center items-center border border-slate-600 dark:hover:border-white hover:border-black cursor-pointer rounded-full text-[12px] hover:scale-105 transition-all duration-200"
          onClick={overViewChangeHandler}
        >
          {isOverviewVisible ? (
            <IoEyeOutline className="cursor-pointer" />
          ) : (
            <IoEyeOffOutline className="cursor-pointer" />
          )}
        </div>
      </div>
      {/* cards */}
      <div className="w-full flex gap-2">
        {test.map((val, index) => (
          <OverviewCard
            title={val.title}
            value={val.value}
            key={index}
            isOverviewVisible={isOverviewVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
