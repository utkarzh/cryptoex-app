"use client";

import React, { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Spinner from "./Spinner"; // Spinner icon

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
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="relative bg-white dark:bg-[#161735] rounded-2xl shadow-xl p-6 w-full max-w-md space-y-6">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 border rounded-full border-slate-600 dark:border-slate-500 p-1 hover:scale-105 transition-all duration-200"
          onClick={onClose}
          aria-label="Close"
        >
          <IoCloseOutline size={20} />
        </button>

        {/* Message */}
        <div className="text-sm text-center dark:text-white">{message}</div>

        {/* Actions */}
        <div className="flex gap-3 justify-center text-sm mt-4">
          {showCancel && (
            <button
              className="flex-1 py-2 border border-gray-300 dark:border-slate-600 rounded-full hover:scale-105 transition-all duration-200 disabled:opacity-50"
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
              className="flex-1 py-2 bg-green-600 text-white rounded-full hover:scale-105 transition-all duration-200 flex justify-center items-center gap-2 disabled:opacity-60"
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
