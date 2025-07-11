"use client";

import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { toast } from "sonner";

interface KeyGeneratedModalProps {
  accessKey: string;
  secretKey: string;
  permissions: string[];
  ip: string;
  onClose: () => void;
}

const KeyGeneratedModal: React.FC<KeyGeneratedModalProps> = ({
  accessKey,
  secretKey,
  permissions,
  ip,
  onClose,
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-[420px] xl:max-w-[600px] bg-white dark:bg-[#161735] p-6 rounded-2xl shadow-lg space-y-5">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 border border-slate-600 dark:border-slate-500 rounded-full hover:scale-105 transition duration-200"
        >
          <IoCloseOutline size={20} />
        </button>

        {/* Heading */}
        <div>
          <h2 className="text-sm font-semibold mb-1">Successfully Created</h2>
          <p className="text-[11px] text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-700/20 border border-yellow-400 px-3 py-2 rounded-md">
            The key shows only once and cannot be retrieved once lost. Please
            keep it properly.
          </p>
        </div>

        {/* Access Key */}
        <div>
          <label className="text-xs font-medium block mb-1">Access Key</label>
          <div className="relative">
            <input
              readOnly
              value={accessKey}
              className="w-full bg-slate-100 dark:bg-slate-800 text-xs rounded-md py-2 pr-10 pl-2 border border-gray-300 dark:border-slate-600"
            />
            <button
              onClick={() => copyToClipboard(accessKey)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-black dark:hover:text-white"
            >
              <MdContentCopy size={16} />
            </button>
          </div>
        </div>

        {/* Secret Key */}
        <div>
          <label className="text-xs font-medium block mb-1">Secret Key</label>
          <div className="relative">
            <input
              readOnly
              value={secretKey}
              className="w-full bg-slate-100 dark:bg-slate-800 text-xs rounded-md py-2 pr-10 pl-2 border border-gray-300 dark:border-slate-600"
            />
            <button
              onClick={() => copyToClipboard(secretKey)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-black dark:hover:text-white"
            >
              <MdContentCopy size={16} />
            </button>
          </div>
        </div>

        {/* Permissions */}
        <div className="text-xs">
          <p className="font-medium mb-1">Permission settings</p>
          <div className="text-slate-700 dark:text-slate-300 text-sm">
            {permissions.join(", ")}
          </div>
        </div>

        {/* IP Address */}
        <div className="text-xs">
          <p className="font-medium mb-1">Bind IP Address</p>
          <p className="text-slate-700 dark:text-slate-300">{ip}</p>
        </div>

        {/* Tips */}
        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md border border-slate-200 dark:border-slate-700 text-[11px] space-y-1 text-slate-600 dark:text-slate-400">
          <p>
            • To avoid asset loss, please do not tell your Secret Key or Access
            Key to others.
          </p>
          <p>
            • If you forget your Secret Key, please delete it and apply for a
            new Secret Key pair.
          </p>
        </div>

        {/* Close button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="w-full mt-4 bg-green-600 text-white py-2 rounded-full hover:scale-105 transition-all duration-200 text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyGeneratedModal;
