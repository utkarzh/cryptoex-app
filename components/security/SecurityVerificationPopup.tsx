"use client";

import { saira } from "@/utils/Font";
import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const CORRECT_CODE = "123456";

const SecurityVerificationPopup = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join("");
    if (enteredCode !== CORRECT_CODE) {
      setError(true);
      setTimeout(() => setError(false), 3000);
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
      <button className="absolute top-4 right-4 hover:scale-110 transition-all duration-200 cursor-pointer">
        <IoClose size={24} />
      </button>

      <h2 className={`${saira.className} text-sm font-semibold `}>
        Security Verification
      </h2>
      <p className="mt-6 opacity-60 text-xs font-light mb-4">
        A verification code will be sent to kdk****fx@gmail.com
      </p>

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
            className={`w-12 h-12 rounded-xl text-center text-2xl font-medium  border outline-none ${
              error
                ? "border-red-500 text-red-400"
                : "dark:border-slate-600 border-slate-400 bg-slate-100 dark:bg-slate-600/20"
            } `}
          />
        ))}
      </div>

      <p className="flex text-[11px] gap-[2px] font-light ">
        <span className="opacity-60">
          Not able to receive verification code?
        </span>
        <button className="text-green-500 hover:underline cursor-pointer">
          Resend verification code
        </button>
      </p>

      <p className="text-green-500 text-xs font-light mt-8 cursor-pointer">
        Having problems with verification?
      </p>
    </div>
  );
};

export default SecurityVerificationPopup;
