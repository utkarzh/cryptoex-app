import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type TestData = {
  coinUrl: string;
  name: string;
};

const testData: TestData[] = [
  {
    coinUrl: "/images/coins/btc.png",
    name: "BTC",
  },
  {
    coinUrl: "/images/coins/binancerounded.png",
    name: "BNB",
  },
  {
    coinUrl: "/images/coins/ethereumrounded.png",
    name: "ETH",
  },
  {
    coinUrl: "/images/coins/polygonrounded.png",
    name: "POLY",
  },
  {
    coinUrl: "/images/coins/usdtrounded.png",
    name: "USDT",
  },
];

const test: TestData[] = [];

for (let i = 0; i < 8; i++) {
  test.push(...testData);
}

const ConvertBar = () => {
  const t = useTranslations("convertPage.convertBar");
  return (
    <div className="w-full flex gap-2 items-center ">
      <p className="text-xs text-nowrap ml-10">{t("barTitle")} : </p>

      <div className="w-full relative">
        {/* effect left entering point */}
        <div className="w-[100px] h-full absolute top-0 left-0 bg-gradient-to-r from-[#06062a] to-transparent z-[20]"></div>
        <Marquee>
          <div className="w-full max-w-full flex gap-10 overflow-x-hidden py-1">
            {test.map((val, index) => (
              <div
                className="w-fit  flex gap-1 items-center cursor-pointer"
                key={index}
              >
                {/* name */}
                <Image
                  width={32}
                  height={32}
                  src={val.coinUrl}
                  alt=""
                  className="w-5 h-auto"
                />
                <div className="text-[12px]">{val.name}</div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ConvertBar;
