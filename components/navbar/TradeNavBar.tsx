"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import Image from "next/image";
import LoadingTableSkeleton from "../common/loading/LoadingTableSkeleton";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AvailablePairs_int,
  SingleAvailablePair_int,
  TradeApiResult_int,
} from "../trade/trade/types";
import { useGetAvailablePairsMutation } from "@/redux/masternode/trade/eventsApi";

const TradeNavBar = () => {
  const pathname = usePathname();
  const base = pathname.split("/")[2];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [analytics, setAnalytics] = useState<SingleAvailablePair_int[]>([]);

  const [getAvailablePairs, { data }] =
    useGetAvailablePairsMutation<TradeApiResult_int<AvailablePairs_int>>();

  useEffect(() => {
    getAvailablePairs({});
  }, []);

  useEffect(() => {
    if (!data) return;
    if (data.status === 1) {
      const filtered = data.availablepairs.filter(
        (item) =>
          item.vendor.toLowerCase().includes(search.toLowerCase()) ||
          item.pair.toLowerCase().includes(search.toLowerCase())
      );
      setAnalytics(filtered);
    }
  }, [data, search]);

  // Scroll helpers
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setIsScrollStart(container.scrollLeft <= 5);
      setIsScrollEnd(
        container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 5
      );
    }
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += 100;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // initial check

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="w-full bg-white dark:bg-[#1d1f38] flex justify-center my-4 2xl:my-7 py-2 h-[40px] xl:h-[45px] 2xl:h-[50px]">
      <div className="w-[94%] flex gap-6 items-center overflow-hidden relative">
        {/* Scroll fade effects */}
        <div className="h-full w-10 absolute z-[30] top-0 right-[75px] bg-gradient-to-r from-transparent to-white dark:to-[#1d1f38] opacity-100" />
        <div className="h-full w-10 absolute z-[30] top-0 left-[45px] bg-gradient-to-l from-transparent to-white dark:to-[#1d1f38] opacity-100" />

        {/* Search toggle */}
        <div className="w-fit">
          {!isSearch ? (
            <MdSearch
              className="text-2xl cursor-pointer"
              onClick={() => setIsSearch(true)}
            />
          ) : (
            <div className="relative flex items-center -right-3 z-[50]">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="dark:bg-[#444561] bg-slate-600/15 text-xs px-8 py-1 rounded-md focus:outline-none w-30 md:w-40 lg:w-full autofill"
              />
              <IoSearch className="absolute top-1 left-2 opacity-60" />
              <MdClose
                className="absolute top-1 right-1 sm:right-2 opacity-60 cursor-pointer hover:scale-110 hover:text-red-600 transition-all"
                onClick={() => {
                  setIsSearch(false);
                  setSearch("");
                }}
              />
            </div>
          )}
        </div>

        {/* Crypto list */}
        {data && data.status === 1 ? (
          <div
            className="w-full max-w-full flex gap-14 overflow-x-auto no-scrollbar scroll-smooth"
            ref={containerRef}
          >
            {analytics.length > 0 ? (
              analytics.map((val, index) => (
                <Link
                  href={`/${base}/${val.pair}`}
                  key={index}
                  className="flex gap-1 items-center min-w-max"
                >
                  <Image
                    width={32}
                    height={32}
                    src={val.logopath}
                    alt=""
                    className="w-5 h-auto"
                  />
                  <div className="text-xs">{val.pair}</div>
                </Link>
              ))
            ) : (
              <div className="text-xs flex items-center">No Data Found</div>
            )}
          </div>
        ) : (
          <div className="w-full h-[60px]">
            <LoadingTableSkeleton rows={0} columns={10} />
          </div>
        )}

        {/* Scroll buttons */}
        <div className="w-fit flex gap-1 text-2xl">
          <CiCircleChevLeft
            className={`${
              !isScrollStart
                ? "text-black dark:text-white cursor-pointer"
                : "text-slate-400 dark:text-slate-600"
            }`}
            onClick={!isScrollStart ? scrollLeft : undefined}
          />
          <CiCircleChevRight
            className={`${
              !isScrollEnd
                ? "text-black dark:text-white cursor-pointer"
                : "text-slate-400 dark:text-slate-600"
            }`}
            onClick={!isScrollEnd ? scrollRight : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default TradeNavBar;
