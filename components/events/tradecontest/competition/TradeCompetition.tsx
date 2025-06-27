"use client";
import React, { FC, useEffect, useState } from "react";
import TradeCompetitionJoinCard from "./TradeCompetitionJoinCard";
import TradeCompetitionInfo from "./TradeCompetitionInfo";
import { useGetTradeContestDetailsMutation } from "@/redux/masternode/events/eventsApi";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";
import { TradeContestDetailsApiResult_int } from "../../types";
import TradeContestParticipantCard from "./TradeContestParticipantCard";
import Countdown from "@/components/common/CountDown";
import { formatDateToISO } from "@/utils/formateDateToISO";
import { IoCloseOutline } from "react-icons/io5";
import Model from "@/components/common/Model";
import { getStatus } from "@/utils/getStatus";
import { useTranslations } from "next-intl";

type Props = {
  contestvendor: string;
};

const TradeCompetition: FC<Props> = ({ contestvendor }) => {
  const t = useTranslations("tradeContest.terms");
  const [isCountDown, setIsCountDown] = useState(false);
  const [status, setStatus] = useState<
    "ongoing" | "completed" | "upcoming" | ""
  >("");
  const [getTradeContestDetails, { data }] =
    useGetTradeContestDetailsMutation<TradeContestDetailsApiResult_int>();

  useEffect(() => {
    getTradeContestDetails(contestvendor);
  }, [contestvendor]);

  useEffect(() => {
    if (!data) return;
    if (data?.status === 1) {
      const returnedStatus = getStatus(
        data?.tradecontestvendors[0].tradecontestcoins_startdays,
        data?.tradecontestvendors[0]?.tradecontestcoins_enddays
      );
      setStatus(returnedStatus);
    }
  }, [data]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-2 my-10 ">
      {/* left section */}
      <div className="w-full flex flex-col ">
        {data && data?.status === 1 ? (
          <TradeCompetitionInfo tradeContestData={data} />
        ) : (
          <LoadingTableSkeleton columns={1} rows={7} />
        )}
      </div>
      {/* right section */}
      <div className="w-full xl:w-[80%] flex flex-col gap-2 items-end">
        {data && data?.status === 1 ? (
          <>
            <TradeCompetitionJoinCard tradeContestData={data} />
            <TradeContestParticipantCard
              Participants={data?.tradecontestuserscount}
              status={status}
            />
          </>
        ) : (
          <LoadingTableSkeleton columns={1} rows={4} />
        )}
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
                  data?.tradecontestvendors[0]?.tradecontestcoins_startdate
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

export default TradeCompetition;
