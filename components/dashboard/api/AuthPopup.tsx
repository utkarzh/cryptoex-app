"use client";

import React, { FC, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Spinner from "@/components/common/Spinner";
import { useResendVerificationKeyMutation } from "@/redux/masternode/dashboard/api_management/apiManagementApi";
import { toast } from "sonner";

type AuthPopupProps = {
  apirefkey: number;
  onClose: () => void;
  onSuccess: (code: string) => void | Promise<void>;
};

const AuthPopup: FC<AuthPopupProps> = ({ apirefkey, onClose, onSuccess }) => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);
  const [resendVerificationKey, { isLoading: isResending }] =
    useResendVerificationKeyMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const id = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(id);
    }
  }, [timer]);

  const handleResend = async () => {
    try {
      await resendVerificationKey().unwrap();
      setTimer(60);
      toast.success("Verification code resent.");
    } catch {
      toast.error("Failed to resend code.");
    }
  };

  const handleConfirm = async () => {
    if (!code.trim()) return;
    setIsSubmitting(true);
    try {
      await onSuccess(code.trim());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 sm:px-6">
      <div className="relative bg-white dark:bg-[#161735] p-8 rounded-2xl shadow-lg w-full max-w-[400px] xl:max-w-[600px] mx-auto space-y-5">
        {/* Close */}
        <button
          className="absolute top-2 right-2 border rounded-full border-slate-600 dark:border-slate-500 hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          <IoCloseOutline size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-[10px] xl:text-[0.65rem] font-medium">
          Security Authentication
        </h2>

        {/* Input + Resend */}
        <div className="relative">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none placeholder:text-[10px] xl:placeholder:text-[0.6rem] pr-28 text-xs"
            placeholder="Enter verification code"
          />
          <button
            className={`absolute right-2 top-1/2 -translate-y-1/2 text-[10px] xl:text-[0.65rem] font-medium ${
              timer > 0
                ? "text-blue-500 cursor-not-allowed"
                : "text-green-600 hover:underline"
            }`}
            onClick={handleResend}
            disabled={timer > 0 || isResending}
          >
            {timer > 0 ? `Resend in ${timer}s` : "Resend"}
          </button>
        </div>

        <p className="text-[10px] xl:text-[0.6rem] text-gray-400 font-light">
          Code sent to your registered mail
        </p>

        {/* Action buttons */}
        <div className="flex gap-3 justify-center mt-2 text-[10px] xl:text-[0.65rem]">
          <button
            className="flex-1 py-2 border border-gray-300 dark:border-slate-600 rounded-full hover:scale-105 transition-all duration-200"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            className={`flex-1 py-2 rounded-full flex justify-center items-center gap-2 transition-all duration-200 ${
              isSubmitting
                ? "bg-green-600/80 text-white opacity-60 cursor-not-allowed"
                : "bg-green-600 text-white hover:scale-105"
            }`}
            onClick={handleConfirm}
            disabled={isSubmitting || !code.trim()}
          >
            {isSubmitting ? <Spinner /> : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
