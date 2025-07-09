"use client";

import Model from "@/components/common/Model";
import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import AntiPhiSetupPopup from "./AnitPhiSetupPopup";
import { useTranslations } from "next-intl";
import { useRemovePhishingCodeMutation } from "@/redux/masternode/dashboard/security/securityApi";
import CustomPopup from "@/components/common/CustomPopUp";
import { toast } from "sonner";

type AntiPhishingProps = {
  isSet: boolean;
};

const AntiPhishing: React.FC<AntiPhishingProps> = ({ isSet }) => {
  const t = useTranslations("dashboard.security.securitySetting.antiPhishing");
  const [popup, setPopup] = useState<"open" | "disable" | "">("");

  const [removePhishingCode, { isLoading }] = useRemovePhishingCodeMutation();

  const closeHandler = () => {
    setPopup("");
  };

  const successHandler = () => {
    setPopup("");
  };

  const handleRemovePhishing = async () => {
    try {
      const res = await removePhishingCode().unwrap();
      if (res.status === 1) {
        toast.success("Anti-phishing disabled successfully.");
        closeHandler();
      } else {
        toast.error(res.message || "Failed to disable Anti-phishing.");
      }
    } catch (err: any) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-between items-center text-xs">
      <div className="flex items-start gap-2">
        <IoLockClosedOutline className="text-[17px] xl:text-[22px]" />
        <div>
          <div className="font-xs font-light opacity-90">{t("label")}</div>
          <div className="text-[11px] xl:text-[0.65rem] font-light opacity-60">
            {t("content")}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {isSet ? (
          <button
            className="border border-slate-500/20 cursor-pointer text-[10px] xl:text-[0.65rem] px-2 py-1 text-sm rounded bg-red-500/25 dark:hover:bg-red-500/30 hover:bg-red-500/15 text-nowrap"
            onClick={() => setPopup("disable")}
          >
            {t("buttonDisable")}
          </button>
        ) : (
          <button
            className="border border-slate-500/20 cursor-pointer text-[10px] xl:text-[0.65rem] px-2 py-1 text-sm rounded bg-slate-500/25 dark:hover:bg-slate-500/30 hover:bg-slate-500/15 text-nowrap"
            onClick={() => setPopup("open")}
          >
            {t("buttonSetUp")}
          </button>
        )}
      </div>

      {popup && (
        <Model>
          {popup === "open" && (
            <AntiPhiSetupPopup
              onClose={closeHandler}
              onSuccess={successHandler}
            />
          )}
          {popup === "disable" && (
            <CustomPopup
              message="Are you sure you want to disable Anti-Phishing?"
              onClose={closeHandler}
              onConfirm={handleRemovePhishing}
              onLoading={isLoading}
            />
          )}
        </Model>
      )}
    </div>
  );
};

export default AntiPhishing;
