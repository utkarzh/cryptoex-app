import { saira } from "@/utils/Font";
import React, { FC } from "react";

type Props = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

const ContentCard: FC<Props> = ({ title, content, icon }) => {
  return (
    <div className="bg-white  shadow shadow-black/40 dark:shadow-white/20 dark:bg-[#161735]  rounded-xl p-4 py-6 flex  flex-col gap-3 space-y-1.5">
      {/* title */}
      <div className="flex gap-1 items-center text-lg font-medium">
        {icon}
        <h4 className={`${saira.className}`}>{title}</h4>
      </div>

      {/* border line */}
      <div className="w-full border-b opacity-30 "></div>
      {/* content */}
      <p className="text-xs xl:text-[0.85rem] font-light">{content}</p>
    </div>
  );
};

export default ContentCard;
