"use client";
import Link from "next/link";
import React, { useState } from "react";

// type Props = {}

const OpenOrderAndHistory = () => {
  const [activeTab, setActiveTab] = useState<"openorders" | "orderhistory">(
    "openorders"
  );
  return (
    <>
      <div className="w-full h-full  bg-transparent text-gray-700 dark:text-gray-400 text-sm   rounded-xl  space-y-4 flex flex-col ">
        {/* Tab Header */}
        <div className="w-fit flex gap-8 pt-2  ">
          {["openorders", "orderhistory"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`text-[12px] font-medium capitalize pb-2 cursor-pointer  ${
                activeTab === tab
                  ? "text-green-400 border-b-2 relative top-[2px]"
                  : ""
              }`}
            >
              {tab
                .replace("openorders", "Open Orders")
                .replace("orderhistory", "Order History")}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="w-full min-h-40 flex justify-center items-center">
          {/* login and singup div */}
          <div className="text-[12px]">
            <Link href="#" className="text-green-600 ">
              Log in
            </Link>{" "}
            or{" "}
            <Link href="#" className="text-green-600">
              Sign up
            </Link>{" "}
            to trade
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenOrderAndHistory;
