"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import Spinner from "@/components/common/Spinner";

import { useGetRecordHistoryMutation } from "@/redux/masternode/dashboard/deposit-withdraw_history/deposit-withdrawApi";
import { useGetAvailablePairsMutation } from "@/redux/masternode/trade/eventsApi";

const DepositHistory = () => {
  const t = useTranslations("dashboard.depositHisPage");

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [filterDate, setFilterDate] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterCoin, setFilterCoin] = useState<string>("");

  const [getRecordHistory, { data, isLoading, isError }] =
    useGetRecordHistoryMutation();

  const [getAvailablePairs, { data: coinsData }] =
    useGetAvailablePairsMutation();

  useEffect(() => {
    getRecordHistory({ type: "DEPOSIT" });
    getAvailablePairs({});
  }, [getRecordHistory, getAvailablePairs]);

  const handleCopy = async (value: string, identifier: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(identifier);
      setTimeout(() => setCopiedField(null), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const orders = data?.orders || [];
  const allVendors: string[] =
    coinsData?.availablepairs?.map((p: any) => p.vendor) || [];

  const filteredOrders = orders.filter((item) => {
    const apiDate = item.transactions_transactiontime.slice(0, 10); // "YYYY/MM/DD"
    const inputDate = filterDate ? filterDate.replace(/-/g, "/") : "";

    const matchesDate = filterDate ? apiDate === inputDate : true;

    const matchesStatus = filterStatus
      ? item.transactions_status.toLowerCase() === filterStatus.toLowerCase()
      : true;

    const matchesCoin = filterCoin
      ? item.transactions_vendor.toLowerCase() === filterCoin.toLowerCase()
      : true;

    return matchesDate && matchesStatus && matchesCoin;
  });

  return (
    <div className="w-full bg-white dark:bg-[#161735] rounded-xl p-6">
      <h2 className={`${saira.className} text-sm font-semibold`}>
        {t("title")}
      </h2>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-end gap-4 mb-4 text-[10px] xl:text-[0.65rem] mt-2">
        <input
          type="date"
          className="border border-slate-500/40 p-1 px-2 rounded dark:bg-slate-800 dark:text-white"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <select
          className="border border-slate-500/40 p-1 px-2 rounded dark:bg-slate-800 dark:text-white"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">{t("terms.allStatu")}</option>
          <option value="SUCCESSFULL">Successfull</option>
          <option value="PENDING">Pending</option>
          <option value="CANCELLED">Cancelled</option>
        </select>

        <select
          className="border border-slate-500/40 p-1 px-2 rounded dark:bg-slate-800 dark:text-white"
          value={filterCoin}
          onChange={(e) => setFilterCoin(e.target.value)}
        >
          <option value="">{t("terms.allCoins")}</option>
          {allVendors.map((vendor) => (
            <option key={vendor} value={vendor}>
              {vendor}
            </option>
          ))}
        </select>

        <button
          className="bg-green-500 text-white dark:text-black px-2 py-1 rounded-full hover:bg-green-600 cursor-pointer"
          onClick={() => {
            setFilterDate("");
            setFilterStatus("");
            setFilterCoin("");
          }}
        >
          {t("button")}
        </button>
      </div>

      {/* Table / Feedback */}
      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      ) : isError ? (
        <div className="text-center text-red-500 mt-4 text-sm">
          Failed to load deposit history.
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="text-center text-sm opacity-70 py-10">
          {t("noData")}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
              <tr className="text-xs">
                <th className="px-4 py-3 text-xs font-light">
                  {t("tHead.cOrT")}
                </th>
                <th className="px-4 py-3 text-xs font-light">
                  {t("tHead.amount")}
                </th>
                <th className="px-4 py-3 text-xs font-light">
                  {t("tHead.time")}
                </th>
                <th className="px-4 py-3 text-xs font-light">
                  {t("tHead.bRecords")}
                </th>
                <th className="px-4 py-3 text-xs font-light">
                  {t("tHead.remark")}
                </th>
                <th className="px-4 py-3 text-xs font-light">
                  {t("tHead.status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((item, index) => {
                const blockchainKey = `blockchain-${index}`;
                return (
                  <tr
                    key={item.transactions_id}
                    className="dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-xs"
                  >
                    <td className="py-3 px-4">{item.transactions_vendor}</td>
                    <td className="py-3 px-4">
                      {Number(item.transactions_transactionamount)
                        .toFixed(2)
                        .replace(/\.00$/, "")}
                    </td>
                    <td className="py-3 px-4">
                      {item.transactions_transactiontime}
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full h-full flex gap-1 items-center justify-center">
                        <button
                          onClick={() =>
                            handleCopy(
                              item.transactions_hashcode,
                              blockchainKey
                            )
                          }
                          title="Copy"
                        >
                          {copiedField === blockchainKey ? (
                            <FaCheck className="text-green-400 text-lg" />
                          ) : (
                            <MdContentCopy className="text-lg opacity-70 cursor-pointer" />
                          )}
                        </button>
                        {item.transactions_hashcode.slice(0, 6)}...
                        {item.transactions_hashcode.slice(-6)}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {item.transactions_info || "-"}
                    </td>
                    <td className="py-3 px-4 text-green-400">
                      {item.transactions_status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DepositHistory;
