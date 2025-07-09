"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { FC, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: (data: { password: string; otp: string }) => void;
};

const TwoFactorDisableFormPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.twofactor.removePopUp1"
  );

  const [password, setPassword] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const handleSubmit = () => {
    if (!password || !otp) return;
    onSuccess({ password, otp });
  };

  return (
    <div className="bg-white flex flex-col gap-4 dark:bg-[#161735] max-w-[350px] rounded-xl p-6 relative">
      {/* Heading */}
      <div className="w-full flex justify-between items-center">
        <h2 className={`${saira.className} text-sm font-semibold`}>
          {t("title")}
        </h2>
        <button onClick={onClose}>
          <IoCloseSharp className="text-2xl cursor-pointer hover:scale-110 transition-all duration-300" />
        </button>
      </div>

      {/* Form Inputs */}
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-2"
      >
        {/* Password */}
        <div>
          <label className="mb-2 text-xs font-light">{t("loginPass")}</label>
          <input
            type="password"
            value={password}
            autoComplete="new-password"
            placeholder={t("enterPass")}
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none placeholder:text-xs mt-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Google Authenticator 2FA Code */}
        <div>
          <label className="mb-2 text-xs font-light">{t("2faCode")}</label>
          <input
            type="text"
            value={otp}
            autoComplete="off"
            placeholder={t("enter2faCode")}
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none placeholder:text-xs mt-1"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full border border-transparent bg-green-600 dark:text-black text-white py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 text-xs mt-2"
        >
          {t("button")}
        </button>
      </form>
    </div>
  );
};

export default TwoFactorDisableFormPopup;
