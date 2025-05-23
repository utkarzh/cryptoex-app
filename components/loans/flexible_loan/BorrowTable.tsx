"use client";

import { saira } from "@/utils/Font";
import { useState } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SiBinance, SiPolygon, SiTether } from "react-icons/si";

const mockData = [
  {
    coin: "BTC",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "ETH",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    coin: "BNB",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <SiBinance className="text-xl text-yellow-300" />,
  },
  {
    coin: "MATIC",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <SiPolygon className="text-xl text-purple-400" />,
  },
  {
    coin: "BTC",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "ETH",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    coin: "BTC",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "USDT",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <SiTether className="text-xl text-green-400" />,
  },
  {
    coin: "ETH",
    hourly: "0.00009%",
    annual: "0.791291%",
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
];

export default function BorrowTable() {
  const [search, setSearch] = useState("");

  const filteredData = mockData.filter((item) =>
    item.coin.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className={` ${saira.className} text-lg font-semibold`}>
          Borrow Market
        </h2>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dark:bg-[#1a1c36] bg-slate-600/15 text-[12px] px-8 py-2 rounded-md focus:outline-none"
          />
          <IoSearch className="absolute top-2 left-2 opacity-60 " />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className=" ">
            <tr className="text-[12px] opacity-90 dark:opacity-60">
              <th className="py-3 px-2 font-extralight">Loanable Coin</th>
              <th className="py-3 px-2 font-extralight text-center">
                Hourly Interest Rate
              </th>
              <th className="py-3 px-2 font-extralight  text-center">
                Annual Interest Rate
              </th>
              <th className="py-3 px-2 font-extralight text-right pr-6">
                Action
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
                <td className="py-3 px-2 text-center">{item.hourly}</td>
                <td className="py-3 px-2  text-center">{item.annual}</td>
                <td className="py-3 px-2 text-right">
                  <button className="text-[12px] text-green-100 bg-green-600 dark:bg-green-500/30 dark:text-green-600 px-4 py-1 rounded-full hover:bg-green-700 dark:hover:bg-green-500/20 cursor-pointer  transition-all duration-300">
                    Borrow
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <button className="bg-green-600 text-white dark:text-black px-6 py-1 rounded-full hover:bg-green-500 transition cursor-pointer">
          View more
        </button>
      </div>
    </div>
  );
}
