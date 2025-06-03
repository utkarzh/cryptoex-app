"use client";

import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LiaCoinsSolid } from "react-icons/lia";
import { LuMessageCircleQuestion } from "react-icons/lu";
import {
  MdContentCopy,
  MdOutlineHelpOutline,
  MdOutlineKeyboardArrowDown,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import DepositSelectCryptoPopup from "./DepositSelectCryptoPopup";
import { CiServer } from "react-icons/ci";
import DepositSelectCryptoNetwork from "./DepositSelectNetworkPopup";
import CryptoDepositAddress from "./CryptoDepositAddress";

const FaqArray = [
  "How to deposit on FalconX?",
  "What is a crypto network?",
  "What network should I use?",
];

export interface Crypto_Deposit {
  symbol: string;
  name: string;
  amount: number;
  usdtValue: number;
  icon: string;
}

const cryptoList: Crypto_Deposit[] = [
  {
    symbol: "SOL",
    name: "Solana",
    amount: 100.0,
    usdtValue: 1523.5,
    icon: "/images/coins/solanarounded.png",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: 2.0,
    usdtValue: 133.5,
    icon: "/images/coins/ethereumrounded.png",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: 1.0,
    usdtValue: 400.5,
    icon: "/images/coins/btc.png",
  },
  {
    symbol: "POL",
    name: "Polygon",
    amount: 150.0,
    usdtValue: 800.7,
    icon: "/images/coins/polygonrounded.png",
  },
  {
    symbol: "NLG",
    name: "Gulden",
    amount: 100.0,
    usdtValue: 740.3,
    icon: "/images/coins/btc.png",
  },
];

export interface Network_Deposit {
  name: string;
  code: string;
  chain: string;
  arrival: string;
  fee: string;
  usdFee: string;
}

const networks: Network_Deposit[] = [
  {
    name: "TRX",
    code: "TRC20",
    chain: "Tron",
    arrival: "1m 44s",
    fee: "0.8 USDT",
    usdFee: "~0.80 USD",
  },
  {
    name: "BSC",
    code: "BEP20",
    chain: "BNB Smart Chain",
    arrival: "1m 19s",
    fee: "0 USDT",
    usdFee: "~0.00 USD",
  },
  {
    name: "TONCOIN",
    code: "TON",
    chain: "Toncoin",
    arrival: "2m 50s",
    fee: "0 USDT",
    usdFee: "~0.00 USD",
  },
  {
    name: "ARB",
    code: "ARB",
    chain: "Arbitrum One",
    arrival: "0m 57s",
    fee: "0.15 USDT",
    usdFee: "~0.15 USD",
  },
  {
    name: "ETH",
    code: "ERC20",
    chain: "Ethereum",
    arrival: "5m 18s",
    fee: "3.8 USDT",
    usdFee: "~3.80 USD",
  },
];

const DepositForm = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto_Deposit>();
  const [isCryptoFormOpne, setIsCryptoFormOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState<Network_Deposit>();
  const [isNetworkFormOpen, setIsNetworkFormOpen] = useState(false);
  const [depositAddress, setDepositAddress] = useState<string>("");

  const onCloseCryptoHandler = () => {
    setIsCryptoFormOpen(false);
  };

  const onCryptoSelectHandler = (data: Crypto_Deposit) => {
    setSelectedCrypto(data);
    setIsCryptoFormOpen(false);
  };

  const onNetworkSelectHandler = (data: Network_Deposit) => {
    setSelectedNetwork(data);
    setIsNetworkFormOpen(false);
  };

  useEffect(() => {
    if (selectedNetwork) {
      setTimeout(
        () => setDepositAddress("0TPdBs4gzVawph92jsR2toaqdBs4gzVwph92j2t"),
        2000
      );
    }
  }, [selectedNetwork]);

  return (
    <div className="bg-white dark:bg-[#161735] p-6 rounded-xl flex flex-col md:flex-row gap-10">
      {/* Form Area */}
      <div className="w-full pl-10 space-y-1">
        {/* Select Crypto */}
        <div className="relative border border-transparent pb-10 ">
          {/* side line and icon */}
          <div className="absolute -top-0 left-0 -translate-x-10 h-full flex flex-col items-center gap-2">
            <span
              className={`w-fit p-1 rounded ${
                true
                  ? "bg-green-600 text-white dark:text-black"
                  : "bg-slate-500/20 dark:bg-slate-500/15 text-black/40 dark:text-white/40"
              }  h-fit`}
            >
              <LiaCoinsSolid className=" text-md" />
            </span>

            <div
              className={`h-full w-fit border-r ${
                selectedCrypto
                  ? "border-green-600"
                  : "border-slate-400/30 dark:border-slate-600/50"
              } `}
            ></div>
          </div>

          <label className="text-xs font-light flex items-center gap-2 mb-2">
            Select Crypto
          </label>
          {/* slection input of coin */}
          <div
            className=" dark:bg-slate-500/20 bg-slate-500/15 rounded px-2 py-2 flex justify-between items-center"
            onClick={() => setIsCryptoFormOpen(true)}
          >
            {selectedCrypto ? (
              <div className="flex gap-1 items-center">
                {/* coin */}
                <Image
                  src={selectedCrypto.icon}
                  width={30}
                  height={30}
                  alt=""
                  className="w-[18px] h-auto "
                />
                {/* name */}
                <p className="text-[11px] flex gap-1 items-center">
                  <span>{selectedCrypto.symbol}</span>
                  <span className="text-[9px] font-light opacity-90 dark:opacity-50">
                    {selectedCrypto.name}
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex gap-1 items-center text-xs font-light opacity-50">
                Select Crypto
              </div>
            )}
            <MdOutlineKeyboardArrowDown className=" text-xl cursor-pointer" />
          </div>

          {/* model for form select crypto */}
          {isCryptoFormOpne && (
            <Model>
              <DepositSelectCryptoPopup
                cryptoList={cryptoList}
                onClose={onCloseCryptoHandler}
                onSelect={onCryptoSelectHandler}
              />
            </Model>
          )}
        </div>

        {/* Select Network */}
        <div className=" relative w-full  border-transparent pb-10">
          {/* side line and icon */}
          <div className="absolute -top-0 left-0 -translate-x-10 h-full flex flex-col items-center gap-2">
            <span
              className={`w-fit p-1 rounded ${
                selectedNetwork
                  ? "bg-green-600 text-white dark:text-black"
                  : "bg-slate-500/20 dark:bg-slate-500/15 text-black/40 dark:text-white/40"
              }  h-fit`}
            >
              <CiServer className=" text-md" />
            </span>

            <div
              className={`h-full w-fit border-r ${
                selectedNetwork
                  ? "border-green-600"
                  : "border-slate-400/30 dark:border-slate-600/50"
              }  `}
            ></div>
          </div>
          <label
            className={` ${
              selectedNetwork ? "opacity-100" : "opacity-50"
            } text-xs font-light flex items-center gap-2 mb-2`}
          >
            Select Network
          </label>
          <div className="">
            {/* network input */}
            <div
              className="dark:bg-slate-500/20 bg-slate-500/15 rounded-md px-2 py-2 flex items-center justify-between "
              onClick={() => {
                if (selectedCrypto) {
                  setIsNetworkFormOpen(true);
                }
              }}
            >
              {selectedNetwork ? (
                <span className="text-xs ">{selectedNetwork.code}</span>
              ) : (
                <span className="text-xs opacity-50 font-light indent-1.5">
                  Select Network you want to deposit through
                </span>
              )}
              <MdOutlineKeyboardArrowDown className=" text-xl cursor-pointer" />
            </div>
          </div>

          {isNetworkFormOpen && (
            <Model>
              <DepositSelectCryptoNetwork
                networks={networks}
                onClose={() => setIsNetworkFormOpen(false)}
                onSelect={onNetworkSelectHandler}
              />
            </Model>
          )}
        </div>

        {/* Copy Wallet Address */}
        <div className=" relative w-full  border-transparent pb-2">
          {/* side line and icon */}
          <div className="absolute -top-0 left-0 -translate-x-10 h-full flex flex-col items-center gap-2">
            <span
              className={`w-fit p-1 rounded ${
                depositAddress && selectedNetwork
                  ? "bg-green-600 text-white dark:text-black"
                  : "bg-slate-500/20 dark:bg-slate-500/15 text-black/40 dark:text-white/40"
              }  h-fit`}
            >
              <MdContentCopy className=" text-md" />
            </span>
          </div>

          <label
            className={` ${
              depositAddress ? "opacity-100" : "opacity-50"
            } text-xs font-light flex items-center gap-2 mb-2`}
          >
            Copy Wallet Address
          </label>

          {/* inputs */}
          {selectedCrypto && selectedNetwork && depositAddress && (
            // crypto qr and address deposit
            <div className="border rounded-md border-slate-500/30">
              <CryptoDepositAddress address={depositAddress} />
            </div>
          )}
        </div>
      </div>

      {/* Side Panel: Tips & FAQ */}
      <div className="w-full md:w-fit flex flex-col gap-8 ">
        {/* Tips */}
        <div className="flex flex-col gap-3">
          {/* heading */}
          <h3 className="text-sm font-normal flex items-center gap-2">
            <MdOutlineTipsAndUpdates className="text-lg" />
            Tips
          </h3>
          {/* border */}
          <div className="w-full border-t opacity-20"></div>
          {/* content */}
          <div className="space-y-1 text-[10px] font-light opacity-70 dark:opacity-50">
            <p className=" ">
              For the safety of your funds, our customer support team may
              contact you by phone to confirm your withdrawal
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-3">
          {/* heading */}
          <h3 className="text-sm font-normal flex items-center gap-2">
            <MdOutlineHelpOutline className="text-lg" />
            FAQs
            <span className="ml-auto text-xs font-light hover:scale-105 transition-all duration-200 opacity-50  cursor-pointer flex  items-center">
              View more
              <RiArrowRightSLine className="text-lg" />
            </span>
          </h3>

          {/* border */}
          <div className="w-full border-t opacity-20"></div>
          {/* content */}
          <ul className="space-y-3 text-[10px] opacity-70 dark:opacity-50">
            {FaqArray.map((val, index) => (
              <li className="flex gap-1 items-center" key={index}>
                <LuMessageCircleQuestion className="text-[16px]" />{" "}
                <span>{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DepositForm;
