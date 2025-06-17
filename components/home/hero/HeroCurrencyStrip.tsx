import CoinCard from "@/components/common/CoinCard";
import CointStatsCard from "@/components/common/CointStatsCard";
import React, { FC, useEffect, useState } from "react";
import { Analytics_int, HomeDataStructure_int, Vendors_int } from "../types";
import PulseLoading from "@/components/common/loading/PulseLoading";

type StripListData = {
  analytic: Analytics_int;
  vendor: Vendors_int;
};

type Props = {
  stripData: HomeDataStructure_int;
};
const HeroCurrencyStrip: FC<Props> = ({ stripData: data }) => {
  const [stripDataList, setstripDataList] = useState<StripListData[]>([]);
  useEffect(() => {
    if (!data) return;
    if (data.status === 0) return;
    const stripList: StripListData[] = [];
    for (let loopvar = 0; loopvar < data.analytics.length; loopvar++) {
      for (
        let loopvarinner = 0;
        loopvarinner < data.vendors.length;
        loopvarinner++
      ) {
        if (!data.vendors[loopvarinner].vendors_vendorshortcode) {
          continue;
        }
        if (
          data.analytics[loopvar].vendor ==
          data.vendors[loopvarinner].vendors_vendorshortcode
        ) {
          stripList.push({
            analytic: data.analytics[loopvarinner],
            vendor: data.vendors[loopvarinner],
          });
        }
      }
    }

    setstripDataList(stripList);
  }, [data]);

  console.log("Striped data list:--", stripDataList);
  return (
    <>
      {stripDataList.length > 0 ? (
        <div className="w-full flex gap-8 ">
          {stripDataList.map((val, index) => (
            <div
              key={index}
              className={`flex gap-4 ${
                index === stripDataList.length - 1 && "pr-6"
              }`}
            >
              <CoinCard
                cointTitle={val.vendor?.vendors_vendorshortcode}
                coinName={val.vendor?.vendors_vendorname}
                coinImgUrl={val?.vendor?.vendors_logopath}
                key={index}
              />
              <CointStatsCard
                coinUnitAmount={val?.analytic.usdrate}
                changePercent={val?.analytic.rate}
              />
            </div>
          ))}
        </div>
      ) : (
        <PulseLoading />
      )}
    </>
  );
};

export default HeroCurrencyStrip;
