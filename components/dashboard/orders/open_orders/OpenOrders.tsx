"use client";
import { saira } from "@/utils/Font";
import React from "react";

import { RxValueNone } from "react-icons/rx";

type MockData = {
  coin: string;
  amount: number;
  time: string;
  record: string;
  remarks: string;
  status: string;
};

const mockData: MockData[] = [];

const OpenOrders = () => {
  return (
    <div className="w-full bg-white dark:bg-[#161735]  rounded-xl p-6 ">
      {/* heading */}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        Open Orders
      </h2>
      {/* filter tab */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-end gap-4 mb-4 text-[10px] mt-2">
        <select className="border border-slate-500/40 p-1 px-2 rounded ">
          <option>All Pairs</option>
        </select>
        <select className="border border-slate-500/40 p-1 px-2 rounded ">
          <option>Buy, Sell Orders</option>
        </select>
        <select className="border border-slate-500/40 p-1 px-2 rounded ">
          <option>Order Type</option>
        </select>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-xs">
              <th className="px-4 py-3 text-[9px] font-light">Time</th>
              <th className="px-4 py-3 text-[9px] font-light">Pair</th>
              <th className="px-4 py-3 text-[9px] font-light">Buy or Sell</th>

              <th className="px-4 py-3 text-[9px] font-light">Type</th>
              <th className="px-4 py-3 text-[9px] font-light">Order Price</th>
              <th className="px-4 py-3 text-[9px] font-light">Amount</th>
              <th className="px-4 py-3 text-[9px] font-light">Filled</th>
              <th className="px-4 py-3 text-[9px] font-light">Unexecuted</th>
              <th className="px-4 py-3 text-[9px] font-light">Action</th>
            </tr>
          </thead>
          {mockData.length > 0 && (
            <tbody>
              {mockData.map((item, index) => {
                // const blockchainKey = `blockchain-${index}`;
                return (
                  <tr
                    key={index}
                    className=" dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-[11px]"
                  >
                    {/* <td className="py-3 px-4">
                      {item.coin}{" "}
                      <span className="text-[10px] opacity-60">Bitcoin</span>
                    </td>
                    <td className="py-3 px-4">{item.amount}</td>
                    <td className="py-3 px-4">{item.time}</td>

                    <td className="py-3 px-4 ">
                      <div className="w-full h-full flex gap-1 items-center justify-center">
                        <button
                          onClick={() => handleCopy(item.record, blockchainKey)}
                          title="Copy"
                        >
                          {copiedField === blockchainKey ? (
                            <FaCheck className="text-green-400 text-lg" />
                          ) : (
                            <MdContentCopy className=" text-lg opacity-70 cursor-pointer" />
                          )}
                        </button>
                        {item.record}
                      </div>
                    </td>
                    <td className="py-3 px-4">{item.remarks}</td>

                    <td className="py-3 px-4 text-green-400">{item.status}</td> */}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>

      {!mockData.length && (
        <div className="w-full h-[40vh] flex justify-center items-center">
          <RxValueNone className="text-[30vh] opacity-5" />
        </div>
      )}
    </div>
  );
};

export default OpenOrders;
