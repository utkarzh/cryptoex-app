"use client";

import React, { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Spinner from "./Spinner";

type CustomPopupProps = {
  message: string | ReactNode;
  showCancel?: boolean;
  showConfirm?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose: () => void;
  onLoading?: boolean;
};

const CustomPopup: React.FC<CustomPopupProps> = ({
  message,
  showCancel = true,
  showConfirm = true,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  onCancel,
  onConfirm,
  onClose,
  onLoading = false,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 sm:px-6">
      <div className="relative bg-white dark:bg-[#161735] p-8 rounded-2xl shadow-lg w-full max-w-[400px] xl:max-w-[600px] mx-auto space-y-5">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 border rounded-full border-slate-600 dark:border-slate-500 hover:scale-105 transition-all duration-200 bg-white dark:bg-[#161735]"
          onClick={onClose}
          aria-label="Close"
        >
          <IoCloseOutline size={20} />
        </button>

        {/* Message */}
        <div className="text-[12px] xl:text-[0.75rem] text-center font-light dark:text-white break-words">
          {message}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center text-[10px] xl:text-[0.65rem] font-light">
          {showCancel && (
            <button
              className="w-full sm:w-auto flex-1 py-2 border border-gray-300 dark:border-slate-600 rounded-full hover:scale-105 transition-all duration-200 disabled:opacity-50"
              onClick={() => {
                onCancel?.();
                onClose();
              }}
              disabled={onLoading}
            >
              {cancelLabel}
            </button>
          )}
          {showConfirm && (
            <button
              className={`w-full sm:w-auto flex-1 py-2 rounded-full transition-all duration-200 flex justify-center items-center gap-2 ${
                onLoading
                  ? "bg-green-600/80 text-white opacity-60 cursor-not-allowed"
                  : "bg-green-600 text-white hover:scale-105"
              }`}
              onClick={() => {
                if (!onLoading) {
                  onConfirm?.();
                  onClose();
                }
              }}
              disabled={onLoading}
            >
              {onLoading ? <Spinner /> : confirmLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;
