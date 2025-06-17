"use client";
import Image from "next/image";
import Countdown from "./CountDown";
import { LuDownload } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { IeoLunchpadVendorDetails_int, MarketResult_int } from "../../types";
import { FC } from "react";
import { formatCoinRate } from "@/utils/formateCoinRate";
import { formatDateToISO } from "@/utils/formateDateToISO";
import { getStatus } from "@/utils/getStatus";

type Props = {
  contestInfo: IeoLunchpadVendorDetails_int;
  currentVendor: MarketResult_int;
};

const LaunchpadContestInfo: FC<Props> = ({ contestInfo, currentVendor }) => {
  console.log("Current vendor data at contestpage :--", currentVendor);
  const t = useTranslations("launchPad.contest.terms");
  const coinDetails = [
    { label: t("fName"), value: `${contestInfo.vendors_vendorname}` },
    { label: t("web"), value: `${contestInfo.vendors_website}` },
    { label: t("tName"), value: `${contestInfo.vendors_vendorshortcode}` },
    {
      label: t("sSupply"),
      value: `${contestInfo.icocoins_numberofcoins} ${contestInfo.vendors_vendorshortcode}`,
    },
    {
      label: t("tSupply"),
      value: `${contestInfo.vendors_maxsupply} ${contestInfo.vendors_vendorshortcode}`,
    },
    {
      label: t("ieoPrice"),
      value: `${contestInfo.icocoins_mincount} ${
        contestInfo.vendors_vendorshortcode
      } ≈ ${formatCoinRate(
        (contestInfo.icocoins_coincost * contestInfo.icocoins_mincount) /
          currentVendor.usdrate
      )} ${currentVendor.vendorticker}`,
    }, //change it
    { label: t("ieoSDate"), value: `${contestInfo.icocoins_startdate}` },
    { label: t("ieoEDate"), value: `${contestInfo.icocoins_enddate}` },
    { label: t("bonus"), value: `+${contestInfo.icocoins_bonus}%` },
    { label: t("tecFou"), value: `${contestInfo.icocoins_technology}` },
  ];

  const contestStatus = getStatus(
    contestInfo.icocoins_startdays,
    contestInfo.icocoins_enddays
  );
  console.log("status is", contestStatus);
  return (
    <div className="w-full mx-auto p-6 pt-0 font-sans space-y-8">
      {/* heading */}
      <div className="flex gap-2 items-center">
        <Image
          src={contestInfo.vendors_logopath}
          alt=""
          width={100}
          height={100}
          className="w-16 h-auto rounded-full"
        />
        <h1 className="text-2xl font-bold text-center ">
          {contestInfo.vendors_vendorname} (
          {contestInfo.vendors_vendorshortcode})
        </h1>
      </div>

      {/* countdown */}
      <section className="space-y-4 pt-2">
        {(contestStatus === "ongoing" || contestStatus === "upcoming") && (
          <>
            <h6 className="text-xs font-normal ">
              {contestStatus === "upcoming" ? t("startsIn") : t("endsIn")}
            </h6>
            <Countdown
              startDate={
                contestStatus == "ongoing"
                  ? formatDateToISO("19-06-2025")
                  : contestStatus == "upcoming"
                  ? formatDateToISO("20-06-2025")
                  : ""
              }
            />
          </>
        )}

        {contestStatus === "completed" && (
          <div className="w-full bg-white dark:bg-[#161735] p-4 rounded-xl px-6 flex gap-4 justify-center items-center">
            {t("completed")}
          </div>
        )}
      </section>

      {/* about agt */}
      <section className="space-y-2 pt-2">
        <h6 className="text-xs font-normal ">{t("sPrice")}</h6>
        <p className="text-2xl text-green-600 font-semibold">
          1 {contestInfo.vendors_vendorshortcode} ≈{" "}
          {formatCoinRate(
            contestInfo.icocoins_coincost / currentVendor.usdrate
          )}{" "}
          {currentVendor.vendorticker}
        </p>
        <h3 className="text-sm font-bold ">{t("about")} AGT</h3>
        <div className="w-full">
          <p className="text-[10px] xl:text-xs font-normal opacity-80">
            {contestInfo.icocoins_description}
          </p>
        </div>
      </section>

      {/* details */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">{t("details")}</h6>
        <div className="w-full border rounded-md p-4  border-slate-500">
          {coinDetails.map((val, index) => (
            <div
              className={`w-full ${index === 0 ? "mt-1" : "mt-3"}  ${
                index === coinDetails.length - 1 ? "pb-1" : "border-b pb-3"
              } flex justify-between  border-slate-500  `}
              key={index}
            >
              <span className="text-xs font-light opacity-80">{val.label}</span>
              <span className="text-xs">{val.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* documents */}
      {contestInfo.icocoins_whitepaper && (
        <section className="space-y-4 pt-2">
          <h6 className="text-xs font-normal ">{t("docu")}</h6>

          {/* button */}
          <a
            href={contestInfo.icocoins_whitepaper}
            target="_blank"
            className="w-fit bg-green-500 hover:bg-green-600 text-black font-medium py-1.5 px-3 rounded-full transition text-xs cursor-pointer flex gap-1 items-center"
          >
            {t("wPaper")} <LuDownload className="text-sm" />
          </a>
        </section>
      )}
    </div>
  );
};

export default LaunchpadContestInfo;
