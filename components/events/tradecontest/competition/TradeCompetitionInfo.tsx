import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  TradeContestDetails_int,
  TradeContestUsers_int,
  TradeContestVendors_int,
} from "../../types";
import { FC, useEffect, useState } from "react";

type Props = {
  tradeContestData: TradeContestDetails_int;
};

const TradeCompetitionInfo: FC<Props> = ({ tradeContestData }) => {
  const t = useTranslations("tradeContest.contest.terms");
  const [vendorsDetails, setVendorsDetails] =
    useState<TradeContestVendors_int>();
  const [contestUsers, setContestUsers] = useState<TradeContestUsers_int[]>([]);

  useEffect(() => {
    setVendorsDetails(tradeContestData.tradecontestvendors[0]);
    setContestUsers(tradeContestData.tradecontestusers);
  }, [tradeContestData]);

  if (!vendorsDetails) return;
  return (
    <div className="w-full flex flex-col gap-6 p-6 pt-0">
      {/* top section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-green-500">
            {vendorsDetails?.vendors_vendorname}(
            {vendorsDetails?.vendors_vendorshortcode}) {t("tradingCom")}
          </h2>
          <p className="text-[10px] xl:text-xs font-light pt-1">
            {t("moreTrade")} {vendorsDetails?.vendors_vendorshortcode},{" "}
            {t("moreWin")}.
          </p>
        </div>

        {/* img */}
        <Image
          src={vendorsDetails.tradecontestcoins_detailbannerimage}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-auto rounded"
        />

        <ul className="flex flex-col ml-4 gap-1 pt-2">
          <li className="text-xs font-normal opacity-80 list-disc">
            {t("rules.r1.part1")} {vendorsDetails.tradecontestcoins_startdate}{" "}
            UTC {t("rules.r1.part2")} {vendorsDetails.tradecontestcoins_enddate}{" "}
            UTC
          </li>
          <li className="text-xs font-normal opacity-80 list-disc">
            {t("rules.r2.part1")} {vendorsDetails.tradecontestcoins_enddate}{" "}
            UTC. {t("rules.r2.part2")}
          </li>

          <li className="text-xs font-normal opacity-80 list-disc">
            {t("rules.r3.part1")} {vendorsDetails.vendors_vendorshortcode}{" "}
            {t("rules.r3.part2")}
          </li>

          <li className="text-xs font-normal opacity-80 list-disc">
            {t("rules.r4")}
          </li>
          <li className="text-xs font-normal opacity-80 list-disc">
            {t("rules.r5")}
          </li>
          <li className="text-xs font-normal opacity-80 list-disc">
            {t("rules.r6")}
          </li>
          <li className="text-xs font-normal opacity-80 list-disc">
            {t("rules.r7")}
          </li>
          <li className="text-xs font-normal opacity-80 list-disc">
            {t("rules.r8")}
          </li>
        </ul>
      </section>

      {/* details */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">{t("details")}</h6>
        <div className="w-fit  text-xs border rounded-md p-4 px-10  border-slate-500">
          <div
            className="flex flex-col justify-between gap-4"
            dangerouslySetInnerHTML={{
              __html: vendorsDetails.tradecontestcoins_winnerrewards,
            }}
          />
        </div>
      </section>

      {/* Participation Overview */}
      {contestUsers.length > 0 && (
        <section className="space-y-4 pt-2">
          <h6 className="text-xs font-normal ">{t("pOverview")}</h6>
          <div className="w-full  rounded-md p-4 bg-white dark:bg-[#161735]">
            {/* header */}
            <div
              className={`w-full mt-1 pb-3 flex justify-between text-center  `}
            >
              <span className="w-full text-xs opacity-70 text-left">
                {t("position")}
              </span>
              <span className="w-full text-xs opacity-70 ">{t("user")}</span>
              <span className="w-full text-xs text-right ">{t("vol")}</span>
            </div>
            {contestUsers.map((val, index) => (
              <div
                className={`w-full mt-3  ${
                  index === contestUsers.length - 1 ? "pb-1" : "border-b pb-3"
                } flex justify-between  border-slate-500 text-center `}
                key={index}
              >
                <span className="w-full text-left text-xs opacity-70">
                  {index + 1}
                </span>
                <span className="w-full text-xs text-light opacity-70">
                  {val.tradecontestusers_username}
                </span>
                <span className="w-full text-xs text-right">
                  {val.tradecontestusers_amount}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TradeCompetitionInfo;
