import React, { FC } from "react";

type Props = {
  title: string;
  value: string;
  color?: string;
};

const StakeFormInfoCard: FC<Props> = ({ title, value, color }) => {
  return (
    <div className=" w-full flex gap-2 text-[11px] text-start justify-evenly">
      <div className="w-full">{title}</div>
      <div className="w-fit px-2">:</div>
      <div className="w-full" style={{ color: `${color ? color : ""}` }}>
        {value}
      </div>
    </div>
  );
};

export default StakeFormInfoCard;
