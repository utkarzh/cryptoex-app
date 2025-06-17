import { useTranslations } from "next-intl";
import React, { FC } from "react";
import { IeoVendorDetails_int } from "../../types";
import { getStatus } from "@/utils/getStatus";

type Props = {
  contestInfo: IeoVendorDetails_int;
};

const AirdropJoinCard: FC<Props> = ({ contestInfo }) => {
  const t = useTranslations("airDrop.contest.terms");
  const contestStatus = getStatus(
    contestInfo.airdropcoins_startdays,
    contestInfo.airdropcoins_enddays
  );
  return (
    <div className="w-full bg-white dark:bg-[#161735] p-4 rounded-md flex flex-col gap-6">
      {/* heading */}
      <h3 className="text-sm font-medium ">{t("join")}</h3>
      {/* dates */}
      <div className="flex flex-col gap-4">
        {/* start date */}
        <div className="w-full flex justify-between gap-2 text-[10px] xl:text-xs font-normal dark:text-slate-500 text-slate-600">
          <span>{t("sDate")}</span>
          <span>{contestInfo.airdropcoins_startdate}</span>
        </div>
        {/* end date */}
        <div className="w-full flex justify-between gap-2 text-[10px] xl:text-xs font-normal dark:text-slate-500 text-slate-600">
          <span>{t("eDate")}</span>
          <span>{contestInfo.airdropcoins_enddate}</span>
        </div>
      </div>
      {/* button */}
      {/* ongoing */}
      {contestStatus === "ongoing" && (
        <a
          href={contestInfo.airdropcoins_claimlink}
          target="_blank"
          className="w-full text-center bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-full transition text-xs cursor-pointer"
        >
          {t("button")}
        </a>
      )}
      {contestStatus === "upcoming" && (
        <div className="w-full text-center bg-yellow-600/40  font-medium py-3 rounded-full transition text-xs cursor-not-allowed">
          {t("upcoming")}
        </div>
      )}

      {contestStatus === "completed" && (
        <div className="w-full text-center bg-[#eff0f2] dark:bg-[#06062a] font-medium py-3 rounded-full transition text-xs cursor-not-allowed">
          {t("completed")}
        </div>
      )}
    </div>
  );
};

export default AirdropJoinCard;
