import Model from "@/components/common/Model";
import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import PinForgotPopup from "./PinForgotPopup";
import { PiSealCheckFill } from "react-icons/pi";
import ChangePinPopup from "./ChangePinPopup";

export type PopupValue = "fotgot" | "change" | "";

const SecondaryPin = () => {
  const [popup, setPopup] = useState<PopupValue>("");
  const [success, setSuccess] = useState("");
  const forgotSuccessHandler = () => {
    setPopup("");
    setSuccess("Your secondary pin sent to registered mail address");

    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  const changePinSuccessHandler = () => {
    setPopup("");
    setSuccess("Your secondary pin updated suceessfully");

    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };
  return (
    <>
      <div className="flex justify-between items-center  text-xs ">
        <div className="flex items-start gap-2  ">
          <div className="">
            <IoLockClosedOutline className="text-[17px]" />
          </div>
          <div>
            <div className="font-xs font-light opacity-90">Secondary Pin</div>
            <div className="text-[11px] font-light opacity-60">
              Set up a personalized code to ensure emails from the platform are
              authentic and not phishing attempts
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {true ? (
            <div className="flex gap-2 ">
              <button
                className="  cursor-pointer text-[10px] px-2 py-1 text-sm rounded text-nowrap"
                onClick={() => setPopup("fotgot")}
              >
                Forgot
              </button>
              <button
                className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15 text-nowrap"
                onClick={() => setPopup("change")}
              >
                Change
              </button>
            </div>
          ) : (
            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15 text-nowrap">
              Set up
            </button>
          )}
        </div>

        {popup && (
          <Model>
            {popup === "fotgot" ? (
              <PinForgotPopup
                onClose={() => setPopup("")}
                onSuccess={forgotSuccessHandler}
              />
            ) : (
              <ChangePinPopup
                onClose={() => setPopup("")}
                onSuccess={changePinSuccessHandler}
              />
            )}
          </Model>
        )}
      </div>

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

export default SecondaryPin;
