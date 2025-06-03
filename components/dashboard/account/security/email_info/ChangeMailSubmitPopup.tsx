"use client";
import { saira } from "@/utils/Font";
import React, { FC, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const ChangeMailSubmitPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const [newEmail, setNewEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState("");

  const changeMailHandler = () => {
    console.log("Code value is", code);
    if (code === "123456") {
      onSuccess("error");
      return;
    }
    setError("Error occured");
    setTimeout(() => setError(""), 2000);
  };
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-5">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* heading and close button*/}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        Change Email
      </h2>
      {/* inputs */}
      <div className="w-full space-y-3">
        {/* new email */}
        <div>
          <label className="block mb-1 text-[10px] font-light">New Email</label>
          <div className="flex gap-1">
            <input
              type="text"
              value={newEmail}
              placeholder="Please enter the email verification code"
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px]"
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button className="text-[10px] text-wrap sm:text-nowrap text-green-100 bg-green-600 dark:bg-green-500/20 dark:text-green-600 px-4 py-1 rounded-md hover:bg-green-700 dark:hover:bg-green-500/20 cursor-pointer border border-green-600 transition-all duration-300">
              Send Code
            </button>
          </div>
        </div>

        {/*varification code*/}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            New Email Verification Code
          </label>

          <input
            type="text"
            value={code}
            placeholder="Please enter the 2FA Code"
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none  placeholder:text-[10px]"
            onChange={(e) => setCode(e.target.value)}
          />

          <p className="text-[10px] hover:text=-green-500 cursor-pointer mt-2 relative group flex flex-col gap-1">
            <span className="hidden group-hover:block p-1 px-2 rounded-md bg-white dark:bg-slate-700 absolute bottom-4 -left-1">
              Please check your Spam folder for this email
            </span>
            <span className="text-green-600 ">
              Didn&apos;t receive the verification code?
            </span>
          </p>
        </div>
      </div>
      {error && <p className="text-[10px] font-light text-red-700">{error}</p>}

      {/* Action buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-2 justify-between mt-2 text-xs">
        <button
          className="w-full border border-slate-500/30 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
                     py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={changeMailHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChangeMailSubmitPopup;
