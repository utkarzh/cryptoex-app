"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { verificationArrayIndoex } from "./IndoexData";
import Model from "../common/Model";
import IndoexStatus from "./IndoexStatus";
// import Image from "next/image";
const IndoexVerify = () => {
  const t = useTranslations("indoexVerify");
  const [isSelector, setIsSelector] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(
    verificationArrayIndoex[0]
  );
  const [searchedValue, setSearchedValue] = useState<string>("");

  const [message, setMessage] = useState({
    isError: false,
    message: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value);
  };

  function isExactMatch(
    searchValue: string,
    list: { id: number; name: string }[]
  ): boolean {
    return list.some((entry) => entry.name === searchValue);
  }

  const searchHandler = () => {
    const result = isExactMatch(searchedValue, selectedPlatform.arr);
    if (result) {
      setMessage({
        isError: false,
        message: "Succes",
      });
    } else {
      setMessage({
        isError: true,
        message: "Error",
      });
    }
  };

  return (
    <div
      className="flex flex-col gap-6 bg-white min-w-80 max-w-[500px] xl:max-w-[700px] dark:bg-[#161735] rounded-xl p-6 xl:p-12   relative shadow-xl"
      onClick={() => setIsSelector(false)}
    >
      {/* heading */}
      <div className="w-full space-y-1">
        <h2 className={`${saira.className} text-xl xl:text-[1.7rem]`}>
          {t("title")}
        </h2>
        <p className="text-[10px] xl:text-xs ">{t("content")}</p>
      </div>

      {/* input & search */}
      <div className="space-y-4 xl:mt-6">
        {/* input */}
        <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
          {/* label */}
          <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
            {t("terms.platform")}
          </label>
          <input
            type="text"
            value={searchedValue}
            onChange={inputChangeHandler}
            className="outline-none border-none w-full bg-transparent text-xs"
            placeholder={selectedPlatform.placeholder}
          />

          {/* selection */}
          <div
            className=" ml-2 mr-4  dark:bg-slate-200/15 bg-slate-200 rounded-full px-2 py-[2px] flex gap-2 items-center relative"
            onClick={(e) => {
              e.stopPropagation();
              setIsSelector(true);
            }}
          >
            <div className="flex gap-1 p-1 text-nowrap  items-center text-xs font-light">
              {selectedPlatform.name}
            </div>
            <IoIosArrowDown className=" text-sm cursor-pointer" />

            {isSelector && (
              <div className="absolute w-full min-w-[100px] xl:min-w-[120px] min-h-[300px] border top-[100%] translate-y-1 rounded-md left-0 overflow-y-auto bg-white dark:bg-[#1d1f38] z-[40] border-black/30 dark:border-white/30 flex flex-col gap-2 p-1.5">
                {verificationArrayIndoex.map((val) => (
                  <div
                    key={val.name}
                    className="p-1 px-2  hover:bg-slate-300/30 dark:hover:bg-slate-500/20 rounded-md cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSelector(false);
                      setSelectedPlatform(val);
                    }}
                  >
                    <div className="w-full flex gap-1 items-center">
                      {/* coin */}
                      {/* {val.img} */}
                      {/* <Image
                        src={val.icon}
                        width={30}
                        height={30}
                        alt=""
                        className="w-4 xl:w-5 h-auto py-1"
                      /> */}
                      {/* name */}
                      <p className="text-xs">{val.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* button */}
        <button
          className={`w-full ${
            searchedValue
              ? "bg-green-500 hover:bg-green-600 cursor-pointer"
              : " bg-green-900 cursor-not-allowed"
          }  text-white dark:text-black font-medium py-3 rounded-full  text-xs transition-all duration-500 `}
          onClick={!searchedValue ? () => {} : searchHandler}
        >
          {t("terms.button")}
        </button>
      </div>

      {/* message and notice */}
      <div className="w-full space-y-4">
        {/* message */}
        <p className="text-[10px] xl:text-xs">{t("terms.message")}</p>
        {/* notice */}
        <div className="w-full rounded-md dark:bg-[#24243c] bg-slate-100 border border-slate-300 dark:border-slate-700 p-2 xl:p-3 xl:px-4 px-4 space-y-1">
          <p className="text-[10px] xl:text-xs font-medium">
            {t("terms.notice")}:{" "}
          </p>
          <p className="text-[9px] xl:text-[0.6rem] ">
            {t("terms.noticeMessage.part1")}
            <span className="text-green-600 cursor-pointer">
              {" "}
              {t("terms.noticeMessage.part2")}
            </span>
          </p>
        </div>
      </div>
      {message.message && (
        <Model>
          <div className="w-fit min-w-[200px] h-fit mx-auto flex flex-col rounded-xl bg-white  dark:bg-[#1d1f38]">
            {/* heading */}
            <IndoexStatus
              message={message}
              onClose={() => {
                setMessage({ isError: false, message: "" });
                setSearchedValue("");
              }}
            />
          </div>
        </Model>
      )}
    </div>
  );
};

export default IndoexVerify;
