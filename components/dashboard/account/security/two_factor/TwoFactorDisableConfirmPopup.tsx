import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { FC } from "react";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: () => void;
};
const TwoFactorDisablePopupConfirm: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.twofactor.removePopUp2"
  );
  return (
    <div className="bg-white flex flex-col gap-6 dark:bg-[#161735] max-w-[400px] xl:max-w-[450px]  rounded-xl p-6 relative">
      {/* heading and close button*/}
      <div className="w-full flex justify-between items-center">
        <h2 className={`${saira.className} text-sm font-semibold `}>
          {t("title")}
        </h2>
        <button onClick={onClose}>
          <IoCloseSharp className="text-2xl cursor-pointer hover:scale-110 trasition-all duration-300" />
        </button>
      </div>

      {/* message */}
      <div className="flex flex-col gap-1 p-2 border border-slate-500/30 rounded-md">
        <h4 className="text-xs">{t("notice")}:</h4>
        <p className="text-[10px] xl:text-[0.6rem] font-light">
          {t("noticeMess")}
        </p>
      </div>

      {/* Action buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-between mt-2 text-xs">
        <button
          className="w-full border border-slate-500/30 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          {t("buttons.cancel")}
        </button>
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
         py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onSuccess}
        >
          {t("buttons.remove")}
        </button>
      </div>
    </div>
  );
};

export default TwoFactorDisablePopupConfirm;
