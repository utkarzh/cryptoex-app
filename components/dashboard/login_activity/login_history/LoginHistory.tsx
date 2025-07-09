"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { RxValueNone } from "react-icons/rx";
import { useGetLoginHistoryMutation } from "@/redux/masternode/dashboard/login_activity/loginHistoryApi";

type TransformedRow = {
  dateTime: string;
  action: "lSuccess" | "lFailed";
  ipAddress: string;
};

const LoginHistory = () => {
  const t = useTranslations("dashboard.loginHisPage");
  const [getLoginHistory, { data, isLoading, error }] =
    useGetLoginHistoryMutation();
  const [rows, setRows] = useState<TransformedRow[]>([]);

  useEffect(() => {
    getLoginHistory()
      .unwrap()
      .then((res) => {
        const transformed: TransformedRow[] = res.useractivity.map((item) => ({
          dateTime: item.useractivity_addedon,
          action: item.useractivity_activity.includes("Failed")
            ? "lFailed"
            : "lSuccess",
          ipAddress: item.useractivity_ipaddress,
        }));
        setRows(transformed);
      })
      .catch((err) => {
        console.error("Login history fetch failed", err);
      });
  }, [getLoginHistory]);

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
              <th className="px-4 py-3 text-xs font-light">
                {t("tHead.dateTime")}
              </th>
              <th className="px-4 py-3 text-xs font-light">
                {t("tHead.action")}
              </th>
              <th className="px-4 py-3 text-xs font-light">{t("tHead.ip")}</th>
            </tr>
          </thead>
          {!isLoading && rows.length > 0 && (
            <tbody>
              {rows.map((item, index) => (
                <tr
                  key={index}
                  className="dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-xs"
                >
                  <td className="py-3 px-4">{item.dateTime}</td>
                  <td className="py-3 px-4">{t(`terms.${item.action}`)}</td>
                  <td className="py-3 px-4">{item.ipAddress}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {/* Empty or loading state */}
      {(isLoading || rows.length === 0) && (
        <div className="w-full h-[40vh] flex justify-center items-center">
          <RxValueNone className="text-[30vh] opacity-5" />
        </div>
      )}
    </div>
  );
};

export default LoginHistory;
