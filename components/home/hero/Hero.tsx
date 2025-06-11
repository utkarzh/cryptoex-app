import React from "react";
import HeroCurrencyStrip from "./HeroCurrencyStrip";
import Image from "next/image";
import { saira } from "@/utils/Font";
import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";
// import TextChangeEffect from '@/components/common/TextChangeEffect'

const Hero = () => {
  const t = useTranslations("homePage.heroSection");

  return (
    <div className="w-full h-[100vh] min-h-[600px] flex justify-center items-center relative  ">
      {/* background images*/}
      <div className="w-[50%] opacity-40 dark:opacity-80 h-full z-[30]  absolute top-0 right-0 bg-[url(/images/homebg.png)] bg-cover "></div>
      <div className="w-[50%] h-full z-[30] opacity-40 dark:opacity-80 absolute top-0 left-0 rotate-y-180 bg-[url(/images/homebg.png)] bg-cover "></div>
      {/* background text */}
      <span
        className={`z-[40] ${saira.className} text-[25vw] lg:text-[18vw] font-bold tracking-wide bg-gradient-to-b  via-slate-700 to-white dark:from-white dark:via-[#5b719c] dark:to-[#021e55] bg-clip-text text-transparent opacity-100 `}
      >
        INDOEX
      </span>
      {/* overlay */}
      <div className="w-full h-full absolute z-[40] bg-[#eff0f2] dark:bg-[#06062a] opacity-85 dark:opacity-[0.87] top-0 left-0 ">
        {" "}
      </div>

      {/*heading and subheading */}
      <div className="w-full absolute z-[50] top-18  right-0 text-center ">
        <h1 className={`${saira.className} text-2xl lg:text-[2vw] font-bold`}>
          {t("title")}
        </h1>
        <p className="text-[14px] lg:text-[1vw] font-extralight">
          {t("subTitle")}
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-full py-2 z-[40] text-white bg-green-600 dark:bg-green-700 flex justify-center">
        <Marquee>
          <HeroCurrencyStrip />
        </Marquee>
      </div>

      <Image
        width={700}
        height={700}
        alt=""
        src="/images/homehero.png"
        className="w-auto h-[40%] sm:h-[50%] z-[50] bottom-0 absolute left-1/2 -translate-x-1/2"
        quality={100}
      />
    </div>
  );
};

export default Hero;
