"use client";
import { useTranslations } from "next-intl";
import React, { FC, useEffect, useState } from "react";
import { TradeContestDetails_int, TradeContestVendors_int } from "../../types";
import { getStatus } from "@/utils/getStatus";
import Link from "next/link";

type Props = {
  tradeContestData: TradeContestDetails_int;
};

const TradeCompetitionJoinCard: FC<Props> = ({ tradeContestData }) => {
  const t = useTranslations("tradeContest.contest.terms");

  const status = getStatus(
    tradeContestData.tradecontestvendors[0].tradecontestcoins_startdays,
    tradeContestData.tradecontestvendors[0].tradecontestcoins_enddays
  );

  const [vendorsDetails, setVendorsDetails] =
    useState<TradeContestVendors_int>();

  useEffect(() => {
    setVendorsDetails(tradeContestData.tradecontestvendors[0]);
  }, [tradeContestData]);

  if (!vendorsDetails) return;
  return (
    <div className="w-full bg-white dark:bg-[#161735] p-4 rounded-md flex flex-col gap-6">
      {/* heading */}
      <h3 className="text-sm font-medium ">{t("join")}</h3>
      {/* dates */}
      <div className="flex flex-col gap-4">
        {/* start date */}
        <div className="w-full flex justify-between gap-2 text-xs font-normal dark:text-slate-500 text-slate-600">
          <span>{t("ieoSDate")}</span>
          <span>{vendorsDetails.tradecontestcoins_startdate}</span>
        </div>
        {/* end date */}
        <div className="w-full flex justify-between gap-2 text-xs font-normal dark:text-slate-500 text-slate-600">
          <span>{t("ieoEDate")}</span>
          <span>{vendorsDetails.tradecontestcoins_enddate}</span>
        </div>
      </div>
      {/* button */}

      {/*  */}
      {status === "ongoing" && (
        <Link
          href={`/spot/${vendorsDetails.vendors_vendorshortcode}`}
          className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-full transition text-xs cursor-pointer flex justify-center"
        >
          {t("button")}
        </Link>
      )}

      {status === "upcoming" && (
        <div className="w-full flex justify-center bg-[#eff0f2] dark:bg-[#20203c] font-medium py-3 rounded-full transition text-xs cursor-not-allowed">
          {t("button")}
        </div>
      )}

      {status === "completed" && (
        <div className="w-full flex justify-center bg-[#eff0f2] dark:bg-[#20203c] font-medium py-3 rounded-full transition text-xs cursor-not-allowed">
          {t("completed")}
        </div>
      )}
    </div>
  );
};

export default TradeCompetitionJoinCard;
