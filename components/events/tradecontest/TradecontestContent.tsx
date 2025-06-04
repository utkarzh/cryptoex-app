"use client";
import { saira } from "@/utils/Font";
import React, { useEffect, useState } from "react";
import StatusCard, { Data_Type } from "../../common/StatusCard";

const airdropData: Data_Type[] = [
  {
    status: "upcoming",
    statusColor: "bg-yellow-500",
    borderColor: "border-yellow-500",
    shadow: "shadow-[1px_1px_2px_#f0b101]",
    token: "Leeu SPEL (SPL)",
    disc: " The LaunchPad will be the core utility feature of the Cat Ape Token.",
    logo: "/images/airdrop/noded.png",
    supply: "100,000,000",
    start: "03-02-2025",
    end: "20-02-2025",
  },
  {
    status: "ongoing",
    href: "/tradecontest/contest",
    statusColor: "bg-green-500",
    borderColor: "border-green-500",
    shadow: "shadow-[1px_1px_2px_#00c951]",
    token: "Leeu SPEL (SPL)",
    disc: " The LaunchPad will be the core utility feature of the Cat Ape Token.",
    logo: "/images/airdrop/leeu.png",
    supply: "100,000,000",
    start: "03-02-2025",
    end: "20-02-2025",
  },
  {
    status: "completed",
    statusColor: "bg-gray-500",
    borderColor: "border-gray-500",
    shadow: "shadow-[1px_1px_2px_#6a7181]",
    token: "VIEW (VIEW)",
    disc: " The LaunchPad will be the core utility feature of the Cat Ape Token.",
    logo: "/images/airdrop/view.png",
    supply: "100,000,000",
    start: "03-02-2025",
    end: "20-02-2025",
  },
  {
    status: "completed",
    statusColor: "bg-gray-500",
    borderColor: "border-gray-500",
    shadow: "shadow-[1px_1px_2px_#6a7181]",
    token: "VIEW (VIEW)",
    disc: " The LaunchPad will be the core utility feature of the Cat Ape Token.",
    logo: "/images/airdrop/view.png",
    supply: "100,000,000",
    start: "03-02-2025",
    end: "20-02-2025",
  },
];

const TradecontestContent = () => {
  const [selectedTab, setSelectedTab] = useState<
    "all" | "ongoing" | "upcoming" | "completed"
  >("all");

  const [filteredData, setFilteredData] = useState<Data_Type[]>(airdropData);

  useEffect(() => {
    const filteredData = airdropData.filter((val) => {
      if (selectedTab === "all") {
        return true;
      } else {
        return val.status === selectedTab;
      }
    });

    setFilteredData(filteredData);
  }, [selectedTab]);
  return (
    <div className="w-full min-h-[100vh] mt-30 mb-10 flex justify-center">
      {/* container */}
      <div>
        {/* header */}
        <div className="w-full flex flex-wrap justify-center gap-8">
          {["all", "ongoing", "upcoming", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab as typeof selectedTab)}
              className={`text-[14px] font-medium pb-2 cursor-pointer top-[2px] relative  ${
                tab === selectedTab
                  ? "text-green-400 border-b-3 "
                  : "border-b-3 border-transparent"
              }`}
            >
              <span className={`${saira.className} text-[20px] capitalize`}>
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* content */}
        <div className="mt-10 w-full flex flex-wrap justify-center">
          <StatusCard data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default TradecontestContent;
