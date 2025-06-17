"use client";
import { saira } from "@/utils/Font";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

import { IoMdStats } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { PiCrownSimple, PiCurrencyDollarSimpleBold } from "react-icons/pi";
import CoinCircle from "./CoinCircle";
import { useTranslations } from "next-intl";
import { HomeDataStructure_int } from "../types";

const testCoin = [
  "/images/coins/usdtrounded.png",
  "/images/coins/binancerounded.png",
  "/images/coins/btc.png",
  "/images/coins/ethereumrounded.png",
  "/images/coins/polygonrounded.png",
];

type Props = {
  marketData: HomeDataStructure_int;
};
type Data_int = {
  pair: number;
  volume: number;
  coins: number;
  countries: number;
};

const Marketing: FC<Props> = ({ marketData }) => {
  const [coinRotatingData, setCoinRotatingData] = useState(testCoin);
  const t = useTranslations("homePage.getStarted.marketing");
  const [data, setData] = useState<Data_int>();

  useEffect(() => {
    if (!marketData) return;
    let temp24hVolume = 0;
    for (let i = 0; i < marketData.analytics.length; i++) {
      temp24hVolume +=
        marketData.analytics[i].usdrate * marketData.analytics[i].baseVolume;
    }

    const tempVar = temp24hVolume / marketData.btcrate;
    setData({
      pair: marketData.analytics.length,
      volume: tempVar,
      coins: marketData.coinslisted ? marketData.coinslisted : 543,
      countries: marketData.supportedCountries,
    });
  }, [marketData]);

  useEffect(() => {
    setTimeout(() => {
      const tempData = coinRotatingData;
      const popedData = tempData.pop();
      setCoinRotatingData([popedData as string, ...tempData]);
    }, 2000);
  }, [coinRotatingData]);

  return (
    <div>
      <div className=" mr-[6px] w-[92vw] h-[78vw]  sm:w-[80vw] sm:h-[33vw] md:w-[60vw] md:h-[25vw] flex flex-col-reverse sm:flex-row gap-2 relative   z-[80]  ">
        {/* left most div */}
        {/* shadow-[1px_1px_3px_green] dark:shadow-[1px_1px_1px_green] */}
        <div className=" w-full h-[40%] sm:w-[35%] sm:h-[100%] xl:h-[97%] bg-white  dark:bg-[#161735]   rounded-lg relative    ">
          {/* part shadow effect */}
          <div className="partShadowMarketing1"></div>
          {/* coins */}

          <div className="w-[50%] sm:w-[90%] mx-auto   flex justify-center items-center absolute top-[12%] left-0 translate-x-0 sm:left-1/2 sm:-translate-x-1/2 ">
            <Image
              src={
                coinRotatingData[0]
                  ? coinRotatingData[0]
                  : "/images/coins/usdtrounded.png"
              }
              alt=""
              width={100}
              height={100}
              className="w-[16%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative z-[30] left-[10%]  "
            />

            <Image
              src={
                coinRotatingData[1]
                  ? coinRotatingData[1]
                  : "/images/coins/binancerounded.png"
              }
              alt=""
              width={100}
              height={100}
              className="w-[20%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative  z-[40] left-[5%] "
            />

            {/* btc */}
            <Image
              src={
                coinRotatingData[2]
                  ? coinRotatingData[2]
                  : "/images/coins/btc.png"
              }
              alt=""
              width={100}
              height={100}
              className="w-[25%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full  h-auto z-[50] "
            />

            <Image
              src={
                coinRotatingData[3]
                  ? coinRotatingData[3]
                  : "/images/coins/ethereumrounded.png"
              }
              alt=""
              width={100}
              height={100}
              className="w-[20%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative -left-[5%] z-[40]"
            />

            <Image
              src={
                coinRotatingData[4]
                  ? coinRotatingData[4]
                  : "/images/coins/polygonrounded.png"
              }
              alt=""
              width={100}
              height={100}
              className="w-[16%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative z-[30] -left-[10%]"
            />
          </div>

          {/* content */}
          <div className="w-[50%] right-0 sm:w-full absolute bottom-[7%] flex flex-wrap gap-4 h-fit  justify-evenly items-center">
            <div className="">
              {data ? (
                <h2
                  className={`text-[16px] xl:text-lg font-bold ${saira.className}`}
                >
                  {data?.pair}
                </h2>
              ) : (
                <div className="h-6 w-full mb-2 bg-gray-400 dark:bg-[#353563] rounded animate-pulse"></div>
              )}
              <p className="text-[10px] xl:text-xs font-light">
                {t("marketPairs")}
              </p>
            </div>
            <div className="p-1 rounded-full bg-green-600 dark:bg-green-600/20">
              <IoMdStats className=" text-white dark:text-green-600 text-md xl:text-xl" />
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
                  <p className="text-[10px] xl:text-xs font-light">
                    {t("24hVolume")}
                  </p>
                  {data ? (
                    <h2
                      className={`text-[16px] xl:text-lg font-bold ${saira.className}`}
                    >
                      {data?.volume.toFixed(4)}
                    </h2>
                  ) : (
                    <div className="h-6 w-full mt-2 bg-gray-400 dark:bg-[#353563] rounded animate-pulse"></div>
                  )}
                </div>
                <div className="p-1 rounded-full bg-green-600 dark:bg-green-600/20 ">
                  <PiCurrencyDollarSimpleBold className=" text-white dark:text-green-700 text-md xl:text-xl" />
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[50%] bg-white dark:bg-[#161735]  rounded-b-lg absolute -bottom-[10px] left-0 ">
              <Image
                src="/images/man1.png"
                alt=""
                width={300}
                height={300}
                className="w-[86%] absolute bottom-0 left-[7%]  "
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
                {data ? (
                  <h2
                    className={`text-[16px] xl:text-lg font-bold ${saira.className}`}
                  >
                    {data?.countries}
                  </h2>
                ) : (
                  <div className="h-6 w-full mb-2 bg-gray-400 dark:bg-[#353563] rounded animate-pulse"></div>
                )}
                <p className="text-[10px] xl:text-xs font-light">
                  {t("countries")}
                </p>
              </div>
              <div className="p-1 rounded-full bg-green-600 dark:bg-green-600/20 ">
                <IoLocationOutline className=" text-white dark:text-green-600 text-md xl:text-xl" />
              </div>
            </div>
          </div>
          {/* bottom right */}
          <div className="w-[50%] h-[68%] rounded-lg bg-white dark:bg-[#161735] absolute -bottom-[20px] -right-[10px] shadow-[1px_1px_3px_green] dark:shadow-[1px_1px_1px_green] overflow-hidden  ">
            <div className=" flex gap-4 h-fit mt-[10px] w-full justify-evenly items-center">
              <div>
                {data ? (
                  <h2
                    className={`text-[16px] xl:text-lg font-bold ${saira.className}`}
                  >
                    {data?.coins}
                  </h2>
                ) : (
                  <div className="h-6 w-full mb-2 bg-gray-400 dark:bg-[#353563] rounded animate-pulse"></div>
                )}
                <p className="text-[10px] xl:text-xs  font-light">
                  {t("coinsListed")}
                </p>
              </div>
              <div className="p-1 rounded-full bg-green-600 dark:bg-green-600/20">
                <PiCrownSimple className=" text-white dark:text-green-600 text-ms xl:text-xl" />
              </div>
            </div>
            <div className="absolute w-full h-full top-1/2 -right-1/2 -translate-y-[10%]  sm:translate-y-0 md:-translate-y-[10%] md:-translate-x-[10%] 2xl:translate-y-[20%] 2xl:translate-x-[20%] xl:translate-y-[10%] xl:translate-x-[10%]  translate-x-0">
              <CoinCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
