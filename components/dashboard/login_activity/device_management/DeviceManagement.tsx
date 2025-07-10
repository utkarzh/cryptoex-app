"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { RxValueNone } from "react-icons/rx";
import {
  useGetTrustedZonesMutation,
  useDeleteTrustedZoneMutation,
} from "@/redux/masternode/dashboard/device_management/deviceManagementApi";

import { saira } from "@/utils/Font";
import Model from "@/components/common/Model";
import CustomPopup from "@/components/common/CustomPopUp";
import { toast } from "sonner";
import Spinner from "@/components/common/Spinner";

const DeviceManagement = () => {
  const t = useTranslations("dashboard.deviceManagement");

  const [getTrustedZones, { data, isLoading, isError }] =
    useGetTrustedZonesMutation();
  const [deleteTrustedZone, { isLoading: isDeleting }] =
    useDeleteTrustedZoneMutation();

  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  useEffect(() => {
    getTrustedZones();
  }, [getTrustedZones]);

  const trustedZones = data?.userzones ?? [];

  const handleDeleteConfirm = async () => {
    if (!confirmDeleteId) return;

    try {
      const res = await deleteTrustedZone({
        requestid: confirmDeleteId,
      }).unwrap();
      if (res.status === 1) {
        toast.success("Trusted zone deleted successfully.");
        setConfirmDeleteId(null);
        getTrustedZones(); // 🔁 Refetch after delete
      } else {
        toast.error(res.message || "Failed to delete trusted zone.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#161735] rounded-xl p-6">
      <h2 className={`${saira.className} text-sm font-semibold mb-10`}>
        {t("title")}
      </h2>

      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="w-full flex justify-center items-center h-[40vh]">
            <Spinner />
          </div>
        ) : (
          <table className="min-w-full text-sm">
            <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
              <tr className="text-xs">
                <th className="px-4 py-3 font-light">{t("tHead.dateTime")}</th>
                <th className="px-4 py-3 font-light">{t("tHead.location")}</th>
                <th className="px-4 py-3 font-light">{t("tHead.ip")}</th>
                <th className="px-4 py-3 font-light">{t("tHead.action")}</th>
              </tr>
            </thead>

            {trustedZones.length > 0 && (
              <tbody>
                {trustedZones.map((item) => (
                  <tr
                    key={item.userlocationmap_id}
                    className="dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-xs"
                  >
                    <td className="py-3 px-4">
                      {item.userlocationmap_addedon}
                    </td>
                    <td className="py-3 px-4">
                      {item.userlocationmap_location}
                    </td>
                    <td className="py-3 px-4">{item.userlocationmap_zone}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() =>
                          setConfirmDeleteId(item.userlocationmap_id)
                        }
                        className="px-2 p-1 rounded-full text-red-100 bg-red-500 dark:text-red-500 dark:bg-red-700/20 dark:hover:bg-red-700/10 cursor-pointer border border-red-500 hover:bg-red-600 transition-all duration-200"
                      >
                        {t("tHead.button")}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>

      {!isLoading && trustedZones.length === 0 && (
        <div className="w-full h-[40vh] flex justify-center items-center">
          <RxValueNone className="text-[30vh] opacity-5" />
        </div>
      )}

      {isError && (
        <div className="text-center text-red-500 mt-4 text-sm">
          Failed to load trusted zones. Please try again.
        </div>
      )}

      {confirmDeleteId !== null && (
        <Model>
          <CustomPopup
            message="Are you sure you want to delete this trusted zone?"
            onClose={() => setConfirmDeleteId(null)}
            onConfirm={handleDeleteConfirm}
            onLoading={isDeleting}
          />
        </Model>
      )}
    </div>
  );
};

export default DeviceManagement;
