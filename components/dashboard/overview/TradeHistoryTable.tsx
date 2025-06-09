"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Trade = {
  time: string;
  pair: string;
  symbol: string;
  side: "Buy" | "Sell";
  type: string;
  price: string;
  amount: string;
  volume: string;
  fee: string;
};

const trades: Trade[] = [
  {
    time: "13/03/24 - 20:54:29",
    pair: "BTC/USDT",
    symbol: "Bitcoin",
    side: "Buy",
    type: "Limit",
    price: "$86,652.34",
    amount: "0.5 BTC",
    volume: "46000 USDT",
    fee: "0.0003 BTC",
  },
  {
    time: "13/03/24 - 20:54:29",
    pair: "ETH/USDT",
    symbol: "Ethereum",
    side: "Sell",
    type: "Limit",
    price: "$1600.05",
    amount: "2 ETH",
    volume: "3200 USDT",
    fee: "0.001 ETH",
  },
  {
    time: "13/03/24 - 20:54:29",
    pair: "BTC/USDT",
    symbol: "Bitcoin",
    side: "Buy",
    type: "Limit",
    price: "$86,652.34",
    amount: "0.5 BTC",
    volume: "46000 USDT",
    fee: "0.0003 BTC",
  },
  {
    time: "13/03/24 - 20:54:29",
    pair: "BTC/USDT",
    symbol: "Bitcoin",
    side: "Buy",
    type: "Limit",
    price: "$86,652.34",
    amount: "0.5 BTC",
    volume: "46000 USDT",
    fee: "0.0003 BTC",
  },
  {
    time: "13/03/24 - 20:54:29",
    pair: "ETH/USDT",
    symbol: "Ethereum",
    side: "Sell",
    type: "Limit",
    price: "$1600.05",
    amount: "2 ETH",
    volume: "3200 USDT",
    fee: "0.001 ETH",
  },
];

const TradeHistoryTable = () => {
  const t = useTranslations("dashboard.overviewPage.tradeTable");
  return (
    <div className=" bg-white dark:bg-[#161735]  p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`${saira.className} text-sm font-semibold `}>
          {t("title")}
        </h2>
        {/* view all button */}
        <button className="border text-xs border-green-500 text-green-50 bg-green-600 dark:text-green-400 dark:bg-green-700/30 hover:scale-105  px-3 py-1.5 rounded-full  flex items-center gap-1   transition cursor-pointer">
          {t("button")} <BsArrowRight />
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-xs">
              <th className="px-4 py-3 text-[11px] font-light">
                {t("tHead.filledTime")}
              </th>
              <th className="px-4 py-3 text-[11px] font-light">
                {" "}
                {t("tHead.pair")}
              </th>
              <th className="px-4 py-3 text-[11px] font-light">
                {" "}
                {t("tHead.bOrS")}
              </th>
              <th className="px-4 py-3 text-[11px] font-light">
                {" "}
                {t("tHead.orderType")}
              </th>
              <th className="px-4 py-3 text-[11px] font-light">
                {" "}
                {t("tHead.fillPrice")}
              </th>
              <th className="px-4 py-3 text-[11px] font-light">
                {" "}
                {t("tHead.amount")}
              </th>
              <th className="px-4 py-3 text-[11px] font-light">
                {" "}
                {t("tHead.vol")}
              </th>
              <th className="px-4 py-3 text-[11px] font-light">
                {" "}
                {t("tHead.fee")}
              </th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, idx) => (
              <tr
                key={idx}
                className=" dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-[11px]"
              >
                <td className="px-4 py-3 ">{trade.time}</td>
                <td className="px-4 py-3 ">
                  <div className="w-fit mx-auto text-start ">
                    <div className="font-medium">{trade.pair}</div>
                    <div className="text-xs text-gray-400">{trade.symbol}</div>
                  </div>
                </td>
                <td className="px-4 py-3  text-center">
                  <span
                    className={`${
                      trade.side === "Buy" ? "text-green-400" : "text-red-400"
                    } `}
                  >
                    {trade.side}
                  </span>
                </td>
                <td className="px-4 py-3 ">{trade.type}</td>
                <td className="px-4 py-3">{trade.price}</td>
                <td className="px-4 py-3">{trade.amount}</td>
                <td className="px-4 py-3">{trade.volume}</td>
                <td className="px-4 py-3">{trade.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistoryTable;
