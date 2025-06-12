"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { IoIosArrowRoundForward } from "react-icons/io";
import { saira } from "@/utils/Font";

type Slides = {
  id: string;
  heading: string;
  content: string;
  button: string;
  buttonColor: string;
  imgUrl: string;
};

export default function CreateAccountCard() {
  const t = useTranslations("homePage.createAccount");

  const slides: Slides[] = [
    {
      id: "1",
      heading: t("step1.heading"),
      content: t("step1.content"),
      button: t("step1.button"),
      buttonColor: "bg-green-700",
      imgUrl: "/images/computerSignUp.png",
    },
    {
      id: "2",
      heading: t("step2.heading"),
      content: t("step2.content"),
      button: t("step2.button"),
      buttonColor: "bg-yellow-700",
      imgUrl: "/images/computerSignUp.png",
    },
    {
      id: "3",
      heading: t("step3.heading"),
      content: t("step3.content"),
      button: t("step3.button"),
      buttonColor: "bg-cyan-700",
      imgUrl: "/images/computerSignUp.png",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div className="w-full flex flex-col  sm:flex-row gap-6 justify-center items-center py-2  mt-20">
      <div className=" w-full py-4 sm:py-0  pl-10 pr-10 justify-between sm:w-fit  flex text-white flex-row sm:flex-col sm:justify-center items-center gap-1  ">
        <div
          className={`px-2 rounded-full bg-green-600 dark:bg-green-700 text-[16px] xl:text-[0.8rem] xl:p-1.5 xl:px-3`}
        >
          1
        </div>
        <div
          className={`h-0 sm:h-3 w-full sm:w-0 xl:h-4 ${
            index >= 1
              ? "border-green-600"
              : "border-slate-300 dark:border-white"
          } border transition-all duration-300 `}
        ></div>
        <div
          className={`px-2 rounded-full ${
            index >= 1
              ? "bg-green-600 dark:bg-green-700"
              : "bg-slate-300 dark:bg-gray-700"
          } transition-all duration-300 text-[16px]  xl:text-[0.8rem] xl:p-1.5 xl:px-3`}
        >
          2
        </div>
        <div
          className={`h-0 sm:h-3 w-full sm:w-0 xl:h-4 ${
            index >= 2
              ? "border-green-600"
              : "border-slate-300 dark:border-white"
          } border transition-all duration-300`}
        ></div>
        <div
          className={`px-2 rounded-full ${
            index >= 2
              ? "bg-green-600 dark:bg-green-700"
              : "bg-slate-300 dark:bg-gray-700"
          } transition-all duration-300 text-[16px] xl:text-[0.8rem] xl:p-1.5 xl:px-3`}
        >
          3
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center gap-2"
        >
          {/* <div className="w-full flex flex-col  sm:flex-row gap-6 justify-center items-center py-2  mt-20"> */}
          {/* counting div */}

          <Image
            width={500}
            height={500}
            src={current.imgUrl}
            className="w-[90%] sm:w-[250px] md:w-[300] lg:w-[350px] xl:w-[400px] 2xl:w-[550px] ml-4"
            alt=""
          />
          {/* </div> */}
        </motion.div>
      </AnimatePresence>

      {/* content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ y: 0, opacity: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -0, opacity: 0.2 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="flex flex-col sm:justify-start  items-start  sm:items-start text-start sm:text-start  w-full sm:w-fit ml-20 sm:ml-0 ">
            {/* title */}
            <h3 className={`${saira.className} font-bold text-xl`}>
              {current.heading}
            </h3>
            {/* sub title */}
            <p className="max-w-[320px] xl:max-w-[400px] 2xl:max-w-[450px] text-xs font-light mt-1 ">
              {current.content}
            </p>
            {/* button */}
            <button
              className={`w-fit flex mt-4 text-xs xl:text-[0.9rem] items-center gap-1 px-3 py-1 xl:py-2 rounded-full ${current.buttonColor} text-white dark:text-black cursor-pointer `}
            >
              {current.button}
              <IoIosArrowRoundForward className="text-lg" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
