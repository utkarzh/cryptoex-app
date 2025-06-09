"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

const Security = () => {
  const t = useTranslations("dashboard.overviewPage.security");

  return (
    <div className="bg-white dark:bg-[#161735] rounded-xl p-6 w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className={`${saira.className} text-sm font-semibold `}>
            {t("label")}
          </h2>
          <p className="text-xs font-extralight opacity-70">{t("content")}</p>
          <Link
            href="#"
            className="text-green-500 text-xs mt-2 hover:underline flex gap-0.5 items-center"
          >
            {t("terms.goToSPage")} <RxArrowTopRight />
          </Link>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span>{t("terms.strength")}</span>
          <div className="flex gap-1">
            <span className="w-4 h-1 rounded-sm bg-orange-500"></span>
            <span className="w-4 h-1 rounded-sm bg-orange-400"></span>
            <span className="w-4 h-1 rounded-sm bg-orange-200"></span>
            <span className="w-4 h-1 rounded-sm bg-gray-500"></span>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {["passkey", "2fa", "antiPhi"].map((item) => (
          <div key={item} className="flex justify-between items-center pb-2">
            <p className="text-xs">{t(`terms.${item}`)}</p>
            <span className="flex items-center gap-1 text-green-50 bg-green-600 dark:text-green-400 dark:bg-green-700/30 px-3 py-1 rounded-full text-[10px]">
              &#10003; {t("terms.button")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Security;
