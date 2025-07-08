import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import AntiPhiSetupPopup from "./AnitPhiSetupPopup";
import AntiPhiSecurityPopup from "./AntiPhiSecurityPopup";
import { useTranslations } from "next-intl";
import { useSendPhishingCodeMutation } from "@/redux/masternode/dashboard/security/securityApi";
import CustomPopup from "@/components/common/CustomPopUp";

type AntiPhishingProps = {
  isSet: boolean;
};

const AntiPhishing: React.FC<AntiPhishingProps> = ({ isSet }) => {
  const t = useTranslations("dashboard.security.securitySetting.antiPhishing");
  const [popup, setPopup] = useState<"open" | "disable" | "">("");
  const [isVerified, setIsVerified] = useState(false);

  const successHandler = () => {
    setPopup("");
  };

  const updateAntiPhishingHandler = () => {
    setIsVerified(true);
    setPopup("");
  };

  const closeHandler = () => {
    setPopup("");
  };
  return (
    <div className="flex justify-between items-center  text-xs ">
      <div className="flex items-start gap-2  ">
        <div className="">
          <IoLockClosedOutline className="text-[17px] xl:text-[22px]" />
        </div>
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
        )}{" "}
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
              message={"Are you sure you want to disable Anti-Phising?"}
              onClose={closeHandler}
            />
          )}
        </Model>
      )}
    </div>
  );
};

export default AntiPhishing;
