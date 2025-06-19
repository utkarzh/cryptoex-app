import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

// type Props = {}

const LoanInfo = () => {
  const t = useTranslations("loansPage.fixedLoan.howItWorks");
  const MOCK_DATA = [
    {
      title: t("step1.title"),
      content: t("step1.content"),
    },
    {
      title: t("step2.title"),
      content: t("step2.content"),
    },
    {
      title: t("step3.title"),
      content: t("step3.content"),
    },
    {
      title: t("step4.title"),
      content: t("step4.content"),
    },
    {
      title: t("step5.title"),
      content: t("step5.content"),
    },
  ];

  const [selectedTab, setSelectedTab] = useState<"borrower" | "supplier">(
    "borrower"
  );
  return (
    <div className="w-full mt-20 mb-10">
      {/* heading part */}
      <div className="w-full flex justify-between border-b-2 dark:border-white/10 border-[#161735]/10 pt-2">
        {/* heading */}
        <h2 className={`${saira.className} text-[20px] xl:text-[1.7rem] mb-3`}>
          {t("title")}
        </h2>
        {/* Tabs */}
        <div className="flex gap-6   ">
          {["borrower", "supplier"].map((val) => (
            <button
              key={val}
              onClick={() => setSelectedTab(val as typeof selectedTab)}
              className={`text-[14px] xl:text-[0.9rem] font-light pb-2 cursor-pointer top-[2px] relative  ${
                selectedTab === val
                  ? "text-green-400 border-b-2 "
                  : "border-b-2 border-transparent"
              }`}
            >
              {t(`tabs.${val}`)}
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      <div className="w-[98%] mx-auto mt-4 flex gap-4 justify-start flex-wrap">
        {MOCK_DATA.map(({ title, content }, index) => (
          <div
            className="w-fit min-w-[250px]  sm:max-w-[calc(94%/3)] bg-white  shadow shadow-black/40 dark:shadow-white/20 dark:bg-[#161735]  rounded-xl p-4 py-6 xl:py-8  flex  flex-col gap-3"
            key={index}
          >
            {/* title */}
            <div className="flex items-center xl:mb-2">
              <h4 className={`${saira.className}`}>{title}</h4>
            </div>

            {/* border line */}
            <div className="w-full border-b opacity-30 "></div>
            {/* content */}
            <p className="text-xs font-light xl:mt-2">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanInfo;
