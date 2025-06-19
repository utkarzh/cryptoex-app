"use client";
import React, { FC, useEffect, useState } from "react";
import HomeCryptoList from "./HomeCryptoList";
import { useTranslations } from "next-intl";
import { Analytics_int, HomeDataStructure_int } from "../types";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";

type SelectedList = "spot" | "newadded" | "topgainer";

type Props = {
  listsData: HomeDataStructure_int;
};

const CurrencyWedgets: FC<Props> = ({ listsData: data }) => {
  const t = useTranslations("homePage.currencyWedgets");

  const [selectedList, setSelectedList] = useState<SelectedList>("spot");

  const selectListHandler = (data: SelectedList) => {
    setSelectedList(data);
  };

  const [spotList, setSpotList] = useState<Analytics_int[]>([]);
  const [newList, setNewList] = useState<Analytics_int[]>([]);
  const [topList, setTopList] = useState<Analytics_int[]>([]);

  useEffect(() => {
    if (!data) return;
    if (data.status === 1) {
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

      setSpotList(data.analytics);
      setNewList(newListed);
      setTopList(topGainer);
    }
  }, [data]);

  return (
    <div className="w-full 2xl:w-[90%] mx-auto mt-14 md:mt-12 lg:mt-10 text-black dark:text-white  flex justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      {/* container */}
      <div className="w-full flex flex-col md:flex-row gap-16 md:gap-2 overflow-x-auto scrollbar-custom overflow-y-hidden ">
        {spotList.length > 0 ? (
          <HomeCryptoList
            isExpended={selectedList === "spot"}
            title={t("tableTitle.spot")}
            value="spot"
            onSelect={selectListHandler}
            listData={spotList}
          />
        ) : (
          <LoadingTableSkeleton rows={8} columns={2} />
        )}

        {newList.length > 0 ? (
          <HomeCryptoList
            isExpended={selectedList === "newadded"}
            title={t("tableTitle.newlyListed")}
            value="newadded"
            onSelect={selectListHandler}
            listData={newList}
          />
        ) : (
          <LoadingTableSkeleton rows={8} columns={1} />
        )}

        {topList.length > 0 ? (
          <HomeCryptoList
            isExpended={selectedList === "topgainer"}
            title={t("tableTitle.topGainers")}
            value="topgainer"
            onSelect={selectListHandler}
            listData={topList}
          />
        ) : (
          <LoadingTableSkeleton rows={8} columns={1} />
        )}
      </div>
    </div>
  );
};

export default CurrencyWedgets;
