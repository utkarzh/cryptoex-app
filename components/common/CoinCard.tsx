import Image from "next/image";
import React, { FC } from "react";

type Props = {
  coinImgUrl: string;
  cointTitle: string;
  coinName?: string;
  isSmall?: boolean;
};

const CoinCard: FC<Props> = ({ coinImgUrl, cointTitle, coinName, isSmall }) => {
  return (
    <div className="flex gap-2 justify-center items-center w-fit text-nowrap  ">
      <Image
        width={100}
        height={100}
        src={coinImgUrl}
        alt=""
        className="w-6 h-6 rounded-full"
      />
      <div className="flex flex-col items-start  ">
        <span className=" font-medium text-xs 2xl:text-[0.7rem]">
          {cointTitle}
        </span>
        {!isSmall && (
          <span className="text-[10px] 2xl:text-[0.5rem] capitalize">
            {coinName}
          </span>
        )}
      </div>
    </div>
  );
};

export default CoinCard;
