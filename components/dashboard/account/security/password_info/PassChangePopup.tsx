"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { FC, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const PassChangePopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.passInfo.popUp"
  );
  const [oldPassword, setOldPassword] = useState({
    oldPassword: "",
    isVisible: false,
  });

  const [newPassword, setNewPassword] = useState({
    newPassword: "",
    isVisible: false,
  });

  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: "",
    isVisible: false,
  });

  const [twoFaCode, setTwoFaCode] = useState("");

  //   const [error, setError] = useState("");

  const verificationHandler = (data: string) => {
    onSuccess(data);
  };
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-5">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* heading and close button*/}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>

      {/* notice */}
      <div className="border border-slate-500/30 bg-slate-500/10 rounded-md p-2 space-y-1">
        <h5 className="text-[10px] font-medium">{t("notice")}:</h5>
        <p className="text-[10px] font-light">{t("noticeMessage")}</p>
      </div>
      {/* inputs */}
      <div className="w-full space-y-4">
        {/* old password */}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            {t("oldPass")}
          </label>
          <div className=" relative">
            <input
              type={oldPassword.isVisible ? "text" : "password"}
              value={oldPassword.oldPassword}
              placeholder={t("oldPassHolder")}
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px] pr-6"
              onChange={(e) =>
                setOldPassword((prev) => {
                  return { ...prev, oldPassword: e.target.value };
                })
              }
            />
            <span
              className="absolute bottom-1/2 translate-y-1/2 right-1.5 cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() =>
                setOldPassword((prev) => {
                  return { ...prev, isVisible: !prev.isVisible };
                })
              }
            >
              {oldPassword.isVisible ? (
                <IoMdEye className="" />
              ) : (
                <IoMdEyeOff className="" />
              )}
            </span>
          </div>
        </div>

        {/* New password */}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            {t("newPass")}
          </label>
          <div className=" relative">
            <input
              type={newPassword.isVisible ? "text" : "password"}
              value={newPassword.newPassword}
              placeholder={t("newPassHolder")}
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px] pr-6"
              onChange={(e) =>
                setNewPassword((prev) => {
                  return { ...prev, newPassword: e.target.value };
                })
              }
            />
            <span
              className="absolute bottom-1/2 translate-y-1/2 right-1.5 cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() =>
                setNewPassword((prev) => {
                  return { ...prev, isVisible: !prev.isVisible };
                })
              }
            >
              {newPassword.isVisible ? (
                <IoMdEye className="" />
              ) : (
                <IoMdEyeOff className="" />
              )}
            </span>
          </div>
        </div>

        {/* confirm New password */}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            {t("confirmPass")}
          </label>
          <div className=" relative">
            <input
              type={confirmPassword.isVisible ? "text" : "password"}
              value={confirmPassword.confirmPassword}
              placeholder={t("confirmPassHolder")}
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px] pr-6"
              onChange={(e) =>
                setConfirmPassword((prev) => {
                  return { ...prev, confirmPassword: e.target.value };
                })
              }
            />
            <span
              className="absolute bottom-1/2 translate-y-1/2 right-1.5 cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() =>
                setConfirmPassword((prev) => {
                  return { ...prev, isVisible: !prev.isVisible };
                })
              }
            >
              {confirmPassword.isVisible ? (
                <IoMdEye className="" />
              ) : (
                <IoMdEyeOff className="" />
              )}
            </span>
          </div>
        </div>

        {/* 2FA verification code */}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            {t("2faCode")}
          </label>
          <div className=" relative">
            <input
              type="text"
              value={twoFaCode}
              placeholder={t("2faCodeHolder")}
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px] pr-6"
              onChange={(e) => setTwoFaCode(e.target.value)}
            />
            <p className="text-xs font-light text-green-600 mt-2">
              {t("havingIssue")}
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="w-full flex flex-col gap-2 justify-between mt-2 text-xs">
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
                     py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={() => verificationHandler("success")}
        >
          {t("button")}
        </button>
      </div>
    </div>
  );
};

export default PassChangePopup;
