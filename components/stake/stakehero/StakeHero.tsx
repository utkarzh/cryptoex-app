import { saira } from "@/utils/Font";
import React from "react";
import Overview from "./Overview";
// import Image from "next/image";

const StakeHero = () => {
  return (
    <div className="w-full py-20 h-fit bg-[#eff0f2] dark:bg-[#161735] shadow-[1px_0px_4px_#48b873] overflow-hidden">
      <div className="w-[95%] sm:w-[85%] md:w-[80%]  lg::w-[70%] mx-auto  flex gap-2 justify-center items-center">
        {/* left section */}
        <div className="w-full  flex flex-col gap-8">
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
        <div className="hidden sm:block w-full relative ">
          <div className="w-full h-full absolute -bottom-14 right-0 bg-[#161735]/70 z-[30]"></div>
          {/* <Image
          src="/images/stakeheroimggg.png"
          alt=""
          width={1000}
          height={1000}
          className="w-[100%] h-auto relative -bottom-14 mix-blend-normal z-[20]"
        /> */}
        </div>
      </div>
    </div>
  );
};

export default StakeHero;
