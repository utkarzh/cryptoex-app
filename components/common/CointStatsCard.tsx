import React, { FC } from "react";

type Props = {
  coinUnitAmount: string;
  changePercent: string;
};

const CointStatsCard: FC<Props> = ({ coinUnitAmount, changePercent }) => {
  return (
    <div className="w-fit flex flex-col justify-center items-start ">
      {/* amount */}
      <div className="m-0 p-0 text-[12px] 2xl:text-[0.6rem] font-medium ">
        ${coinUnitAmount}
      </div>
      <div className="m-0 p-0 text-[10px] 2xl:text-[0.4rem]">
        {changePercent}%
      </div>
    </div>
  );
};

export default CointStatsCard;
