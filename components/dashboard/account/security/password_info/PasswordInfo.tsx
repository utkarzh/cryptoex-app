import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import PassChangePopup from "./PassChangePopup";
import { PiSealCheckFill } from "react-icons/pi";
import { useTranslations } from "next-intl";

const PasswordInfo = () => {
  const t = useTranslations("dashboard.security.securitySetting.passInfo");
  const [isPassPopup, setIsPassPopup] = useState(false);
  const [success, setSuccess] = useState("");
  console.log("Success", success);

  const successHandler = (data: string) => {
    if (data === "success") {
      setSuccess("Password Changed Successfully");
      setIsPassPopup(false);
    }

    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };
  return (
    <>
      <div className="flex justify-between items-center  text-xs ">
        <div className="flex items-start gap-2  ">
          <div className="">
            <IoLockClosedOutline className="text-[17px]" />
          </div>
          <div>
            <div className="font-xs font-light opacity-90">{t("label")}</div>
            <div className="text-[11px] font-light opacity-60">
              {t("content")}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          {true && (
            <>
              <span className="flex items-center gap-1 text-sm">
                <Image
                  src="/images/icons/verified.png"
                  width={24}
                  height={24}
                  alt=""
                  className="w-3 h-auto"
                />
                <span className="opacity-60 flex gap-1 text-[10px] font-light">
                  ********
                  <FaEye className="text-xs cursor-pointer" />
                </span>
              </span>
            </>
          )}

          <button
            className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15"
            onClick={() => setIsPassPopup(true)}
          >
            {t("button")}
          </button>
        </div>

        {isPassPopup && (
          <Model>
            <PassChangePopup
              onClose={() => setIsPassPopup(false)}
              onSuccess={successHandler}
            />
          </Model>
        )}
      </div>

      {/* success message */}
      {/* error popup message */}
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

export default PasswordInfo;
