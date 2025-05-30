"use client";
import React, { useState } from "react";
import ConvertBar from "./ConvertBar";
import { TbArrowsDownUp } from "react-icons/tb";
import { LuFileText } from "react-icons/lu";
import { PiQuestion } from "react-icons/pi";
import CryptoConvertForm from "./CryptoConvertForm";

export const tabItem = [
  {
    icon: <TbArrowsDownUp />,
    title: "Convert",
  },
  {
    icon: <LuFileText />,
    title: "History",
  },
  {
    icon: <PiQuestion />,
    title: "FAQ",
  },
];

const Convert = () => {
  const [tabType, setTabType] = useState<"FAQ" | "Convert" | "History">(
    "Convert"
  );
  return (
    <div className="w-full flex flex-col justify-center">
      {/* tab bar */}
      <div className=" mb-2 w-full h-full   bg-transparent  text-gray-700 dark:text-gray-400 text-sm rounded-xl  space-y-3 flex flex-col gap-4 ">
        {/* loan type and loan data and history Tabs */}
        <div className="flex justify-center   ">
          {/* loan type */}
          <div className="flex gap-10 px-4 border-b-2 dark:border-white/10 border-[#161735]/10 pt-2 ">
            {tabItem.map((pair) => (
              <button
                key={pair.title}
                onClick={() => setTabType(pair.title as typeof tabType)}
                className={`text-[14px]  pb-2 cursor-pointer top-[2px] relative  ${
                  pair.title === tabType
                    ? "text-green-400 border-b-3 "
                    : "border-b-3 border-transparent"
                }`}
              >
                <span className="capitalize flex gap-1 items-center">
                  {pair.icon} {pair.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* convert form */}
      {tabType === "Convert" && <CryptoConvertForm />}

      <div className="w-full mb-20">
        <ConvertBar />
      </div>
    </div>
  );
};

export default Convert;
