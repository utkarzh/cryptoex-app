import StakeHero from "@/components/earn/stake/stakehero/StakeHero";
import StakeMain from "@/components/earn/stake/stakemain/StakeMain";
import React from "react";
const Page = () => {
  return (
    <div className="w-full h-fit ">
      <StakeHero />
      <div className="w-[95%] sm:w-[85%] md:w-[80%]  lg:w-[70%] mx-auto">
        <StakeMain />
      </div>
    </div>
  );
};

export default Page;
