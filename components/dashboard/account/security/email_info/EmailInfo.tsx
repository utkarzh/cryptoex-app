"use client";
import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ChangeMailConfirmationPopup from "./ChangeMailConfirmationPopup";
import SecurityConfirmationPopup from "./SecurityConfirmationPopup";
import ChangeMailSubmitPopup from "./ChangeMailSubmitPopup";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";
import { maskEmail } from "@/utils/maskEmail";

export type PopupData = "change_mail" | "next_step" | "confirm" | "";

const EmailInfo = () => {
  const t = useTranslations("dashboard.security.securitySetting.emailInfo");

  const tempEmail = "test.123@gmail.com";
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [popupStatus, setPopupStatus] = useState<PopupData>("");
  const [error, setError] = useState<string>("");

  const popupCloseHandler = () => {
    setPopupStatus("");
  };

  const successHandler = (data: typeof popupStatus) => {
    console.log("Data is", data);
    setPopupStatus(data);
  };

  const emailChangeHandler = (data: string) => {
    if (data === "error") {
      setError(
        "Google Two Factor Authentication has not been activated. Please check and try again "
      );
      setPopupStatus("");
    }

    setTimeout(() => setError(""), 2000);
  };
  return (
    <>
      <div className="flex justify-between items-center  text-xs ">
        <div className="flex items-start gap-2  ">
          <div className="">
            <MdOutlineEmail className=" text-[17px] xl:text-[22px]" />
          </div>
          <div>
            <div className="font-xs font-light opacity-90">{t("label")}</div>
            <div className="text-[11px] xl:text-[0.65rem] font-light opacity-60">
              {t("content")}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 justify-end">
          {true && (
            <>
              <span className="flex items-center gap-1 text-sm">
                <Image
                  src="/images/icons/verified.png"
                  width={24}
                  height={24}
                  alt=""
                  className="w-3 xl:w-4 h-auto"
                />
                <span className="opacity-60 flex gap-1 text-[10px] xl:text-[0.65rem] font-light">
                  {isEmailVisible ? tempEmail : maskEmail(tempEmail)}
                  <span
                    className="text-xs cursor-pointer"
                    onClick={() => setIsEmailVisible((prev) => !prev)}
                  >
                    {isEmailVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </span>
              </span>
            </>
          )}

          <button
            className="border border-slate-500/20 bg-slate-500/25 cursor-pointer text-[10px] px-2 py-1 text-sm xl:text-[0.65rem] rounded dark:hover:bg-slate-500/30 hover:bg-slate-500/15"
            onClick={() => setPopupStatus("change_mail")}
          >
            {t("button")}
          </button>
        </div>

        {popupStatus && (
          <Model>
            {popupStatus === "change_mail" ? (
              <ChangeMailConfirmationPopup
                onClose={popupCloseHandler}
                onSuccess={successHandler}
              />
            ) : popupStatus === "next_step" ? (
              <SecurityConfirmationPopup
                onClose={popupCloseHandler}
                onSuccess={successHandler}
              />
            ) : (
              <ChangeMailSubmitPopup
                onClose={popupCloseHandler}
                onSuccess={emailChangeHandler}
              />
            )}
          </Model>
        )}
      </div>
      {/* error popup message */}
      {error && (
        <div className="absolute z-[10] opacity-100 top-2 left-1/2 -translate-x-1/2  max-w-[400px] rounded-md bg-[#eff0f2] dark:bg-[#24243c] flex flex-col items-center gap-2 text-center p-4">
          <div className="space-y-1 flex flex-col items-center">
            <span className="p-1 rounded-full bg-[#e24d4a]">
              <IoMdClose className="text-xl" />
            </span>
            <p className="text-xs font-medium">Request failed. </p>
          </div>
          <p className="text-xs font-light">{error}</p>
        </div>
      )}
    </>
  );
};

export default EmailInfo;
