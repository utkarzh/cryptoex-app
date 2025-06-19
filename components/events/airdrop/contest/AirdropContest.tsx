"use client";
import React, { FC, useEffect, useState } from "react";
import AirdropJoinCard from "./AirdropJoinCard";
import AirdropContestInfo from "./AirdropContestInfo";
import { useGetAirdropDetailsMutation } from "@/redux/features/events/eventsApi";
import { AirDropDetailsApiResult_int } from "../../types";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";
import { getStatus } from "@/utils/getStatus";
import SocialMediaIconCardAirdrop from "./SocialMediaIconCardAirdrop";
// import AirdropStatusCard from "./AirdropStatusCard";
import Model from "@/components/common/Model";
import Countdown from "@/components/common/CountDown";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { formatDateToISO } from "@/utils/formateDateToISO";

type Props = {
  ieovendor: string;
};

const AirdropContest: FC<Props> = ({ ieovendor }) => {
  const t = useTranslations("airDrop.terms");
  const [status, setStatus] = useState<
    "ongoing" | "completed" | "upcoming" | ""
  >("");

  const [isCountDown, setIsCountDown] = useState(false);
  const [getAirdropDetails, { data }] =
    useGetAirdropDetailsMutation<AirDropDetailsApiResult_int>();

  useEffect(() => {
    getAirdropDetails(ieovendor);
  }, [ieovendor]);

  useEffect(() => {
    if (!data) return;
    if (data?.status === 1) {
      const returnedStatus = getStatus(
        data?.ieovendors[0]?.airdropcoins_startdays,
        data?.ieovendors[0]?.airdropcoins_enddays
      );
      setStatus(returnedStatus);
    }
  }, [data]);
  return (
    <div className="w-full flex flex-col lg:flex-row gap-2 my-10 ">
      {/* left section */}
      <div className="w-full flex flex-col ">
        {data && data?.status === 1 ? (
          <>
            <AirdropContestInfo contestInfo={data?.ieovendors[0]} />
            <SocialMediaIconCardAirdrop contestInfo={data?.ieovendors[0]} />
          </>
        ) : (
          <LoadingTableSkeleton columns={1} rows={5} />
        )}
      </div>
      {/* right section */}
      <div className=" w-full xl:w-[80%] xl:mx-auto flex flex-col gap-2 items-end ">
        {data && data?.status === 1 ? (
          <AirdropJoinCard contestInfo={data?.ieovendors[0]} />
        ) : (
          <LoadingTableSkeleton rows={2} columns={1} />
        )}
        {/* {(status === "ongoing" || status === "upcoming") && (
          <AirdropStatusCard
            status={status}
            Participants={
              status === "ongoing"
                ? Number(data?.ieovendors[0]?.airdropcoins_enddays)
                : Number(data?.ieovendors[0]?.airdropcoins_startdays)
            }
          />
        )} */}
      </div>
      {status === "upcoming" && !isCountDown && (
        <Model>
          <div className="bg-white dark:bg-[#161735] pt-8 rounded-2xl m mx-auto shadow-lg relative  space-y-4">
            {/* close button */}
            <button
              className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
              onClick={() => setIsCountDown(true)}
            >
              <IoCloseOutline size={20} />
            </button>
            <h3 className="text-xs ml-6">{t("timeLeft")}</h3>
            {data && data?.status === 1 ? (
              <Countdown
                startDate={formatDateToISO(
                  data?.ieovendors[0].airdropcoins_startdate
                )}
              />
            ) : (
              <LoadingTableSkeleton rows={1} columns={3} />
            )}
          </div>
        </Model>
      )}
    </div>
  );
};

export default AirdropContest;
