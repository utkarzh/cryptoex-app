"use client";
import { saira } from "@/utils/Font";
import React from "react";
import TwoFactor from "./two_factor/TwoFactor";
import EmailInfo from "./email_info/EmailInfo";
import PasswordInfo from "./password_info/PasswordInfo";
import SecondaryPin from "./secondary_pin/SecondaryPin";
import AntiPhishing from "./anti_phishing/AntiPhishing";

const SecuritySettings = () => {
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-lg  mx-auto relative">
      <h2 className={`${saira.className} text-sm font-semibold `}>Security</h2>
      <div className="flex flex-col gap-5 mt-4">
        {/* email */}
        <EmailInfo />

        {/* login password */}
        <PasswordInfo />
        {/* Two Factor Authentication*/}
        <TwoFactor />
        {/* Secondary Pin */}
        <SecondaryPin />
        {/*Anti phishing  */}
        <AntiPhishing />
      </div>
    </div>
  );
};

export default SecuritySettings;
