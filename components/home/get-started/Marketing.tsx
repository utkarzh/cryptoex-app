"use client";
import { saira } from "@/utils/Font";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCoins } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import CoinCircle from "./CoinCircle";
import { useTranslations } from "next-intl";

const testCoin = [
  "/images/coins/usdtrounded.png",
  "/images/coins/binancerounded.png",
  "/images/coins/btc.png",
  "/images/coins/ethereumrounded.png",
  "/images/coins/polygonrounded.png",
];

const Marketing = () => {
  const [coinRotatingData, setCoinRotatingData] = useState(testCoin);

  const t = useTranslations("homePage.getStarted.marketing");

  useEffect(() => {
    setTimeout(() => {
      const tempData = coinRotatingData;
      const popedData = tempData.pop();
      console.log("Poped data", popedData);
      console.log("temp Array", tempData);
      const newArr = [popedData, ...tempData];
      console.log("New Array ", newArr);
      setCoinRotatingData([popedData as string, ...tempData]);
    }, 1700);
  }, [coinRotatingData]);
  console.log("coinRotaing data is", coinRotatingData);
  return (
    <div>
      <div className=" mr-[6px] w-[92vw] h-[78vw]  sm:w-[80vw] sm:h-[33vw] md:w-[60vw] md:h-[25vw] flex flex-col-reverse sm:flex-row gap-2 relative   z-[80]  ">
        {/* left most div */}
        {/* shadow-[1px_1px_3px_green] dark:shadow-[1px_1px_1px_green] */}
        <div className=" w-full h-[40%] sm:w-[35%] sm:h-[100%] bg-white  dark:bg-[#161735]   rounded-lg relative    ">
          {/* part shadow effect */}
          <div className="partShadowMarketing1"></div>
          {/* coins */}

          <div className="w-[50%] sm:w-[90%] mx-auto   flex justify-center items-center absolute top-[12%] left-0 translate-x-0 sm:left-1/2 sm:-translate-x-1/2 ">
            <Image
              src={coinRotatingData[0]}
              alt=""
              width={100}
              height={100}
              className="w-[16%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative z-[30] left-[10%]  "
            />

            <Image
              src={coinRotatingData[1]}
              alt=""
              width={100}
              height={100}
              className="w-[20%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative  z-[40] left-[5%] "
            />

            {/* btc */}
            <Image
              src={coinRotatingData[2]}
              alt=""
              width={100}
              height={100}
              className="w-[25%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full  h-auto z-[50] "
            />

            <Image
              src={coinRotatingData[3]}
              alt=""
              width={100}
              height={100}
              className="w-[20%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative -left-[5%] z-[40]"
            />

            <Image
              src={coinRotatingData[4]}
              alt=""
              width={100}
              height={100}
              className="w-[16%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative z-[30] -left-[10%]"
            />
          </div>

          {/* content */}
          <div className="w-[50%] right-0 sm:w-full absolute bottom-[7%] flex flex-wrap gap-4 h-fit  justify-evenly items-center">
            <div className="">
              <h2 className={`text-[16px] font-bold ${saira.className}`}>
                283
              </h2>
              <p className="text-[10px] font-light">{t("marketPairs")}</p>
            </div>
            <div className="p-1 rounded-full bg-green-600 dark:bg-green-600/20">
              <IoMdStats className=" text-white dark:text-green-600 text-md" />
            </div>
          </div>
        </div>

        <div className="w-[calc(100%-10px)]  mb-6 sm:mt-0 h-[60%] sm:w-[65%] sm:h-[calc(94%-6px)]  flex flex-col gap-4  relative  ">
          {/* topright div */}
          <div className="relative w-[100%] h-[70%]">
            <div className="w-full h-full bg-white dark:bg-[#161735] rounded-lg"></div>
            <div className="w-[50%] h-[50%] bg-[#eff0f2] dark:bg-[#06062a]  rounded-tl-lg absolute bottom-0 right-0"></div>
            <div className="w-[50%] h-[50%] bg-white dark:bg-[#161735] rounded-r-lg absolute top-0 -right-[10px] shadow-[1px_1px_1px_green]  flex justify-center items-center  ">
              {/* content */}
              <div className=" flex gap-4 justify-evenly items-center w-full">
                <div>
                  <p className="text-[10px] font-light">{t("24hVolume")}</p>
                  <h2 className={`text-[16px] font-bold ${saira.className}`}>
                    62689.44
                  </h2>
                </div>
                <div className="p-1 rounded-full bg-green-600 dark:bg-green-600/20 ">
                  <PiCurrencyDollarSimpleBold className=" text-white dark:text-green-700 text-md" />
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[50%] bg-white dark:bg-[#161735]  rounded-b-lg absolute -bottom-[10px] left-0 ">
              <Image
                src="/images/man.png"
                alt=""
                width={300}
                height={300}
                className="w-[80%] sm:w-[96%]   absolute bottom-0 left-[10%] sm:left-[2%]"
              />
              <div className="absolute z-[20] top-0 left-0 w-full  h-full bg-gradient-to-b from-transparent via-[#06062a]/0 to-white/70 dark:to-[#06062a]/60 pointer-events-none "></div>
            </div>
          </div>
          {/* middle div */}
          <div className=" absolute -bottom-[20px]  left-0 w-[50%] h-[30%] rounded-lg bg-white dark:bg-[#161735]   ">
            {/* part shadow effect */}
            <div className="partShadowMarketing2"></div>
            <div className=" flex gap-4 h-full w-full justify-evenly items-center">
              <div>
                <h2 className={`text-[16px] font-bold ${saira.className}`}>
                  150
                </h2>
                <p className="text-[10px] font-light">{t("countries")}</p>
              </div>
              <div className="p-1 rounded-full bg-green-600 dark:bg-green-600/20 ">
                <IoLocationOutline className=" text-white dark:text-green-600 text-md" />
              </div>
            </div>
          </div>
          {/* bottom right */}
          <div className="w-[50%] h-[68%] rounded-lg bg-white dark:bg-[#161735] absolute -bottom-[20px] -right-[10px] shadow-[1px_1px_3px_green] dark:shadow-[1px_1px_1px_green] overflow-hidden ">
            <div className=" flex gap-4 h-fit mt-[10px] w-full justify-evenly items-center">
              <div>
                <h2 className={`text-[16px] font-bold ${saira.className}`}>
                  187
                </h2>
                <p className="text-[10px] font-light">{t("coinsListed")}</p>
              </div>
              <div className="p-1 rounded-full bg-green-600 dark:bg-green-600/20">
                <FaCoins className=" text-white dark:text-green-600 text-ms" />
              </div>
            </div>
            <div className="absolute w-full h-full top-1/2 -right-1/2 -translate-y-[10%] sm:translate-y-0 translate-x-0">
              <CoinCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
