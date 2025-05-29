"use client";
import { saira } from "@/utils/Font";
import Image from "next/image";
import { useState } from "react";
import { FaApple, FaTelegramPlane } from "react-icons/fa";

export default function SignupForm() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="w-full  flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm p-6 rounded-2xl bg-white dark:bg-[#161735] shadow-2xl">
        {/* heading */}
        <h2 className={` ${saira.className} text-sm font-semibold mb-6`}>
          Create your account
        </h2>
        {/*  */}
        <form className="space-y-4">
          {/* email */}
          <div className="w-full border py-3 border-black/30 dark:border-white/30 flex justify-between items-center  rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              Email
            </label>
            <input
              type="text"
              className="outline-none border-none w-full bg-transparent text-xs placeholder:text-[11px]"
              placeholder="Enter email"
            />
          </div>

          {/*username*/}
          <div className="w-full border py-3 border-black/30 dark:border-white/30 flex justify-between items-center  rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              Username
            </label>
            <input
              type="text"
              className="outline-none border-none w-full bg-transparent text-xs placeholder:text-[11px]"
              placeholder="Enter username"
            />
          </div>

          {/* password */}
          <div className="w-full border py-3 border-black/30 dark:border-white/30 flex justify-between items-center  rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              Password
            </label>
            <input
              type="password"
              className="outline-none border-none w-full bg-transparent text-xs placeholder:text-[11px]"
              placeholder="Enter password"
            />
          </div>

          {/* country */}
          <div className="w-full border py-3 border-black/30 dark:border-white/30 flex justify-between items-center  rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              Country
            </label>

            <select className="w-full border outline-none border-none bg-transparent text-xs placeholder:text-[11px] mr-2">
              <option className=" dark:bg-[#06062a]">
                Select your country
              </option>
              <option className=" dark:bg-[#06062a]">USA</option>
              <option className=" dark:bg-[#06062a]">India</option>
              <option className=" dark:bg-[#06062a]">UK</option>
              <option className=" dark:bg-[#06062a]">Germany</option>
            </select>
          </div>

          {/* referral code */}
          <div className="w-full border py-3 border-black/30 dark:border-white/30 flex justify-between items-center  rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              Referral code (Optional)
            </label>
            <input
              type="text"
              className="outline-none border-none w-full bg-transparent text-xs placeholder:text-[11px]"
              placeholder="Enter referral code"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm mt-2">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
              className=""
            />
            <label className="text-[10px]">
              I Accept{" "}
              <span className="text-green-400 cursor-pointer">
                Terms & Conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2 bg-green-500 rounded-full text-black font-semibold hover:bg-green-600 transition text-xs cursor-pointer"
          >
            Sign up
          </button>
        </form>
      </div>

      <div className="mb-4">
        <div className="text-center text-[10px] text-slate-500 dark:text-gray-400 mt-4">
          Or Sign up with
        </div>

        <div className="flex justify-center gap-4 mt-2">
          <button className=" cursor-pointer bg-slate-400/30 dark:bg-slate-500/20 p-2 rounded-lg hover:scale-105 transition-all duration-200">
            {/* <FaGoogle className="text-white" /> */}
            <Image
              src="/images/icons/google.png"
              alt=""
              width={40}
              height={40}
              className="w-5 h-5"
            />
          </button>
          <button className=" cursor-pointer bg-slate-400/40 dark:bg-slate-500/20 p-2 rounded-lg hover:scale-105 transition-all duration-200 ">
            <FaApple className="text-white min-w-5 min-h-5" />
          </button>
          <button className=" cursor-pointer bg-slate-400/30 dark:bg-slate-500/20 p-2 rounded-lg hover:scale-105 transition-all duration-200 ">
            <FaTelegramPlane className="text-[#059ce6] min-w-5 min-h-5" />
          </button>
        </div>

        <div className="text-center text-[10px]  mt-4">
          Already have an account?{" "}
          <span className="text-green-400 hover:underline cursor-pointer">
            Log in
          </span>
        </div>
      </div>
    </div>
  );
}
