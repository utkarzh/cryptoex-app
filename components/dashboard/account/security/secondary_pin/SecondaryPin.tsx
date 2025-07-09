import Model from "@/components/common/Model";
import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import PinForgotPopup from "./PinForgotPopup";
import { PiSealCheckFill } from "react-icons/pi";
import ChangePinPopup from "./ChangePinPopup";
import { useTranslations } from "next-intl";
import SetupPinPopup from "./SetupPinPopup";
import TwoFactorSetupPopup from "../two_factor/TwoFactorSetupPopup";

export type PopupValue = "fotgot" | "change" | "" | "setNew";
type SecondaryPinProps = {
  isSet: boolean;
  is2faSet: boolean;
  qrImage: string;
  gPrivateKey: string;
};
const SecondaryPin = ({
  isSet,
  is2faSet,
  qrImage,
  gPrivateKey,
}: SecondaryPinProps) => {
  const t = useTranslations("dashboard.security.securitySetting.secondaryPin");

  const [popup, setPopup] = useState<PopupValue>("");
  const [success, setSuccess] = useState("");
  const forgotSuccessHandler = () => {
    setPopup("");
    setSuccess(t("forgotSuccessMessage"));
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  const changePinSuccessHandler = () => {
    setPopup("");
    setSuccess(t("changeSuccessMessage"));
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };
  return (
    <>
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
            <div className="flex gap-2 ">
              <button
                className="  cursor-pointer text-[10px] xl:text-[0.65rem] px-2 py-1 text-sm rounded text-nowrap"
                onClick={() => setPopup("fotgot")}
              >
                {t("buttons.forgot")}
              </button>
              <button
                className="border border-slate-500/20 cursor-pointer text-[10px] xl:text-[0.65rem] px-2 py-1 text-sm rounded bg-slate-500/25 dark:hover:bg-slate-500/30 hover:bg-slate-500/15 text-nowrap"
                onClick={() => setPopup("change")}
              >
                {t("buttons.change")}
              </button>
            </div>
          ) : (
            <button
              className="border border-slate-500/20 cursor-pointer text-[10px] xl:text-[0.68rem] px-2 py-1 text-sm bg-slate-500/25 rounded dark:hover:bg-slate-500/30 hover:bg-slate-500/15 text-nowrap"
              onClick={() => setPopup("setNew")}
            >
              Set up
            </button>
          )}
        </div>

        {popup && (
          <Model>
            {popup === "fotgot" &&
              (is2faSet ? (
                <PinForgotPopup
                  onClose={() => setPopup("")}
                  onSuccess={forgotSuccessHandler}
                />
              ) : (
                <TwoFactorSetupPopup
                  qrImage={qrImage}
                  gPrivateKey={gPrivateKey}
                  onClose={() => setPopup("")}
                  onSuccess={() => setPopup("fotgot")}
                />
              ))}
            {popup === "change" && (
              <ChangePinPopup
                onClose={() => setPopup("")}
                onSuccess={changePinSuccessHandler}
              />
            )}
            {popup === "setNew" && (
              <SetupPinPopup
                onClose={() => setPopup("")}
                onSuccess={changePinSuccessHandler}
              />
            )}
          </Model>
        )}
      </div>

      {success && (
        <div className="absolute z-[10] opacity-100 top-2 left-1/2 -translate-x-1/2  max-w-[400px] rounded-md bg-[#eff0f2] dark:bg-[#24243c] flex flex-col items-center gap-2 text-center p-4">
          <div className="space-y-1 flex flex-col items-center">
            <span className="p-1 w-full rounded-full text-[#31b948]">
              <PiSealCheckFill className="text-3xl" />
            </span>
          </div>
          <p className="text-xs font-light">{success}</p>
        </div>
      )}
    </>
  );
};

export default SecondaryPin;
