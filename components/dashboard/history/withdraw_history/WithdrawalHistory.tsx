"use client";
import { saira } from "@/utils/Font";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

const mockData = [
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
  {
    coin: "BTC",
    amount: 1.2,
    time: "2023/12/13 12:16",
    to: "sfzv6...hbdu1",
    record: "asfzv6...hbdu1",
    remarks: "-",
    orderId: "—",
    status: "Successful",
  },
];

const WithdrawalHistory = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const handleCopy = async (value: string, identifier: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(identifier);
      setTimeout(() => setCopiedField(null), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#161735]  rounded-xl p-6 ">
      {/* heading */}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        Withdrawal History
      </h2>
      {/* filter tab */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-end gap-4 mb-4 text-[10px] mt-2">
        <input
          type="date"
          className="border border-slate-500/40 p-1 px-2 rounded "
        />
        <select className="border border-slate-500/40 p-1 px-2 rounded ">
          <option>All Statuses</option>
        </select>
        <select className="border border-slate-500/40 p-1 px-2 rounded ">
          <option>All Coins</option>
        </select>
        <button className="bg-green-500 text-white dark:text-black px-2 py-1 rounded-full hover:bg-green-600 cursor-pointer">
          Download
        </button>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-xs">
              <th className="px-4 py-3 text-[11px] font-light">Coin/Token</th>
              <th className="px-4 py-3 text-[11px] font-light">Amount</th>
              <th className="px-4 py-3 text-[11px] font-light">Time</th>
              <th className="px-4 py-3 text-[11px] font-light">Withdraw to</th>
              <th className="px-4 py-3 text-[11px] font-light">
                Blockchain Record
              </th>
              <th className="px-4 py-3 text-[11px] font-light">Remarks</th>
              <th className="px-4 py-3 text-[11px] font-light">Order ID</th>
              <th className="px-4 py-3 text-[11px] font-light">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item, index) => {
              const withdrawKey = `withdraw-${index}`;
              const blockchainKey = `blockchain-${index}`;
              return (
                <tr
                  key={index}
                  className=" dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-[11px]"
                >
                  <td className="py-3 px-4">
                    {item.coin}{" "}
                    <span className="text-[10px] opacity-60">Bitcoin</span>
                  </td>
                  <td className="py-3 px-4">{item.amount}</td>
                  <td className="py-3 px-4">{item.time}</td>
                  <td className="py-3 px-4 ">
                    <div className="w-full h-full flex justify-center items-center gap-1">
                      <button
                        onClick={() => handleCopy(item.to, withdrawKey)}
                        title="Copy"
                        className="cursor-pointer"
                      >
                        {copiedField === withdrawKey ? (
                          <FaCheck className="text-green-400 text-lg " />
                        ) : (
                          <MdContentCopy className=" text-lg opacity-70" />
                        )}
                      </button>
                      {item.to}
                    </div>
                  </td>
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
                  <td className="py-3 px-4">{item.orderId}</td>
                  <td className="py-3 px-4 text-green-400">{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* {copiedField && (
        <div className="mt-2 text-green-400 text-sm">Copied: {copiedField}</div>
      )} */}
    </div>
  );
};

export default WithdrawalHistory;
