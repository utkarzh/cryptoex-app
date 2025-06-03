"use client";

import React, { FC, useState } from "react";
import { BiSort } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { Network } from "./WithdrawForm";
import { saira } from "@/utils/Font";

type Props = {
  networks: Network[];
  onClose: () => void;
  onSelect: (data: Network) => void;
};

const SelectCryptoNetwork: FC<Props> = ({ networks, onClose, onSelect }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("most");

  if (!networks) {
    return;
  }

  const filteredNetworks = networks?.filter(
    (n) =>
      n.name.toLowerCase().includes(search.toLowerCase()) ||
      n.chain.toLowerCase().includes(search.toLowerCase()) ||
      n.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white flex flex-col gap-4 dark:bg-[#161735] max-w-[450px] rounded-xl p-6 relative">
      {/* heading and close button*/}
      <div className="w-full flex justify-between items-center">
        <h2 className={`${saira.className} text-sm font-semibold `}>
          Select Crypto to Withdraw
        </h2>
        <button onClick={onClose}>
          <IoCloseSharp className="text-2xl cursor-pointer hover:scale-110 trasition-all duration-300" />
        </button>
      </div>

      {/* border */}
      <div className="w-full border-t border-slate-500/20"></div>

      {/* important message */}
      <p className="text-[10px] font-extralight bg-red-700 text-red-50 dark:bg-red-400/15  dark:text-red-500 px-4 py-2 rounded-md">
        ⚠️ Make sure your selected crypto and deposit network match, or assets
        may be lost.
      </p>

      {/* search */}
      <div className="w-full relative ">
        <MdSearch className="absolute top-1/2 left-1.5 -translate-y-1/2 text-lg opacity-50" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search crypto"
          className="w-full indent-3 px-4 py-2 rounded-md  bg-slate-500/20 text-sm placeholder:font-extralight  outline-none"
        />
      </div>

      {/* tabs */}
      <div className="flex justify-start gap-2 text-xs font-light items-center ">
        {/* sortby */}
        <div className="text-[10px] font-light flex items-center opacity-60">
          <BiSort />
          Sort by:
        </div>
        {["Most popular", "Fastest", "Less confirmations"].map((label) => (
          <button
            key={label}
            onClick={() => setSort(label.toLowerCase())}
            className={`capitalize px-2 py-1 rounded-md cursor-pointer border ${
              sort === label.toLowerCase()
                ? "bg-slate-500/20 border-transparent"
                : "dark:border-slate-500/20 border-slate-400/20"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* list */}
      <div className="space-y-3 max-h-60 overflow-y-auto scrollbar-custom pr-2">
        {filteredNetworks.map((n) => (
          <div
            key={n.name}
            className="flex justify-between items-center px-3 py-2 rounded-lg transition cursor-pointer  bg-slate-500/10"
            onClick={() => onSelect(n)}
          >
            <div>
              <div className="text-xs font-medium">{n.name}</div>
              <div className="text-[11px] font-light opacity-50">
                {n.chain} <span>({n.code})</span>
              </div>
            </div>
            <div className="text-right text-xs">
              <div className=" text-[10px] text-gray-300 font-light">
                Expected Arrival ≈{" "}
                <span className="font-medium text-xs dark:text-white text-black">
                  {n.arrival}
                </span>
              </div>
              <div className="text-gray-300 text-[10px] font-light">
                Fee:{" "}
                <span className="text-xs font-medium dark:text-white text-black">
                  {n.fee} ({n.usdFee})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCryptoNetwork;
