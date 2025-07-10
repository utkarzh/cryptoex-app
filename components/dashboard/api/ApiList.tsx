"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { RxValueNone } from "react-icons/rx";
import { useGetMyKeysMutation } from "@/redux/masternode/dashboard/api_management/apiManagementApi";

const ApiList = () => {
  const t = useTranslations("dashboard.apiPage.apiList");

  const [getMyKeys, { data, isLoading, isError }] = useGetMyKeysMutation();

  useEffect(() => {
    getMyKeys(); // trigger once on mount
  }, [getMyKeys]);

  const apikeys = data?.apikeys ?? [];

  return (
    <div className="w-full bg-white dark:bg-[#161735] rounded-xl p-6">
      {/* heading */}
      <h2 className={`${saira.className} text-sm font-semibold mb-10`}>
        {t("title")}
      </h2>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
            <tr className="text-xs">
              <th className="px-4 py-3 font-light">{t("tHead.createDate")}</th>
              <th className="px-4 py-3 font-light">{t("tHead.notes")}</th>
              <th className="px-4 py-3 font-light">{t("tHead.permission")}</th>
              <th className="px-4 py-3 font-light">{t("tHead.accKey")}</th>
              <th className="px-4 py-3 font-light">{t("tHead.ip")}</th>
              <th className="px-4 py-3 font-light">{t("tHead.expire")}</th>
              <th className="px-4 py-3 font-light">{t("tHead.action")}</th>
            </tr>
          </thead>

          {apikeys.length > 0 && (
            <tbody>
              {apikeys.map((item, index) => {
                const permissions = [
                  item.balance === "ENABLED" && t("permissions.balance"),
                  item.addorder === "ENABLED" && t("permissions.addOrder"),
                  item.vieworder === "ENABLED" && t("permissions.viewOrder"),
                  item.deleteorder === "ENABLED" &&
                    t("permissions.deleteOrder"),
                ]
                  .filter(Boolean)
                  .join(", ");

                return (
                  <tr
                    key={index}
                    className="dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-xs"
                  >
                    <td className="py-3 px-4">{item.createdon}</td>
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4 max-w-[200px]">{permissions}</td>
                    <td className="py-3 px-4 break-words">{item.publickey}</td>
                    <td className="py-3 px-4">{item.iplist}</td>
                    <td className="py-3 px-4">{item.expiresin} days</td>
                    <td className="py-3 px-4">-</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>

      {!apikeys.length && !isLoading && (
        <div className="w-full h-[40vh] flex justify-center items-center">
          <RxValueNone className="text-[30vh] opacity-5" />
        </div>
      )}
    </div>
  );
};

export default ApiList;
