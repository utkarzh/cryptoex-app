"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useState, useRef, useEffect, FC } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";
import { useForgot2PinMutation } from "@/redux/masternode/dashboard/security/securityApi";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const PinForgotPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.secondaryPin.forgotPopUp"
  );

  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [forgot2Pin, { isLoading }] = useForgot2PinMutation();

  const setInputRef = (idx: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[idx] = el;
  };

  const handleChange = (value: string, index: number) => {
    const updatedCode = [...code];
    updatedCode[index] = value.slice(-1);
    setCode(updatedCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    setError(false);
    setErrorMessage("");
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const enteredCode = code.join("");

    if (enteredCode.length !== 6) {
      return;
    }

    try {
      const res = await forgot2Pin({ otp: enteredCode }).unwrap();

      if (res.status === 1) {
        toast.success(res.message || t("successMessage"));
        onSuccess(enteredCode);
      } else {
        setError(true);
        setErrorMessage(res.message || t("error.generic"));
        toast.error(res.message || t("error.generic"));
      }
    } catch (err: any) {
      console.error("Forgot PIN error:", err);
      const message =
        err?.data?.message === "OTP expired"
          ? t("error.expOtp")
          : err?.data?.message || t("error.generic");
      setError(true);
      setErrorMessage(message);
      toast.error(message);
    }
  };

  useEffect(() => {
    if (code.every((char) => char !== "")) {
      handleVerify();
    }
  }, [code]);

  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] xl:max-w-[650px] mx-auto shadow-lg relative">
      <button
        className="absolute top-4 right-4 hover:scale-110 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoClose size={24} />
      </button>

      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>
      <p className="mt-6 opacity-60 text-xs font-light mb-4">{t("enter2fa")}</p>

      {/* Input box */}
      <div className="flex justify-between mb-4">
        {code.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={setInputRef(idx)}
            disabled={isLoading}
            className={`w-12 h-12 ml-1 rounded-xl text-center text-2xl font-medium border outline-none ${
              error
                ? "border-red-500 text-red-400"
                : "dark:border-slate-600 border-slate-400 bg-slate-100 dark:bg-slate-600/20"
            } `}
          />
        ))}
      </div>

      {/* Error message */}
      {errorMessage && (
        <p className="text-[10px] xl:text-[0.5rem] mt-4 font-light bg-red-700 text-red-50 dark:bg-red-400/15 dark:text-red-500 px-4 py-2 rounded-full">
          {errorMessage}
        </p>
      )}

      <p className="text-green-500 text-xs font-light mt-2 cursor-pointer">
        {t("havingProb")}
      </p>
    </div>
  );
};

export default PinForgotPopup;
