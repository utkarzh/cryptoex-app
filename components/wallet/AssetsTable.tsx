"use client";

// import { saira } from "@/utils/Font";
import { useState } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { FaTruckRampBox } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { SiCardano, SiDogecoin } from "react-icons/si";
import ReactPaginate from "react-paginate";

const mockData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    totalSupply: "21,000,000",
    currentSupply: "17,786,937",
    buyFee: "0.0015",
    sellFee: "0.0015",
    status: "Active",
    icon: <FaBitcoin className="text-xl text-yellow-400" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    totalSupply: "21,000,000",
    currentSupply: "17,786,937",
    buyFee: "0.0015",
    sellFee: "0.0015",
    status: "Active",
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    totalSupply: "21,000,000",
    currentSupply: "17,786,937",
    buyFee: "0.0015",
    sellFee: "0.0015",
    status: "Maintenance",
    icon: <SiCardano className="text-xl text-sky-400" />,
  },
  {
    symbol: "TRX",
    name: "Tron",
    totalSupply: "21,000,000",
    currentSupply: "17,786,937",
    buyFee: "0.0015",
    sellFee: "0.0015",
    status: "Active",
    icon: <FaTruckRampBox className="text-xl text-red-500" />,
  },
  {
    symbol: "Doge",
    name: "Dogecoin",
    totalSupply: "21,000,000",
    currentSupply: "17,786,937",
    buyFee: "0.0015",
    sellFee: "0.0015",
    status: "Maintenance",
    icon: <SiDogecoin className="text-xl text-yellow-500" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    totalSupply: "21,000,000",
    currentSupply: "17,786,937",
    buyFee: "0.0015",
    sellFee: "0.0015",
    status: "Active",
    icon: <FaEthereum className="text-xl text-blue-400" />,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    totalSupply: "21,000,000",
    currentSupply: "17,786,937",
    buyFee: "0.0015",
    sellFee: "0.0015",
    status: "Maintenance",
    icon: <SiCardano className="text-xl text-sky-400" />,
  },
];

export default function AssetsTable() {
  const [search, setSearch] = useState("");

  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const [selectedTab, setSelectedTab] = useState("all");

  const selectTabHandler = (data: string) => {
    setSelectedTab(data);
    // if (data === "all") {
    //   setSearch("");
    //   return;
    // }
    // setSearch(data);
  };

  const pageCount = 10;

  const handlePageChange = (event: { selected: number }) => {
    console.log("None", event);
  };

  return (
    <div className=" rounded-md bg-white dark:bg-[#161735] p-6">
      {/* heading */}
      <h2 className="text-sm mb-4">Total Asset</h2>
      <div className="flex justify-between items-center mb-4">
        {/* tabs */}
        <div className="flex items-center gap-4 pt-2 ">
          {["all", "delisted"].map((val) => (
            <button
              key={val}
              onClick={() => selectTabHandler(val)}
              className={`text-[14px] font-light cursor-pointer  relative  ${
                selectedTab === val
                  ? "text-green-400 border-b-2 "
                  : "border-b-2 border-transparent"
              }`}
            >
              <div className="flex gap-1 items-center text-sm capitalize">
                {val}
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

      {filteredData.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className=" ">
              <tr className="text-[12px] opacity-90 dark:opacity-60">
                <th className="py-3 px-2 font-extralight">Name</th>
                <th className="py-3 px-2 font-extralight text-center">
                  Total Supply
                </th>
                <th className="py-3 px-2 font-extralight  text-center">
                  Curr. Supply
                </th>
                <th className="py-3 px-2 font-extralight text-center pr-6">
                  Buy Fee
                </th>
                <th className="py-3 px-2 font-extralight text-center pr-6">
                  Sell Fee
                </th>
                <th className="py-3 px-2 font-extralight text-right pr-6">
                  Status
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
                  <td className="py-3 px-2  text-center">{item.totalSupply}</td>
                  <td className={`py-3 px-2 text-center`}>
                    {item.currentSupply}
                  </td>
                  <td className={`py-3 px-2 text-center`}>{item.buyFee}</td>
                  <td className="py-3 px-2  text-center">{item.sellFee}</td>

                  <td className="py-3 px-2 text-right">
                    <button
                      className={`text-[12px] w-[100px] py-1 ${
                        item.status === "Active"
                          ? "text-green-100  bg-green-600 dark:bg-green-500/30 dark:text-green-600 hover:bg-green-700 dark:hover:bg-green-500/20"
                          : "text-gray-100  bg-gray-600 dark:bg-gray-500/30 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-500/20"
                      }   rounded-full  cursor-pointer  transition-all duration-300`}
                    >
                      {item.status}
                    </button>
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
