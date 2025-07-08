"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FC, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "sonner";
import {
  useSendPhishingCodeMutation,
  useValidatePhishingCodeMutation,
} from "@/redux/masternode/dashboard/security/securityApi";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const AntiPhiSetupPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.antiPhishing.popUp1"
  );

  const [step, setStep] = useState<"input" | "verify">("input");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const [antiPhiCode, setAntiPhiCode] = useState({
    value: "",
    isVisible: false,
  });

  const [verificationCode, setVerificationCode] = useState("");

  const [sendPhishingCode, { isLoading: isSending }] =
    useSendPhishingCodeMutation();
  const [validatePhishingCode, { isLoading: isVerifying }] =
    useValidatePhishingCodeMutation();

  const handleSendEmail = async () => {
    if (!antiPhiCode.value.trim()) {
      setError("error");
      setTimeout(() => setError(""), 2000);
      return;
    }

    try {
      const res = await sendPhishingCode({
        userphishingcode: antiPhiCode.value.trim(),
      }).unwrap();

      if (res.status === 1) {
        setEmailSent(true);
        setStep("verify");
        toast.success("Verification email sent");
      } else {
        toast.error(res.message || "Failed to send verification email");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleConfirm = async () => {
    if (!verificationCode.trim()) return;

    try {
      const res = await validatePhishingCode({
        userphishingcode: antiPhiCode.value.trim(),
        userverificationcode: verificationCode.trim(),
      }).unwrap();

      if (res.status === 1) {
        toast.success("Anti-phishing code verified");
        onSuccess("verified");
      } else {
        toast.error(res.message || "Verification failed");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mt-30 pb-10 mb-4 bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] xl:max-w-[650px] mx-auto shadow-lg relative space-y-5">
      {/* Close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* Title */}
      <h2 className={`${saira.className} text-sm font-semibold`}>
        {t("title")}
      </h2>

      {/* Alert */}
      <div className="flex gap-2 text-[10px] xl:text-[0.65rem] font-light bg-red-700 text-red-50 dark:bg-red-400/15 dark:text-red-500 px-4 py-2 rounded-md justify-center items-center">
        <FiAlertTriangle className="text-5xl dark:text-[#c97b26] text-[#bc8d5b]" />
        <p>{t("alert")}</p>
      </div>

      {/* Inputs */}
      <div className="w-full space-y-3 border-b-2 pb-4 border-slate-500/30">
        {/* Anti-phishing input + send button */}
        <div>
          <label className="block mb-1 text-[10px] xl:text-[0.65rem] font-light">
            {t("antiPhiCode")}
          </label>
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <input
                type={antiPhiCode.isVisible ? "text" : "password"}
                value={antiPhiCode.value}
                placeholder={t("enterCode")}
                className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none placeholder:text-[10px] xl:placeholder:text-[0.6rem] pr-6"
                onChange={(e) =>
                  setAntiPhiCode((prev) => ({ ...prev, value: e.target.value }))
                }
              />
              <span
                className="absolute bottom-1/2 translate-y-1/2 right-1.5 cursor-pointer hover:scale-105 transition-all duration-200"
                onClick={() =>
                  setAntiPhiCode((prev) => ({
                    ...prev,
                    isVisible: !prev.isVisible,
                  }))
                }
              >
                {antiPhiCode.isVisible ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </div>

            {!emailSent ? (
              <button
                onClick={handleSendEmail}
                disabled={!antiPhiCode.value.trim() || isSending}
                className="whitespace-nowrap text-xs border border-slate-500/40 px-3 py-1 rounded-md hover:scale-105 transition-all duration-200 disabled:opacity-50"
              >
                {isSending
                  ? t("buttons.sending") || "Sending..."
                  : t("buttons.sendEmail")}
              </button>
            ) : (
              <span className="text-green-600 text-xs whitespace-nowrap">
                {}
              </span>
            )}
          </div>
        </div>

        <p className="text-[10px] xl:text-[0.6rem] font-light opacity-90 dark:opacity-70">
          {t("message")}
        </p>
        {/* Verification input */}
        {step === "verify" && (
          <div>
            <label className="block mb-1 text-[10px] xl:text-[0.65rem] font-light">
              {t("verificationCode")}
            </label>
            <input
              type="text"
              value={verificationCode}
              placeholder={
                t("verificationCodePlaceholder") || "Enter code from email"
              }
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none placeholder:text-[10px] xl:placeholder:text-[0.6rem]"
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="text-[10px] xl:text-[0.5rem] font-light text-red-700">
          {error}
        </p>
      )}

      {/* Info Section */}
      <div className="space-y-3 mb-10">
        <div className="space-y-1">
          <h4 className="text-[11px] xl:text-[0.65rem] font-light">
            {t("whatIsIt")}
          </h4>
          <p className="text-[10px] xl:text-[0.6rem] font-light opacity-90 dark:opacity-70">
            {t("whatIsItContent")}
          </p>
        </div>
        <Image
          src="/images/antiPhishingIndoExImage.png"
          height={500}
          width={500}
          alt="anti phishing"
          className="w-full h-auto"
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

        {step === "verify" && (
          <button
            className="w-full border border-transparent bg-green-600 text-white dark:text-black py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 disabled:opacity-50"
            disabled={!verificationCode.trim() || isVerifying}
            onClick={handleConfirm}
          >
            {isVerifying
              ? t("buttons.verifying") || "Verifying..."
              : t("buttons.confirm")}
          </button>
        )}
      </div>
    </div>
  );
};

export default AntiPhiSetupPopup;
