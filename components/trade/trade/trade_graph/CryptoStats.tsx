"use client";
import React, { FC } from "react";
import TradingViewWidget from "../graph/TradingViewWidget";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { FilteredArr } from "../Trade";
import { SingleAvailablePair_int } from "../types";
import Link from "next/link";
import { formatCoinRate } from "@/utils/formateCoinRate";
import { formatDecimalNumber } from "@/utils/formatDecimalNumber";

type Props = {
  filteredArray: FilteredArr;
  currentMarketDetails: SingleAvailablePair_int;
  isSpot: boolean;
};

const CryptoStats: FC<Props> = ({
  filteredArray,
  currentMarketDetails,
  isSpot,
}) => {
  const { theme } = useTheme();
  const t = useTranslations("tradePage.cryptoStats.stats");

  return (
    <div className=" w-full h-full  overflow-hidden bg-transparent border-2 dark:border-white/10 border-[#161735]/10 text-gray-700 dark:text-gray-400 text-sm rounded-xl shadow-lg flex flex-col ">
      {/* Pair Tabs */}
      <div className="mt-2 flex flex-wrap pl-6 gap-4 border-b-2 dark:border-white/10 border-[#161735]/10 pt-2  ">
        {filteredArray.vendorArray.map((val) => (
          <Link
            href={isSpot ? `/spot/${val.pair}` : `/margin/${val.pair}`}
            key={val.name}
            className={`text-xs font-medium capitalize pb-2 cursor-pointer  ${
              val.name === currentMarketDetails.name
                ? "text-green-500 border-b-2 relative top-[2px]"
                : ""
            }`}
          >
            {filteredArray.vendorName}/{val.name}
          </Link>
        ))}
      </div>

      {/* Stats Section */}
      <div className=" mt-2 flex h-fit flex-wrap items-center gap-6 pl-6 pb-2 text-xs font-light border-b-2 dark:border-white/10 border-[#161735]/10">
        <div
          className={` ${
            currentMarketDetails.rate > 0
              ? "text-green-700 dark:text-green-600"
              : currentMarketDetails.rate < 0
              ? "text-red-500 dark:text-[#d24e4c]"
              : ""
          } text-xs font-bold`}
        >
          {formatCoinRate(currentMarketDetails.usdrate)}
          <div className=" dark:text-white/80 text-black font-light">
            ${formatCoinRate(currentMarketDetails.usdrate)}
          </div>
        </div>

        <div>
          <div>{t("24hChange")}</div>
          {/* <div className="text-green-500">
            {mockStats.changeAmount} +{mockStats.changePercent}%
          </div> */}

          <div
            className={`text-nowrap ${
              currentMarketDetails.rate > 0
                ? "text-green-700 dark:text-green-600"
                : currentMarketDetails.rate < 0
                ? "text-red-600 dark:text-[#d24e4c]"
                : ""
            }`}
          >
            {" "}
            {currentMarketDetails.rate > 0 && "+"}
            {currentMarketDetails.rate.toFixed(4)}%
          </div>
        </div>

        <div title={`${currentMarketDetails.highsale}`}>
          <div>{t("24hHigh")}</div>
          <div className="dark:text-white/80 text-black">
            {formatDecimalNumber(currentMarketDetails.highsale)}
          </div>
        </div>

        <div title={`${currentMarketDetails.lowsale}`}>
          <div>{t("24hLow")}</div>
          <div className="dark:text-white/80 text-black">
            {formatDecimalNumber(currentMarketDetails.lowsale)}
          </div>
        </div>

        {/* <div>
          <div>{t("24hVolumeBtc")}</div>
          <div className="dark:text-white/80 text-black">
            {mockStats.volumeBTC}
          </div>
        </div> */}

        <div>
          <div>{t("24hVolume")}</div>
          <div className="dark:text-white/80 text-black">
            {formatCoinRate(currentMarketDetails.baseVolume)}{" "}
            {currentMarketDetails.name}
          </div>
        </div>
      </div>

      <div className="h-full w-full flex justify-center items-center min-h-[400px]">
        {/* Integrate graph here */}
        <TradingViewWidget
          theme={theme as "light" | "dark"}
          backgroundColor={theme === "dark" ? "#06062a" : "#eff0f2"}
          symbol={currentMarketDetails.name}
          // symbol="INDEX:BTCUSD"
        />
      </div>
    </div>
  );
};

export default CryptoStats;
