"use client";

// import { saira } from "@/utils/Font";
import { useState } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SiBinance, SiEthereum, SiPolygon, SiTether } from "react-icons/si";
import ReactPaginate from "react-paginate";
import MiniGraph from "../home/currency-wedgets/MiniGraph";

const mockData = [
  {
    coin: "BTC",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "ETH",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    coin: "BNB",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <SiBinance className="text-xl text-yellow-300" />,
  },
  {
    coin: "MATIC",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <SiPolygon className="text-xl text-purple-400" />,
  },
  {
    coin: "BTC",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "ETH",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    coin: "BTC",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    coin: "USDT",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <SiTether className="text-xl text-green-400" />,
  },
  {
    coin: "ETH",
    last_price: "$25,526.53",
    change: +10.5,
    high: "111154564.15",
    low: "111154564.15",
    volume: "111154564.15",
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
];

const tokenTabs = [
  { label: "BTC", icon: <FaBitcoin className="text-lg text-orange-400" /> },
  { label: "ETH", icon: <SiEthereum className="text-lg text-blue-400" /> },
  { label: "BNB", icon: <SiBinance className="text-lg text-yellow-400" /> },
  { label: "MATIC", icon: <SiPolygon className="text-lg text-purple-400" /> },
];

export default function TradeTable() {
  const [search, setSearch] = useState("");

  const filteredData = mockData.filter((item) =>
    item.coin.toLowerCase().includes(search.toLowerCase())
  );

  const [selectedTab, setSelectedTab] = useState("all");

  const selectTabHandler = (data: string) => {
    setSelectedTab(data);
    if (data === "all") {
      setSearch("");
      return;
    }
    setSearch(data);
  };

  const pageCount = 10;

  const handlePageChange = (event: { selected: number }) => {
    console.log("None", event);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        {/* tabs */}
        <div className="flex items-center gap-4 border-b-2 dark:border-white/10 border-[#161735]/10 pt-2  px-4 ">
          <button
            onClick={() => selectTabHandler("all")}
            className={`text-[14px] font-light pb-2 cursor-pointer top-[2px] relative  ${
              selectedTab === "all"
                ? "text-green-400 border-b-2 "
                : "border-b-2 border-transparent"
            }`}
          >
            <div className="flex gap-1 items-center text-sm">All</div>
          </button>

          {tokenTabs.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => selectTabHandler(label)}
              className={`text-[14px] font-light pb-2 cursor-pointer top-[2px] relative  ${
                selectedTab === label
                  ? "text-green-400 border-b-2 "
                  : "border-b-2 border-transparent"
              }`}
            >
              <div className="flex gap-1 items-center text-xs">
                {icon}
                {label}
              </div>
            </button>
          ))}
        </div>

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
              <th className="py-3 px-2 font-extralight">Coins</th>
              <th className="py-3 px-2 font-extralight text-center">
                Last price
              </th>
              <th className="py-3 px-2 font-extralight  text-center">
                24h change
              </th>
              <th className="py-3 px-2 font-extralight text-center pr-6">
                24h high
              </th>
              <th className="py-3 px-2 font-extralight text-center pr-6">
                24h low
              </th>
              <th className="py-3 px-2 font-extralight text-center pr-6">
                24h volume
              </th>
              <th className="py-3 px-2 font-extralight text-center pr-6">
                Charts
              </th>
              <th className="py-3 px-2 font-extralight text-right pr-6">
                Trade
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b dark:border-slate-200/20 border-slate-600/15"
              >
                <td className="py-3 px-2 ">
                  <div className="w-full flex h-full items-center gap-2 ">
                    {item.icon}
                    {item.coin}
                  </div>
                </td>
                <td className="py-3 px-2  text-center">{item.last_price}</td>
                <td
                  className={`py-3 px-2 text-center ${
                    item.change > 0 ? "text-green-500" : "text-red-400"
                  }`}
                >
                  {item.change}%
                </td>
                <td className="py-3 px-2  text-center">{item.high}</td>
                <td className="py-3 px-2  text-center">{item.low}</td>
                <td className="py-3 px-2  text-center">{item.volume}</td>
                <td className="py-3 px-2  text-center">
                  <MiniGraph />
                </td>
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
