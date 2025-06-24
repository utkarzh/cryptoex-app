"use client";
import React, { FC, useEffect, useState } from "react";
import TradeBook from "./trade_book/TradeBook";
import CryptoStats from "./trade_graph/CryptoStats";
import TradeForm from "./trade_form/TradeForm";
import OpenOrderAndHistory from "./open_order_n_history/OpenOrderAndHistory";
import TradeStats from "./trade_stats/TradeStats";
import {
  AvailablePairs_int,
  SingleAvailablePair_int,
  TradeApiResult_int,
} from "./types";
import { useGetAvailablePairsMutation } from "@/redux/features/trade/eventsApi";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";

type Props = {
  isSpot: boolean;
  pair: string;
};

export type FilteredArr = {
  vendorName: string;
  vendorArray: SingleAvailablePair_int[];
};

const Trade: FC<Props> = ({ isSpot, pair }) => {
  console.log("pair is", pair);
  const [filteredArray, setFilteredArray] = useState<FilteredArr[]>([]);
  const [currentMarketDetails, setCurrentMarketDetails] =
    useState<SingleAvailablePair_int>();
  const [singleVendorArray, setSingleVendorArray] = useState<FilteredArr>();
  const [getAvailablePairs, { data }] =
    useGetAvailablePairsMutation<TradeApiResult_int<AvailablePairs_int>>();
  useEffect(() => {
    getAvailablePairs({});
  }, [pair]);

  useEffect(() => {
    if (!data) return;
    if (data?.status === 1) {
      const tempFilterdArray: FilteredArr[] = [];
      let currentMarketPairVendorName = "";
      for (let i = 0; i < data.availablepairs.length; i++) {
        let isExist = false;
        //current market details filtered out
        if (data.availablepairs[i].pair === pair) {
          currentMarketPairVendorName = data.availablepairs[i].vendor;
          setCurrentMarketDetails(data.availablepairs[i]);
        }
        for (let j = 0; j < tempFilterdArray.length; j++) {
          if (tempFilterdArray[j].vendorName == data.availablepairs[i].vendor) {
            isExist = true;
            tempFilterdArray[j].vendorArray.push(data.availablepairs[i]);
          }
        }
        if (!isExist) {
          tempFilterdArray.push({
            vendorName: data.availablepairs[i].vendor,
            vendorArray: [data.availablepairs[i]],
          });
        }
      }

      if (currentMarketPairVendorName) {
        for (let j = 0; j < tempFilterdArray.length; j++) {
          if (tempFilterdArray[j].vendorName === currentMarketPairVendorName) {
            setSingleVendorArray(tempFilterdArray[j]);
          }
        }
      }
      setFilteredArray(tempFilterdArray);
    }
  }, [data, pair]);

  console.log("Filtered array ", filteredArray);
  console.log("actual arr", data?.availablepairs);

  return (
    <div className="w-[98%] mx-auto ">
      {/* top part */}
      <div className="w-full h-full lg:h-[480px] 2xl:h-[calc(90vh-200px)]   flex flex-col lg:flex-row gap-4 ">
        {/*trade book*/}
        <div className="w-full max-w-xs h-[100%]  hidden lg:flex  ">
          <TradeBook />
        </div>
        {/* Graph */}
        <div className="w-full   ">
          {/* Graph here */}
          {singleVendorArray && currentMarketDetails ? (
            <CryptoStats
              filteredArray={singleVendorArray}
              currentMarketDetails={currentMarketDetails}
              isSpot={isSpot}
            />
          ) : (
            <LoadingTableSkeleton rows={6} columns={1} />
          )}
        </div>
        {/* Trade form */}
        <div className="w-full lg:max-w-xs  flex gap-2 flex-wrap sm:flex-nowrap justify-evenly  ">
          <div className="w-full min-w-xs max-h-[480px] lg:max-w-xs block lg:hidden ">
            <TradeBook />
          </div>
          <TradeForm />
        </div>
      </div>

      {/* bottom part */}
      <div className="w-full mt-6 mb-2">
        <OpenOrderAndHistory />

        {data && data.status === 1 ? (
          <TradeStats isSpot={isSpot} data={data} />
        ) : (
          <LoadingTableSkeleton rows={0} columns={10} />
        )}
      </div>
    </div>
  );
};

export default Trade;
