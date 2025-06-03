import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import AntiPhiSetupPopup from "./AnitPhiSetupPopup";
import AntiPhiSecurityPopup from "./AntiPhiSecurityPopup";

const AntiPhishing = () => {
  const [popup, setPopup] = useState<"open" | "security" | "">("");
  const [isVerified, setIsVerified] = useState(false);

  const successHandler = () => {
    setPopup("security");
  };

  const updateAntiPhishingHandler = () => {
    setIsVerified(true);
    setPopup("");
  };

  const closeHandler = () => {
    setPopup("");
  };
  return (
    <div className="flex justify-between items-center  text-xs ">
      <div className="flex items-start gap-2  ">
        <div className="">
          <IoLockClosedOutline className="text-[17px]" />
        </div>
        <div>
          <div className="font-xs font-light opacity-90">Anti phishing</div>
          <div className="text-[11px] font-light opacity-60">
            The email sent to you by the platform will contain the anti-phishing
            code to distinguish from fake mail
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {isVerified && (
          <>
            <span className="flex items-center gap-1 text-sm">
              <Image
                src="/images/icons/verified.png"
                width={24}
                height={24}
                alt=""
                className="w-3 h-auto"
              />
              <span className="opacity-60 text-[10px] font-light">123456</span>
            </span>
          </>
        )}

        <button
          className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15 text-nowrap"
          onClick={() => setPopup("open")}
        >
          Set up
        </button>
      </div>

      {popup && (
        <Model>
          {popup === "open" ? (
            <AntiPhiSetupPopup
              onClose={closeHandler}
              onSuccess={successHandler}
            />
          ) : (
            <AntiPhiSecurityPopup
              onClose={closeHandler}
              onSuccess={updateAntiPhishingHandler}
            />
          )}
        </Model>
      )}
    </div>
  );
};

export default AntiPhishing;
