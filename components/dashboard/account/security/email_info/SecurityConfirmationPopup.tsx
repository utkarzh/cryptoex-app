"use client";
import { saira } from "@/utils/Font";
import React, { FC, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { PopupData } from "./EmailInfo";
import { useTranslations } from "next-intl";

type Props = {
  onClose: () => void;
  onSuccess: (data: PopupData) => void;
};

const SecurityConfirmationPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.emailInfo.popUp2"
  );
  const [emailCode, setEmailCode] = useState<string>("");
  const [twoFaCode, setTwoFaCode] = useState<string>("");
  const [error, setError] = useState("");

  const verificationHandler = (data: PopupData) => {
    if (emailCode === "123456" && twoFaCode === "123456") {
      onSuccess(data);
    }
    setError("Error occured");
    setTimeout(() => setError(""), 2000);
  };
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-5">
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
      {/* inputs */}
      <div className="w-full space-y-3">
        {/* verification code */}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            {t("codeSentAt")} kdk****fx@gmail.com
          </label>
          <div className="flex gap-1">
            <input
              type="text"
              value={emailCode}
              placeholder={t("enterCode")}
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px]"
              onChange={(e) => setEmailCode(e.target.value)}
            />
            <button className="text-[10px] text-wrap sm:text-nowrap text-green-100 bg-green-600 dark:bg-green-500/20 dark:text-green-600 px-4 py-1 rounded-md hover:bg-green-700 dark:hover:bg-green-500/20 cursor-pointer border border-green-600 transition-all duration-300">
              {t("buttons.sendCode")}
            </button>
          </div>
        </div>

        {/*google 2fa*/}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            {t("2faCode")}
          </label>
          <input
            type="text"
            value={twoFaCode}
            placeholder={t("enter2fa")}
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none  placeholder:text-[10px]"
            onChange={(e) => setTwoFaCode(e.target.value)}
          />
        </div>
      </div>
      {error && <p className="text-[10px] font-light text-red-700">{error}</p>}

      {/* Action buttons */}
      <div className="w-full flex flex-col gap-2 justify-between mt-2 text-xs">
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
                     py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={() => verificationHandler("confirm")}
        >
          {t("buttons.nextStep")}
        </button>
        <a
          href="#"
          className="text-xs font-light text-green-600 cursor-pointer"
        >
          {t("havingProb")}
        </a>
      </div>
    </div>
  );
};

export default SecurityConfirmationPopup;
