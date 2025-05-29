"use client";
import { saira } from "@/utils/Font";
import Image from "next/image";
import { FaApple, FaTelegramPlane } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";

export default function LoginForm() {
  return (
    <div className="w-full  flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm p-6 rounded-2xl bg-white dark:bg-[#161735] shadow-2xl">
        <div className="w-full flex justify-between">
          {/* heading */}
          <h2 className={` ${saira.className} text-sm font-semibold mb-6`}>
            Log in to your account
          </h2>
          {/* qr */}
          <IoQrCodeOutline className="text-green-600 cursor-pointer" />
        </div>
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

          <button
            type="submit"
            className="w-full mt-2 py-2 bg-green-500 rounded-full text-black font-semibold hover:bg-green-600 transition text-xs cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>

      <div className="mb-4">
        <div className="text-center text-[10px] text-slate-500 dark:text-gray-400 mt-4">
          Or Log in with
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
          Don’t have an account?{" "}
          <span className="text-green-400 hover:underline cursor-pointer">
            Create account
          </span>
        </div>
      </div>
    </div>
  );
}
