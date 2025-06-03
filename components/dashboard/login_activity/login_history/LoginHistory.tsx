"use client";
import { saira } from "@/utils/Font";
import React from "react";

import { RxValueNone } from "react-icons/rx";

type MockData = {
  dateTime: string;
  action: string;
  ipAddress: string;
};

export const mockData: MockData[] = [
  {
    dateTime: "2025/04/21 10:48",
    action: "Login Success",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    action: "Login Success",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    action: "Login Failed due to wrong credentials",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    action: "Login Success",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    action: "Login Failed due to wrong credentials",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    action: "Login Success",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    action: "Login Failed due to wrong credentials",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    action: "Login Success",
    ipAddress: "183.82.113.118",
  },
];

const LoginHistory = () => {
  return (
    <div className="w-full bg-white dark:bg-[#161735]  rounded-xl p-6 ">
      {/* heading */}
      <h2 className={`${saira.className} text-sm font-semibold mb-10`}>
        Login History
      </h2>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-xs">
              <th className="px-4 py-3 text-[9px] font-light">Date Time</th>
              <th className="px-4 py-3 text-[9px] font-light">Action</th>
              <th className="px-4 py-3 text-[9px] font-light">IP Address</th>
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
                    <td className="py-3 px-4">{item.dateTime}</td>
                    <td className="py-3 px-4">{item.action}</td>
                    <td className="py-3 px-4">{item.ipAddress}</td>
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

export default LoginHistory;
