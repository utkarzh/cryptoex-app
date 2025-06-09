"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type TokenData = {
  name: string;
  price: string;
  change: number;
  chartColor: string;
  chartData: number[];
  icon: string;
};

const tabs = ["trending", "topVolume", "favorite"];

const mockData: TokenData[] = [
  {
    name: "Bitcoin",
    price: "$86,300",
    change: -89,
    chartColor: "#ff4d4f",
    chartData: [86_000, 86_200, 86_300, 86_120, 86_000, 85_900],
    icon: "/images/coins/btc.png",
  },
  {
    name: "Ethereum",
    price: "$1628",
    change: 21,
    chartColor: "#52c41a",
    chartData: [1600, 1620, 1640, 1600, 1628, 1650],
    icon: "/images/coins/ethereumrounded.png",
  },
  {
    name: "Solana",
    price: "$0.22",
    change: -89,
    chartColor: "#ff4d4f",
    chartData: [0.3, 0.28, 0.25, 0.33, 0.23, 0.22],
    icon: "/images/coins/solanarounded.png",
  },
  {
    name: "USDT",
    price: "$0.58",
    change: 9,
    chartColor: "#52c41a",
    chartData: [0.4, 0.42, 0.5, 0.42, 0.55, 0.58],
    icon: "/images/coins/usdtrounded.png",
  },
];

const Market = () => {
  const t = useTranslations("dashboard.overviewPage.market");
  const [selectedTab, setSelectedTab] = useState("trending");

  return (
    <div className=" bg-white dark:bg-[#161735] p-6 rounded-xl w-full">
      <div className="flex justify-between items-center mb-6">
        {/* heading */}
        <div>
          <h2 className={`${saira.className} text-sm font-semibold `}>
            {t("label")}
          </h2>
          {/* tabs */}
          <div className="flex gap-6 mt-4 text-xs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`relative pb-1 font-medium cursor-pointer ${
                  selectedTab === tab ? "text-green-400 " : ""
                }`}
              >
                {t(`tabs.${tab}`)}
                {selectedTab === tab && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-green-400 rounded"></span>
                )}
              </button>
            ))}
          </div>
        </div>
        {/* view all button */}
        <button className="border text-xs border-green-500 text-green-50 bg-green-600 dark:text-green-400 dark:bg-green-700/30 hover:scale-105  px-3 py-1.5 rounded-full  flex items-center gap-1   transition cursor-pointer">
          {t("button")} <BsArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockData.map((token) => (
          <div
            key={token.name}
            className=" bg-slate-400/10 p-4 rounded-xl shadow-inner"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  width={32}
                  height={32}
                  src={token.icon}
                  alt={token.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-light text-xs">{token.name}</span>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div className="flex gap-1 items-center">
                <p className="text-[10px] font-light opacity-70">
                  {t("terms.price")}
                </p>
                <p className="text-xl font-semibold">{token.price}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                  token.change >= 0 ? " text-green-600" : " text-red-400"
                }`}
              >
                <span
                  className={`p-1 rounded-lg ${
                    token.change >= 0
                      ? "bg-green-600 dark:bg-green-700/40"
                      : "bg-red-600 dark:bg-red-900/40"
                  }`}
                >
                  {token.change >= 0 ? (
                    <GoArrowUpRight className="bg-green-100 text-green-600 dark:bg-green-600 p-0.5 rounded-full dark:text-white text-md" />
                  ) : (
                    <GoArrowDownRight className="bg-red-100 text-red-600 dark:bg-red-600 p-0.5 rounded-full dark:text-white text-md" />
                  )}
                </span>
                {token.change}%
              </span>
            </div>

            <div className="w-full mt-4">
              <Chart
                options={{
                  chart: {
                    toolbar: { show: false },
                    sparkline: { enabled: true },
                  },
                  stroke: { curve: "smooth", width: 2 },
                  colors: [token.chartColor],

                  tooltip: {
                    enabled: true,
                    theme: "dark",
                    y: { formatter: (val: number) => `$${val.toFixed(2)}` },
                  },
                }}
                series={[{ name: token.name, data: token.chartData }]}
                type="line"
                height={80}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
