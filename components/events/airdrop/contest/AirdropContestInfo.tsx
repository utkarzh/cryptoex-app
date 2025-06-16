import { useTranslations } from "next-intl";
import Image from "next/image";
import { IeoVendorDetails_int } from "../../types";
import { FC } from "react";
import { getStatus } from "@/utils/getStatus";

type Props = {
  contestInfo: IeoVendorDetails_int;
};

const AirdropContestInfo: FC<Props> = ({ contestInfo }) => {
  console.log("contest info", contestInfo);
  const t = useTranslations("airDrop.contest.terms");
  const status = getStatus(
    contestInfo.airdropcoins_startdays,
    contestInfo.airdropcoins_enddays
  );

  return (
    <div className=" flex flex-col gap-6 p-6 pt-0">
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
          {contestInfo.vendors_vendorname}({contestInfo.vendors_vendorshortcode}
          )
        </h1>
      </div>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-500">
          {contestInfo.vendors_vendorname}({contestInfo.vendors_vendorshortcode}
          ) {t(`${status ? status : "completed"}`)}
        </h2>

        <h4 className="text-lg">
          {t("about")} {contestInfo.vendors_vendorname}
        </h4>
        <p className="text-[10px] xl:text-xs font-normal opacity-80">
          {contestInfo.airdropcoins_description}
        </p>
      </section>

      {/* how to join */}
      <section className="space-y-4 pt-2">
        <h3 className="text-xs font-normal ">
          {t("howToJoin")} {contestInfo.vendors_vendorname} Airdrop?
        </h3>

        <div className="w-full border rounded-md p-4  border-slate-500">
          <div className="w-full flex justify-between border-b border-slate-500 pb-3 mt-1">
            <span className="text-xs opacity-80">{t("tokenPerAir")}</span>
            <span className="text-xs">
              {t("upTo")} {contestInfo.airdropcoins_numberofcoins}{" "}
              {contestInfo.vendors_vendorshortcode}
            </span>
          </div>

          <div className="w-full flex justify-between border-b border-slate-500 pb-3 mt-3">
            <span className="text-xs opacity-80">{t("referral")}</span>
            <span className="text-xs">
              {contestInfo.airdropcoins_coinsperuser}{" "}
              {contestInfo.vendors_vendorshortcode}
            </span>
          </div>

          <div className="w-full flex justify-between  pb-0 mt-3">
            <span className="text-xs opacity-80">{t("kyc")}</span>
            <span className="text-xs">{t("kycNoReq")}</span>
          </div>
        </div>
      </section>

      {/* guide */}
      <section className="space-y-4 pt-2">
        <h3 className="text-xs font-normal ">
          {t("guide")} {contestInfo.vendors_vendorname} Airdrop
        </h3>

        <div className="w-full">
          <p className="text-[10px] xl:text-xs font-normal opacity-80">
            {contestInfo.airdropcoins_projectdetaildescription}
          </p>
          <br />
          <p className="text-[10px] xl:text-xs font-normal opacity-80">
            {t("doNotForgot")}
          </p>
        </div>
      </section>

      {/* overview */}
      <section className="space-y-4 pt-2">
        <h3 className="text-xs font-normal ">{t("overview")}</h3>

        <div className="w-full space-y-1">
          <p className="text-[10px] xl:text-xs font-normal opacity-80">
            <span>{t("web")}: </span>
            <a
              href={contestInfo.vendors_website}
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              {contestInfo.vendors_website}
            </a>
          </p>
          <p className="text-[10px] xl:text-xs font-normal opacity-80">
            <span>{t("exp")}: </span>
            <a
              href={contestInfo.vendors_blockexplorersource}
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              {contestInfo.vendors_blockexplorersource}
            </a>
          </p>
          <p className="text-[10px] xl:text-xs font-normal opacity-80">
            <span>{t("git")}: </span>
            <a
              href={contestInfo.vendors_githubsource}
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              {contestInfo.vendors_githubsource}
            </a>
          </p>
          <p className="text-[10px] xl:text-xs font-normal opacity-80">
            <span>{t("wPaper")}: </span>
            <a
              href={contestInfo.airdropcoins_whitepaper}
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              {contestInfo.airdropcoins_whitepaper}
            </a>
          </p>
          <p className="text-[10px] xl:text-xs font-normal opacity-80">
            <span>{t("ann")}: </span>
            <a
              href={contestInfo.airdropcoins_announcements}
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              {contestInfo.airdropcoins_announcements}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AirdropContestInfo;
