"use client";
import React, { FC, useEffect, useState } from "react";
import AirdropJoinCard from "./AirdropJoinCard";
import ParticipantCard from "@/components/common/ParticipantCard";
import AirdropContestInfo from "./AirdropContestInfo";
import SocialMediaIconCard from "@/components/common/SocialMediaIconCard";
import { useGetAirdropDetailsMutation } from "@/redux/features/events/eventsApi";
import { AirDropDetailsApiResult_int } from "../../types";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";
import { getStatus } from "@/utils/getStatus";

type Props = {
  ieovendor: string;
};

const AirdropContest: FC<Props> = ({ ieovendor }) => {
  const [status, setStatue] = useState<
    "ongoing" | "completed" | "upcoming" | ""
  >("");
  const [getAirdropDetails, { data }] =
    useGetAirdropDetailsMutation<AirDropDetailsApiResult_int>();

  useEffect(() => {
    getAirdropDetails(ieovendor);
  }, [ieovendor]);

  useEffect(() => {
    if (!data) return;
    const returnedStatus = getStatus(
      data.ieovendors[0].airdropcoins_startdays,
      data.ieovendors[0].airdropcoins_enddays
    );
    setStatue(returnedStatus);
  }, [data]);
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 my-10 ">
      {/* left section */}
      <div className="w-full flex flex-col ">
        {data ? (
          <>
            <AirdropContestInfo contestInfo={data.ieovendors[0]} />
            <SocialMediaIconCard contestInfo={data.ieovendors[0]} />
          </>
        ) : (
          <LoadingTableSkeleton columns={1} rows={5} />
        )}
      </div>
      {/* right section */}
      <div className="w-full flex flex-col gap-2 items-end ">
        <AirdropJoinCard />
        {status === "ongoing" && <ParticipantCard Participants={3} />}
      </div>
    </div>
  );
};

export default AirdropContest;
