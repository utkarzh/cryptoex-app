"use client";
import React from "react";

const TradeCompetitionJoinCard = () => {
  return (
    <div className="w-full bg-white dark:bg-[#161735] p-4 rounded-md flex flex-col gap-6">
      {/* heading */}
      <h3 className="text-sm font-medium ">Join on Trade Contest</h3>
      {/* dates */}
      <div className="flex flex-col gap-4">
        {/* start date */}
        <div className="w-full flex justify-between gap-2 text-[10px] font-normal dark:text-slate-500 text-slate-600">
          <span>IEO Start Date</span>
          <span>19-05-2023</span>
        </div>
        {/* end date */}
        <div className="w-full flex justify-between gap-2 text-[10px] font-normal dark:text-slate-500 text-slate-600">
          <span>IEO End Date</span>
          <span>25-05-2023</span>
        </div>
      </div>
      {/* button */}
      <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-full transition text-xs cursor-pointer">
        Go Trade
      </button>
    </div>
  );
};

export default TradeCompetitionJoinCard;
