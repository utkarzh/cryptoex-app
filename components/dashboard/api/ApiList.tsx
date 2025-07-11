"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { RxValueNone } from "react-icons/rx";
import {
  useGetMyKeysQuery,
  useDeleteKeyMutation,
  useValidateKeyMutation,
  useUpdateKeyMutation,
} from "@/redux/masternode/dashboard/api_management/apiManagementApi";
import Model from "@/components/common/Model";
import AuthPopup from "./AuthPopup";
import EditApiPopup from "./EditApiPopup";
import { toast } from "sonner";
import { UpdateKeyRequest } from "@/redux/masternode/dashboard/api_management/apiManagementApi";

const ApiList = () => {
  const t = useTranslations("dashboard.apiPage.apiList");

  const { data, isLoading } = useGetMyKeysQuery();
  const [deleteKey] = useDeleteKeyMutation();
  const [validateKey] = useValidateKeyMutation();
  const [updateKey] = useUpdateKeyMutation();

  const [apirefkey, setApirefkey] = useState<number | null>(null);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [editItem, setEditItem] = useState<any | null>(null); // holds API key to edit

  const handleDeleteClick = async (refid: number) => {
    try {
      const sessionResponse = await deleteKey({ id: refid }).unwrap();
      if (
        sessionResponse?.status === 1 &&
        sessionResponse.message.toLowerCase().includes("verification")
      ) {
        setApirefkey(Number(sessionResponse.apirefkey));
        setShowAuthPopup(true);
        toast.success(sessionResponse.message);
      } else {
        toast.error(sessionResponse.message || "Failed to initiate deletion.");
      }
    } catch (err) {
      toast.error("Delete request failed.");
      console.error(err);
    }
  };

  const handleOtpConfirm = async (code: string) => {
    if (!apirefkey) return;

    try {
      const res = await validateKey({
        api_authcode: code,
        apirefkey,
      }).unwrap();

      if (res.status === 1 && res.message.toLowerCase().includes("verified")) {
        toast.success("API Key deleted successfully!");
        setShowAuthPopup(false);
        setApirefkey(null);
      } else {
        toast.error(res.message || "Invalid code.");
      }
    } catch (err) {
      toast.error("Validation failed.");
      console.error(err);
    }
  };

  const handleEditConfirm = async (data: {
    note: string;
    permissions: string[];
    ip: string;
  }) => {
    if (!editItem) return;

    const payload: UpdateKeyRequest = {
      id: editItem.refid,
      name: data.note,
      api_iplist: data.ip,
      api_balance: data.permissions.includes("balance")
        ? "ENABLED"
        : "DISABLED",
      api_addorder: data.permissions.includes("addOrder")
        ? "ENABLED"
        : "DISABLED",
      api_getorder: data.permissions.includes("getOrder")
        ? "ENABLED"
        : "DISABLED",
      api_deleteorder: data.permissions.includes("closeOrder")
        ? "ENABLED"
        : "DISABLED",
    };

    try {
      const res = await updateKey(payload).unwrap();
      if (res.status === 1) {
        toast.success(res.message || "Key updated successfully.");
        setEditItem(null);
      } else {
        toast.error(res.message || "Failed to update key.");
      }
    } catch (error) {
      toast.error("Update request failed.");
      console.error(error);
    }
  };

  const apikeys = data?.apikeys ?? [];

  return (
    <div className="w-full bg-white dark:bg-[#161735] rounded-xl p-6">
      <h2 className={`${saira.className} text-sm font-semibold mb-10`}>
        {t("title")}
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-200 dark:bg-slate-700/40 text-center">
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

                const defaultPermissions = [
                  item.balance === "ENABLED" && "balance",
                  item.addorder === "ENABLED" && "addOrder",
                  item.vieworder === "ENABLED" && "getOrder",
                  item.deleteorder === "ENABLED" && "closeOrder",
                ].filter(Boolean) as string[];

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
                    <td className="py-3 px-4 space-x-2">
                      <button
                        onClick={() =>
                          setEditItem({
                            refid: item.refid,
                            name: item.name,
                            iplist: item.iplist,
                            permissions: defaultPermissions,
                          })
                        }
                        className="text-xs px-2 py-1 text-gray-100 bg-gray-600 dark:bg-gray-500/30 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-500/20 rounded-full cursor-pointer transition-all duration-300"
                      >
                        {t("tHead.button.edit")}
                      </button>
                      <button
                        onClick={() => handleDeleteClick(item.refid)}
                        className="px-2 p-1 rounded-full text-red-100 bg-red-500 dark:text-red-500 dark:bg-red-700/20 dark:hover:bg-red-700/10 cursor-pointer border border-red-500 hover:bg-red-600 transition-all duration-200"
                      >
                        {t("tHead.button.delete")}
                      </button>
                    </td>
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

      {showAuthPopup && apirefkey && (
        <Model>
          <AuthPopup
            apirefkey={apirefkey}
            onClose={() => setShowAuthPopup(false)}
            onSuccess={handleOtpConfirm}
          />
        </Model>
      )}

      {/* {editItem && (
        <Model>
          <EditApiPopup
            onClose={() => setEditItem(null)}
            onConfirm={handleEditConfirm}
            defaultNote={editItem.name}
            defaultIp={editItem.iplist}
            defaultPermissions={editItem.permissions}
          />
        </Model>
      )} */}
    </div>
  );
};

export default ApiList;
