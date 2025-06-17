import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { IeoVendorLaunchpad_int } from "../types";
import { getStatus } from "@/utils/getStatus";

type Props = {
  data: IeoVendorLaunchpad_int[];
};

const StatusCardLaunchpad: FC<Props> = ({ data }) => {
  const t = useTranslations("airDrop.terms");

  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6  ">
          {data.map((item, idx) => {
            const cardStatus = getStatus(
              item.icocoins_startdays,
              item.icocoins_enddays
            );
            return (
              <Link
                key={idx}
                href={`/launchpad/${item.vendors_vendorshortcode}`}
                className={`relative w-full sm:w-64 p-4 rounded-xl rounded-tr-3xl mt-10 bg-white dark:bg-[#161735]   ${
                  cardStatus === "upcoming"
                    ? "shadow-[1px_1px_2px_#f0b101]"
                    : cardStatus === "ongoing"
                    ? "shadow-[1px_1px_2px_#00c951]"
                    : "shadow-[1px_1px_2px_#6a7181]"
                }`}
              >
                {/* status */}
                <div
                  className={`absolute top-0 right-0 rounded-bl-3xl capitalize rounded-tr-[22px] px-6 py-1 text-sm text-white ${
                    cardStatus === "upcoming"
                      ? "bg-yellow-500"
                      : cardStatus === "ongoing"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                >
                  {t(`${cardStatus}`)}
                </div>

                <div className="flex items-center gap-2 mb-2 mt-6">
                  <Image
                    src={
                      item.icocoins_logopath
                        ? item.icocoins_logopath
                        : item.icocoins_bannerimage
                    }
                    alt={item.vendors_vendorshortcode}
                    width={200}
                    height={200}
                    className={`w-8 h-8 border-2 ${
                      cardStatus === "upcoming"
                        ? "border-yellow-500"
                        : cardStatus === "ongoing"
                        ? "border-green-500"
                        : "border-gray-500"
                    } rounded-full`}
                  />
                  <h3 className="text-[14px] xl:text-[0.9rem]">
                    {item.vendors_vendorname}
                  </h3>
                </div>

                <p
                  className="text-[12px] xl:text-xs font-extralight mb-4 sm:line-clamp-2"
                  title={item.icocoins_description}
                >
                  {item.icocoins_description}
                </p>

                <div className="text-xs font-light my-10 flex justify-between">
                  <span className="">{t("airSupply")}:</span>
                  <span className="ml-2 font-medium">
                    {item.icocoins_numberofcoins}
                  </span>
                </div>

                <hr className="my-2 border-gray-600" />

                <div className="text-xs font-light flex flex-col gap-3 mt-8 mb-2">
                  <p className="text-xs font-light  flex justify-between">
                    <span>{t("start")}:</span>
                    <span>{item.icocoins_startdate} (UTC)</span>
                  </p>
                  <p className="text-xs font-light  flex justify-between">
                    <span>{t("end")}:</span>
                    <span>{item.icocoins_enddate} (UTC)</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </>
  );
};

export default StatusCardLaunchpad;
