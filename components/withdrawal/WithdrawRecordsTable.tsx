"use client";

import { saira } from "@/utils/Font";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

const records = [
  {
    datetime: "13/03/24 - 20:54:29",
    coin: "BTC",
    amount: 2.3,
    withdrawTo: "0x412313...hbdu12rex",
    blockchainRecord: "16asfzv6...hbdu12rex",
    remarks: "-",
  },
  {
    datetime: "13/03/24 - 20:54:29",
    coin: "BTC",
    amount: 2.3,
    withdrawTo: "0x412313...hbdu12rex",
    blockchainRecord: "16asfzv6...hbdu12rex",
    remarks: "-",
  },
  {
    datetime: "13/03/24 - 20:54:29",
    coin: "BTC",
    amount: 2.3,
    withdrawTo: "0x412313...hbdu12rex",
    blockchainRecord: "16asfzv6...hbdu12rex",
    remarks: "-",
  },
  {
    datetime: "13/03/24 - 20:54:29",
    coin: "BTC",
    amount: 2.3,
    withdrawTo: "0x412313...hbdu12rex",
    blockchainRecord: "16asfzv6...hbdu12rex",
    remarks: "-",
  },
  {
    datetime: "13/03/24 - 20:54:29",
    coin: "BTC",
    amount: 2.3,
    withdrawTo: "0x412313...hbdu12rex",
    blockchainRecord: "16asfzv6...hbdu12rex",
    remarks: "-",
  },
  {
    datetime: "13/03/24 - 20:54:29",
    coin: "BTC",
    amount: 2.3,
    withdrawTo: "0x412313...hbdu12rex",
    blockchainRecord: "16asfzv6...hbdu12rex",
    remarks: "-",
  },
  // More entries as needed
];

const WithdrawRecordsTable = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (value: string, identifier: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(identifier);
      setTimeout(() => setCopiedField(null), 1500); // Reset icon after 1.5s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className=" bg-white dark:bg-[#161735]  rounded-xl p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`${saira.className} text-sm font-semibold `}>
          Last 4 Withdraw Records
        </h2>
        <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white dark:text-black text-xs px-4 py-2 rounded-full cursor-pointer">
          Withdraw History
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-xs">
              <th className="px-4 py-3 text-[11px] font-light">Date/Time</th>
              <th className="px-4 py-3 text-[11px] font-light">Coin</th>
              <th className="px-4 py-3 text-[11px] font-light">Amount</th>
              <th className="px-4 py-3 text-[11px] font-light">Withdraw to</th>
              <th className="px-4 py-3 text-[11px] font-light">
                Blockchain Record
              </th>
              <th className="px-4 py-3 text-[11px] font-light">Remarks</th>
              <th className="px-4 py-3 text-[11px] font-light">Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => {
              if (index >= 4) {
                return;
              }
              const withdrawKey = `withdraw-${index}`;
              const blockchainKey = `blockchain-${index}`;

              return (
                <tr
                  key={index}
                  className=" dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-[11px]"
                >
                  <td className="py-3 px-4">{record.datetime}</td>
                  <td className="py-3 px-4">
                    <div className="w-fit mx-auto text-start ">
                      <div className="font-semibold">{record.coin}</div>
                      <div className="text-xs text-gray-400">Bitcoin</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">{record.amount}</td>
                  <td className="py-3 px-4  ">
                    <div className="w-full h-full flex justify-center items-center gap-1">
                      <button
                        onClick={() =>
                          handleCopy(record.withdrawTo, withdrawKey)
                        }
                        title="Copy"
                        className="cursor-pointer"
                      >
                        {copiedField === withdrawKey ? (
                          <FaCheck className="text-green-400 text-lg " />
                        ) : (
                          <MdContentCopy className=" text-lg opacity-70" />
                        )}
                      </button>
                      {record.withdrawTo}
                    </div>
                  </td>
                  <td className="py-3 px-4 items-center gap-2">
                    <div className="w-full h-full flex gap-1 items-center justify-center">
                      <button
                        onClick={() =>
                          handleCopy(record.blockchainRecord, blockchainKey)
                        }
                        title="Copy"
                      >
                        {copiedField === blockchainKey ? (
                          <FaCheck className="text-green-400 text-lg" />
                        ) : (
                          <MdContentCopy className=" text-lg opacity-70 cursor-pointer" />
                        )}
                      </button>
                      {record.blockchainRecord}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{record.remarks}</td>
                  <td className="py-3 px-4">
                    <button className="border border-slate-500/20 text-xs px-3 py-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-200">
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawRecordsTable;
