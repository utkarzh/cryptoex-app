"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  useGenerateKeyMutation,
  useValidateKeyMutation,
} from "@/redux/masternode/dashboard/api_management/apiManagementApi";
import { toast } from "sonner";
import AuthPopup from "./AuthPopup";
import KeyGeneratedModal from "./KeyGeneratedModal";
import Model from "@/components/common/Model";
import Spinner from "@/components/common/Spinner";

const ApiForm = () => {
  const t = useTranslations("dashboard.apiPage.apiManagement.terms");

  const [notes, setNotes] = useState("");
  const [iplist, setIpList] = useState("");
  const [permissions, setPermissions] = useState({
    balance: false,
    addOrder: false,
    getOrder: false,
    closeOrder: false,
  });

  const [apirefkey, setApirefkey] = useState<number | null>(null);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [apiKeyInfo, setApiKeyInfo] = useState<{
    accessKey: string;
    secretKey: string;
    permissions: string[];
    ip: string;
  } | null>(null);

  const [generateKey, { isLoading }] = useGenerateKeyMutation();
  const [verifyKey] = useValidateKeyMutation();

  const handleCheckboxChange = (field: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async () => {
    try {
      const response = await generateKey({
        name: notes,
        api_addorder: permissions.addOrder ? "ENABLED" : "DISABLED",
        api_balance: permissions.balance ? "ENABLED" : "DISABLED",
        api_deleteorder: permissions.closeOrder ? "ENABLED" : "DISABLED",
        api_getorder: permissions.getOrder ? "ENABLED" : "DISABLED",
        api_iplist: iplist,
      }).unwrap();

      if (response?.status === 1) {
        setApirefkey(response.apirefkey);
        setShowAuthPopup(true);
      } else {
        toast.error(response.message || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Key generation failed.");
      console.error(err);
    }
  };

  const handleOtpConfirm = async (code: string) => {
    if (!apirefkey) return;

    try {
      const res = await verifyKey({
        api_authcode: code,
        apirefkey,
      }).unwrap();

      if (
        res.status === 1 &&
        res.message.toLowerCase().includes("success") &&
        res.apikeys?.[0]
      ) {
        const keys = res.apikeys[0];

        setApiKeyInfo({
          accessKey: keys.publickey,
          secretKey: keys.privatekey,
          permissions: Object.entries(keys)
            .filter(
              ([key, value]) =>
                ["balance", "vieworder", "addorder", "deleteorder"].includes(
                  key
                ) && value === "ENABLED"
            )
            .map(([key]) => key),
          ip: keys.iplist,
        });

        setShowAuthPopup(false);
        setShowKeyModal(true);
      } else {
        toast.error(res.message || "Incorrect code.");
      }
    } catch (err) {
      toast.error("Invalid or expired code.");
      console.error(err);
    }
  };

  return (
    <>
      <div className="w-full space-y-6">
        {/* Notes Input */}
        <div>
          <label className="block mb-1 text-xs font-light">{t("notes")}</label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t("notesHolder")}
            className="w-full indent-2 rounded-md bg-slate-500/10 border-gray-500/20 focus:outline-none placeholder:text-xs font-light py-1 pb-2"
          />
        </div>

        {/* Permissions */}
        <div className="w-full space-y-3">
          <div className="text-xs font-light">
            {t("preSetting.part1")}
            <span className="text-slate-500">{t("preSetting.part2")}</span>
          </div>
          <div className="flex justify-between gap-2 flex-wrap">
            {(["balance", "addOrder", "getOrder", "closeOrder"] as const).map(
              (key) => (
                <div className="flex gap-1 items-center" key={key}>
                  <input
                    type="checkbox"
                    checked={permissions[key]}
                    onChange={() => handleCheckboxChange(key)}
                  />
                  <label className="text-[10px] xl:text-[0.65rem] font-light">
                    {key === "balance" ? t("accBalance") : t(key)}
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        {/* IP Address */}
        <div className="w-full space-y-3">
          <div className="text-xs font-light">
            {t("bindIp.part1")}
            <span className="text-slate-500">{t("bindIp.part2")}</span>
          </div>
          <textarea
            rows={3}
            value={iplist}
            onChange={(e) => setIpList(e.target.value)}
            className="w-full p-1 rounded-md bg-slate-500/10 border border-gray-500/20"
          />
          <p className="text-slate-500 text-xs">{t("expDate")}</p>
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-end">
          <button
            className="w-fit border text-xs border-transparent bg-green-600 dark:text-black text-white py-1 px-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : t("button")}
          </button>
        </div>
      </div>

      {/* Auth Popup */}
      {showAuthPopup && apirefkey && (
        <Model>
          <AuthPopup
            apirefkey={apirefkey}
            onClose={() => setShowAuthPopup(false)}
            onSuccess={handleOtpConfirm}
          />
        </Model>
      )}

      {/* Final Key Modal */}
      {showKeyModal && apiKeyInfo && (
        <Model>
          <KeyGeneratedModal
            accessKey={apiKeyInfo.accessKey}
            secretKey={apiKeyInfo.secretKey}
            permissions={apiKeyInfo.permissions}
            ip={apiKeyInfo.ip}
            onClose={() => {
              setShowKeyModal(false);
              setApirefkey(null);
              setNotes("");
              setIpList("");
              setPermissions({
                balance: false,
                addOrder: false,
                getOrder: false,
                closeOrder: false,
              });
            }}
          />
        </Model>
      )}
    </>
  );
};

export default ApiForm;
