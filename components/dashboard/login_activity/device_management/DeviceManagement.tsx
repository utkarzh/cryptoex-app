"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React from "react";

import { RxValueNone } from "react-icons/rx";

type MockData = {
  dateTime: string;
  location: string;
  ipAddress: string;
};

export const mockData: MockData[] = [
  {
    dateTime: "2025/04/21 10:48",
    location: "Bangalore, AP, IN",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    location: "Bangalore, AP, IN",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    location: "Bangalore, AP, IN",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    location: "Bangalore, AP, IN",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    location: "Bangalore, AP, IN",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    location: "Bangalore, AP, IN",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    location: "Bangalore, AP, IN",
    ipAddress: "183.82.113.118",
  },
  {
    dateTime: "2025/04/21 10:48",
    location: "Bangalore, AP, IN",
    ipAddress: "183.82.113.118",
  },
];

const DeviceManagement = () => {
  const t = useTranslations("dashboard.deviceManagement");

  return (
    <div className="w-full bg-white dark:bg-[#161735]  rounded-xl p-6 ">
      {/* heading */}
      <h2 className={`${saira.className} text-sm font-semibold mb-10`}>
        {t("title")}
      </h2>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-xs">
              <th className="px-4 py-3 text-xs font-light">
                {t("tHead.dateTime")}
              </th>
              <th className="px-4 py-3 text-xs font-light">
                {" "}
                {t("tHead.location")}
              </th>
              <th className="px-4 py-3 text-xs font-light"> {t("tHead.ip")}</th>
              <th className="px-4 py-3 text-xs font-light">
                {" "}
                {t("tHead.action")}
              </th>
            </tr>
          </thead>
          {mockData.length > 0 && (
            <tbody>
              {mockData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className=" dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-xs"
                  >
                    <td className="py-3 px-4">{item.dateTime}</td>
                    <td className="py-3 px-4">{item.location}</td>
                    <td className="py-3 px-4">{item.ipAddress}</td>
                    <td className="py-3 px-4">
                      <button className="px-2 p-1 rounded-full text-red-100 bg-red-500 dark:text-red-500 dark:bg-red-700/20 dark:hover:bg-red-700/10 cursor-pointer border border-red-500 hover:bg-red-600 transition-all duration-200">
                        {t("tHead.button")}
                      </button>
                    </td>
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

export default DeviceManagement;
