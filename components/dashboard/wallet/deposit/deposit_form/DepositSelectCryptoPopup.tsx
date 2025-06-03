"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { Crypto_Deposit } from "./DepositForm";

type Props = {
  cryptoList: Crypto_Deposit[];
  onClose: () => void;
  onSelect: (data: Crypto_Deposit) => void;
};

const DepositSelectCryptoPopup: FC<Props> = ({
  cryptoList,
  onClose,
  onSelect,
}) => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"recent" | "all" | "favorite">("recent");

  const filteredCryptos = cryptoList.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white flex flex-col gap-4 dark:bg-[#161735] w-[400px] rounded-xl p-6 relative">
      {/* heading and close button*/}
      <div className="w-full flex justify-between items-center">
        <h2 className=" text-sm ">Select Crypto to Withdraw</h2>
        <button onClick={onClose} className="">
          <IoCloseSharp className="text-2xl cursor-pointer hover:scale-110 trasition-all duration-300" />
        </button>
      </div>

      {/* border */}
      <div className="w-full border-t border-slate-500/20"></div>

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
      <div className="flex justify-start gap-4 text-xs font-light items-center ">
        {["recent", "all", "favorite"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as "recent" | "all" | "favorite")}
            className={`capitalize px-2 py-1 rounded-md cursor-pointer border ${
              tab === t
                ? "bg-slate-500/20 border-transparent"
                : "dark:border-slate-500/20 border-slate-400/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* list */}
      <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-custom pr-2">
        {filteredCryptos.map((crypto) => (
          <div
            key={crypto.symbol}
            className="flex justify-between items-center px-3 py-2 rounded-lg transition cursor-pointer bg-slate-500/10"
            onClick={() => onSelect(crypto)}
          >
            <div className="flex gap-2 items-center">
              <Image
                width={32}
                height={32}
                src={`${crypto.icon}`}
                alt=""
                className="w-6 h-auto"
              />

              <div>
                <div className="text-xs">{crypto.symbol}</div>
                <div className="text-xs opacity-60 font-extralight ">
                  {crypto.name}
                </div>
              </div>
            </div>
            <div className="text-right text-xs">
              <div>{crypto.amount.toFixed(2)}</div>
              <div className="text-gray-400 text-xs">
                = {crypto.usdtValue.toFixed(2)} USDT
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepositSelectCryptoPopup;
