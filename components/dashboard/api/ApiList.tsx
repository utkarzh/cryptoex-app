"use client";
import { saira } from "@/utils/Font";
import React from "react";

import { RxValueNone } from "react-icons/rx";

type MockData = {
  createdDate: string;
  notes: string;
  Permission: string;
  access_key: string;
  ip_add: string;
  expire: string;
  action: string;
};

export const mockData: MockData[] = [
  {
    createdDate: "2025-04-21 10:48",
    notes: "af",
    Permission: "Account Balance, Add Order, Get Order,",
    access_key: "75627b1d3a99f609de4b9787a23f49416ff02355",
    ip_add: "192.168.1.101",
    expire: "2026-04-21",
    action: "-",
  },
];

const ApiList = () => {
  return (
    <div className="w-full bg-white dark:bg-[#161735]  rounded-xl p-6 ">
      {/* heading */}
      <h2 className={`${saira.className} text-sm font-semibold mb-10`}>
        Created API Keys
      </h2>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-xs">
              <th className="px-4 py-3 text-[9px] font-light">Create Date</th>
              <th className="px-4 py-3 text-[9px] font-light">Notes</th>
              <th className="px-4 py-3 text-[9px] font-light">Permission</th>
              <th className="px-4 py-3 text-[9px] font-light">Access Key</th>
              <th className="px-4 py-3 text-[9px] font-light">
                Bind IP Address
              </th>
              <th className="px-4 py-3 text-[9px] font-light">
                Expire in(days)
              </th>
              <th className="px-4 py-3 text-[9px] font-light">Action</th>
            </tr>
          </thead>
          {mockData.length > 0 && (
            <tbody>
              {mockData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className=" dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-[11px]"
                  >
                    <td className="py-3 px-4">{item.createdDate}</td>
                    <td className="py-3 px-4">{item.notes}</td>
                    <td className="py-3 px-4 max-w-[200px]">
                      {item.Permission}
                    </td>
                    <td className="py-3 px-4 text-wrap ">{item.access_key}</td>
                    <td className="py-3 px-4">{item.ip_add}</td>
                    <td className="py-3 px-4">{item.expire}</td>
                    <td className="py-3 px-4">{item.action}</td>
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

export default ApiList;
