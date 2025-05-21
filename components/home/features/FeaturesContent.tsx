"use client";
import { saira } from "@/utils/Font";
import React, { useRef, useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import {
  LuChevronDown,
  LuChevronUp,
  LuCircleGauge,
  LuDollarSign,
} from "react-icons/lu";
import { TbBracketsAngle } from "react-icons/tb";

const FeaturesContent = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  let scrollInterval1: NodeJS.Timeout | null = null;
  let scrollInterval2: NodeJS.Timeout | null = null;
  let container1: HTMLDivElement | null;
  let container2: HTMLDivElement | null;
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollUp = () => {
    container1 = containerRef1.current;
    container2 = containerRef2.current;
    // Clear any existing scroll interval
    if (scrollInterval1) clearInterval(scrollInterval1);
    if (scrollInterval2) clearInterval(scrollInterval2);

    // Start auto-scrolling down
    scrollInterval1 = setInterval(() => {
      if (!container1) return;
      if (container1.scrollTop <= 0) {
        clearInterval(scrollInterval1!);
      }
      container1.scrollTop -= 5; // adjust speed of container1
    }, 60); // ~60fps

    scrollInterval2 = setInterval(() => {
      if (!container2) return;
      if (container2.scrollTop + container2.clientHeight <= 0) {
        clearInterval(scrollInterval2!);
        return;
      }
      container2.scrollTop -= 5; // adjust speed
    }, 60);
  };

  const scrollDown = () => {
    container1 = containerRef1.current;
    container2 = containerRef2.current;

    // if (!container1) return;

    // Clear any existing scroll interval
    if (scrollInterval1) clearInterval(scrollInterval1);
    if (scrollInterval2) clearInterval(scrollInterval2);

    // Start auto-scrolling down
    if (container1) {
      scrollInterval1 = setInterval(() => {
        if (!container1) return;
        if (
          container1.scrollTop + container1.clientHeight >=
          container1.scrollHeight
        ) {
          clearInterval(scrollInterval1!);
          return;
        }
        container1.scrollTop += 5; // adjust speed of container1
      }, 60); // ~60fps

      if (container2) {
        scrollInterval2 = setInterval(() => {
          if (!container2) return;
          if (
            container2.scrollTop + container2.clientHeight >=
            container2.scrollHeight
          ) {
            clearInterval(scrollInterval2!);
            setIsScrolled(true);
            return;
          }
          container2.scrollTop += 5; // adjust speed
        }, 60);
      }
    }
  };

  // const resetScroll = () => {
  //   container1 = containerRef1.current;
  //    container2 = containerRef2.current;
  //   if(container1) container1.scrollTop = 0;
  //   if(container2) container2.scrollTop = 0;
  //   setIsScrolled(false);
  // }

  return (
    <div
      className="w-full mt-8  flex justify-center  relative  "
      // onMouseLeave={resetScroll}
    >
      {/* container */}
      <div className="w-full sm:w-fit  flex flex-col sm:flex-row gap-2 relative  ">
        {/* left section */}
        <div
          className="w-full sm:w-fit max-h-full sm:max-h-[270px]  overflow-hidden flex flex-col gap-2"
          ref={containerRef1}
        >
          <div className="w-[90%] mx-auto  sm:w-fit rounded-md p-2 bg-white  dark:bg-[#161735]">
            <div className="w-full sm:w-[250px] p-2 py-4 min-h-[100px] justify-start flex flex-col gap-3">
              <div className="w-fit p-[6px] bg-gray-300 dark:bg-slate-700 rounded-full">
                <LuDollarSign className="text-lg" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h3 className={` ${saira.className} text-[14px] font-medium`}>
                  Reasonable Commissions
                </h3>
                <p className="text-[10px] font-extralight">
                  Profitable investment opportunities and conditions
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto  sm:w-fit rounded-md p-2 bg-white  dark:bg-[#161735]">
            <div className="w-[250px] p-2 py-4 min-h-[100px]  flex flex-col gap-3">
              <div className="w-fit p-[6px] bg-gray-300 dark:bg-slate-700 rounded-full">
                <IoWalletOutline className="text-lg" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h3 className={` ${saira.className} text-[14px] font-medium`}>
                  Algorithmic Trading
                </h3>
                <p className="text-[10px] font-extralight">
                  API for crossplatform trading robots
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto  sm:w-fit rounded-md p-2 bg-white  dark:bg-[#161735]">
            <div className="w-[250px] b-20 p-2 py-4 min-h-[100px]  flex flex-col gap-3">
              <div className="w-fit p-[6px] bg-gray-300 dark:bg-slate-700 rounded-full">
                <IoWalletOutline className="text-lg" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h3 className={` ${saira.className} text-[14px] font-medium`}>
                  Algorithmic Trading
                </h3>
                <p className="text-[10px] font-extralight">
                  API for crossplatform trading robots
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* middle section */}
        <div className=" h-[70%] hidden sm:flex my-auto w-[100px] md:w-[200px] p-4 flex-col items-center justify-center ">
          {!isScrolled ? (
            <div className="w-fit h-fit p-1 text-white bg-green-600 rounded-full">
              <LuCircleGauge className="text-2xl" />
            </div>
          ) : (
            <div
              className="w-fit h-fit p-1 bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 hover:text-white  dark:hover:bg-slate-500 transition-all duration-300 rounded-full z-[60] opacity-60 cursor-pointer "
              onClick={scrollUp}
            >
              <LuChevronUp className="text-xl " />
            </div>
          )}
          <div
            className={`w-0 h-full border-l border-green-600 dark:border-green-400`}
          ></div>
          <div
            className="w-fit h-fit p-1 bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 hover:text-white dark:hover:bg-slate-500 transition-all duration-300 rounded-full z-[60] opacity-60 cursor-pointer "
            onClick={scrollDown}
          >
            <LuChevronDown className="text-xl " />
          </div>
        </div>

        {/* rightside section */}
        <div
          className="flex  max-h-[270px] overflow-hidden flex-col gap-2 z-[40]"
          ref={containerRef2}
        >
          <div className="w-[90%] mx-auto  sm:w-fit rounded-md p-2 bg-white  dark:bg-[#161735]">
            <div className="w-[250px] min-h-[100px] p-2 py-4 flex flex-col gap-3">
              <div className="w-fit p-[6px] bg-gray-300 dark:bg-slate-700 rounded-full">
                <IoWalletOutline className="text-lg" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h3 className={` ${saira.className} text-[14px] font-medium`}>
                  Secure Wallets
                </h3>
                <p className="text-[10px] font-extralight">
                  Keep your digital assets in user wallets
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto  sm:w-fit rounded-md p-2 bg-white  dark:bg-[#161735]">
            <div className="w-[250px] min-h-[100px] p-2 py-4 flex flex-col gap-3">
              <div className="w-fit p-[6px] bg-gray-300 dark:bg-slate-700 rounded-full">
                <TbBracketsAngle className="text-lg" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h3 className={` ${saira.className} text-[14px] font-medium`}>
                  Payment Options
                </h3>
                <p className="text-[10px] font-extralight">
                  More than 10 ways to deposit to an account
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto  sm:w-fit rounded-md p-2 bg-white  dark:bg-[#161735]">
            <div className="w-[250px] b-20 p-2 py-4 min-h-[100px]  flex flex-col gap-3">
              <div className="w-fit p-[6px] bg-gray-300 dark:bg-slate-700 rounded-full">
                <IoWalletOutline className="text-lg" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h3 className={` ${saira.className} text-[14px] font-medium`}>
                  Algorithmic Trading
                </h3>
                <p className="text-[10px] font-extralight">
                  API for crossplatform trading robots
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* effect */}
      <div className="absolute hidden sm:block z-[50] bottom-0 left-0 w-full  h-[80%] bg-gradient-to-b from-transparent via-[#eff0f2]/50 dark:via-[#06062a]/50 to-[#eff0f2]  dark:to-[#06062a] "></div>
    </div>
  );
};

export default FeaturesContent;
