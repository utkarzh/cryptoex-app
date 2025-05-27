import { saira } from "@/utils/Font";
import Image from "next/image";
import React from "react";
import { BsShieldLock } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const SecuritySettings = () => {
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-lg  mx-auto">
      <h2 className={`${saira.className} text-sm font-semibold `}>Security</h2>
      <div className="flex flex-col gap-5 mt-4">
        {/* email */}
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
                Use email authentication for login and transaction confirmations
                to enhance account security
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
                  <span className="opacity-60 text-[10px] font-light">
                    kdk***@****
                  </span>
                </span>
                <FaEye className="text-gray-400 cursor-pointer" />
              </>
            )}

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15">
              Change email
            </button>
          </div>
        </div>
        {/* login password */}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-start gap-2  ">
            <div className="">
              <IoLockClosedOutline className="text-[17px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">
                Login password
              </div>
              <div className="text-[11px] font-light opacity-60">
                Set a strong password to protect your account from unauthorized
                access
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
                  <span className="opacity-60 text-[10px] font-light">
                    ********
                  </span>
                </span>
                <FaEye className="text-gray-400 cursor-pointer" />
              </>
            )}

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15">
              Change password
            </button>
          </div>
        </div>
        {/* Two Factor Authentication*/}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-start gap-2  ">
            <div className="">
              <BsShieldLock className="text-[17px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">
                Two Factor Authentication
              </div>
              <div className="text-[11px] font-light opacity-60">
                Link an authenticator app for secure two-factor authentication
                when accessing your account
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
                  <span className="opacity-60 text-[10px] font-light">
                    Linked
                  </span>
                </span>
              </>
            )}

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15">
              {true ? "Disable" : "Set up"}
            </button>
          </div>
        </div>
        {/* Secondary Pin */}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-start gap-2  ">
            <div className="">
              <IoLockClosedOutline className="text-[17px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">Secondary Pin</div>
              <div className="text-[11px] font-light opacity-60">
                Set up a personalized code to ensure emails from the platform
                are authentic and not phishing attempts
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {false && (
              <>
                <span className="flex items-center gap-1 text-sm">
                  <Image
                    src="/images/icons/verified.png"
                    width={24}
                    height={24}
                    alt=""
                    className="w-3 h-auto"
                  />
                  <span className="opacity-60 text-[10px] font-light">
                    Linked
                  </span>
                </span>
              </>
            )}

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15">
              {false ? "Disable" : "Set up"}
            </button>
          </div>
        </div>
        {/*Anti phishing  */}

        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-start gap-2  ">
            <div className="">
              <IoLockClosedOutline className="text-[17px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">Anti phishing</div>
              <div className="text-[11px] font-light opacity-60">
                The email sent to you by the platform will contain the
                anti-phishing code to distinguish from fake mail
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {false && (
              <>
                <span className="flex items-center gap-1 text-sm">
                  <Image
                    src="/images/icons/verified.png"
                    width={24}
                    height={24}
                    alt=""
                    className="w-3 h-auto"
                  />
                  <span className="opacity-60 text-[10px] font-light">
                    Linked
                  </span>
                </span>
              </>
            )}

            <button className="border border-slate-500/20 cursor-pointer text-[10px] px-2 py-1 text-sm rounded dark:hover:bg-slate-500/25 hover:bg-slate-500/15">
              {false ? "Disable" : "Set up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
