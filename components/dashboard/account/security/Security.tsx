"use client";

import React from "react";
import SecuritySettings from "./SecuritySettings";
import AuthLevel from "./AuthLevel";
import { useGetProfileSettingsQuery } from "@/redux/masternode/dashboard/security/securityApi";
import Spinner from "@/components/common/Spinner";

// Define expected shape for `userinfo` (if not already defined in RTK types)
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

const Security = () => {
  const { data, isLoading, error } = useGetProfileSettingsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Spinner />
      </div>
    );
  }

  if (error || !data || !data.userinfo) {
    return (
      <div className="text-center text-red-500 font-medium py-8">
        Failed to load security information. Please try again later.
      </div>
    );
  }

  const userInfo: UserInfo = data.userinfo;

  return (
    <div className="w-full space-y-4">
      <SecuritySettings userInfo={userInfo} />
      <AuthLevel />
    </div>
  );
};

export default Security;
