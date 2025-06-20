import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Announcements = () => {
  const t = useTranslations("announcementsPage");
  const listedTokens = [
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
    {
      title: t("terms.annu"),
      token: "the real goal (land)",
      timestamp: "2025-04-30 06:17:44 UTC",
    },
  ];
  return (
    <div className=" ml-2 h-full w-full dark:bg-[#161735]  bg-white rounded-md">
      <div className="w-full flex flex-col gap-2 px-4 py-6 ">
        {listedTokens.map((val, index) => (
          <Link
            href="/announcements/details"
            key={index}
            className="cursor-pointer"
          >
            <div className="flex ">
              <p className="text-xs ">{val.title}: &nbsp;</p>
              <p className="text-xs"> {val.token}</p>
            </div>
            <div className="text-[10px] xl:text-[0.7rem] font-light text-slate-600 dark:text-slate-500">
              {val.timestamp}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
