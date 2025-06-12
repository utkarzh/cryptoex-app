"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import React from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  dataRange: number[];
  rate: number;
  vendor: string;
};

const MiniGraph: React.FC<Props> = ({ dataRange, rate, vendor }) => {
  const lineColor = rate > 0 ? "#27a043" : rate < 0 ? "#e24d4a" : "#a2d2ff";

  const options: ApexOptions = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    fill: {
      type: "solid",
      colors: [lineColor], // solid Tailwind blue-500
      opacity: 0.3,
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    colors: [lineColor],
  };

  const series = [
    {
      name: vendor,
      data: dataRange,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center h-[50px]">
      <ApexChart
        options={options}
        series={series}
        type="area"
        width={100}
        height={50}
      />
    </div>
  );
};

export default MiniGraph;
