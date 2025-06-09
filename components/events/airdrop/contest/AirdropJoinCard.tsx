import { useTranslations } from "next-intl";
import React from "react";

// type Props = {}

const AirdropJoinCard = () => {
  const t = useTranslations("airDrop.contest.terms");
  return (
    <div className="w-full bg-white dark:bg-[#161735] p-4 rounded-md flex flex-col gap-6">
      {/* heading */}
      <h3 className="text-sm font-medium ">{t("join")}</h3>
      {/* dates */}
      <div className="flex flex-col gap-4">
        {/* start date */}
        <div className="w-full flex justify-between gap-2 text-[10px] font-normal dark:text-slate-500 text-slate-600">
          <span>{t("sDate")}</span>
          <span>19-05-2023</span>
        </div>
        {/* end date */}
        <div className="w-full flex justify-between gap-2 text-[10px] font-normal dark:text-slate-500 text-slate-600">
          <span>{t("eDate")}</span>
          <span>25-05-2023</span>
        </div>
      </div>
      {/* button */}
      <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-full transition text-xs cursor-pointer">
        {t("button")}
      </button>
    </div>
  );
};

export default AirdropJoinCard;
