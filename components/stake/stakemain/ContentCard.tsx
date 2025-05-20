import { saira } from "@/utils/Font";
import React, { FC } from "react";
import { LuClock3 } from "react-icons/lu";

type Props = {
  title: string;
  content: string;
};

const ContentCard: FC<Props> = ({ title, content }) => {
  return (
    <div className="bg-[#eff0f2]  dark:bg-[#161735]  rounded-xl p-4 py-6 flex  flex-col gap-3">
      {/* title */}
      <div className="flex gap-1 items-center">
        <LuClock3 className="" />
        <h4 className={`${saira.className}`}>{title}</h4>
      </div>

      {/* border line */}
      <div className="w-full border-b opacity-30 "></div>
      {/* content */}
      <p className="text-[12px] font-light">{content}</p>
    </div>
  );
};

export default ContentCard;
