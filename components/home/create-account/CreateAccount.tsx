"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import CreateAccountCard from "./CreateAccountCard";

const CreateAccount = () => {
  const [activeState, setActiveState] = useState<number>(1);

  const t = useTranslations("homePage.createAccount");

  const { ref, inView } = useInView({
    threshold: 1, // Trigger when 10% of the element is visible
    triggerOnce: true, // Optional: Only trigger once
  });

  const contentChangeHandler = () => {
    for (let i = 1; i < 3; i++) {
      setTimeout(() => {
        setActiveState((prev) => prev + 1);
        // setActiveState(1);
      }, i * 2000);
    }
  };

  useEffect(() => {
    if (inView) {
      contentChangeHandler();
    }
  }, [inView]);

  return (
    <>
      {false && (
        <div
          ref={ref}
          className="w-full flex flex-col  sm:flex-row gap-6 justify-center items-center py-2  mt-20"
          onMouseEnter={contentChangeHandler}
        >
          {/* counting div */}
          <div className=" w-full py-4 sm:py-0  pl-10 pr-10 justify-between sm:w-fit  flex text-white flex-row sm:flex-col sm:justify-center items-center gap-1  ">
            <div
              className={`px-2 rounded-full bg-green-600 dark:bg-green-700 text-[16px] xl:text-[0.8rem] xl:p-1.5 xl:px-3`}
            >
              1
            </div>
            <div
              className={`h-0 sm:h-3 w-full sm:w-0 xl:h-4 ${
                activeState >= 2 ? "border-green-600" : "border-transparent"
              } border transition-all duration-300 `}
            ></div>
            <div
              className={`px-2 rounded-full ${
                activeState >= 2
                  ? "bg-green-600 dark:bg-green-700"
                  : "bg-slate-300 dark:bg-gray-700"
              } transition-all duration-300 text-[16px]  xl:text-[0.8rem] xl:p-1.5 xl:px-3`}
            >
              2
            </div>
            <div
              className={`h-0 sm:h-3 w-full sm:w-0 xl:h-4 ${
                activeState >= 3
                  ? "border-green-600"
                  : "border-slate-300 dark:border-white"
              } border transition-all duration-300`}
            ></div>
            <div
              className={`px-2 rounded-full ${
                activeState >= 3
                  ? "bg-green-600 dark:bg-green-700"
                  : "bg-slate-300 dark:bg-gray-700"
              } transition-all duration-300 text-[16px] xl:text-[0.8rem] xl:p-1.5 xl:px-3`}
            >
              3
            </div>
          </div>
          {/* image*/}

          {activeState == 1 && (
            <Image
              width={500}
              height={500}
              src={`/images/computerSignUp.png`}
              className="w-[90%] sm:w-[250px] md:w-[300] lg:w-[350px] xl:w-[400px] 2xl:w-[550px] ml-4"
              alt=""
            />
          )}

          {activeState == 2 && (
            <Image
              width={250}
              height={250}
              src={`/images/computerSignUp.png`}
              className="w-[90%] sm:w-[250px] md:w-[300] lg:w-[350px] xl:w-[400px] 2xl:w-[550px] ml-4"
              alt=""
            />
          )}

          {activeState >= 3 && (
            <Image
              width={700}
              height={700}
              src={`/images/computerSignUp.png`}
              className="w-[90%] sm:w-[250px] md:w-[300] lg:w-[350px] xl:w-[400px] 2xl:w-[550px] ml-4"
              alt=""
            />
          )}

          {/* create account content */}
          {activeState == 1 && (
            <div className="flex flex-col sm:justify-start  items-start  sm:items-start text-start sm:text-start  w-full sm:w-fit ml-20 sm:ml-0 ">
              {/* title */}
              <h3 className={`${saira.className} font-bold text-xl`}>
                {t("step1.heading")}
              </h3>
              {/* sub title */}
              <p className="max-w-[320px] xl:max-w-[400px] 2xl:max-w-[450px] text-xs font-light mt-1 ">
                {t("step1.content")}
              </p>
              {/* button */}
              <button className="w-fit flex mt-4 text-xs xl:text-[0.9rem] items-center gap-1 px-3 py-1 xl:py-2 rounded-full bg-green-700 text-white dark:text-black cursor-pointer ">
                {t("step1.button")}
                <IoIosArrowRoundForward className="text-lg" />
              </button>
            </div>
          )}

          {activeState == 2 && (
            <div className="flex flex-col sm:justify-start  items-start  sm:items-start text-start sm:text-start  w-full sm:w-fit ml-20 sm:ml-0 ">
              {/* title */}
              <h3 className={`${saira.className} font-bold text-xl`}>
                {t("step2.heading")}
              </h3>
              {/* sub title */}
              <p className="max-w-[320px] xl:max-w-[400px] 2xl:max-w-[450px] text-xs font-light mt-1 ">
                {t("step2.content")}
              </p>
              {/* button */}
              <button className="w-fit flex mt-4 text-xs xl:text-[0.9rem]  items-center gap-1 px-3 py-1 xl:py-2 rounded-full bg-cyan-700 text-white dark:text-black cursor-pointer ">
                {t("step2.button")}
                <IoIosArrowRoundForward className="text-lg" />
              </button>
            </div>
          )}

          {activeState >= 3 && (
            <div className="flex flex-col sm:justify-start  items-start  sm:items-start text-start sm:text-start  w-full sm:w-fit ml-20 sm:ml-0  ">
              {/* title */}
              <h3 className={`${saira.className} font-bold text-xl`}>
                {t("step3.heading")}
              </h3>
              {/* sub title */}
              <p className="max-w-[320px] xl:max-w-[400px] 2xl:max-w-[450px] text-xs font-light mt-1">
                {t("step3.content")}
              </p>
              {/* button */}
              <button className="w-fit flex mt-4 text-xs xl:text-[0.9rem]  items-center gap-1 px-3 py-1 xl:py-2 rounded-full bg-yellow-700 text-white dark:text-black cursor-pointer ">
                {t("step3.button")}
                <IoIosArrowRoundForward className="text-lg" />
              </button>
            </div>
          )}
        </div>
      )}

      <CreateAccountCard />
    </>
  );
};

export default CreateAccount;
