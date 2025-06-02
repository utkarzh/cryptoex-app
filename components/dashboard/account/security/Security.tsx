import React from "react";
import SecuritySettings from "./SecuritySettings";
import AuthLevel from "./AuthLevel";

const Security = () => {
  return (
    <div className="w-full space-y-4">
      <SecuritySettings />
      <AuthLevel />
    </div>
  );
};

export default Security;
