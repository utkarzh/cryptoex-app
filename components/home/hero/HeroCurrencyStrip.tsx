import CoinCard from "@/components/common/CoinCard";
import CointStatsCard from "@/components/common/CointStatsCard";
import React from "react";
const HeroCurrencyStrip = () => {
  const test = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      test.push({
        cointTitle: "BTC",
        coinName: "Bitcoin",
        coinImgUrl: "/images/coins/btc.png",
      });
    } else if (i % 3 === 1) {
      test.push({
        cointTitle: "ETH",
        coinName: "Ethereum",
        coinImgUrl: "/images/coins/ethereumrounded.png",
      });
    } else {
      test.push({
        cointTitle: "SOL",
        coinName: "Solana",
        coinImgUrl: "/images/coins/solanarounded.png",
      });
    }
  }
  return (
    <div className="w-full flex gap-8 ">
      {test.map((val, index) => (
        <div key={index} className="flex gap-4">
          <CoinCard
            cointTitle={val.cointTitle}
            coinName={val.coinName}
            coinImgUrl={val.coinImgUrl}
            key={index}
          />
          <CointStatsCard coinUnitAmount={"2,56,500"} changePercent="-1.26" />
        </div>
      ))}
    </div>
  );
};

export default HeroCurrencyStrip;
