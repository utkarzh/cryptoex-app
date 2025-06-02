import AccountManagement from "@/components/dashboard/account/profile/AccountManagement";
import Profile from "@/components/dashboard/account/profile/Profile";
import React from "react";

const page = () => {
  return (
    <div className="w-[98%] mx-auto space-y-2">
      <Profile />
      <AccountManagement />
    </div>
  );
};

export default page;
