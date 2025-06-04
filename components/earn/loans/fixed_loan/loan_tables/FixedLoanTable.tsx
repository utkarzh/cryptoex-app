"use client";
import React, { useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import { SiEthereum, SiBinance, SiPolygon } from "react-icons/si";
import BorrowSupplyTable from "./BorrowSupplyTable";

// type Props = {}
const tokenTabs = [
  { label: "BTC", icon: <FaBitcoin className="text-lg text-orange-400" /> },
  { label: "ETH", icon: <SiEthereum className="text-lg text-blue-400" /> },
  { label: "BNB", icon: <SiBinance className="text-lg text-yellow-400" /> },
  { label: "MATIC", icon: <SiPolygon className="text-lg text-purple-400" /> },
];

const FixedLoanTable = () => {
  const [selectedTab, setSelectedTab] = useState("BTC");
  return (
    <div className="w-full md:w-[50%] mt-20 mb-10">
      {/* Tabs */}
      <div className="flex gap-6 border-b-2 dark:border-white/10 border-[#161735]/10 pt-2  ">
        {tokenTabs.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setSelectedTab(label)}
            className={`text-[14px] font-light pb-2 cursor-pointer top-[2px] relative  ${
              selectedTab === label
                ? "text-green-400 border-b-2 "
                : "border-b-2 border-transparent"
            }`}
          >
            <div className="flex gap-1 items-center text-xs">
              {icon}
              {label}
            </div>
          </button>
        ))}
      </div>
      <BorrowSupplyTable isSupply={false} />
      <BorrowSupplyTable isSupply={true} />
    </div>
  );
};

export default FixedLoanTable;
