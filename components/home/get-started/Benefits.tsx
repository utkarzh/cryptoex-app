"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { BiDollar, BiTrendingUp } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaCrosshairs } from "react-icons/fa";
import { ImUserPlus } from "react-icons/im";
import { IoStorefront } from "react-icons/io5";

const Benefits = () => {
  const [isUserBenefits, setIsUserBenifits] = useState(false);
  const t = useTranslations("homePage.getStarted.benefits");

  const vendorData = [
    {
      icons: <FaCrosshairs className="text-[20px]  " />,
      heading: t("vendor.ben1.title"),
      content: t("vendor.ben1.content"),
    },
    {
      icons: <BiTrendingUp className="text-[20px]" />,
      heading: t("vendor.ben2.title"),
      content: t("vendor.ben2.content"),
    },
    {
      icons: <BiDollar className="text-[20px]" />,
      heading: t("vendor.ben3.title"),
      content: t("vendor.ben3.content"),
    },
    {
      icons: <CiStar className="text-[20px]" />,
      heading: t("vendor.ben4.title"),
      content: t("vendor.ben4.content"),
    },
  ];

  const userData = [
    {
      icons: <FaCrosshairs className="text-[20px]" />,
      heading: t("vendor.ben1.title"),
      content: t("vendor.ben1.content"),
    },
    {
      icons: <BiTrendingUp className="text-[20px]" />,
      heading: t("vendor.ben2.title"),
      content: t("vendor.ben2.content"),
    },
    {
      icons: <BiDollar className="text-[20px]" />,
      heading: t("vendor.ben3.title"),
      content: t("vendor.ben3.content"),
    },
    {
      icons: <CiStar className="text-[20px]" />,
      heading: t("vendor.ben4.title"),
      content: t("vendor.ben4.content"),
    },
  ];

  return (
    <div className="w-full  h-fit   ">
      {/* buttom for small screen */}
      <div className=" w-fit sm:hidden mx-auto mb-10  text-sm bg-slate-300 text-black dark:text-white dark:bg-gray-700 rounded-full flex items-center ">
        <div
          className={`w-full text-nowrap  ${
            !isUserBenefits
              ? "bg-green-600 dark:bg-green-700 text-white "
              : "bg-transparent "
          }  rounded-full px-3 py-2 cursor-pointer transition-all duration-300`}
          onClick={() => setIsUserBenifits(false)}
        >
          {t("type_vendor")}
        </div>
        <div
          className={` w-full ${
            isUserBenefits
              ? "bg-green-600 dark:bg-green-700 text-white"
              : "bg-transparent "
          }  rounded-full px-4 py-2  cursor-pointer transition-all duration-300 text-nowrap `}
          onClick={() => setIsUserBenifits(true)}
        >
          {t("type_user")}
        </div>
      </div>
      {/* content */}
      <div className="w-[96%]  sm:w-[75%]  relative rounded-r-md py-8 flex justify-end  ">
        <div className="bg-[url('/images/hexblock.png')] bg-cover bg-center opacity-30  h-full w-full absolute top-0 right-0 bg-transparent rounded-r-md  z-[20] "></div>
        <div
          className={`opacity-80 rounded-r-md  h-full w-full absolute top-0 right-0 ${
            isUserBenefits
              ? " bg-green-400 dark:bg-green-600"
              : "bg-green-400 dark:bg-green-600"
          } transition-all duration-500 z-[30]`}
        ></div>

        <div
          className={`w-[95%] sm:w-[80%] z-[40]   ${
            isUserBenefits
              ? "bg-green-800/50 dark:bg-green-600/50"
              : "bg-green-800/50 dark:bg-green-600/50"
          }  transition-all duration-500 p-4 py-6 xl:py-10 xl:my-2 rounded-l-md flex flex-col gap-6 sm:gap-10`}
        >
          <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-4 ">
            {/* first card */}
            <div className="w-full h-full flex justify-start  sm:pl-6 items-center gap-2 ">
              <div className="border rounded-full p-1">
                {!isUserBenefits ? vendorData[0].icons : userData[0].icons}
              </div>

              <div className="flex flex-col gap-1 ">
                <h2
                  className={`${saira.className} text-[14px] xl:text-lg font-bold`}
                >
                  {!isUserBenefits
                    ? vendorData[0].heading
                    : userData[0].heading}
                </h2>
                <p className="font-extralight text-xs">
                  {!isUserBenefits
                    ? vendorData[0].content
                    : userData[0].content}
                </p>
              </div>
            </div>

            {/* 2nd card */}
            <div className="w-full h-full flex sm:pl-6 justify-start  items-center gap-2">
              <div className="border  rounded-full p-1">
                {!isUserBenefits ? vendorData[1].icons : userData[1].icons}
              </div>

              <div className="flex flex-col gap-1">
                <h2
                  className={`${saira.className}  text-[14px] xl:text-lg font-bold`}
                >
                  {!isUserBenefits
                    ? vendorData[1].heading
                    : userData[1].heading}
                </h2>
                <p className="font-extralight text-xs">
                  {!isUserBenefits
                    ? vendorData[1].content
                    : userData[1].content}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-4">
            {/* 3rd card */}
            <div className="w-full h-full flex sm:pl-6 justify-start  items-center gap-2">
              <div className="border  rounded-full p-1">
                {!isUserBenefits ? vendorData[2].icons : userData[2].icons}
              </div>

              <div className="flex flex-col gap-1">
                <h2
                  className={`${saira.className} text-[14px] xl:text-lg font-bold`}
                >
                  {!isUserBenefits
                    ? vendorData[2].heading
                    : userData[2].heading}
                </h2>
                <p className="font-extralight text-xs">
                  {!isUserBenefits
                    ? vendorData[2].content
                    : userData[2].content}
                </p>
              </div>
            </div>

            {/* 4th card */}
            <div className="w-full h-full flex justify-start sm:pl-6  items-center gap-2">
              <div className="border  rounded-full p-1">
                <CiStar className="text-[20px] xl:text-[26px]" />
              </div>

              <div className="flex flex-col gap-1">
                <h2
                  className={`${saira.className} text-[14px] xl:text-lg font-bold`}
                >
                  {t("vendor.ben4.title")}
                </h2>
                <p className="font-extralight text-xs">
                  {t("vendor.ben4.content")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* side buttons */}
        {/* after sm screen */}
        <div className="absolute hidden sm:flex right-0 top-1/2 -translate-y-1/2 translate-x-1/2  p-1 rounded-full  justify-center items-center z-[90]">
          <div className=" p-1 rounded-full bg-gradient-to-r from-transparent to-[#eff0f2]/70 dark:to-black/70 z-[30] ">
            <div className="p-1 bg-[#eff0f2] rounded-full ">
              {isUserBenefits ? (
                <ImUserPlus className="text-[16px] sm:text-[22px] text-green-700" />
              ) : (
                <IoStorefront className="text-[16px] sm:text-[22px] text-green-600 dark:text-green-700" />
              )}
            </div>
          </div>

          <div
            className={`absolute left-1/2 bg-gradient-to-r ${
              isUserBenefits
                ? "from-green-600/50 dark:from-green-700 via-green-500/50 dark:via-green-700"
                : "from-green-600/50 dark:from-green-700 via-green-500/40 dark:via-green-700"
            } to-[#eff0f2] dark:to-[#06062a] transition-all duration-500 w-fit h-[70%] text-nowrap pl-[50%] z-[20] flex justify-center items-center pr-2 text-[12px] sm:text-[14px] xl:text-[0.8rem] font-medium`}
          >
            <span className="transition-all delay-100 duration-700 ">
              {isUserBenefits ? t("type_user") : t("type_vendor")}
            </span>
          </div>

          <div
            className={`${
              isUserBenefits
                ? "left-1/2 -translate-y-[40px]"
                : "left-1/2 translate-y-[40px]"
            } absolute  text-slate-500 pl-[50%] text-[12px] sm:text-[14px] z-[20] text-nowrap font-medium cursor-pointer  transition-all duration-500 hover:scale-105 hover:text-slate-300 xl:text-[0.8rem]`}
            onClick={() => {
              setIsUserBenifits((prev) => !prev);
            }}
          >
            {!isUserBenefits ? t("type_user") : t("type_vendor")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
