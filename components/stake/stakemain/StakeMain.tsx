import React from "react";
import ContentCard from "./ContentCard";
import Faq from "./Faq";
import StakeTable from "./StakeTable";

// type Props = {};

const StakeMain = () => {
  const test = [
    {
      title: "Staking",
      content:
        "Staking lets you earn rewards on your crypto. You can stake or redeem anytime, Most assets have a redemption period with no rewards during that time.",
    },
    {
      title: "Term",
      content:
        "Your holding period for the product determines the yield. Flexible-term products allow you to access your investments as needed.",
    },
    {
      title: "Redemption period",
      content:
        "This is set by the staking protocol. Each cryptocurrency has its own waiting period for unstaking assets. No rewards or yield accrue during this time.",
    },
  ];

  return (
    <div className="w-[95%] sm:w-[85%] md:w-[80%]  lg::w-[70%] mx-auto py-20 h-full">
      {/* content cards */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        {test.map((val, index) => (
          <ContentCard title={val.title} content={val.content} key={index} />
        ))}
      </div>

      {/* table */}
      <StakeTable />
      {/* faq */}
      <Faq />
    </div>
  );
};

export default StakeMain;
