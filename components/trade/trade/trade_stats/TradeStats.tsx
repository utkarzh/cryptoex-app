import { useTranslations } from "next-intl";
import React, { FC } from "react";
import Marquee from "react-fast-marquee";
import { GiNetworkBars } from "react-icons/gi";
import { AvailablePairs_int } from "../types";
import LoadingTableSkeleton from "@/components/common/loading/LoadingTableSkeleton";
import { formatDecimalNumber } from "@/utils/formatDecimalNumber";
import Link from "next/link";

type Props = {
  isSpot: boolean;
  data: AvailablePairs_int;
};

const TradeStats: FC<Props> = ({ isSpot, data }) => {
  const t = useTranslations("tradePage");
  return (
    <div className="w-full flex gap-4 items-center">
      {/*connectoin state*/}
      <div className="w-fit flex gap-1 items-center text-green-600 text-xs">
        <GiNetworkBars className=" tracking-widest" />
        <div className="font-medium  text-wrap sm:text-nowrap text-green-600">
          {t("connection")}
        </div>
      </div>
      {/* stats */}
      {data && data.status === 1 ? (
        <div className="w-full max-w-full overflow-hidden ">
          <Marquee speed={30} pauseOnHover={true}>
            <div className="flex items-center animate-marquee space-x-6 px-4">
              {data.availablepairs.map((item, idx) => (
                <Link
                  href={isSpot ? `/spot/${item.pair}` : `/margin/${item.pair}`}
                  key={idx}
                  className="flex items-center space-x-2 text-xs font-normal"
                >
                  <span className="">{item.pair}</span>
                  <span
                    className={` ${
                      item.rate > 0
                        ? "text-green-700 dark:text-green-600"
                        : item.rate < 0
                        ? "text-red-600 dark:text-[#da504e]"
                        : ""
                    }`}
                  >
                    {item.rate > 0 && "+"}
                    {item.rate.toFixed(2)}
                  </span>
                  <span className="opacity-60">
                    {formatDecimalNumber(item["24hrhigh"])}
                  </span>
                  <span className="opacity-50">|</span>
                </Link>
              ))}
            </div>
          </Marquee>
        </div>
      ) : (
        <LoadingTableSkeleton rows={0} columns={10} />
      )}
    </div>
  );
};

export default TradeStats;
