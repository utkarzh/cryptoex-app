import StakeHero from "@/components/stake/stakehero/StakeHero";
import React from "react";
import StakeMain from "@/components/stake/stakemain/StakeMain";

const Page = () => {
  return (
    <div className="w-full h-fit ">
      <StakeHero />
      <StakeMain />
    </div>
  );
};

export default Page;
