import React from "react";
import { IoSearch, IoTriangle } from "react-icons/io5";
import StakeTableRow from "./StakeTableRow";
import { saira } from "@/utils/Font";

// type Props = {};

const StakeTable = () => {
  return (
    <div className="w-full bg-white pb-10 dark:bg-[#161735] shadow shadow-black/40 dark:shadow-white/20 mt-20 rounded-xl">
      <div className="w-full mt-20 items-start justify-center flex flex-col gap-6">
        {/* header */}
        <div className="w-[90%] mt-10 mx-auto  flex gap-2 justify-between">
          {/* title */}
          <div className={` ${saira.className} w-fit text-lg font-medium`}>
            All products
          </div>
          {/* search and selection */}
          <div className="w-fit flex gap-2 sm:gap-8 items-center flex-wrap sm:flex-nowrap ">
            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-[10px] text-nowrap">
                Match available assets
              </label>
            </div>
            <div className="w-full rounded-md  bg-[#eff0f2]  dark:bg-[#06062a] flex gap-2 items-center">
              <IoSearch className="ml-2" />
              <input
                type="text"
                className="w-full max-w-[300px] rounded-md bg-transparent border-none outline-none  py-2 text-[12px] "
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        {/* table */}
        <table className=" w-full table-auto ">
          <thead>
            <tr className="text-[12px] text-slate-800 dark:text-slate-300">
              <th className="  font-extralight py-5">Coins</th>
              <th className={`   font-extralight py-5`}>
                <div className="flex w-full gap-1 justify-center items-center ">
                  <span>Est. APR</span>
                  <span className="flex flex-col items-center justify-center text-[7px] cursor-pointer">
                    <IoTriangle />
                    <IoTriangle className="rotate-180" />
                  </span>
                </div>
              </th>
              <th className={`  font-extralight py-5`}>Reward Coin</th>
              <th className={` font-extralight py-5 `}>Action</th>
            </tr>
          </thead>

          <tbody className="w-full text-center ">
            {[1, 2, 3, 4, 5].map((val, index) => (
              <StakeTableRow key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StakeTable;
