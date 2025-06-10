"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { GrAssistListening } from "react-icons/gr";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import { IoMenu } from "react-icons/io5";
import TradeDropdown from "./nav_dropdown/TradeDropdown";
import EarnDropdown from "./nav_dropdown/EarnDropdown";
import EventsDropdown from "./nav_dropdown/EventsDropdown";
import ProfileDropdown from "./profile_dropdown/ProfileDropdown";
import LangDropdown from "./lang_dropdown/LangDropdown";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [isExchange, setIsExchange] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuth] = useState(true);

  const t = useTranslations("Navbar");

  const sidebarHandler = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-full h-[70px]">
        <nav className=" fixed top-0 left-0 z-[999] w-full h-fit text-black dark:text-white bg-[#eff0f2] dark:bg-[#06062a]">
          {/* nav container */}
          <div className=" w-full relative h-[70px] max-w-screen flex justify-between items-center gap-4 py-2 pl-4 ">
            {/* logo part */}
            <Link href="/" className="">
              {/* dark background */}
              <Image
                width={200}
                height={100}
                className="w-auto max-w-[130px] dark:block hidden cursor-pointer p-1 rounded "
                src="/images/logo/logo_indoex_white.svg"
                alt="logo"
              />
              {/* light background */}
              <Image
                width={200}
                height={100}
                className="w-auto max-w-[130px] block dark:hidden  cursor-pointer p-1 rounded "
                src="/images/logo/logo_indoex_black.svg"
                alt="logo"
              />
            </Link>
            {/* middle part */}
            <div
              className={`flex-col absolute ${
                isSidebarOpen
                  ? "flex xl:flex dark:bg-[#06062a] bg-[#eff0f2] xl:bg-transparent"
                  : "hidden xl:flex"
              } top-[70px]  pt-3 pb-6  xl:bg-transparent xl:py-0 left-0  z-[100] xl:static xl:flex-row w-[100%] h-fit xl:h-full  items-start pl-4 xl:pl-0 xl:items-center gap-4 transition-all duration-500 xl:transition-none shadow-[-0px_-0px_1px_black] dark:shadow-[-0px_-0px_1px_white] xl:shadow-none xl:dark:shadow-none `}
            >
              {/* last part after small screen */}
              <div className="w-full flex xl:hidden flex-col gap-2  ">
                <div className="flex flex-row-reverse gap-2 justify-between pr-4 items-center">
                  <div className="flex gap-1 text-xl items-center ">
                    <IoMdSearch className="text-[24px] mt-2 cursor-pointer" />
                    <span className="relative ">
                      <GrAnnounce className=" -rotate-15 cursor-pointer" />
                      <span className=" absolute -top-[3px] -right-[2px] w-[7px] h-[7px] bg-green-500 rounded-full"></span>
                    </span>
                  </div>

                  <div className="flex gap-3 items-center px-3 p-1 border border-gray-700 rounded-full text-sm ">
                    <GrAssistListening className="text-3xl bg-yellow-400 p-1 rounded-full text-white" />

                    <div className="flex flex-col  text-[12px]">
                      <span className="text-slate-500">
                        {t("auth.new_listing")}
                      </span>
                      <span>Plath(PLATH)</span>
                    </div>

                    <div className="text-green-600 cursor-pointer ">
                      {t("auth.see_all")}
                    </div>
                  </div>
                </div>
              </div>

              {/* toggle button */}
              <div className=" w-fit text-sm bg-slate-300 text-black dark:text-white dark:bg-gray-700 rounded-full flex items-center ">
                <div
                  className={`w-full text-nowrap ${
                    isExchange
                      ? "bg-green-600 dark:bg-green-700 text-white "
                      : "bg-transparent "
                  }  rounded-full px-2 py-1 cursor-pointer transition-all duration-300`}
                  onClick={() => setIsExchange(true)}
                >
                  {t("toggle.exchange")}
                </div>
                <div
                  className={` w-full ${
                    !isExchange
                      ? "bg-green-600 dark:bg-green-700 text-white"
                      : "bg-transparent "
                  }  rounded-full px-4 py-1 cursor-pointer transition-all duration-300 text-nowrap `}
                  onClick={() => setIsExchange(false)}
                >
                  {t("toggle.web3")}
                </div>
              </div>

              {/*  */}
              <div className="h-[50%] hidden xl:block border-r-2 rounded border-gray-600 my-2 border-2 "></div>

              {/* items */}
              <div className="w-full flex flex-col xl:flex-row  gap-3 text-sm items-start pl-2 xl:pl-0 xl:items-center ">
                {/* trade */}
                <div className="flex items-center cursor-pointer  relative group ">
                  <span className=" group-hover:text-green-600  transition-all duration-300 ease-out">
                    {t("NavItems.trade.label")}
                  </span>
                  <RiArrowDropDownFill className="text-2xl group-hover:hidden" />
                  <RiArrowDropUpFill className="text-2xl hidden group-hover:block" />
                  <TradeDropdown />
                </div>

                {/* market */}
                <Link
                  href="/markets"
                  className="flex items-center cursor-pointer group"
                >
                  <span className="mr-2 group-hover:text-green-600  transition-all duration-300 ease-out">
                    {t("NavItems.markets")}
                  </span>
                </Link>

                {/* earn */}
                <div className="flex items-center cursor-pointer  relative group z-[30] group">
                  <span className="group-hover:text-green-600  transition-all duration-300 ease-out">
                    {t("NavItems.earn.label")}
                  </span>
                  <RiArrowDropDownFill className="text-2xl group-hover:hidden" />
                  <RiArrowDropUpFill className="text-2xl hidden group-hover:block" />
                  <EarnDropdown />
                </div>

                {/* events */}
                <div className="flex items-center cursor-pointer  relative group">
                  <span className="group-hover:text-green-600  transition-all duration-300 ease-out">
                    {t("NavItems.events.label")}
                  </span>
                  <RiArrowDropDownFill className="text-2xl group-hover:hidden" />
                  <RiArrowDropUpFill className="text-2xl hidden group-hover:block" />
                  <EventsDropdown />
                </div>
              </div>

              {/* signup and login after small screen */}
              {!isAuth && (
                <div className="flex xl:hidden flex-wrap items-center justify-center gap-2 text-sm">
                  <Link
                    href="/login"
                    className="w-fit text-nowrap p-1 px-3 rounded-full bg-slate-300 dark:bg-gray-700 cursor-pointer"
                  >
                    {t("auth.signin")}
                  </Link>
                  <Link
                    href="/signup"
                    className="w-fit text-nowrap p-1 px-3 rounded-full text-white  bg-green-600 dark:bg-green-700 cursor-pointer"
                  >
                    {t("auth.signup")}
                  </Link>
                </div>
              )}
            </div>
            {/* last part */}
            <div className="hidden xl:flex w-full h-full  justify-end items-center gap-3 pr-2  ">
              <div className="flex gap-1 text-xl items-center ">
                <IoMdSearch className="text-[24px] mt-2 cursor-pointer" />
                <span className="relative ">
                  <GrAnnounce className=" -rotate-15 cursor-pointer" />
                  <span className=" absolute -top-[3px] -right-[2px] w-[7px] h-[7px] bg-green-500 rounded-full"></span>
                </span>
              </div>

              <div className="flex gap-3 items-center px-3 p-1 border border-gray-700 rounded-full text-sm ">
                <Image
                  src="/images/coins/plath.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-7 h-auto"
                />

                <div className="flex flex-col  text-[12px]">
                  <span className="text-slate-500">
                    {t("auth.new_listing")}
                  </span>
                  <span>Plath(PLATH)</span>
                </div>

                <div className="text-green-600 cursor-pointer ">
                  {t("auth.see_all")}
                </div>
              </div>

              {/* sign in and signup pages */}
              {!isAuth ? (
                <div className="flex gap-2 text-sm">
                  <Link
                    href="/login"
                    className="w-fit text-nowrap p-1 px-3 rounded-full bg-slate-300 dark:bg-gray-700 cursor-pointer"
                  >
                    {t("auth.signin")}
                  </Link>
                  <Link
                    href="/signup"
                    className="w-fit text-nowrap p-1 px-3 rounded-full text-white bg-green-600 dark:bg-green-700 cursor-pointer"
                  >
                    {t("auth.signup")}
                  </Link>
                </div>
              ) : (
                <div className="relative  group">
                  <Image
                    src="/images/profile.png"
                    alt="profile"
                    width={80}
                    height={80}
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />

                  <div className="hidden group-hover:block absolute  top-[100%] -left-1/2 -translate-x-1/2 pt-4   h-fit w-fit ">
                    <ProfileDropdown />
                  </div>
                </div>
              )}

              <div className="h-[50%] border-r-2 border-gray-700"></div>
              {/* language and theme buttons */}
              <div className="flex gap-2 text-xl items-center ">
                <ThemeSwitcher />
                <div className="group relative ">
                  <MdLanguage className="cursor-pointer" />
                  <div className="hidden group-hover:block absolute z-[100]  top-[100%] left-[100%] -translate-x-[100%] pt-4   h-fit w-fit  ">
                    <LangDropdown />
                  </div>
                </div>
              </div>
            </div>

            {/* profile , sidebar opener and theme buttons*/}
            <div className="xl:hidden flex items-center gap-3">
              {/* after auth profile pic */}
              {isAuth && (
                <div className="w-fit h-full border-r-2 pr-3 border-slate-500/30 relative group">
                  <Image
                    src="/images/profile.png"
                    alt="profile"
                    width={80}
                    height={80}
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />
                  <div className="hidden group-hover:block absolute  top-[100%] -left-1/2 -translate-x-1/2 pt-4   h-fit w-fit  ">
                    <ProfileDropdown />
                  </div>
                </div>
              )}
              <div className="flex gap-3 text-2xl items-center">
                <ThemeSwitcher size={26} />
                <div className="group relative ">
                  <MdLanguage className="cursor-pointer" />
                  <div className="hidden group-hover:block absolute z-[100]  top-[100%] -left-1/2 -translate-x-1/2 pt-4   h-fit w-fit  ">
                    <LangDropdown />
                  </div>
                </div>
              </div>

              <div className=" mr-3 " onClick={sidebarHandler}>
                {!isSidebarOpen ? (
                  <IoMenu className="text-[36px] cursor-pointer" />
                ) : (
                  <IoMdClose className="text-[36px] cursor-pointer" />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
