import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ChangeMailConfirmationPopup from "./ChangeMailConfirmationPopup";

export type PopupData = "change_mail" | "next_step" | "confirm" | "";

const EmailInfo = () => {
  const [popupStatus, setPopupStatus] = useState<PopupData>("");

  const popupCloseHandler = () => {
    setPopupStatus("");
  };

  const successHandler = (data: typeof popupStatus) => {
    setPopupStatus(data);
  };
  return (
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
            Use email authentication for login and transaction confirmations to
            enhance account security
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

        <button
          className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15"
          onClick={() => setPopupStatus("change_mail")}
        >
          Change email
        </button>
      </div>

      {popupStatus && (
        <Model>
          {popupStatus === "change_mail" ? (
            <ChangeMailConfirmationPopup
              onClose={popupCloseHandler}
              onSuccess={successHandler}
            />
          ) : (
            ""
          )}
        </Model>
      )}
    </div>
  );
};

export default EmailInfo;
