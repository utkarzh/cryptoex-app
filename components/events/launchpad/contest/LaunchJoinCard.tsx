"use client";
import { useTranslations } from "next-intl";
import React, { FC, useEffect, useState } from "react";
import { LaunchpadDetails_int, MarketResult_int } from "../../types";
import Image from "next/image";
import { formatCoinRate } from "@/utils/formateCoinRate";

type Props = {
  data: LaunchpadDetails_int;
  currentVendor: MarketResult_int;
  setVendor: (data: MarketResult_int) => void;
};

const LaunchJoinCard: FC<Props> = ({ data, currentVendor, setVendor }) => {
  const t = useTranslations("launchPad.contest.form.terms");

  const [buyAmount, setBuyAmount] = useState(
    data.ieovendors[0].icocoins_mincount
  );

  const [coinDetails, setCoinDetails] = useState([
    { label: t("sDate"), value: data.ieovendors[0].icocoins_startdate },
    { label: t("eDate"), value: data.ieovendors[0].icocoins_enddate },
    {
      label: t("tPrice"),
      value: `1 ${data.ieovendors[0].vendors_vendorshortcode} ≈
              ${formatCoinRate(
                data.ieovendors[0].icocoins_coincost / currentVendor.usdrate
              )}
              ${currentVendor.vendorticker}`,
    },
    {
      label: t("minPrice"),
      value: `${data.ieovendors[0].icocoins_mincount} ${
        data.ieovendors[0].vendors_vendorshortcode
      } ≈ ${formatCoinRate(
        (data.ieovendors[0].icocoins_coincost *
          data.ieovendors[0].icocoins_mincount) /
          currentVendor.usdrate
      )} ${currentVendor.vendorticker}`,
    },
  ]);

  const [selectedTab, setSelectedTab] = useState(currentVendor.vendorticker);

  const selectTabHandler = (data: string) => {
    setSelectedTab(data);
  };

  useEffect(() => {
    setCoinDetails([
      { label: t("sDate"), value: data.ieovendors[0].icocoins_startdate },
      { label: t("eDate"), value: data.ieovendors[0].icocoins_enddate },
      {
        label: t("tPrice"),
        value: `1 ${data.ieovendors[0].vendors_vendorshortcode} ≈
              ${formatCoinRate(
                data.ieovendors[0].icocoins_coincost / currentVendor.usdrate
              )}
              ${currentVendor.vendorticker}`,
      },
      {
        label: t("minPrice"),
        value: `${data.ieovendors[0].icocoins_mincount} ${
          data.ieovendors[0].vendors_vendorshortcode
        } ≈ ${formatCoinRate(
          (data.ieovendors[0].icocoins_coincost *
            data.ieovendors[0].icocoins_mincount) /
            currentVendor.usdrate
        )} ${currentVendor.vendorticker}`,
      },
    ]);
  }, [currentVendor, data]);
  return (
    <div className="w-full bg-white dark:bg-[#161735] p-4 rounded-md flex flex-col gap-6">
      {/* tab */}
      {/* tabs */}
      <div className="flex items-center justify-start gap-6 border-b-2 dark:border-white/10 border-[#161735]/10 pt-2   ">
        {data.marketsresults.map((val) => (
          <button
            key={val.vendorid}
            onClick={() => {
              selectTabHandler(val.vendorticker);
              setVendor(val);
            }}
            className={`text-[14px] font-light pb-2 cursor-pointer top-[2px] relative  ${
              selectedTab === val.vendorticker
                ? "text-green-400 border-b-2 "
                : "border-b-2 border-transparent"
            }`}
          >
            <div className="flex gap-1 items-center text-xs font-medium">
              {val.venders_logopath && (
                <Image
                  src={val.venders_logopath}
                  alt="coin"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
              )}
              {val.vendorticker}
            </div>
          </button>
        ))}
      </div>
      {/* current balance */}
      <div className="w-full flex justify-between">
        <div className=" text-xs font-normal dark:text-slate-500 text-slate-600">
          {t("cBal")}
        </div>
        <div className="text-xs">
          {currentVendor.userbalance} {currentVendor.vendorticker}
        </div>
      </div>

      {/* table */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">{t("details")}</h6>
        <div className="w-full border rounded-md p-4  border-slate-500/40">
          {coinDetails.map((val, index) => (
            <div
              className={`w-full ${
                index === 0 ? "mt-1" : "mt-3"
              } flex justify-between  border-slate-500/40 border-b pb-3 `}
              key={index}
            >
              <span className="text-[10px] xl:text-xs opacity-80">
                {val.label}
              </span>
              <span className="text-[11px] xl:text-xs">{val.value}</span>
            </div>
          ))}

          {/* order bar row */}
          <div className={`w-full  mt-3 flex justify-between items-center `}>
            <span className="text-[10px] xl:text-xs opacity-80">
              {t("ord")}
            </span>
            <span className="text-[11px] xl:text-xs"> {t("bar")}</span>
            <span className="text-green-100 bg-green-600 dark:bg-green-500/20 dark:text-green-600 px-2 py-1 border border-green-600 rounded-md hover:bg-green-700 dark:hover:bg-green-500/30 text-xs font-light">
              10000
            </span>
          </div>
        </div>
      </section>

      {/*buy*/}
      <div className="w-full flex justify-between">
        <div className=" text-xs font-normal dark:text-slate-500 text-slate-600">
          {t("buy")}
        </div>
        <div className="text-xs ">
          {buyAmount} {data.ieovendors[0].vendors_vendorshortcode}
        </div>
      </div>
      {/*received*/}
      <div className="w-full flex justify-between">
        <div className=" text-xs font-normal dark:text-slate-500 text-slate-600">
          {t("rec")}
        </div>
        <div className="text-xs ">
          {formatCoinRate(
            (data.ieovendors[0].icocoins_coincost * buyAmount) /
              currentVendor.usdrate
          )}{" "}
          {currentVendor.vendorticker}
        </div>
      </div>
      {/* button */}
      <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-full transition text-xs cursor-pointer">
        {t("button")}
      </button>
    </div>
  );
};

export default LaunchJoinCard;
