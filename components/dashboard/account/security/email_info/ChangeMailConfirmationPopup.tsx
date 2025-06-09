import { saira } from "@/utils/Font";
import React, { FC } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { PopupData } from "./EmailInfo";
import { useTranslations } from "next-intl";

type Props = {
  onSuccess: (data: PopupData) => void;
  onClose: () => void;
};

const ChangeMailConfirmationPopup: FC<Props> = ({ onSuccess, onClose }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.emailInfo.popUp1"
  );
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-4">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* heading and close button*/}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>
      {/* message */}
      <div className="p-2 rounded-md border border-slate-500/30 space-y-1">
        <h4 className="text-xs">{t("message.title")}</h4>
        <p className="text-[9px] font-light">{t("message.content")}</p>
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
          onClick={() => onSuccess("next_step")}
        >
          {t("buttons.changeEmail")}
        </button>
      </div>
    </div>
  );
};

export default ChangeMailConfirmationPopup;
