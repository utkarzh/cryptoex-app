"use client";
import React, { useEffect, useState } from "react";
import TopGainers from "./TopGainers";
import TopTranding from "./TopTrending";
import NewListings from "./NewListings";
import TradeTable from "./TradeTable";
import { useTranslations } from "next-intl";
import { useGetMArketPageDataMutation } from "@/redux/features/market/marketApi";
import { Analytics_int, HomeDataApi_int } from "../home/types";
import LoadingTableSkeleton from "../common/loading/LoadingTableSkeleton";

export type GlanceData = {
  topGainers: Analytics_int[];
  trending: Analytics_int[];
  newListing: Analytics_int[];
};

const Markets = () => {
  const t = useTranslations("marketPage.tabs");
  const [tabType, setTabType] = useState<"spot" | "newListed" | "topGainer">(
    "spot"
  );
  const [spotList, setSpotList] = useState<Analytics_int[]>([]);
  const [newList, setNewList] = useState<Analytics_int[]>([]);
  const [topList, setTopList] = useState<Analytics_int[]>([]);

  const [glanceData, setGlanceData] = useState<GlanceData>();

  const [getHomeData, { data }] =
    useGetMArketPageDataMutation<HomeDataApi_int>();
  useEffect(() => {
    getHomeData({});
  }, []);

  useEffect(() => {
    if (!data) return;
    const newListed = [];
    for (let loopvar = 0; loopvar < data.vendors.length; loopvar++) {
      for (
        let loopvarinner = 0;
        loopvarinner < data.analytics.length;
        loopvarinner++
      ) {
        if (
          data.analytics[loopvarinner].vendor ==
          data.vendors[loopvar].vendors_vendorshortcode
        ) {
          newListed.push(data.analytics[loopvarinner]);
        }
      }
    }

    const topGainer = data.analytics.slice().sort((a, b) => b.rate - a.rate);
    // whole data
    setSpotList(data.analytics);
    setNewList(newListed);
    setTopList(topGainer);

    // glance data is:--
    const tempGainerGlance = topGainer.slice(0, 4);
    const tempNewListingGlance = newListed.slice(0, 4);
    const tranding = data.analytics.filter((val) => val.istrending);
    const tempTredningGlance =
      tranding.length > 0 ? tranding.slice(0, 4) : newListed.slice(4, 8);
    setGlanceData({
      topGainers: tempGainerGlance,
      newListing: tempNewListingGlance,
      trending: tempTredningGlance,
    });
  }, [data]);

  console.log("Data at market page is:-", data);
  console.log("Tab type is:--", tabType);
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
        {glanceData?.topGainers ? (
          <TopGainers listData={glanceData?.topGainers} />
        ) : (
          <LoadingTableSkeleton rows={3} columns={1} />
        )}
        {glanceData?.trending ? (
          <TopTranding listData={glanceData?.trending} />
        ) : (
          <LoadingTableSkeleton rows={3} columns={1} />
        )}
        {glanceData?.newListing ? (
          <NewListings listData={glanceData?.newListing} />
        ) : (
          <LoadingTableSkeleton rows={3} columns={1} />
        )}
      </div>

      {/* trade table */}
      {spotList.length > 0 ? (
        <TradeTable
          listData={
            tabType === "spot"
              ? spotList
              : tabType === "newListed"
              ? newList
              : tabType === "topGainer"
              ? topList
              : []
          }
        />
      ) : (
        <LoadingTableSkeleton columns={3} rows={10} />
      )}
    </div>
  );
};

export default Markets;
