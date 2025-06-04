"use client";
import React, { useState } from "react";
import StakeForm from "../stakeform/StakeForm";
import Model from "@/components/common/Model";

// type Props = {}

const StakeButton = () => {
  const [isModel, setIsModel] = useState(false);
  const modelOpenhandler = () => {
    setIsModel((prev) => !prev);
  };
  return (
    <>
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
    </>
  );
};

export default StakeButton;
