import { useTranslations } from "next-intl";
import React from "react";
import Marquee from "react-fast-marquee";
import { GiNetworkBars } from "react-icons/gi";

export const mockCryptoData = [
  { title: "NULSBUSD", change: 0.18, price: 0.3224 },
  { title: "KLAYBUSD", change: 0.189, price: 0.3224 },
  { title: "TRXBUSD", change: 0.031, price: 0.3224 },
  { title: "ADABUSD", change: 2.71, price: 0.3224 },
  { title: "NULSBUSD", change: 0.18, price: 0.3224 },
  { title: "KLAYBUSD", change: 0.189, price: 0.3224 },
  { title: "TRXBUSD", change: 0.031, price: 0.3224 },
  { title: "ADABUSD", change: 2.71, price: 0.3224 },
  { title: "NULSBUSD", change: 0.18, price: 0.3224 },
  { title: "KLAYBUSD", change: 0.189, price: 0.3224 },
  { title: "TRXBUSD", change: 0.031, price: 0.3224 },
  { title: "ADABUSD", change: 2.71, price: 0.3224 },
  { title: "NULSBUSD", change: 0.18, price: 0.3224 },
  { title: "KLAYBUSD", change: 0.189, price: 0.3224 },
  { title: "TRXBUSD", change: 0.031, price: 0.3224 },
  { title: "ADABUSD", change: 2.71, price: 0.3224 },
];

const TradeStats = () => {
  const t = useTranslations("tradePage");
  return (
    <div className="w-full flex gap-4 items-center">
      {/*connectoin state*/}
      <div className="w-fit flex gap-1 items-center text-green-600 text-[12px]">
        <GiNetworkBars className=" tracking-widest" />
        <div className="font-medium  text-wrap sm:text-nowrap text-green-600">
          {t("connection")}
        </div>
      </div>
      {/* stats */}
      <div className="w-full max-w-full overflow-hidden ">
        <Marquee speed={30}>
          <div className="flex items-center animate-marquee space-x-6 px-4">
            {mockCryptoData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 text-[11px] font-extralight"
              >
                <span className="">{item.title}</span>
                <span className={`text-green-500`}>
                  +{item.change.toFixed(2)}
                </span>
                <span className="opacity-60">{item.price.toFixed(4)}</span>
                <span className="opacity-50">|</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TradeStats;
