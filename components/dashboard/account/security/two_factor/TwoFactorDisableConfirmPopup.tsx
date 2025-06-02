import { saira } from "@/utils/Font";
import React, { FC } from "react";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: () => void;
};
const TwoFactorDisablePopupConfirm: FC<Props> = ({ onClose, onSuccess }) => {
  return (
    <div className="bg-white flex flex-col gap-6 dark:bg-[#161735] max-w-[400px]  rounded-xl p-6 relative">
      {/* heading and close button*/}
      <div className="w-full flex justify-between items-center">
        <h2 className={`${saira.className} text-sm font-semibold `}>
          Confirm Removal of Google 2FA Authentication
        </h2>
        <button onClick={onClose}>
          <IoCloseSharp className="text-2xl cursor-pointer hover:scale-110 trasition-all duration-300" />
        </button>
      </div>

      {/* message */}
      <div className="flex flex-col gap-1 p-2 border border-slate-500/30 rounded-md">
        <h4 className="text-xs">Notice:</h4>
        <p className="text-[10px] font-light">
          For your account`s security, after removing Google Two-Factor
          Authentication, actions such as on-chain withdrawals, internal
          transfers, fiat withdrawals, P2P trading, and other transactions will
          be temporarily suspended for 24 hours.
        </p>
      </div>

      {/* Action buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-between mt-2 text-xs">
        <button
          className="w-full border border-slate-500/30 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
         py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onSuccess}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TwoFactorDisablePopupConfirm;
