import Link from "next/link";
import React from "react";

const listedTokens = [
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
  },
];

const Announcements = () => {
  return (
    <div className=" ml-2 h-full w-full dark:bg-[#161735]  bg-white rounded-md">
      <div className="w-full flex flex-col gap-1 px-4 py-6 ">
        {listedTokens.map((val, index) => (
          <Link href="#" key={index} className="cursor-pointer">
            <div className="flex ">
              <p className="text-xs ">{val.title}: &nbsp;</p>
              <p className="text-xs"> {val.token}</p>
            </div>
            <div className="text-[10px] font-light text-slate-600 dark:text-slate-500">
              {val.timestamp}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
