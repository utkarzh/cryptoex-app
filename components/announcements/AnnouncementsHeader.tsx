import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React from "react";
import { IoSearch } from "react-icons/io5";

const AnnouncementsHeader = () => {
  const t = useTranslations("announcementsPage");
  return (
    <div className="flex justify-between flex-wrap items-center mb-4">
      <h2 className={` ${saira.className} text-lg font-semibold`}>
        {t("title")}
      </h2>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder={t("terms.search")}
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          className="dark:bg-[#1a1c36] bg-slate-600/15 text-[12px] px-8 py-2 rounded-md focus:outline-none"
        />
        <IoSearch className="absolute top-2 left-2 opacity-60 " />
      </div>
    </div>
  );
};

export default AnnouncementsHeader;
