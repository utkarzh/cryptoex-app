"use client";
import { saira } from "@/utils/Font";
import React from "react";
import TwoFactor from "./two_factor/TwoFactor";
import EmailInfo from "./email_info/EmailInfo";
import PasswordInfo from "./password_info/PasswordInfo";
import SecondaryPin from "./secondary_pin/SecondaryPin";
import AntiPhishing from "./anti_phishing/AntiPhishing";
import { useTranslations } from "next-intl";

type UserInfo = {
  firstName: string;
  email: string;
  phishing: string;
  kyc: string;
  mobile2fa: string;
  user2pin: string;
  get2FAImage: string;
  idname: string;
  GprivateKey: string;
  myreferalcode: string;
  mmservice: boolean;
};

type SecuritySettingsProps = {
  userInfo: UserInfo;
};

const SecuritySettings = ({ userInfo }: SecuritySettingsProps) => {
  const t = useTranslations("dashboard.security.securitySetting");
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-lg  mx-auto relative">
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>
      <div className="flex flex-col gap-5 mt-4">
        {/* email */}
        <EmailInfo email={userInfo.email} />

        {/* login password */}
        <PasswordInfo />
        {/* Two Factor Authentication*/}
        <TwoFactor
          isSet={userInfo.mobile2fa !== "DISABLED"}
          qrImage={userInfo.get2FAImage}
          gPrivateKey={userInfo.GprivateKey}
        />
        {/* Secondary Pin */}
        <SecondaryPin isSet={userInfo.user2pin == "SET"} />
        {/*Anti phishing  */}
        <AntiPhishing isSet={userInfo.phishing === "SET"} />
      </div>
    </div>
  );
};

export default SecuritySettings;
