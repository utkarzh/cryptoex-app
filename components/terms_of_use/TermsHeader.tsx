import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const TermsHeader = () => {
  const t = useTranslations("termsOfUse");
  return (
    <div className="w-full h-[250px] flex justify-end relative z-[40]">
      <div className="w-[25%] flex justify-end items-center relative left-[2vw] bottom-[10px]">
        <h2
          className={`${saira.className} text-3xl w-fit font-semibold tracking-wide pb-3 border-b-3 border-green-600 `}
        >
          {t("title")}
        </h2>
      </div>
      <div className="w-[75%]">
        <Image
          src="/images/termsheadingimg.png"
          alt="terms"
          width={700}
          height={700}
          className="w-full h-auto relative  "
        />
      </div>
    </div>
  );
};

export default TermsHeader;
