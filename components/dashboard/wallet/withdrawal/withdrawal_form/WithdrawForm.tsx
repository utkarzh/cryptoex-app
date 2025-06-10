"use client";

import Model from "@/components/common/Model";
import Image from "next/image";
import React, { useState } from "react";
import { LiaCoinsSolid } from "react-icons/lia";
import { LuMessageCircleQuestion, LuWallet } from "react-icons/lu";
import {
  MdOutlineHelpOutline,
  MdOutlineKeyboardArrowDown,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { RiArrowRightSLine, RiFileList2Line } from "react-icons/ri";
import SelectCryptoPopup from "./SelectCryptoPopup";
import SelectCryptoNetwork from "./SelectCryptoNetwork";
import TransactionStatusPopup from "./TransactionStatusPopup";
import { IoIosCalculator } from "react-icons/io";
import { useTranslations } from "next-intl";

export interface Crypto {
  symbol: string;
  name: string;
  amount: number;
  usdtValue: number;
  icon: string;
}

const cryptoList: Crypto[] = [
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

export interface Network {
  name: string;
  code: string;
  chain: string;
  arrival: string;
  fee: string;
  usdFee: string;
}

const networks: Network[] = [
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

const WithdrawalForm = () => {
  const t = useTranslations("dashboard.withdrawPage.form");
  const FaqArray = [t("faq.faq1.ques"), t("faq.faq2.ques"), t("faq.faq3.ques")];

  const [selectedCrypto, setSelectedCrypto] = useState<Crypto>();
  const [isCryptoFormOpne, setIsCryptoFormOpen] = useState(false);

  const [selectedNetwork, setSelectedNetwork] = useState<Network>();
  const [isNetworkFormOpen, setIsNetworkFormOpen] = useState(false);
  const [withdrawalAddress, setWithdrawalAddress] = useState<string>("");
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>("");
  const [remark, setRemark] = useState<string>("");
  const [transactionStatus, setTransactionStatus] = useState<
    "pending" | "failed" | "successful" | ""
  >("");

  const onCloseCryptoHandler = () => {
    setIsCryptoFormOpen(false);
  };

  const onCryptoSelectHandler = (data: Crypto) => {
    setSelectedCrypto(data);
    setIsCryptoFormOpen(false);
  };

  const onNetworkSelectHandler = (data: Network) => {
    setSelectedNetwork(data);
    setIsNetworkFormOpen(false);
  };

  const withdrawalSubmitHandler = () => {
    setTransactionStatus("pending");
  };
  return (
    <div className="bg-white dark:bg-[#161735] p-6 rounded-xl flex flex-col md:flex-row gap-10">
      {/* Form Area */}
      <div className="w-full pl-10 space-y-1">
        {/* Select Crypto */}
        <div className="relative border border-transparent pb-20 ">
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
            {t("terms.selectCrypto")}
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
                {t("terms.selectCrypto")}
              </div>
            )}
            <MdOutlineKeyboardArrowDown className=" text-xl cursor-pointer" />
          </div>

          {/* model for form select crypto */}
          {isCryptoFormOpne && (
            <Model>
              <SelectCryptoPopup
                cryptoList={cryptoList}
                onClose={onCloseCryptoHandler}
                onSelect={onCryptoSelectHandler}
              />
            </Model>
          )}
        </div>

        {/* Withdraw To */}
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
              <LuWallet className=" text-md" />
            </span>

            <div
              className={`h-full w-fit border-r ${
                selectedNetwork && withdrawalAddress
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
            {t("terms.withTo")}
          </label>
          <div className="">
            {selectedNetwork && (
              <label className="opacity-80 dark:opacity-50 text-[10px] font-light pb-1">
                {t("terms.net")}
              </label>
            )}
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
                  {t("terms.selectNet")}
                </span>
              )}
              <MdOutlineKeyboardArrowDown className=" text-xl cursor-pointer" />
            </div>

            {selectedNetwork && withdrawalAddress && (
              <label className="opacity-80 dark:opacity-50 text-[10px] font-light pb-1 mt-4">
                {t("terms.add")}
              </label>
            )}
            {/* withdraw address input */}
            <div
              className={`relative ${
                withdrawalAddress && selectedNetwork ? "mt-0" : "mt-4"
              }`}
            >
              {/* max valued div */}
              <div className="absolute top-1/2 -translate-y-1/2 right-2 opacity-50 text-xs">
                {selectedNetwork ? (
                  <RiFileList2Line className="text-lg" />
                ) : (
                  "Max"
                )}
              </div>
              <input
                type="text"
                value={withdrawalAddress}
                placeholder={t("terms.enterAdd")}
                className="w-full dark:bg-slate-500/20 bg-slate-500/15 rounded-md px-4 py-3 text-xs font-light  placeholder-gray-400 outline-none"
                onChange={(e) => setWithdrawalAddress(e.target.value)}
              />
            </div>
          </div>

          {isNetworkFormOpen && (
            <Model>
              <SelectCryptoNetwork
                networks={networks}
                onClose={() => setIsNetworkFormOpen(false)}
                onSelect={onNetworkSelectHandler}
              />
            </Model>
          )}
        </div>

        {/* Withdrawal Amount */}
        <div className=" relative w-full  border-transparent pb-2">
          {/* side line and icon */}
          <div className="absolute -top-0 left-0 -translate-x-10 h-full flex flex-col items-center gap-2">
            <span
              className={`w-fit p-1 rounded ${
                withdrawalAmount
                  ? "bg-green-600 text-white dark:text-black"
                  : "bg-slate-500/20 dark:bg-slate-500/15 text-black/40 dark:text-white/40"
              }  h-fit`}
            >
              <IoIosCalculator className=" text-md" />
            </span>
          </div>

          <label
            className={` ${
              withdrawalAmount ? "opacity-100" : "opacity-50"
            } text-xs font-light flex items-center gap-2 mb-2`}
          >
            {t("terms.withAmount")}
          </label>

          {/* inputs */}
          {selectedCrypto && selectedNetwork && withdrawalAddress && (
            <div className="">
              <div className="w-full flex justify-between items-center">
                <label className="opacity-80 dark:opacity-50 text-[10px] font-light pb-1">
                  {t("terms.amount")}
                </label>

                <span className="text-[10px]  ">
                  {t("terms.avalBal")}: 530 USDT
                </span>
              </div>
              {/* amount input */}
              <div className={`relative`}>
                {/* max valued div */}
                <div className="absolute top-1/2 -translate-y-1/2 right-8 flex gap-2 items-center text-xs">
                  <span>USDT</span>
                  <span className="text-[11px] text-green-600">Max</span>
                </div>
                <input
                  type="number"
                  value={withdrawalAmount}
                  placeholder={`${t("minWithAmount")} 0.8 USDT`}
                  className="w-full dark:bg-slate-500/20 bg-slate-500/15 rounded-md px-4 py-3 text-xs font-light  placeholder-gray-400 outline-none control"
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                />
              </div>

              <label className="opacity-80 dark:opacity-50 text-[10px] font-light pb-1 mt-4">
                {t("terms.remark")}
              </label>
              {/* remark optional */}
              <div>
                <input
                  type="text"
                  value={remark}
                  placeholder={t("terms.remarkHolder")}
                  className="w-full dark:bg-slate-500/20 bg-slate-500/15 rounded-md px-4 py-3 text-xs font-light  placeholder-gray-400 outline-none"
                  onChange={(e) => setRemark(e.target.value)}
                />
              </div>

              {/* submit button */}
              <div className="w-full mt-10">
                {/* info */}
                <div className="w-full flex justify-between items-center">
                  <span className="flex gap-1 w-fit text-[10px] items-center">
                    <span className="opacity-80 dark:opacity-50 text-[10px] font-light">
                      {t("terms.rAmount")}:
                    </span>
                    <span> 0 USDT</span>
                  </span>

                  <span className="flex gap-1 w-fit text-[10px] items-center">
                    <span className="opacity-80 dark:opacity-50 text-[10px] font-light">
                      {t("terms.netFee")}:
                    </span>
                    <span> 0 ETH</span>
                  </span>
                </div>
                {/* button */}
                <button
                  className={`w-full rounded-full text-xs py-2.5 mt-2 ${
                    withdrawalAmount
                      ? "bg-green-600 dark:text-black text-white cursor-pointer"
                      : "bg-slate-500/20 cursor-not-allowed"
                  }`}
                  onClick={
                    withdrawalAmount ? withdrawalSubmitHandler : () => {}
                  }
                >
                  {t("terms.button")}
                </button>
              </div>
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
            {t("tips.label")}
          </h3>
          {/* border */}
          <div className="w-full border-t opacity-20"></div>
          {/* content */}
          <div className="space-y-1 text-[10px] font-light opacity-70 dark:opacity-50">
            <p className=" ">{t("tips.content.point1")}</p>
            <p className="">{t("tips.content.point2")}</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-3">
          {/* heading */}
          <h3 className="text-sm font-normal flex items-center gap-2">
            <MdOutlineHelpOutline className="text-lg" />
            {t("faq.label")}
            <span className="ml-auto text-xs font-light hover:scale-105 transition-all duration-200 opacity-50  cursor-pointer flex  items-center">
              {t("faq.button")}
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

      {/* withdraw transaction status popup */}
      {transactionStatus && (
        <Model>
          <TransactionStatusPopup status={transactionStatus} />
        </Model>
      )}
    </div>
  );
};

export default WithdrawalForm;
