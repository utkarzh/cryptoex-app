import React from "react";
import HeroCurrencyStrip from "./HeroCurrencyStrip";
import Image from "next/image";
import { saira } from "@/utils/Font";
import Marquee from "react-fast-marquee";
// import TextChangeEffect from '@/components/common/TextChangeEffect'

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] flex justify-center items-center relative  ">
      {/* background images*/}

      <div className="w-[50%] opacity-40 dark:opacity-80 h-full z-[30]  absolute top-0 right-0 bg-[url(/images/homebg.png)] bg-cover "></div>
      <div className="w-[50%] h-full z-[30] opacity-40 dark:opacity-80 absolute top-0 left-0 rotate-y-180 bg-[url(/images/homebg.png)] bg-cover "></div>
      {/* background text */}
      <span
        className={`z-[40] ${saira.className} text-[25vw] lg:text-[18vw] font-bold tracking-wide bg-gradient-to-b  via-slate-700 to-white dark:from-white dark:via-[#5b719c] dark:to-[#021e55] bg-clip-text text-transparent opacity-100`}
      >
        INDOEX
      </span>
      {/* overlay */}
      <div className="w-full h-full absolute z-[40] bg-[#eff0f2] dark:bg-[#06062a] opacity-85 dark:opacity-[0.87] top-0 left-0 ">
        {" "}
      </div>

      {/* /heading and subheading */}
      <div className="w-full absolute z-[50] top-18 right-0 text-center ">
        <h1 className={`${saira.className} text-2xl font-bold`}>
          Enhance your Crypto Trading Experience
        </h1>
        <p className="text-[14px] font-extralight">
          Witness seamless transactions, real-time insights, and secure trading
          everything you need.
        </p>
      </div>

      {/* <div
        className={` ${saira.className} text-[25vw] lg:text-[20vw] font-extrabold tracking-wide opacity-100 dark:opacity-100  z-[50] relative`}
      > */}
      {/* <div className="absolute z-[40] top-1/2 -translate-y-[50%] left-0 w-full h-[50%] bg-gradient-to-b from-transparent to-[#eff0f2]/100 dark:to-[#06062a]/80 "></div> */}

      {/* <span className=" bg-gradient-to-b from-white via-slate-600 to-black bg-clip-text text-transparent opacity-20">
          INDOEX
        </span> */}
      {/* INDOEX */}
      {/* <TextChangeEffect/> */}
      {/* </div> */}

      {/* add background image here */}

      {/* <div className="w-full h-full absolute top-0 right-0 bg-[#eff0f2] dark:bg-[#06062a] opacity-80 blur-3xls z-[30]"></div> */}

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
