"use client";
import React, { useState } from "react";
import TradingViewWidget from "../graph/TradingViewWidget";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const pairs = [
  "BTC/BNB",
  "BTC/BSV",
  "BTC/LTC",
  "BTC/USDC",
  "BTC/USDT",
  "BTC/XRP",
];

const mockStats = {
  price: 19351.17,
  changeAmount: 168.5,
  changePercent: 0.88,
  high: 19695.0,
  low: 19070.11,
  volumeBTC: "234,555.92",
  volumeUSDT: "4,548,807,587.18",
};

const CryptoStats = () => {
  const [activePair, setActivePair] = useState("BTC/BNB");
  const { theme } = useTheme();
  const t = useTranslations("tradePage.cryptoStats.stats");

  return (
    <div className=" w-full h-full  overflow-hidden bg-transparent border-2 dark:border-white/10 border-[#161735]/10 text-gray-700 dark:text-gray-400 text-sm rounded-xl shadow-lg flex flex-col ">
      {/* Pair Tabs */}
      <div className="mt-2 flex flex-wrap pl-6 gap-4 border-b-2 dark:border-white/10 border-[#161735]/10 pt-2  ">
        {pairs.map((pair) => (
          <button
            key={pair}
            onClick={() => setActivePair(pair)}
            className={`text-[12px] font-medium capitalize pb-2 cursor-pointer  ${
              pair === activePair
                ? "text-green-400 border-b-2 relative top-[2px]"
                : ""
            }`}
          >
            {pair}
          </button>
        ))}
      </div>

      {/* Stats Section */}
      <div className=" mt-2 flex h-fit flex-wrap items-center gap-6 pl-6 pb-2 text-[10px] border-b-2 dark:border-white/10 border-[#161735]/10">
        <div className="text-red-500 text-[12px] font-bold">
          {mockStats.price.toLocaleString()}
          <div className=" dark:text-white/80 text-black font-light">
            ${mockStats.price.toLocaleString()}
          </div>
        </div>

        <div>
          <div>{t("24hChange")}</div>
          <div className="text-green-500">
            {mockStats.changeAmount} +{mockStats.changePercent}%
          </div>
        </div>

        <div>
          <div>{t("24hHigh")}</div>
          <div className="dark:text-white/80 text-black">{mockStats.high}</div>
        </div>

        <div>
          <div>{t("24hLow")}</div>
          <div className="dark:text-white/80 text-black">{mockStats.low}</div>
        </div>

        <div>
          <div>{t("24hVolumeBtc")}</div>
          <div className="dark:text-white/80 text-black">
            {mockStats.volumeBTC}
          </div>
        </div>

        <div>
          <div>{t("24hVolumeUsdc")}</div>
          <div className="dark:text-white/80 text-black">
            {mockStats.volumeUSDT}
          </div>
        </div>
      </div>

      <div className="h-full w-full flex justify-center items-center min-h-[400px]">
        {/* Integrate graph here */}
        <TradingViewWidget
          theme={theme as "light" | "dark"}
          backgroundColor={theme === "dark" ? "#06062a" : "#eff0f2"}
          symbol="INDEX:BTCUSD"
        />
      </div>
    </div>
  );
};

export default CryptoStats;
