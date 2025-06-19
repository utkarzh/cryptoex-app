import TradeCompetition from "@/components/events/tradecontest/competition/TradeCompetition";
import React, { FC } from "react";

type Props = {
  params: Promise<{ contestID: string; locale: string }>;
};

const Page: FC<Props> = async ({ params }) => {
  const contestId = (await params).contestID;
  return (
    <div className="w-[98%] sm:w-[90%] md:w-[85%]  lg:w-[80%] mx-auto">
      <TradeCompetition contestvendor={contestId} />
    </div>
  );
};

export default Page;
