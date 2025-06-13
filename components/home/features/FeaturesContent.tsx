"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import {
  LuChevronDown,
  LuChevronUp,
  LuCircleGauge,
  LuDollarSign,
} from "react-icons/lu";

const FeaturesContent = () => {
  const t = useTranslations("homePage.features");

  const leftSectionFeatures = [
    {
      title: t("leftSection.fet1.title"),
      content: t("leftSection.fet1.content"),
      icons: <LuDollarSign className="text-lg" />,
    },
    {
      title: t("leftSection.fet2.title"),
      content: t("leftSection.fet2.content"),
      icons: <IoWalletOutline className="text-lg" />,
    },
    {
      title: t("leftSection.fet3.title"),
      content: t("leftSection.fet3.content"),
      icons: <IoWalletOutline className="text-lg" />,
    },
  ];
  const rightSectionFeatures = [
    {
      title: t("rightSection.fet1.title"),
      content: t("rightSection.fet1.content"),
      icons: <LuDollarSign className="text-lg" />,
    },
    {
      title: t("rightSection.fet2.title"),
      content: t("rightSection.fet2.content"),
      icons: <IoWalletOutline className="text-lg" />,
    },
    {
      title: t("rightSection.fet3.title"),
      content: t("rightSection.fet3.content"),
      icons: <IoWalletOutline className="text-lg" />,
    },
  ];

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
      container1.scrollTop -= 2; // adjust speed of container1
    }, 20); // ~60fps

    scrollInterval2 = setInterval(() => {
      if (!container2) return;
      if (container2.scrollTop + container2.clientHeight <= 0) {
        clearInterval(scrollInterval2!);
        return;
      }
      container2.scrollTop -= 2; // adjust speed
    }, 20);
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
        container1.scrollTop += 2; // adjust speed of container1
      }, 20); // ~60fps

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
          container2.scrollTop += 2; // adjust speed
        }, 20);
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
      <div className="w-full sm:w-fit  flex flex-col sm:flex-row gap-2   relative  ">
        {/* left section */}
        <div
          className="w-full sm:w-fit max-h-full  sm:max-h-[270px] lg:max-h-[350px] xl:max-h-[500px]  overflow-hidden flex flex-col gap-2"
          ref={containerRef1}
        >
          {[...leftSectionFeatures, leftSectionFeatures[0]].map(
            (val, index) => (
              <div
                key={index}
                className="w-[90%] mx-auto   rounded-md p-2 bg-white   dark:bg-[#161735]"
              >
                <div className="w-full ms:w-[30vw] lg:w-[35vw] xl:p-8  lg:p-6 p-2 py-4 min-h-[100px] justify-start flex flex-col gap-3">
                  <div className="w-fit p-[6px] bg-gray-300 dark:bg-slate-700 rounded-full">
                    {val.icons}
                  </div>
                  <div className="w-full  flex flex-col gap-1">
                    <h3
                      className={` ${saira.className} text-lg lg:text-[1.5rem] font-medium`}
                    >
                      {val.title}
                    </h3>
                    <p className="text-xs lg:text-[1rem] font-extralight">
                      {val.content}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
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
          className="w-full sm:w-fit max-h-full  sm:max-h-[270px] lg:max-h-[350px] xl:max-h-[500px]  overflow-hidden flex flex-col gap-2"
          ref={containerRef2}
        >
          {[...rightSectionFeatures, rightSectionFeatures[0]].map(
            (val, index) => (
              <div
                key={index}
                className="w-[90%] mx-auto rounded-md p-2 bg-white   dark:bg-[#161735]"
              >
                <div className="w-full sm:w-[30vw] lg:w-[35vw] xl:p-8 lg:p-6 p-2 py-4 min-h-[100px] justify-start flex flex-col gap-3">
                  <div className="w-fit p-[6px] bg-gray-300 dark:bg-slate-700 rounded-full">
                    {val.icons}
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <h3
                      className={` ${saira.className} text-lg lg:text-[1.5rem] font-medium`}
                    >
                      {val.title}
                    </h3>
                    <p className="text-xs lg:text-[1rem] font-extralight">
                      {val.content}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* effect */}
      <div className="absolute hidden sm:block z-[50] bottom-0 left-0 w-full  h-[80%] bg-gradient-to-b from-transparent via-[#eff0f2]/50 dark:via-[#06062a]/50 to-[#eff0f2]  dark:to-[#06062a] "></div>
    </div>
  );
};

export default FeaturesContent;
