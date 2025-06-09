"use client";
import React, { useState } from "react";
import { IoSearch, IoTriangle } from "react-icons/io5";
import { saira } from "@/utils/Font";
import { FaBitcoin, FaEthereum } from "react-icons/fa";

import { SiBinance, SiPolygon, SiTether } from "react-icons/si";
import StakeButton from "./StakeButton";
import ReactPaginate from "react-paginate";
import { useTranslations } from "next-intl";

const mockData = [
  {
    coin: "BTC",
    est: "3.10%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <FaEthereum className="text-xl text-blue-400" key={1} />,
      <SiTether className="text-xl text-green-400" key={2} />,
    ],
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "ETH",
    est: "5.67% - 6.58%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <FaEthereum className="text-xl text-blue-400" key={1} />,
    ],
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    coin: "BNB",
    est: "5.67% - 6.58%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <FaEthereum className="text-xl text-blue-400" key={1} />,
    ],
    icon: <SiBinance className="text-xl text-yellow-300" />,
  },
  {
    coin: "MATIC",
    est: "6.704%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <FaEthereum className="text-xl text-blue-400" key={1} />,
    ],
    icon: <SiPolygon className="text-xl text-purple-400" />,
  },
  {
    coin: "BTC",
    est: "0.0001%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <FaEthereum className="text-xl text-blue-400" key={1} />,
    ],
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "ETH",
    est: "5.1%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <FaEthereum className="text-xl text-blue-400" key={1} />,
    ],
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    coin: "BTC",
    est: "3.2%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <SiTether className="text-xl text-green-400" key={1} />,
      <FaEthereum className="text-xl text-blue-400" key={2} />,
    ],
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "USDT",
    est: "8.6%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <FaEthereum className="text-xl text-blue-400" key={1} />,
    ],
    icon: <SiTether className="text-xl text-green-400" />,
  },
  {
    coin: "ETH",
    est: "9.91%",
    annual: [
      <FaBitcoin className="text-xl text-yellow-400" key={0} />,
      <FaEthereum className="text-xl text-blue-400" key={1} />,
    ],
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
];

const StakeTable = () => {
  const t = useTranslations("stakingPage.table");
  const [search, setSearch] = useState("");
  const filteredData = mockData.filter((item) =>
    item.coin.toLowerCase().includes(search.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };
  console.log("Current page", currentPage);
  return (
    <div className="w-full mt-20 rounded-xl">
      <div className="w-full mt-20 items-start justify-center flex flex-col gap-6">
        {/* header */}
        <div className="w-full mt-10 mx-auto  flex gap-2 justify-between ">
          {/* title */}
          <h2 className={` ${saira.className} w-fit text-lg font-medium`}>
            {t("title")}
          </h2>
          {/* search and selection */}
          <div className="w-fit flex gap-2 sm:gap-8 items-center flex-wrap sm:flex-nowrap  ">
            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-[10px] text-nowrap">
                {t("terms.matchAssets")}
              </label>
            </div>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder={t("terms.search")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="dark:bg-[#1a1c36] bg-slate-600/15 text-[12px] px-8 py-2 rounded-md focus:outline-none"
              />
              <IoSearch className="absolute top-2 left-2 opacity-60 " />
            </div>
          </div>
        </div>
        {/* table */}

        <table className="w-full text-xs text-left">
          <thead className=" ">
            <tr className="text-[12px] opacity-90 dark:opacity-60">
              <th className="py-4 px-2 font-extralight ">{t("tHead.coin")}</th>
              <th className="py-4 px-2 font-extralight text-center">
                <div className="flex w-full gap-1 justify-start items-center ">
                  <span>{t("tHead.estApr")}</span>
                  <span className="flex opacity-60 flex-col items-center justify-center text-[7px] cursor-pointer">
                    <IoTriangle />
                    <IoTriangle className="rotate-180" />
                  </span>
                </div>
              </th>
              <th className="py-4 px-2 font-extralight  text-center">
                {t("tHead.reward")}
              </th>
              <th className="py-4 px-2 font-extralight text-right pr-6">
                {t("tHead.action.label")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b dark:border-slate-200/20 border-slate-600/15"
              >
                <td className="py-3 px-2 flex items-center gap-2">
                  {item.icon}
                  {item.coin}
                </td>
                <td className="py-3 px-2 text-start">{item.est}</td>
                <td className="py-3 px-2  text-center">
                  <div className="w-full flex gap-2 justify-center">
                    {" "}
                    {item.annual}
                  </div>
                </td>
                <td className="py-3 px-2 text-right">
                  <StakeButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-full flex justify-center items-center  mb-4">
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            pageCount={10}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName="flex justify-center items-center gap-2 text-sm mt-4"
            pageClassName="px-3 py-1 rounded border border-slate-600/50 dark:border-slate-200/50 cursor-pointer" //remaining page number
            activeClassName="dark:bg-green-600 bg-green-600 text-white dark:text-black" // active page number
            previousClassName="px-3 py-1 rounded border-slate-600/50 dark:border-slate-200/50 border cursor-pointer" //prev click button
            nextClassName="px-3 py-1 rounded border border-slate-600/50 dark:border-slate-200/50 bg-transparent cursor-pointer" //next click button
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
};

export default StakeTable;
