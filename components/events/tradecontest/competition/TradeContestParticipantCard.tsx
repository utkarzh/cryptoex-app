import { useTranslations } from "next-intl";
import React, { FC } from "react";

type Props = {
  Participants: number;
  status: "ongoing" | "completed" | "upcoming" | "";
};

const TradeContestParticipantCard: FC<Props> = ({ Participants, status }) => {
  const t = useTranslations("tradeContest.contest.terms");
  return (
    <div className="w-full bg-white dark:bg-[#161735] p-4 rounded-md">
      <div className="flex gap-6 justify-between items-center">
        <p className="text-sm font-medium">{t("participants")}</p>
        <div
          className={`text-xs  ${
            status === "ongoing"
              ? "bg-green-600 dark:bg-green-500/20 dark:text-green-600 border-green-600 rounded-md hover:bg-green-700 dark:hover:bg-green-500/30 text-green-100 opacity-100"
              : "border-none opacity-70"
          }  px-4 py-3 border  cursor-pointer  transition-all duration-300 `}
        >
          <span className="text-2xl font-bold">{Participants}</span>
        </div>
      </div>
    </div>
  );
};

export default TradeContestParticipantCard;
