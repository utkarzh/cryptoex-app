"use client";
import { saira } from "@/utils/Font";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useGetTradeContestListMutation } from "@/redux/features/events/eventsApi";
import { TradeContestApiResult_int, TradeContestVendor_int } from "../types";
import StatusCardTradeContest from "./StatusCardTradeContest";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";

const TradecontestContent = () => {
  const t = useTranslations("tradeContest");

  const [filteredData, setFilteredData] = useState<TradeContestVendor_int[]>(
    []
  );
  const [selectedTab, setSelectedTab] = useState<
    "all" | "ongoing" | "upcoming" | "completed"
  >("all");

  const [getTradeContestList, { data, isLoading }] =
    useGetTradeContestListMutation<TradeContestApiResult_int>();
  useEffect(() => {
    getTradeContestList({});
  }, []);

  useEffect(() => {
    if (!data) return;

    if (data?.status === 1) {
      if (selectedTab === "all") {
        setFilteredData(data.tradecontestvendors);
      } else if (selectedTab === "ongoing") {
        const tempFilteredArr = data.tradecontestvendors.filter(
          (val) =>
            Number(val.tradecontestcoins_startdays) < 0 &&
            Number(val.tradecontestcoins_enddays) > 0
        );
        setFilteredData(tempFilteredArr);
      } else if (selectedTab === "upcoming") {
        const tempFilteredArr = data.tradecontestvendors.filter(
          (val) =>
            Number(val.tradecontestcoins_startdays) > 0 &&
            Number(val.tradecontestcoins_enddays) > 0
        );
        setFilteredData(tempFilteredArr);
      } else if (selectedTab === "completed") {
        const tempFilteredArr = data.tradecontestvendors.filter(
          (val) =>
            Number(val.tradecontestcoins_startdays) < 0 &&
            Number(val.tradecontestcoins_enddays) < 0
        );
        setFilteredData(tempFilteredArr);
      }
    }
  }, [data, selectedTab]);

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
                {t(`tabs.${tab}`)}
              </span>
            </button>
          ))}
        </div>

        {/* content */}
        <div className="w-[90%]  md:w-[85%] lg:w-[80%] mt-10 mx-auto flex flex-wrap justify-center">
          {filteredData?.length > 0 && !isLoading ? (
            <StatusCardTradeContest data={filteredData} />
          ) : (
            <div className="w-screen ">
              <LoadingTableSkeleton columns={3} rows={6} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradecontestContent;
