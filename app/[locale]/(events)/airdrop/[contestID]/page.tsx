import AirdropContest from "@/components/events/airdrop/contest/AirdropContest";

import React, { FC } from "react";

type Props = {
  params: Promise<{ contestID: string; locale: string }>;
};

const Page: FC<Props> = async ({ params }) => {
  const contestId = (await params).contestID;

  return (
    <div className="w-[98%] sm:w-[90%] md:w-[85%]  lg:w-[80%] mx-auto">
      <AirdropContest ieovendor={contestId} />
    </div>
  );
};

export default Page;
