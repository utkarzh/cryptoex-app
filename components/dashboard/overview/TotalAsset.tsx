"use client";

import React from "react";
import dynamic from "next/dynamic";
import { IoIosArrowDown } from "react-icons/io";
import { ApexOptions } from "apexcharts";
import { IoEyeOutline } from "react-icons/io5";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TotalAsset = () => {
  const t = useTranslations("dashboard.overviewPage");
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    xaxis: {
      categories: [
        "09/08",
        "09/09",
        "09/10",
        "09/11",
        "09/12",
        "09/13",
        "09/14",
      ],
      labels: { style: { colors: "#aaa" } },
    },
    yaxis: {
      // labels: {
      //   style: { colors: "#aaa" },
      //   formatter: (val: number) => `$${val.toFixed(2)}`,
      // },
      labels: {
        show: false,
      },
    },
    grid: {
      borderColor: "#2a2d4e",
      strokeDashArray: 4,
    },
    markers: {
      size: 3,
      colors: ["#00FF85"],
      strokeColors: "#00FF85",
      strokeWidth: 0.5,
    },
    colors: ["#00FF85"],
  };

  const chartSeries = [
    {
      name: "Asset",
      data: [6000.12, 5850.32, 5790.22, 6100.32, 5920.11, 5990.99, 6094.96],
    },
  ];

  return (
    <div className="dark:bg-[#161735] bg-white rounded-xl p-4 w-full shadow-lg ">
      {/* header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 font-semibold">
          <span className={`${saira.className} text-sm `}>{t("assets")}</span>
          <IoEyeOutline className="text-gray-400 cursor-pointer" />
        </div>
        <button className="flex items-center gap-1 text-[10px] font-normal bg-slate-400/20 px-2 py-1 rounded-full">
          USDT <IoIosArrowDown />
        </button>
      </div>

      {/* total */}
      <div className="flex items-end justify-between ">
        <div className="flex gap-2">
          <p className="text-xl font-bold">$6,094.96</p>
          <span className="h-fit my-auto inline-block  bg-green-600 text-green-50  dark:bg-green-600/30 dark:text-green-200 text-xs font-extralight px-2 py-0.5 rounded-full">
            6.3% ↑
          </span>
        </div>
      </div>

      <div className="mt-0 ">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={180}
        />
      </div>
    </div>
  );
};

export default TotalAsset;
