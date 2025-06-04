import StakeHero from "@/components/earn/stake/stakehero/StakeHero";
import StakeMain from "@/components/earn/stake/stakemain/StakeMain";
import React from "react";
const Page = () => {
  return (
    <div className="w-full h-fit ">
      <StakeHero />
      <StakeMain />
    </div>
  );
};

export default Page;
