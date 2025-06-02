import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useState } from "react";
import { BsShieldLock } from "react-icons/bs";
import SecurityVerificationPopup from "./SecurityVerificationPopup";
import TwoFactorSetupPopup from "./TwoFactorSetupPopup";
import TwoFactorDisableFormPopup from "./TwoFactorDisableFormPopup";
import TwoFactorDisablePopupConfirm from "./TwoFactorDisableConfirmPopup";

// type Props = {};

const TwoFactor = () => {
  const [twoFASetup, setTwoFASetup] = useState<
    "otp" | "google-auth" | "disable-form" | "disable-confirmation" | ""
  >();
  const [is2FAVerified, setIs2FAVerified] = useState(false);

  const disable2FAHandler = () => {
    setTwoFASetup("disable-form");
  };
  const setup2FAHandler = () => {
    setTwoFASetup("otp");
  };

  const onClose2FASetup = () => {
    setTwoFASetup("");
  };

  const otpDataHandler = (data: string) => {
    console.log("Otp data is", data);
    setTwoFASetup("google-auth");
  };

  const googleAuthHandler = () => {
    setIs2FAVerified(true);
    setTwoFASetup("");
  };

  const disableSuccessHandler = () => {
    setIs2FAVerified(false);
    setTwoFASetup("");
  };
  return (
    <div className="flex justify-between items-center  text-xs ">
      <div className="flex items-start gap-2  ">
        <div className="">
          <BsShieldLock className="text-[17px]" />
        </div>
        <div>
          <div className="font-xs font-light opacity-90">
            Two Factor Authentication
          </div>
          <div className="text-[11px] font-light opacity-60">
            Link an authenticator app for secure two-factor authentication when
            accessing your account
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2">
        {is2FAVerified && (
          <>
            <span className="flex items-center gap-1 text-sm">
              <Image
                src="/images/icons/verified.png"
                width={24}
                height={24}
                alt=""
                className="w-3 h-auto"
              />
              <span className="opacity-60 text-[10px] font-light">Linked</span>
            </span>
          </>
        )}

        <button
          className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15"
          onClick={is2FAVerified ? disable2FAHandler : setup2FAHandler}
        >
          {is2FAVerified ? "Disable" : "Set up"}
        </button>
      </div>

      {/* 2fa setup popup */}
      {twoFASetup && (
        <Model>
          {twoFASetup === "otp" ? (
            <SecurityVerificationPopup
              onClose={onClose2FASetup}
              onOTPEntered={otpDataHandler}
            />
          ) : twoFASetup === "google-auth" ? (
            <TwoFactorSetupPopup
              onClose={onClose2FASetup}
              onSuccess={googleAuthHandler}
            />
          ) : twoFASetup === "disable-form" ? (
            <TwoFactorDisableFormPopup
              onClose={onClose2FASetup}
              onSuccess={() => setTwoFASetup("disable-confirmation")}
            />
          ) : twoFASetup === "disable-confirmation" ? (
            <TwoFactorDisablePopupConfirm
              onClose={onClose2FASetup}
              onSuccess={disableSuccessHandler}
            />
          ) : (
            ""
          )}
        </Model>
      )}
    </div>
  );
};

export default TwoFactor;
