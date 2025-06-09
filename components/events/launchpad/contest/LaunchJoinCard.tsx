"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import { SiBinance, SiEthereum, SiPolygon } from "react-icons/si";

const tokenTabs = [
  { label: "BTC", icon: <FaBitcoin className="text-lg text-orange-400" /> },
  { label: "ETH", icon: <SiEthereum className="text-lg text-blue-400" /> },
  { label: "BNB", icon: <SiBinance className="text-lg text-yellow-400" /> },
  { label: "MATIC", icon: <SiPolygon className="text-lg text-purple-400" /> },
];

const LaunchJoinCard = () => {
  const t = useTranslations("launchPad.contest.form.terms");

  const coinDetails = [
    { label: t("sDate"), value: "19-05-2023o" },
    { label: t("eDate"), value: "26-11-2023" },
    { label: t("tPrice"), value: "1 AGT ≈ 0.006000 $ ≈ 0.005998 USDTe" },
    { label: t("minPrice"), value: "10000 AGT =59.9805 USDT" },
  ];

  const [selectedTab, setSelectedTab] = useState("all");

  const selectTabHandler = (data: string) => {
    setSelectedTab(data);
  };
  return (
    <div className="w-full bg-white dark:bg-[#161735] p-4 rounded-md flex flex-col gap-6">
      {/* tab */}
      {/* tabs */}
      <div className="flex items-center justify-between border-b-2 dark:border-white/10 border-[#161735]/10 pt-2   ">
        {tokenTabs.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => selectTabHandler(label)}
            className={`text-[14px] font-light pb-2 cursor-pointer top-[2px] relative  ${
              selectedTab === label
                ? "text-green-400 border-b-2 "
                : "border-b-2 border-transparent"
            }`}
          >
            <div className="flex gap-1 items-center text-xs">
              {icon}
              {label}
            </div>
          </button>
        ))}
      </div>
      {/* current balance */}
      <div className="w-full flex justify-between">
        <div className=" text-xs font-normal dark:text-slate-500 text-slate-600">
          {t("cBal")}
        </div>
        <div className="text-xs">0 USDT</div>
      </div>

      {/* table */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">{t("details")}</h6>
        <div className="w-full border rounded-md p-4  border-slate-500/40">
          {coinDetails.map((val, index) => (
            <div
              className={`w-full ${
                index === 0 ? "mt-1" : "mt-3"
              } flex justify-between  border-slate-500/40 border-b pb-3 `}
              key={index}
            >
              <span className="text-[10px] opacity-80">{val.label}</span>
              <span className="text-[11px]">{val.value}</span>
            </div>
          ))}

          {/* order bar row */}
          <div className={`w-full  mt-3 flex justify-between items-center `}>
            <span className="text-[10px] opacity-80">{t("ord")}</span>
            <span className="text-[11px]"> {t("bar")}</span>
            <span className="text-green-100 bg-green-600 dark:bg-green-500/20 dark:text-green-600 px-2 py-1 border border-green-600 rounded-md hover:bg-green-700 dark:hover:bg-green-500/30 text-xs font-light">
              10000
            </span>
          </div>
        </div>
      </section>

      {/*buy*/}
      <div className="w-full flex justify-between">
        <div className=" text-xs font-normal dark:text-slate-500 text-slate-600">
          {t("buy")}
        </div>
        <div className="text-xs ">0 USDT</div>
      </div>
      {/*received*/}
      <div className="w-full flex justify-between">
        <div className=" text-xs font-normal dark:text-slate-500 text-slate-600">
          {t("rec")}
        </div>
        <div className="text-xs ">59.9805 USDT</div>
      </div>
      {/* button */}
      <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-full transition text-xs cursor-pointer">
        {t("button")}
      </button>
    </div>
  );
};

export default LaunchJoinCard;
