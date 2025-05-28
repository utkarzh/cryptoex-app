import { saira } from "@/utils/Font";
import React from "react";
import Overview from "./Overview";
import Image from "next/image";

const StakeHero = () => {
  return (
    <div className="w-full pb-4 h-fit bg-white dark:bg-[#151634]  relative  ">
      <div className="partShadowStake"></div>
      <div className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto flex gap-2 justify-center items-center  ">
        {/* left section */}
        <div className="w-full flex flex-col gap-8 ">
          {/* content */}
          <div className="flex flex-col ">
            <h1 className={`${saira.className} text-2xl font-bold`}>
              Stake with Flexible Terms for Maximum Earnings
            </h1>
            <p className="text-[14px] font-extralight">
              Earn passive income on your terms with flexible, high-yield
              staking options.
            </p>
          </div>
          {/* overview */}
          <Overview />
        </div>
        {/* right section */}
        <div className="hidden lg:flex w-full   relative -bottom-4 -right-6 overflow-hidden ">
          <Image
            src="/images/stakeheroimg.png"
            alt=""
            width={500}
            height={500}
            className="w-[100%] opacity-100 h-auto  mix-blend-normal invert dark:invert-0"
          />
        </div>
      </div>
    </div>
  );
};

export default StakeHero;
