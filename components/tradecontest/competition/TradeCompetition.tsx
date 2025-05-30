import React from "react";
import TradeCompetitionJoinCard from "./TradeCompetitionJoinCard";
import ParticipantCard from "@/components/common/ParticipantCard";
import TradeCompetitionInfo from "./TradeCompetitionInfo";

// type Props = {}

const TradeCompetition = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 my-10 ">
      {/* left section */}
      <div className="w-full flex flex-col ">
        <TradeCompetitionInfo />
      </div>
      {/* right section */}
      <div className="w-full flex flex-col gap-2 items-end">
        <TradeCompetitionJoinCard />
        <ParticipantCard Participants={6} />
      </div>
    </div>
  );
};

export default TradeCompetition;
