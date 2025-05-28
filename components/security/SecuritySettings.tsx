"use client";
import { saira } from "@/utils/Font";
import Image from "next/image";
import React, { useState } from "react";
import { BsShieldLock } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Model from "../common/Model";
import SecurityVerificationPopup from "./SecurityVerificationPopup";
import TwoFactorSetupPopup from "./TwoFactorSetupPopup";
import TwoFactorDisableFormPopup from "./TwoFactorDisableFormPopup";
import TwoFactorDisablePopupConfirm from "./TwoFactorDisableConfirmPopup";

const SecuritySettings = () => {
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
    <div className="bg-white dark:bg-[#161735] p-8 rounded-lg  mx-auto">
      <h2 className={`${saira.className} text-sm font-semibold `}>Security</h2>
      <div className="flex flex-col gap-5 mt-4">
        {/* email */}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-start gap-2  ">
            <div className="">
              <MdOutlineEmail className=" text-[17px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">
                Email authentication
              </div>
              <div className="text-[11px] font-light opacity-60">
                Use email authentication for login and transaction confirmations
                to enhance account security
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
                    className="w-3 h-auto"
                  />
                  <span className="opacity-60 flex gap-1 text-[10px] font-light">
                    kdk***@****
                    <FaEye className="text-xs cursor-pointer" />
                  </span>
                </span>
              </>
            )}

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15">
              Change email
            </button>
          </div>
        </div>
        {/* login password */}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-start gap-2  ">
            <div className="">
              <IoLockClosedOutline className="text-[17px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">
                Login password
              </div>
              <div className="text-[11px] font-light opacity-60">
                Set a strong password to protect your account from unauthorized
                access
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

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15">
              Change password
            </button>
          </div>
        </div>
        {/* Two Factor Authentication*/}
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
                Link an authenticator app for secure two-factor authentication
                when accessing your account
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
                  <span className="opacity-60 text-[10px] font-light">
                    Linked
                  </span>
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
        {/* Secondary Pin */}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-start gap-2  ">
            <div className="">
              <IoLockClosedOutline className="text-[17px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">Secondary Pin</div>
              <div className="text-[11px] font-light opacity-60">
                Set up a personalized code to ensure emails from the platform
                are authentic and not phishing attempts
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {false && (
              <>
                <span className="flex items-center gap-1 text-sm">
                  <Image
                    src="/images/icons/verified.png"
                    width={24}
                    height={24}
                    alt=""
                    className="w-3 h-auto"
                  />
                  <span className="opacity-60 text-[10px] font-light">
                    Linked
                  </span>
                </span>
              </>
            )}

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15 text-nowrap">
              {false ? "Disable" : "Set up"}
            </button>
          </div>
        </div>
        {/*Anti phishing  */}

        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-start gap-2  ">
            <div className="">
              <IoLockClosedOutline className="text-[17px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">Anti phishing</div>
              <div className="text-[11px] font-light opacity-60">
                The email sent to you by the platform will contain the
                anti-phishing code to distinguish from fake mail
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {false && (
              <>
                <span className="flex items-center gap-1 text-sm">
                  <Image
                    src="/images/icons/verified.png"
                    width={24}
                    height={24}
                    alt=""
                    className="w-3 h-auto"
                  />
                  <span className="opacity-60 text-[10px] font-light">
                    Linked
                  </span>
                </span>
              </>
            )}

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15 text-nowrap">
              {false ? "Disable" : "Set up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
