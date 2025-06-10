"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useState, useRef, useEffect, FC } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const CORRECT_CODE = "123456";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const AntiPhiSecurityPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.antiPhishing.popUp2"
  );

  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

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

  const handleVerify = () => {
    const enteredCode = code.join("");
    if (enteredCode !== CORRECT_CODE) {
      setError(true);
      if (enteredCode === "000000") {
        setErrorMessage(t("error.expOtp"));
      } else {
        setErrorMessage(t("error.wrongOtp"));
        // setErrorMessage("asdasdas");
      }
    } else {
      onSuccess(CORRECT_CODE);
    }
  };

  useEffect(() => {
    if (code.every((char) => char !== "")) {
      handleVerify();
    }
  }, [code]);

  const setInputRef = (idx: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[idx] = el;
  };

  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative">
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

      {/* box */}
      <div className="flex justify-between mb-4">
        {code.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={setInputRef(idx)}
            className={`w-12 h-12 ml-1 rounded-xl text-center text-2xl font-medium  border outline-none ${
              error
                ? "border-red-500 text-red-400"
                : "dark:border-slate-600 border-slate-400 bg-slate-100 dark:bg-slate-600/20"
            } `}
          />
        ))}
      </div>

      {/* <p className="flex text-[11px] gap-[2px] font-light ">
        <span className="opacity-60">
          Not able to receive verification code?
        </span>
        <button className="text-green-500 hover:underline cursor-pointer">
          Resend verification code
        </button>
      </p> */}

      {/* error message */}
      {errorMessage && (
        <p className="text-[10px] mt-4 font-extralight bg-red-700 text-red-50 dark:bg-red-400/15  dark:text-red-500 px-4 py-2 rounded-full">
          {errorMessage}
        </p>
      )}

      <p className="text-green-500 text-xs font-light mt-2 cursor-pointer">
        {t("havingProb")}
      </p>
    </div>
  );
};

export default AntiPhiSecurityPopup;
