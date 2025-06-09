"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, useState } from "react";
import { FiAlertTriangle, FiCopy } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: () => void;
};
const TwoFactorSetupPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.twofactor.addPopUp2"
  );
  const [copySuccess, setCopySuccess] = useState(false);
  const key = "ZHQAWF5MMVWV2MYUI";
  const [enteredCode, setEnteredCode] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText(key).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const google2FAVerificationhandler = () => {
    if (enteredCode === "123456") {
      onSuccess();
    }
  };

  return (
    <div className=" mt-30 pb-10 bg-white flex flex-col gap-4 dark:bg-[#161735] max-w-[450px]  rounded-xl p-6 relative">
      {/* heading and close button*/}
      <div className="w-full flex justify-between items-center">
        <h2 className={`${saira.className} text-sm font-semibold `}>
          {t("title")}
        </h2>
        <button onClick={onClose}>
          <IoCloseSharp className="text-2xl cursor-pointer hover:scale-110 trasition-all duration-300" />
        </button>
      </div>

      {/* Steps */}
      <div className="flex  gap-2 items-center sm:items-start sm:gap-1 flex-col sm:flex-row border  border-slate-500/30 py-4 px-2 rounded-xl">
        {/* first */}
        <div className="w-full flex flex-col  items-center text-center max-w-[300px]">
          <div className="w-7 h-7 text-xs rounded-full dark:bg-green-700/20 dark:text-green-600 bg-green-600 text-green-50 border border-green-600 flex items-center justify-center font-bold">
            1
          </div>
          <p className="text-xs font-light mt-2">{t("downloadMsgTitle")}</p>
          <p className="text-[9px] font-extralight opacity-80 dark:opacity-60">
            {t("downloadMsgContent")}
          </p>
        </div>
        {/* border */}
        <div className="w-full hidden sm:flex h-full relative top-3 border border-dashed border-green-600/70"></div>
        {/* second */}
        <div className="w-full flex flex-col  items-center text-center  max-w-[300px]">
          <div className="w-7 h-7 text-xs rounded-full dark:bg-green-700/20 dark:text-green-600 bg-green-600 text-green-50 border border-green-600 flex items-center justify-center font-bold">
            2
          </div>
          <p className="text-xs font-light mt-2">{t("addKeyTitle")}</p>
          <p className="text-[9px] font-extralight opacity-80 dark:opacity-60">
            {t("addKeyContent")}
          </p>
        </div>
      </div>

      {/* Alert */}
      <div className="flex gap-2 text-[10px] font-extralight bg-red-700 text-red-50 dark:bg-red-400/15  dark:text-red-500 px-4 py-2 rounded-md justify-center items-center">
        <FiAlertTriangle className="text-5xl dark:text-[#c97b26] text-[#bc8d5b]" />
        <p>{t("alertMsg")}</p>
      </div>

      {/* Input */}
      <div>
        <label className="block mb-2 text-xs font-light">{t("2faCode")}</label>
        <input
          type="text"
          value={enteredCode}
          placeholder={t("enter2faCode")}
          className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 mb-4 focus:outline-none  placeholder:text-xs"
          onChange={(e) => setEnteredCode(e.target.value)}
        />
      </div>

      {/* QR Code + Key */}
      <div className="w-full  flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        <div className="p-1.5 border rounded-md bg-white min-w-[90px]">
          <Image
            src="/images/testqr.png"
            alt="QR Code"
            className="w-20 h-20 invert"
            width={80}
            height={80}
          />
        </div>
        <div className="w-full">
          <div className="text-[11px] font-light opacity-80 mb-1">
            {t("copyKey")}
          </div>
          <div className="w-full flex flex-wrap items-center gap-2  rounded">
            <span className="font-light flex text-wrap w-fit">{key}</span>
            <button
              onClick={handleCopy}
              className="text-green-400 hover:text-green-300 cursor-pointer"
            >
              <FiCopy />
            </button>
          </div>
          {copySuccess && (
            <span className="text-green-400 text-xs font-light mt-1 block">
              {t("copied")}
            </span>
          )}
        </div>
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
          onClick={google2FAVerificationhandler}
        >
          {t("buttons.confirm")}
        </button>
      </div>
    </div>
  );
};

export default TwoFactorSetupPopup;
