"use client";
import React, { FC, useEffect, useState } from "react";
import LaunchpadContestInfo from "./LaunchpadContestInfo";
// import SocialMediaIconCard from "@/components/common/SocialMediaIconCard";
import ContestTeam from "./ContestTeam";
import LaunchJoinCard from "./LaunchJoinCard";
import { useGetLaunchpadDetailsMutation } from "@/redux/features/events/eventsApi";
import { LaunchpadDetailsApiResult_int, MarketResult_int } from "../../types";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";
import SocialMediaIconCardLaunchpad from "./SocialMediaIconCardLaunchpad";

type Props = {
  ieovendor: string;
};

const LaunchpadContest: FC<Props> = ({ ieovendor }) => {
  const [currentVendor, setCurrentVendor] = useState<MarketResult_int>();
  const [getLaunchpadDetails, { data }] =
    useGetLaunchpadDetailsMutation<LaunchpadDetailsApiResult_int>();
  console.log("launchpad details", data);

  useEffect(() => {
    getLaunchpadDetails(ieovendor);
  }, [ieovendor]);

  useEffect(() => {
    if (!data) return;
    if (data.status == 0) return;
    setCurrentVendor(data.marketsresults[0]);
  }, [data]);
  console.log("Current vendor data is", currentVendor);

  return (
    <div className="w-full flex flex-col md:flex-row gap-2 my-10 ">
      {/* left section */}
      <div className="w-full flex flex-col ">
        {/* <SocialMediaIconCard  /> */}

        {data && currentVendor ? (
          <>
            <LaunchpadContestInfo
              contestInfo={data?.ieovendors[0]}
              currentVendor={currentVendor}
            />
            {data.ieovendors[0].icocoins_teamrichtext && (
              <ContestTeam
                teamHtmlLink={data.ieovendors[0].icocoins_teamrichtext}
              />
            )}
            <SocialMediaIconCardLaunchpad contestInfo={data?.ieovendors[0]} />
          </>
        ) : (
          <LoadingTableSkeleton columns={1} rows={7} />
        )}
      </div>
      {/* right section */}
      <div className="w-full flex flex-col gap-2 items-end xl:px-8">
        {data && currentVendor ? (
          <LaunchJoinCard
            data={data}
            currentVendor={currentVendor}
            setVendor={(data) => setCurrentVendor(data)}
          />
        ) : (
          <LoadingTableSkeleton rows={4} columns={1} />
        )}
      </div>
    </div>
  );
};

export default LaunchpadContest;
