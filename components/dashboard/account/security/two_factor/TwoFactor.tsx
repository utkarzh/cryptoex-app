"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsShieldLock } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import Model from "@/components/common/Model";
import TwoFactorSetupPopup from "./TwoFactorSetupPopup";
import TwoFactorDisableFormPopup from "./TwoFactorDisableFormPopup";
import TwoFactorDisablePopupConfirm from "./TwoFactorDisableConfirmPopup";
import { useResetMobileCodeMutation } from "@/redux/masternode/dashboard/security/securityApi";

import { getSessionId } from "@/utils/session";

type TwoFactorProps = {
  isSet: boolean;
  qrImage: string;
  gPrivateKey: string;
};

type DisableFormData = {
  password: string;
  otp: string;
};

const TwoFactor: React.FC<TwoFactorProps> = ({
  isSet,
  qrImage,
  gPrivateKey,
}) => {
  const t = useTranslations("dashboard.security.securitySetting.twofactor");

  const [modalType, setModalType] = useState<
    "setup" | "disable-form" | "disable-confirmation" | ""
  >("");

  const [formData, setFormData] = useState<DisableFormData | null>(null);

  const [resetMobileCode, { isLoading }] = useResetMobileCodeMutation();

  const handleSetupClick = () => {
    setModalType("setup");
  };

  const handleDisableClick = () => {
    setModalType("disable-form");
  };

  const closeModal = () => {
    setModalType("");
  };

  const handleDisableSuccess = async () => {
    if (!formData?.otp) {
      toast.error("Missing OTP. Please try again.");
      return;
    }

    try {
      const res = await resetMobileCode({ otp: formData.otp }).unwrap();
      if (res.status === 1) {
        toast.success("Two-factor authentication disabled successfully.");
        closeModal();
        // Optional: trigger profile refetch or update local state
      } else {
        toast.error(res.message || "Failed to disable 2FA");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="flex justify-between items-center text-xs">
      <div className="flex items-start gap-2">
        <BsShieldLock className="text-[17px]" />
        <div>
          <div className="font-xs font-light opacity-90">{t("label")}</div>
          <div className="text-[11px] xl:text-[0.65rem] font-light opacity-60">
            {t("content")}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2">
        {isSet && (
          <span className="flex items-center gap-1 text-sm">
            <Image
              src="/images/icons/verified.png"
              width={24}
              height={24}
              alt=""
              className="w-3 xl:w-4 h-auto"
            />
            <span className="opacity-60 text-[10px] xl:text-[.65rem] font-light">
              Linked
            </span>
          </span>
        )}

        <button
          className="border border-slate-500/20 bg-slate-500/25 cursor-pointer text-[10px] px-2 py-1 text-sm xl:text-[0.65rem] rounded dark:hover:bg-slate-500/30 hover:bg-slate-500/15"
          onClick={isSet ? handleDisableClick : handleSetupClick}
        >
          {isSet ? t("buttons.disable") : t("buttons.setUp")}
        </button>
      </div>

      {/* Modals */}
      {modalType && (
        <Model>
          {modalType === "setup" && (
            <TwoFactorSetupPopup
              qrImage={qrImage}
              gPrivateKey={gPrivateKey}
              onClose={closeModal}
              onSuccess={closeModal}
            />
          )}

          {modalType === "disable-form" && (
            <TwoFactorDisableFormPopup
              onClose={closeModal}
              onSuccess={(data) => {
                setFormData(data); // Save form data here
                setModalType("disable-confirmation");
              }}
            />
          )}

          {modalType === "disable-confirmation" && (
            <TwoFactorDisablePopupConfirm
              onClose={closeModal}
              onSuccess={handleDisableSuccess}
            />
          )}
        </Model>
      )}
    </div>
  );
};

export default TwoFactor;
