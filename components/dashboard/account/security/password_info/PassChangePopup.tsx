"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { FC, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useChangePasswordMutation } from "@/redux/masternode/dashboard/security/securityApi";
import { toast } from "sonner";
import { validatePassword } from "@/utils/regex";

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
  const [error, setError] = useState<string>("");

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const isDisabled =
    !oldPassword.oldPassword ||
    !newPassword.newPassword ||
    !confirmPassword.confirmPassword ||
    isLoading;

  const verificationHandler = async (data: string) => {
    const passwordError = validatePassword(newPassword.newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (newPassword.newPassword !== confirmPassword.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await changePassword({
        oldpassword: oldPassword.oldPassword,
        newpassword: newPassword.newPassword,
      }).unwrap();

      if (res.status === 1) {
        toast.success("Password updated successfully");
        onSuccess(data);
      } else {
        setError(res.message || "Password change failed.");
      }
    } catch (err: any) {
      setError(err?.data?.message || "Something went wrong.");
    }

    setTimeout(() => setError(""), 3000);
  };

  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] xl:max-w-[600px] mx-auto shadow-lg relative space-y-5">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      <h2 className={`${saira.className} text-sm font-semibold`}>
        {t("title")}
      </h2>

      {/* notice */}
      <div className="border border-slate-500/30 bg-slate-500/10 rounded-md p-2 space-y-1">
        <h5 className="text-[10px] xl:text-[0.65rem] font-medium">
          {t("notice")}:
        </h5>
        <p className="text-[10px] xl:text-[0.6rem] font-light">
          {t("noticeMessage")}
        </p>
      </div>

      {/* inputs */}
      <div className="w-full space-y-4">
        {/* Old Password */}
        <PasswordInput
          label={t("oldPass")}
          placeholder={t("oldPassHolder")}
          value={oldPassword.oldPassword}
          isVisible={oldPassword.isVisible}
          onChange={(val) =>
            setOldPassword({ ...oldPassword, oldPassword: val })
          }
          onToggle={() =>
            setOldPassword((prev) => ({ ...prev, isVisible: !prev.isVisible }))
          }
        />

        {/* New Password */}
        <PasswordInput
          label={t("newPass")}
          placeholder={t("newPassHolder")}
          value={newPassword.newPassword}
          isVisible={newPassword.isVisible}
          onChange={(val) =>
            setNewPassword({ ...newPassword, newPassword: val })
          }
          onToggle={() =>
            setNewPassword((prev) => ({ ...prev, isVisible: !prev.isVisible }))
          }
        />

        {/* Confirm Password */}
        <PasswordInput
          label={t("confirmPass")}
          placeholder={t("confirmPassHolder")}
          value={confirmPassword.confirmPassword}
          isVisible={confirmPassword.isVisible}
          onChange={(val) =>
            setConfirmPassword({ ...confirmPassword, confirmPassword: val })
          }
          onToggle={() =>
            setConfirmPassword((prev) => ({
              ...prev,
              isVisible: !prev.isVisible,
            }))
          }
        />

        {/* 2FA verification code */}
        {/* <div>
          <label className="block mb-1 text-[10px] xl:text-[0.65rem] font-light">
            {t("2faCode")}
          </label>
          <div className=" relative">
            <input
              type="text"
              value={twoFaCode}
              placeholder={t("2faCodeHolder")}
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px] xl:placeholder:text-[0.6rem] pr-6"
              onChange={(e) => setTwoFaCode(e.target.value)}
            />
            <p className="text-xs font-light text-green-600 mt-2">
              {t("havingIssue")}
            </p>
          </div>
        </div> */}
      </div>

      {/* Action button */}
      <div className="w-full flex flex-col gap-2 justify-between mt-2 text-xs">
        <button
          className={`w-full border border-transparent py-2 rounded-full cursor-pointer transition-all duration-200 ${
            isDisabled
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-600 dark:text-black text-white hover:scale-105"
          }`}
          onClick={() => verificationHandler("success")}
          disabled={isDisabled}
        >
          {isLoading ? "Updating..." : t("button")}
        </button>

        {error && <p className=" text-red-500 mt-1 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default PassChangePopup;
type PasswordInputProps = {
  label: string;
  placeholder: string;
  value: string;
  isVisible: boolean;
  onChange: (val: string) => void;
  onToggle: () => void;
};

const PasswordInput: FC<PasswordInputProps> = ({
  label,
  placeholder,
  value,
  isVisible,
  onChange,
  onToggle,
}) => (
  <div>
    <label className="block mb-1 text-[10px] xl:text-[0.65rem] font-light">
      {label}
    </label>
    <div className="relative">
      <input
        type={isVisible ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none placeholder:text-[10px] xl:placeholder:text-[0.6rem] pr-6"
        onChange={(e) => onChange(e.target.value)}
      />
      <span
        className="absolute bottom-1/2 translate-y-1/2 right-1.5 cursor-pointer hover:scale-105 transition-all duration-200"
        onClick={onToggle}
      >
        {isVisible ? <IoMdEye /> : <IoMdEyeOff />}
      </span>
    </div>
  </div>
);
