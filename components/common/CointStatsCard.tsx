import React, { FC } from "react";

type Props = {
  coinUnitAmount: number;
  changePercent: number;
};

const CointStatsCard: FC<Props> = ({ coinUnitAmount, changePercent }) => {
  function formatDecimalNumber(value: number): string {
    // Convert exponential to full decimal
    const fullStr = value.toString().includes("e")
      ? value.toFixed(20).replace(/0+$/, "") // remove trailing zeros
      : value.toString();

    const [integerPart, decimalPart] = fullStr.split(".");

    if (!decimalPart || decimalPart.length <= 9) {
      return fullStr; // No formatting needed
    }

    const firstThree = decimalPart.slice(0, 3);
    const lastThree = decimalPart.slice(-3);

    return `${integerPart}.${firstThree}...${lastThree}`;
  }
  return (
    <div className="w-fit flex flex-col justify-center items-start ">
      {/* amount */}
      <div className="m-0 p-0 text-[12px] 2xl:text-[0.6rem] font-medium ">
        ${formatDecimalNumber(coinUnitAmount)}
      </div>
      <div className={`m-0 p-0 text-[10px] 2xl:text-[0.5rem]`}>
        {changePercent > 0 && "+"}
        {changePercent.toFixed(2)}%
      </div>
    </div>
  );
};

export default CointStatsCard;
