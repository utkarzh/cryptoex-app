import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React from "react";

const AuthLevel = () => {
  const t = useTranslations("dashboard.security.authLevel");

  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-lg  mx-auto">
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>
      <div className="flex flex-col gap-5 mt-4 pb-16 ">
        <div>
          <div className="w-full  flex gap-50 justify-start items-center ">
            <p className="hidden sm:block w-fit text-xs font-light relative ">
              {t("terms.idLevel")}
              {/*  */}
              <p className="absolute -bottom-10 left-0 text-nowrap">
                {t("terms.limit")}
              </p>
            </p>
            <div className="w-full px-2 max-w-full sm:max-w-[60%] s flex gap-2 items-center">
              <span className="w-7 h-7 text-xs font-medium flex justify-center items-center rounded-full bg-green-600 relative">
                L1
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-light opacity-60 text-nowrap">
                  100 BTC
                </p>
              </span>
              {/* border */}
              <span className="w-full border border-slate-500/40"></span>

              <span className="w-7 h-7 text-xs font-medium flex justify-center items-center rounded-full bg-slate-500/30 relative">
                L2
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-light opacity-60 text-nowrap">
                  {t("terms.unlimited")}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLevel;
