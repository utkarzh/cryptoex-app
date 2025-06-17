import React from "react";
import LaunchpadContestInfo from "./LaunchpadContestInfo";
// import SocialMediaIconCard from "@/components/common/SocialMediaIconCard";
import ContestTeam from "./ContestTeam";
import LaunchJoinCard from "./LaunchJoinCard";

const LaunchpadContest = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 my-10 ">
      {/* left section */}
      <div className="w-full flex flex-col ">
        <LaunchpadContestInfo />
        <ContestTeam />
        {/* <SocialMediaIconCard  /> */}
      </div>
      {/* right section */}
      <div className="w-full flex flex-col gap-2 items-end">
        <LaunchJoinCard />
      </div>
    </div>
  );
};

export default LaunchpadContest;
