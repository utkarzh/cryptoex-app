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
      <div className="relative bg-white dark:bg-[#161735] rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-5 sm:p-6 pt-10 space-y-6 overflow-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4   dark:border-slate-500  hover:scale-105 transition-all duration-200 bg-white dark:bg-[#161735]"
          onClick={onClose}
          aria-label="Close"
        >
          <IoCloseOutline size={18} />
        </button>

        {/* Message */}
        <div className="text-sm sm:text-base text-center dark:text-white break-words">
          {message}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm mt-4">
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
              className="w-full sm:w-auto flex-1 py-2 bg-green-600 text-white rounded-full hover:scale-105 transition-all duration-200 flex justify-center items-center gap-2 disabled:opacity-60"
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
