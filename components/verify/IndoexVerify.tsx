import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const IndoexVerify = () => {
  const t = useTranslations("indoexVerify");

  return (
    <div className="flex flex-col gap-6 bg-white min-w-80 max-w-[500px] dark:bg-[#161735] rounded-xl p-6   relative shadow-xl">
      {/* heading */}
      <div className="w-full space-y-1">
        <h2 className={`${saira.className} text-xl`}>{t("title")}</h2>
        <p className="text-[10px] ">{t("content")}</p>
      </div>

      {/* input & search */}
      <div className="space-y-4">
        {/* input */}
        <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
          {/* label */}
          <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
            {t("terms.platform")}
          </label>
          <input
            type="text"
            className="outline-none border-none w-full bg-transparent text-[12px]"
            placeholder={t("terms.enterUrl")}
          />

          {/* selection */}
          <div className=" ml-2 mr-4  dark:bg-slate-200/15 bg-slate-200 rounded-full px-2 py-[2px] flex gap-2 items-center relative">
            <div className="flex gap-1 p-1 text-nowrap  items-center text-xs font-light">
              {t("terms.web")}
            </div>

            <IoIosArrowDown className=" text-sm cursor-pointer" />
          </div>
        </div>

        {/* button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white dark:text-black font-medium py-3 rounded-full transition text-xs cursor-pointer">
          {t("terms.button")}
        </button>
      </div>

      {/* message and notice */}
      <div className="w-full space-y-2">
        {/* message */}
        <p className="text-[10px] ">{t("terms.message")}</p>
        {/* notice */}
        <div className="w-full rounded-md dark:bg-[#24243c] bg-slate-100 border border-slate-300 dark:border-slate-700 p-2 px-4 space-y-1">
          <p className="text-[10px] font-medium">{t("terms.notice")}: </p>
          <p className="text-[9px] ">
            {t("terms.noticeMessage.part1")}
            <span className="text-green-600 cursor-pointer">
              {" "}
              {t("terms.noticeMessage.part2")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndoexVerify;
