"use client";

import { saira } from "@/utils/Font";
import { useState } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SiBinance, SiPolygon, SiTether } from "react-icons/si";
import ReactPaginate from "react-paginate";

const mockData = [
  {
    coin: "BTC",
    name: "Bitcoin",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
    minDeposit: "0.0009",
    minWithdraw: "0.0009",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
  {
    coin: "ETH",
    name: "Ethereum",
    icon: <FaEthereum className="text-xl text-blue-400" />,
    minDeposit: "0.015",
    minWithdraw: "0.015",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
  {
    coin: "BNB",
    name: "Bancoin",
    icon: <SiBinance className="text-xl text-yellow-300" />,
    minDeposit: "10",
    minWithdraw: "10",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
  {
    coin: "MATIC",
    name: "Matic",
    icon: <SiPolygon className="text-xl text-purple-400" />,
    minDeposit: "100",
    minWithdraw: "100",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
  {
    coin: "BTC",
    name: "Bitcoin",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
    minDeposit: "100",
    minWithdraw: "100",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
  {
    coin: "ETH",
    name: "Ethereum",
    icon: <FaEthereum className="text-xl text-blue-400" />,
    minDeposit: "0.1",
    minWithdraw: "0.1",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
  {
    coin: "BTC",
    name: "Bitcoin",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
    minDeposit: "0.1",
    minWithdraw: "0.1",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
  {
    coin: "USDT",
    name: "Usdt",
    icon: <SiTether className="text-xl text-green-400" />,
    minDeposit: "0.1",
    minWithdraw: "0.1",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
  {
    coin: "ETH",
    name: "Ethereum",
    icon: <FaEthereum className="text-xl text-blue-400" />,
    minDeposit: "0.1",
    minWithdraw: "0.1",
    withdrawFee: "0.0015",
    makerFee: "0.0015",
    takerFee: "0.0015",
  },
];

export default function Fee() {
  const [search, setSearch] = useState("");

  const filteredData = mockData.filter((item) =>
    item.coin.toLowerCase().includes(search.toLowerCase())
  );

  const pageCount = 10;

  const handlePageChange = (event: { selected: number }) => {
    console.log("None", event);
  };

  return (
    <div className="bg-white dark:bg-[#161735] rounded-md p-6 px-8">
      {/* heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={` ${saira.className} text-lg font-semibold`}>
          Fee Structure
        </h2>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dark:bg-[#202344] bg-slate-600/15 text-[12px] px-8 py-2 rounded-md focus:outline-none"
          />
          <IoSearch className="absolute top-2 left-2 opacity-60 " />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-[12px] opacity-90 dark:opacity-60">
              <th className="py-3 px-2 font-extralight">name</th>
              <th className="py-3 px-2 font-extralight text-center">
                Min. Deposit
              </th>
              <th className="py-3 px-2 font-extralight  text-center">
                Min. Withdraw
              </th>
              <th className="py-3 px-2 font-extralight  text-center">
                Withdraw Fee
              </th>
              <th className="py-3 px-2 font-extralight  text-center">
                Maker Fee
              </th>
              <th className="py-3 px-2 font-extralight  text-center">
                Taker Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr
                key={idx}
                className=" dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-[11px]"
              >
                <td className="py-3 px-2 flex items-center gap-2">
                  {item.icon}
                  <span className="flex flex-col ">
                    <span>{item.coin}</span>
                    <span className="text-[8px] opacity-80">{item.name}</span>
                  </span>
                </td>
                <td className="py-3 px-2 text-center">{item.minDeposit}</td>
                <td className="py-3 px-2  text-center">{item.minWithdraw}</td>
                <td className="py-3 px-2  text-center">{item.withdrawFee}</td>
                <td className="py-3 px-2  text-center">{item.makerFee}</td>
                <td className="py-3 px-2  text-center">{item.takerFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 mb-4">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          pageCount={pageCount}
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
  );
}
