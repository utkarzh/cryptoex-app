"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { FC, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useUpdatePinMutation } from "@/redux/masternode/dashboard/security/securityApi";
import { toast } from "sonner";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const SetupPinPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations(
    "dashboard.security.securitySetting.secondaryPin.changepopUp"
  );

  const [data, setData] = useState({
    newPin: "",
    confirmPin: "",
  });

  const [updatePin, { isLoading }] = useUpdatePinMutation();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^\d{0,6}$/.test(value)) {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateInputs = (): boolean => {
    if (!data.newPin || !data.confirmPin) {
      toast.error(t("errors.allFieldsRequired"));
      return false;
    }

    if (data.newPin !== data.confirmPin) {
      toast.error(t("errors.pinMismatch"));
      return false;
    }

    if (data.newPin.length < 4 || data.newPin.length > 6) {
      toast.error(t("errors.pinLength"));
      return false;
    }

    return true;
  };

  const setupPinHandler = async () => {
    if (!validateInputs()) return;

    try {
      const response = await updatePin({
        oldpin: "", // sending blank for setup
        newpin: data.newPin,
      }).unwrap();

      if (response.status === 1) {
        toast.success(t("successMessage"));
        onSuccess(response.message);
      } else {
        toast.error(response.message || t("errors.generic"));
      }
    } catch (err: any) {
      console.error("Setup PIN error:", err);
      toast.error(err?.data?.message || t("errors.generic"));
    }
  };

  return (
    <div className="sm:min-w-[300px] bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] xl:w-[500px] mx-auto shadow-lg relative space-y-5">
      {/* Close Button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      <h2 className={`${saira.className} text-sm font-semibold`}>
        {t("title")}
      </h2>

      <div className="w-full space-y-3">
        <div>
          <label className="block mb-1 text-[10px] xl:text-[0.65rem] font-light">
            {t("newPin")}
          </label>
          <input
            type="password"
            value={data.newPin}
            name="newPin"
            placeholder={t("enterNewPin")}
            onChange={inputChangeHandler}
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none placeholder:text-[10px] xl:placeholder:text-[0.6rem]"
          />
        </div>

        <div>
          <label className="block mb-1 text-[10px] xl:text-[0.65rem] font-light">
            {t("confirmPin")}
          </label>
          <input
            type="password"
            value={data.confirmPin}
            name="confirmPin"
            placeholder={t("enterCofirmPin")}
            onChange={inputChangeHandler}
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none placeholder:text-[10px] xl:placeholder:text-[0.6rem]"
          />
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-2 justify-between mt-2 text-xs">
        <button
          className="w-full border border-slate-500/30 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          {t("buttons.cancel")}
        </button>
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 disabled:opacity-50"
          onClick={setupPinHandler}
          disabled={isLoading}
        >
          {isLoading ? t("buttons.loading") : t("buttons.confirm")}
        </button>
      </div>
    </div>
  );
};

export default SetupPinPopup;
