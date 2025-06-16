"use client";
import React, { useState } from "react";
import TopGainers from "./TopGainers";
import TopTranding from "./TopTrending";
import NewListings from "./NewListings";
import TradeTable from "./TradeTable";
import { useTranslations } from "next-intl";

const Markets = () => {
  const t = useTranslations("marketPage.tabs");
  const [tabType, setTabType] = useState<"spot" | "newListed" | "topGainer">(
    "spot"
  );
  return (
    <div className="w-full mt-6 xl:mt-8">
      {/* tabs */}
      <div className=" ml-4 mb-2 w-full h-full  bg-transparent  text-gray-700 dark:text-gray-400 text-sm rounded-xl  space-y-3 flex flex-col gap-4 ">
        {/* Tabs */}
        <div className="flex">
          <div className="flex gap-10 px-4 border-b-2 dark:border-white/10 border-[#161735]/10 pt-2 ">
            {["spot", "newListed", "topGainer"].map((val) => (
              <button
                key={val}
                onClick={() => setTabType(val as typeof tabType)}
                className={`text-md  pb-2 cursor-pointer top-[2px] relative  ${
                  val === tabType
                    ? "text-green-400 border-b-3 "
                    : "border-b-3 border-transparent"
                }`}
              >
                <span className="flex gap-1 items-center">{t(`${val}`)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* quick look tables:- top gainer, tranding, new listings */}
      <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">
        <TopGainers />
        <TopTranding />
        <NewListings />
      </div>

      {/* trade table */}
      <TradeTable />
    </div>
  );
};

export default Markets;
