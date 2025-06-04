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
    <div className="w-fit border border-[#464765] rounded-xl flex flex-col gap-1 p-2 px-4">
      <div className="text-[10px] font-extralight opacity-90">{title}</div>
      <div className="text-[11px] font-bold">
        {isOverviewVisible ? value : "***"}
      </div>
    </div>
  );
};

export default OverviewCard;
