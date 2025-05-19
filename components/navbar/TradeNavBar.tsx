"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { RiBtcLine } from "react-icons/ri";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import Image from "next/image";

const TradeNavBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let container: HTMLDivElement | null;
  const [isScrollStart, setIsScrollStart] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(true);
  container = containerRef.current;

  const scrollLeft = () => {
    container = containerRef.current;
    if (container) {
      console.log("Container", container);
      container.scrollLeft += 100;
      if (container.clientWidth < container.scrollWidth) {
        setIsScrollStart(true);
      }
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        setIsScrollEnd(false);
      }
    }
  };

  const scrollRight = () => {
    container = containerRef.current;
    if (container) {
      console.log("Container", container);
      container.scrollLeft -= 100;
      if (container.clientWidth < container.scrollWidth) {
        setIsScrollEnd(true);
      }
      if (container.scrollLeft <= 0) {
        setIsScrollStart(false);
      }
    }
  };

  const testData = [
    {
      coinUrl: "/images/coins/btc.png",
      name: "BTC",
    },
    {
      coinUrl: "/images/coins/binancerounded.png",
      name: "BNB",
    },
    {
      coinUrl: "/images/coins/ethereumrounded.png",
      name: "ETH",
    },
    {
      coinUrl: "/images/coins/polygonrounded.png",
      name: "POLY",
    },
    {
      coinUrl: "/images/coins/usdtrounded.png",
      name: "USDT",
    },
  ];

  const test = [];

  for (let i = 0; i < 1; i++) {
    test.push(...testData);
  }

  return (
    <div className="w-full bg-[#eff0f2] dark:bg-[#1d1f38] flex justify-center my-4  h-[40px]  ">
      {/* container div */}
      <div className="w-[94%] flex gap-6 items-center  overflow-hidden">
        {/* search logo */}
        <div className="w-fit">
          <MdSearch className="text-2xl cursor-pointer" />
        </div>
        {/* crypto name and tag */}
        <div
          className="w-full max-w-full flex gap-14 overflow-x-hidden "
          ref={containerRef}
        >
          {test.map((val, index) => (
            <div className="w-fit  flex gap-1 items-center" key={index}>
              {/* name */}
              <Image
                width={32}
                height={32}
                src={val.coinUrl}
                alt=""
                className="w-5 h-auto"
              />
              <div className="text-[12px]">{val.name}</div>
            </div>
          ))}
          <div className="w-fit px-2 flex gap-1 items-center">
            {/* name */}
            <RiBtcLine className="text-[18px] bg-yellow-400 rounded-full" />
            <div className="text-sm">BTC</div>
          </div>
        </div>
        {/* scroll button*/}
        <div className="w-fit flex gap-1 text-2xl">
          <CiCircleChevLeft
            className={` ${
              isScrollStart
                ? "text-black dark:text-white"
                : "text-slate-400 dark:text-slate-600"
            } cursor-pointer`}
            onClick={isScrollStart ? scrollRight : () => {}}
          />

          <CiCircleChevRight
            className={` ${
              isScrollEnd
                ? "text-black dark:text-white"
                : "text-slate-400 dark:text-slate-600"
            } cursor-pointer`}
            onClick={isScrollEnd ? scrollLeft : () => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default TradeNavBar;
