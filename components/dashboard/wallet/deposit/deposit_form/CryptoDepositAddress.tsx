"use client";

import { FC, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  address: string;
};

const CryptoDepositAddress: FC<Props> = ({ address }) => {
  const t = useTranslations("dashboard.depositPage.form");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" p-4 flex flex-col  gap-2 xl:gap-4  ">
      <div className="flex gap-2">
        <div>
          <h2 className="text-xs font-light mb-1">
            USDT(Tether) {t("terms.addPub")}
          </h2>
          <p className="text-[10px] xl:text-[0.65rem] mt-2 opacity-90 dark:opacity-70">
            {t("terms.addPubContent")}
          </p>
        </div>

        {/* qr code */}
        <div className="shrink-0">
          <Image
            src="/images/testqr.png" // <- Replace with your QR image path or dynamically generate it
            alt="QR Code"
            width={100}
            height={100}
            className="rounded w-20 xl:w-24 dark:invert-0 invert"
          />
        </div>
      </div>
      <div className="flex items-center bg-slate-200/30 dark:bg-slate-500/30 rounded-md px-3 py-2 justify-between">
        <span className="text-xs break-all">{address}</span>
        <button
          onClick={handleCopy}
          className="ml-3 text-sm  flex items-center cursor-pointer"
        >
          <div className="flex items-center p-1 px-2 rounded-md bg-slate-300/70 dark:bg-slate-500/40 gap-1">
            {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
            <span className="">
              {copied ? t("terms.copied") : t("terms.copy")}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CryptoDepositAddress;
