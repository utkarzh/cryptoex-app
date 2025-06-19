import React, { FC } from "react";

type Props = {
  title: string;
  value: number;
  isOverviewVisible: boolean;
};

const OverviewCard: FC<Props> = ({
  title = "Assets (USDT)",
  value = 123.5,
  isOverviewVisible,
}) => {
  return (
    <div className="w-fit border border-[#464765] rounded-xl flex flex-col gap-1 p-3 px-4 space-y-1">
      <div className="text-xs font-extralight opacity-90">{title}</div>
      <div className="text-xs font-bold">
        {isOverviewVisible ? value : "***"}
      </div>
    </div>
  );
};

export default OverviewCard;
