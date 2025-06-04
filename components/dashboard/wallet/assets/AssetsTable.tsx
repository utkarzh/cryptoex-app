"use client";

// import { saira } from "@/utils/Font";
import { useState } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { FaTruckRampBox } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye, IoEyeOff, IoSearch } from "react-icons/io5";
import { SiCardano, SiDogecoin } from "react-icons/si";
import ReactPaginate from "react-paginate";

const mockData = [
  {
    symbol: "ADA",
    name: "Cardano",
    totalBalance: 5759.24,
    available: 5759.24,
    inOrders: 0.0,
    avgPrice: 1950.08,
    icon: <SiCardano className="text-xl text-sky-400" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    totalBalance: 0.47,
    available: 0.2,
    inOrders: 0.27,
    avgPrice: 1096.92,
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    totalBalance: 0.024,
    available: 0.024,
    inOrders: 0.0,
    avgPrice: 1523.5,
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    totalBalance: 10318.17,
    available: 10318.17,
    inOrders: 0.0,
    avgPrice: 792.22,
    icon: <SiDogecoin className="text-xl text-yellow-500" />,
  },
  {
    symbol: "TRX",
    name: "Tron",
    totalBalance: 10.15,
    available: 10.15,
    inOrders: 0.0,
    avgPrice: 3.81,
    icon: <FaTruckRampBox className="text-xl text-red-500" />,
  },
  {
    symbol: "NLG",
    name: "Gulden",
    totalBalance: 103.15,
    available: 103.15,
    inOrders: 0.0,
    avgPrice: 3.00055,
    icon: <GiTwoCoins className="text-xl text-green-500" />,
  },
  // Duplicate entries from image repeated again
  {
    symbol: "ADA",
    name: "Cardano",
    totalBalance: 5759.24,
    available: 5759.24,
    inOrders: 0.0,
    avgPrice: 1950.08,
    icon: <SiCardano className="text-xl text-sky-400" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    totalBalance: 0.47,
    available: 0.2,
    inOrders: 0.27,
    avgPrice: 1096.92,
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
];

export default function AssetsTable() {
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const [selectedTab, setSelectedTab] = useState("all");

  const selectTabHandler = (data: string) => {
    setSelectedTab(data);
  };

  const pageCount = 10;

  const handlePageChange = (event: { selected: number }) => {
    console.log("None", event);
  };

  return (
    <div className=" rounded-md bg-white dark:bg-[#161735] p-6">
      {/* header part */}
      <div className="w-full flex justify-between items-start mb-6">
        {/* heading left */}
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 items-center">
            <h2 className="text-sm ">Total Asset</h2>
            <span
              className="cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              {" "}
              {isVisible ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
          {/* assets value */}
          <div className="flex gap-2 items-end ">
            <span className="text-xl font-bold">
              {isVisible ? "$6094.56" : "******"}
            </span>
            {/* change */}
            <span className=" dark:bg-green-600/20 dark:text-green-200 px-2 py-1 rounded-md flex justify-center gap-1 items-center">
              <span className="text-[9px]">{isVisible ? "6.3%" : "***%"}</span>
              <HiArrowTrendingUp className="text-xs" />
            </span>
          </div>
        </div>
        <div className="bg-slate-500/30 rounded-md flex gap-2 items-center px-2 py-0.5 cursor-pointer">
          <span className="text-xs">USDT</span>
          <IoIosArrowDown className="text-sm" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        {/* tabs */}
        <div className="flex items-center gap-4 pt-2 ">
          {["all", "delisted"].map((val) => (
            <button
              key={val}
              onClick={() => selectTabHandler(val)}
              className={` font-normal cursor-pointer  relative  ${
                selectedTab === val
                  ? "text-green-400 border-b-2 "
                  : "border-b-2 border-transparent"
              }`}
            >
              <div className="flex gap-1 items-center text-xs capitalize">
                {val}
              </div>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-end gap-2 ">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              className="w-fit h-auto bg-tranparent border-md border-slate-500"
            />
            <label className="text-[10px]">Hide Zero Balance Assets</label>
          </div>

          <div className="relative flex-wrap gap-2 flex items-center ">
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
      </div>

      {filteredData.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className=" ">
              <tr className="text-[12px] opacity-90 dark:opacity-60">
                <th className="py-3 px-2 font-extralight">Crypto</th>
                <th className="py-3 px-2 font-extralight text-center">
                  Total Balance
                </th>
                <th className="py-3 px-2 font-extralight  text-center">
                  Available
                </th>
                <th className="py-3 px-2 font-extralight text-center pr-6">
                  In Orders
                </th>
                <th className="py-3 px-2 font-extralight text-center pr-6">
                  Avg. Price
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
                  <td className="py-3 px-2 ">
                    <div className="w-full flex h-full items-center gap-2 ">
                      {item.icon}
                      {item.name}
                    </div>
                  </td>
                  <td className="py-3 px-2  text-center">
                    {item.totalBalance}
                  </td>
                  <td className={`py-3 px-2 text-center`}>
                    <div className="flex justify-center">
                      <div className="w-fit  flex flex-col gap-[2px] items-start">
                        <span>{item.available}</span>
                        <span className="text-[10px] font-normal text-slate-500">
                          =0.00 USD
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className={`py-3 px-2 text-center`}>
                    <div className="flex justify-center">
                      <div className="w-fit  flex flex-col gap-[2px] items-start">
                        <span>{item.inOrders}</span>
                        <span className="text-[10px] font-normal text-slate-500">
                          =0.00 USD
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2  text-center">{item.avgPrice}</td>

                  <td className="py-3 px-2 text-right space-x-1">
                    <div className="flex gap-2 flex-wrap justify-end">
                      <button
                        className={`text-[12px] px-2 py-1 ${"text-gray-100  bg-gray-600 dark:bg-gray-500/30 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-500/20"}   rounded-full  cursor-pointer  transition-all duration-300`}
                      >
                        Withdraw
                      </button>

                      <button
                        className={`text-[12px] px-2 py-1 ${"text-green-100  bg-green-600 dark:bg-green-500/30 dark:text-green-600 hover:bg-green-700 dark:hover:bg-green-500/20"}   rounded-full  cursor-pointer  transition-all duration-300`}
                      >
                        Deposit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {filteredData.length > 0 && (
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
      )}
    </div>
  );
}
