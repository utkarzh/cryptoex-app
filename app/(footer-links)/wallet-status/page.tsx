import WalletStatus from "@/components/wallet_status/WalletStatus";
import React from "react";

const page = () => {
  return (
    <div className="w-[95%] sm:w-[85%] md:w-[80%]  lg:w-[70%] mx-auto mt-6 mb-6">
      <WalletStatus />
    </div>
  );
};

export default page;
