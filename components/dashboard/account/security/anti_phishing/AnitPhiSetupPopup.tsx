"use client";
import { saira } from "@/utils/Font";
import Image from "next/image";
import React, { FC, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const AntiPhiSetupPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const [error, setError] = useState("");

  const [antiPhiCode, setAntiPhiCode] = useState({
    antiPhiCode: "",
    isVisible: false,
  });

  const addAnitPhiHandler = () => {
    if (antiPhiCode.antiPhiCode === "123456") {
      onSuccess("error");
      return;
    }
    setError("Error occured");
    setTimeout(() => setError(""), 2000);
  };
  return (
    <div className="mt-30 bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-5">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* heading and close button*/}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        Set Up Anti-phishing Code
      </h2>

      {/* warning message */}
      <div className="flex gap-2 text-[10px] font-extralight bg-red-700 text-red-50 dark:bg-red-400/15  dark:text-red-500 px-4 py-2 rounded-md justify-center items-center">
        <FiAlertTriangle className="text-5xl dark:text-[#c97b26] text-[#bc8d5b]" />
        <p>
          Please do not disclose your anti-phishing code to anyone, including
          IndoEx employees.
        </p>
      </div>
      {/* inputs */}
      <div className="w-full space-y-3 border-b-2 pb-4 border-slate-500/30">
        {/* anit-phishing code input */}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            Anti-phishing Code
          </label>
          <div className=" relative">
            <input
              type={antiPhiCode.isVisible ? "text" : "password"}
              value={antiPhiCode.antiPhiCode}
              placeholder="Please enter 4 to 20 characters"
              className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-[10px] pr-6"
              onChange={(e) =>
                setAntiPhiCode((prev) => {
                  return { ...prev, antiPhiCode: e.target.value };
                })
              }
            />
            <span
              className="absolute bottom-1/2 translate-y-1/2 right-1.5 cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() =>
                setAntiPhiCode((prev) => {
                  return { ...prev, isVisible: !prev.isVisible };
                })
              }
            >
              {antiPhiCode.isVisible ? (
                <IoMdEye className="" />
              ) : (
                <IoMdEyeOff className="" />
              )}
            </span>
          </div>
        </div>

        <p className="text-[10px] font-light opacity-90 dark:opacity-70">
          Please enter 4 to 20 characters that contain letters, numbers and
          underscores only. Please do not set your frequently used password as
          the anti-phishing code.
        </p>
      </div>
      {error && <p className="text-[10px] font-light text-red-700">{error}</p>}

      {/* what is anti-phishing code */}
      <div className="space-y-3 mb-10">
        <div className="space-y-1">
          <h4 className="text-[11px] font-light">
            What Is Anti-Phishing Code?
          </h4>
          <p className="text-[10px] font-light opacity-90 dark:opacity-70">
            Your anti-phishing code will appear in all IndoEx emails, helping
            you spot genuine communications and avoid scams.
          </p>
        </div>

        <Image
          src="/images/antiPhishingIndoExImage.png"
          height={500}
          width={500}
          alt="anut phishing"
          className="w-[100%] h-auto"
        />
      </div>

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
          onClick={addAnitPhiHandler}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AntiPhiSetupPopup;
