import React from "react";
import AirdropJoinCard from "./AirdropJoinCard";
import ParticipantCard from "@/components/common/ParticipantCard";
import AirdropContestInfo from "./AirdropContestInfo";
import SocialMediaIconCard from "@/components/common/SocialMediaIconCard";

const AirdropContest = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 my-10 ">
      {/* left section */}
      <div className="w-full flex flex-col ">
        <AirdropContestInfo />
        <SocialMediaIconCard />
      </div>
      {/* right section */}
      <div className="w-full flex flex-col gap-2 items-end ">
        <AirdropJoinCard />
        <ParticipantCard Participants={6} />
      </div>
    </div>
  );
};

export default AirdropContest;
