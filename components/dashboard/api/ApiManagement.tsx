import { saira } from "@/utils/Font";
import React from "react";
import ApiNotes from "./ApiNotes";
import ApiForm from "./ApiForm";
import { useTranslations } from "next-intl";

const ApiManagement = () => {
  const t = useTranslations("dashboard.apiPage.apiManagement");
  return (
    <div className="w-full bg-white dark:bg-[#161735]  rounded-xl p-6 ">
      <div className="space-y-2 mb-8">
        {/* heading */}
        <h2 className={`${saira.className} text-sm font-semibold`}>
          {t("title")}
        </h2>
        <p className="text-[10px] xl:text-[0.6rem] font-light">
          {t("subTitle")}
        </p>
      </div>

      {/* content */}
      <div className="w-full h-full flex flex-col sm:flex-row gap-6">
        {/* form */}
        <ApiForm />
        {/* border */}
        <div className="border border-slate-500/30 "></div>
        {/* note */}
        <ApiNotes />
      </div>
    </div>
  );
};

export default ApiManagement;
