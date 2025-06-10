"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FC, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const AntiPhiSetupPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.antiPhishing.popUp1"
  );
  const [error, setError] = useState("");

  const [antiPhiCode, setAntiPhiCode] = useState({
    antiPhiCode: "",
    isVisible: false,
  });

  const addAnitPhiHandler = () => {
    if (antiPhiCode.antiPhiCode === "123456") {
      onSuccess("error");
      return;
    }
    setError(t("error"));
    setTimeout(() => setError(""), 2000);
  };
  return (
    <div className="mt-30 bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-5">
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

      {/* warning message */}
      <div className="flex gap-2 text-[10px] font-extralight bg-red-700 text-red-50 dark:bg-red-400/15  dark:text-red-500 px-4 py-2 rounded-md justify-center items-center">
        <FiAlertTriangle className="text-5xl dark:text-[#c97b26] text-[#bc8d5b]" />
        <p>{t("alert")}</p>
      </div>
      {/* inputs */}
      <div className="w-full space-y-3 border-b-2 pb-4 border-slate-500/30">
        {/* anit-phishing code input */}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            {t("antiPhiCode")}
          </label>
          <div className=" relative">
            <input
              type={antiPhiCode.isVisible ? "text" : "password"}
              value={antiPhiCode.antiPhiCode}
              placeholder={t("enterCode")}
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px] pr-6"
              onChange={(e) =>
                setAntiPhiCode((prev) => {
                  return { ...prev, antiPhiCode: e.target.value };
                })
              }
            />
            <span
              className="absolute bottom-1/2 translate-y-1/2 right-1.5 cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() =>
                setAntiPhiCode((prev) => {
                  return { ...prev, isVisible: !prev.isVisible };
                })
              }
            >
              {antiPhiCode.isVisible ? (
                <IoMdEye className="" />
              ) : (
                <IoMdEyeOff className="" />
              )}
            </span>
          </div>
        </div>

        <p className="text-[10px] font-light opacity-90 dark:opacity-70">
          {t("message")}
        </p>
      </div>
      {error && <p className="text-[10px] font-light text-red-700">{error}</p>}

      {/* what is anti-phishing code */}
      <div className="space-y-3 mb-10">
        <div className="space-y-1">
          <h4 className="text-[11px] font-light">{t("whatIsIt")}</h4>
          <p className="text-[10px] font-light opacity-90 dark:opacity-70">
            {t("whatIsItContent")}
          </p>
        </div>

        <Image
          src="/images/antiPhishingIndoExImage.png"
          height={500}
          width={500}
          alt="anut phishing"
          className="w-[100%] h-auto"
        />
      </div>

      {/* Action buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-2 justify-between mt-2 text-xs">
        <button
          className="w-full border border-slate-500/30 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          {t("buttons.cancel")}
        </button>
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
                     py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={addAnitPhiHandler}
        >
          {t("buttons.confirm")}
        </button>
      </div>
    </div>
  );
};

export default AntiPhiSetupPopup;
