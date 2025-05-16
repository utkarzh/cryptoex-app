"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { GrAssistListening } from "react-icons/gr";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isExchange, setIsExchange] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      {/* <nav className="bg-white dark:bg-gray-700 w-full h-fit text-black dark:text-white"> */}
      <nav className="">
        {/* nav container */}
        <div className="  w-full relative h-[70px] max-w-screen flex justify-between items-center gap-4 py-2 pl-4 ">
          {/* logo part */}
          <Link href="/" className="">
            <Image
              width={200}
              height={100}
              className="w-auto max-w-[130px]  cursor-pointer bg-transparent"
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
          {/* middle part */}
          <div
            className={`flex-col absolute ${
              isSidebarOpen ? "flex lg:flex" : "hidden lg:flex"
            } top-[70px]   pt-3 pb-6 bg-[#06062a] lg:bg-transparent lg:py-0 left-0  z-[100] lg:static lg:flex-row w-[100%] h-fit lg:h-full  items-start pl-4 lg:pl-0 lg:items-center gap-4 transition-all duration-500 shadow-[-0px_-0px_1px_white] lg:shadow-none `}
          >
            {/* last part after small screen */}
            <div className="w-full flex lg:hidden flex-col gap-2  ">
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
                      <span className="text-slate-500">New Listing</span>
                      <span>Plath(PLATH)</span>
                    </div>

                    <div className="text-green-600 cursor-pointer ">
                      See All
                    </div>
                  </div>
              </div>
            </div>

            {/* toggle button */}
            <div className=" w-fit text-sm bg-gray-700 rounded-full flex items-center ">
              <div
                className={`w-full ${
                  isExchange
                    ? "bg-green-700 text-black"
                    : "bg-transparent text-white"
                }  rounded-full px-2 py-1 cursor-pointer transition-all duration-300`}
                onClick={() => setIsExchange(true)}
              >
                Exchange
              </div>
              <div
                className={` w-full ${
                  !isExchange
                    ? "bg-green-700 text-black"
                    : "bg-transparent text-white"
                }  rounded-full px-4 py-1 cursor-pointer transition-all duration-300 `}
                onClick={() => setIsExchange(false)}
              >
                Web3
              </div>
            </div>

            {/*  */}
            <div className="h-[50%] hidden lg:block border-r-2 rounded border-gray-600 my-2 border-2 "></div>

            {/* items */}
            <div className="w-full flex flex-col lg:flex-row  gap-3 text-sm items-start pl-2 lg:pl-0 lg:items-center">
                {/* trade */}
              <div className="flex items-center cursor-pointer  relative group">
                <span>Trade</span>
                <RiArrowDropDownFill className="text-2xl" />
                <div className="absolute z-[50] bottom-0 translate-y-[100%] left-1/2 -translate-x-1/2 w-fit  rounded-md bg-gray-700 hidden group-hover:block">
                  <ul className="flex flex-col gap-1 p-2">
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item1</li>
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item2</li>
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item3</li>
                  </ul>
                </div>
              </div>

              {/* market */}
              <div className="flex items-center cursor-pointer">
                <span className="mr-2">Markets</span>
              </div>

              {/* earn */}
               <div className="flex items-center cursor-pointer  relative group z-[30]">
                <span>Earn</span>
                <RiArrowDropDownFill className="text-2xl" />
                <div className="absolute bottom-0 translate-y-[100%] left-1/2 -translate-x-1/2 w-fit  rounded-md bg-gray-700 hidden group-hover:block">
                  <ul className="flex flex-col gap-1 p-2">
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item1</li>
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item2</li>
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item3</li>
                  </ul>
                </div>
              </div>

              {/* events */}
               <div className="flex items-center cursor-pointer  relative group">
                <span>Events</span>
                <RiArrowDropDownFill className="text-2xl" />
                <div className="absolute bottom-0 translate-y-[100%] left-1/2 -translate-x-1/2 w-fit  rounded-md bg-gray-700 hidden group-hover:block ">
                  <ul className="flex flex-col gap-1 p-2">
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item1</li>
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item2</li>
                    <li className=" w-full hover:bg-gray-500 hover:text-black p-1 px-2 rounded-md text-nowrap">Item3</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* signup and login after small screen */}
            <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 text-sm">
              <button className="w-fit text-nowrap p-1 px-3 rounded-full bg-gray-700 cursor-pointer">
                Sign in
              </button>
              <button className="w-fit text-nowrap p-1 px-3 rounded-full bg-green-700 cursor-pointer">
                Sign up
              </button>
            </div>
          </div>
          {/* last part */}
          <div className="hidden lg:flex w-full h-full  justify-end items-center gap-3 pr-2  ">
            <div className="flex gap-1 text-xl items-center ">
              <IoMdSearch className="text-[24px] mt-2 cursor-pointer" />
              <span className="relative ">
                <GrAnnounce className=" -rotate-15 cursor-pointer" />
                <span className=" absolute -top-[3px] -right-[2px] w-[7px] h-[7px] bg-green-500 rounded-full"></span>
              </span>
            </div>

            <div className="flex gap-3 items-center px-3 p-1 border border-gray-700 rounded-full text-sm ">
              <Image src="/images/coins/plath.png" alt=""  width={40} height={40} className="w-7 h-auto"/>

              <div className="flex flex-col  text-[12px]">
                <span className="text-slate-500">New Listing</span>
                <span>Plath(PLATH)</span>
              </div>

              <div className="text-green-600 cursor-pointer ">See All</div>
            </div>

            {/* sign in and signup pages */}
            <div className="flex gap-2 text-sm">
              <button className="w-fit text-nowrap p-1 px-3 rounded-full bg-gray-700 cursor-pointer">
                Sign in
              </button>
              <button className="w-fit text-nowrap p-1 px-3 rounded-full bg-green-700 cursor-pointer">
                Sign up
              </button>
            </div>

            <div className="h-[50%] border-r-2 border-gray-700"></div>
            {/* language and theme buttons */}
            <div className="flex gap-2 text-xl items-center ">
              <ThemeSwitcher />
              <MdLanguage className="cursor-pointer" />
            </div>
          </div>

          {/* sidebar opener and theme buttons*/}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex gap-3 text-2xl items-center">
              <ThemeSwitcher size={26} />
              <MdLanguage className="cursor-pointer" />
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
    </>
  );
};

export default Navbar;
