import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const announcementsDetails = [
  {
    title: "Indoex MemeBox has Initial Listed Token",
    token: "the real goal (land)",
    timestamp: "2025-04-30 06:17:44 UTC",
    details:
      "These Terms of Use prescribe the rights and obligations between Members (as described in Article 2, and including persons who were Members in the past) and Fisco Cryptocurrency Exchange Inc. (“we” or the “Company”) in connection with the online services “IndoEx Exchange” and “IndoEx Instant Exchange” that we provide (at the domain https: //Indoex.io/; the “Services”). Before using the Services, please read the “Explanation on Important Matters” and the full text of these Terms of Use (which includes all rules, explanatory documents, and other various regulations, etc. relating to the Services and posted from time to time on our website; the same hereinafter).",
  },
];

const AnnouncementsDetails = () => {
  return (
    <div className=" ml-2 h-full w-full dark:bg-[#161735]  bg-white rounded-md px-4 py-6">
      {/* link details */}
      <div className="text-sm fonr-bold pb-4 opacity-50 flex  items-center">
        Annoucements <MdOutlineKeyboardArrowRight className="text-lg" />
      </div>

      <div className="w-full flex flex-col gap-1  ">
        {announcementsDetails.map((val, index) => (
          <div key={index} className="cursor-pointer">
            <div className="flex ">
              <p className="text-xs ">{val.title}: &nbsp;</p>
              <p className="text-xs"> {val.token}</p>
            </div>
            <div className="text-[10px] font-light text-slate-600 dark:text-slate-500">
              {val.timestamp}
            </div>

            <p className="mt-2 text-[10px] font-light ">{val.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsDetails;
