"use client";
import CoinCard from "@/components/common/CoinCard";
import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useState } from "react";
import StakeForm from "../stakeform/StakeForm";

const StakeTableRow = () => {
  const [isModel, setIsModel] = useState(false);
  const modelOpenhandler = () => {
    setIsModel((prev) => !prev);
  };
  return (
    <tr className="">
      <td className=" flex justify-center py-4">
        <CoinCard
          coinImgUrl="/images/coins/btc.png"
          cointTitle="BTC"
          isSmall={true}
        />
      </td>
      <td>
        {" "}
        <span className="text-[12px]">3.01%</span>{" "}
      </td>
      <td>
        <div className="w-full flex gap-1 justify-center">
          <Image
            src="/images/coins/btc.png"
            width={24}
            height={24}
            alt=""
            className="w-6 h-auto"
          />

          <Image
            src="/images/coins/polygonrounded.png"
            width={24}
            height={24}
            alt=""
            className="w-6 h-auto"
          />
        </div>
      </td>
      <td>
        <button
          className="px-4 p-1 text-[12px] text-green-100 bg-green-600 dark:bg-green-500/30 dark:text-green-600 rounded-full cursor-pointer "
          onClick={modelOpenhandler}
        >
          Stake
        </button>
        {isModel && (
          <Model>
            <StakeForm onClose={modelOpenhandler} />
          </Model>
        )}
      </td>
    </tr>
  );
};

export default StakeTableRow;
