import { useTranslations } from "next-intl";
import React from "react";

const ApiForm = () => {
  const t = useTranslations("dashboard.apiPage.apiManagement.terms");
  return (
    <div className="w-full space-y-6">
      {/* notes */}
      <div>
        <label className="block mb-1 text-xs font-light">{t("notes")}</label>
        <input
          type="text"
          placeholder={t("notesHolder")}
          className="w-full indent-2  rounded-md bg-slate-500/10  border-gray-500/20 focus:outline-none  placeholder:text-xs font-light py-1 pb-2"
        />
      </div>
      {/* Permission settings */}
      <div className="w-full space-y-3">
        <div className="text-xs font-light">
          {t("preSetting.part1")}
          <span className="text-slate-500">{t("preSetting.part2")}</span>
        </div>
        {/* checkbox */}
        <div className="flex justify-between gap-2 flex-wrap">
          {/* account balance */}
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="" />
            <label className="text-[10px] xl:text-[0.65rem] font-light">
              {t("accBalance")}
            </label>
          </div>
          {/* add order */}
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="" />
            <label className="text-[10px] xl:text-[0.65rem] font-light">
              {t("addOrder")}
            </label>
          </div>
          {/* get order */}
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="" />
            <label className="text-[10px] xl:text-[0.65rem] font-light">
              {t("getOrder")}
            </label>
          </div>
          {/* close order */}
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="" />
            <label className="text-[10px] xl:text-[0.65rem] font-light">
              {t("closeOrder")}
            </label>
          </div>
        </div>
      </div>

      {/* bind ip address */}
      <div className="w-full space-y-3">
        <div className="text-xs font-light">
          {t("bindIp.part1")}
          <span className="text-slate-500">{t("bindIp.part2")}</span>
        </div>
        {/* textarea */}
        <div className="">
          <textarea
            rows={3}
            cols={5}
            className="w-full p-1 rounded-md bg-slate-500/10 border border-gray-500/20"
          ></textarea>
          <p className="text-slate-500 text-xs">{t("expDate")}</p>
        </div>
      </div>

      {/* create button */}
      <div className="w-full flex justify-end">
        <button
          className="w-fit border text-xs border-transparent bg-green-600 dark:text-black text-white
                     py-1 px-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
        >
          {t("button")}
        </button>
      </div>
    </div>
  );
};

export default ApiForm;
