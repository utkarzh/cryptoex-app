"use client";
import { useGetSingleAnnouncementMutation } from "@/redux/masternode/footer/footerApi";
import { useTranslations } from "next-intl";
import React, { FC, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SingleAnnouncementApiResult_int } from "./types";
import LoadingTableSkeleton from "../common/loading/LoadingTableSkeleton";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  annuId: string;
};
const AnnouncementsDetails: FC<Props> = ({ annuId }) => {
  console.log("AnnumcementId is", annuId);
  const t = useTranslations("announcementsPage");
  const pathName = usePathname();
  const base = pathName.split("/");
  base.pop();
  const finalUrl = base.join("/");

  const [getSingleAnnouncemet, { data }] =
    useGetSingleAnnouncementMutation<SingleAnnouncementApiResult_int>();

  useEffect(() => {
    getSingleAnnouncemet(annuId);
  }, [annuId]);

  return (
    <>
      {data && data.status === 1 ? (
        <div className=" ml-2 h-full w-full dark:bg-[#161735]  bg-white rounded-md px-4 py-6">
          {/* link details */}
          <div className="text-xs fonr-bold pb-4 opacity-50 flex  items-center">
            <Link href={finalUrl}>{t("title")}</Link>{" "}
            <MdOutlineKeyboardArrowRight className="text-lg" />{" "}
            {data && data?.announment[0].announcement_id}
          </div>

          <div className="w-full flex flex-col gap-1  ">
            {data.announment.map((val, index) => (
              <div key={index} className="cursor-pointer">
                <div className="flex ">
                  <p className="text-xs xl:text-[0.9rem]">
                    {val.announcement_title} &nbsp;
                  </p>
                  {/* <p className="text-xs"> {val.token}</p> */}
                </div>
                <div className="mt-1 text-[10px] xl:text-[0.7rem] font-light text-slate-600 dark:text-slate-500">
                  {val.announcement_date}
                </div>

                <p className="mt-4 text-[10px] xl:text-[0.7rem] font-light tracking-wide">
                  {val.announcement_content}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <LoadingTableSkeleton rows={4} columns={1} />
      )}
    </>
  );
};

export default AnnouncementsDetails;
