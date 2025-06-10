"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React from "react";
import { IoMdClose } from "react-icons/io";

type Step = {
  number: number;
  title: string;
  description: string;
};

const DepositSteps = () => {
  const t = useTranslations("dashboard.depositPage.steps");
  const steps: Step[] = [
    {
      number: 1,
      title: t("step1.title"),
      description: t("step1.content"),
    },
    {
      number: 2,
      title: t("step2.title"),
      description: t("step2.content"),
    },
    {
      number: 3,
      title: t("step3.title"),
      description: t("step3.content"),
    },
    {
      number: 4,
      title: t("step4.title"),
      description: t("step4.content"),
    },
  ];
  return (
    <div className="bg-white dark:bg-[#161735] p-6 rounded-xl">
      {/* heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={`${saira.className} text-sm font-semibold `}>
          {t("title")}
        </h2>
        <button className="text-xl hover:scale-110  transition-all duration-200 cursor-pointer">
          <IoMdClose />
        </button>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border w-full border-slate-400/20 rounded-md p-4  text-start lg:text-center flex flex-col gap-3"
          >
            <div className="flex items-center justify-start lg:justify-center gap-2 mb-2">
              <span className="bg-green-600 text-white dark:text-black rounded w-5 h-5 text-xs flex items-center justify-center font-light">
                {step.number}
              </span>
              <span className="text-green-600 text-xs font-light">
                {step.title}
              </span>
            </div>
            <p className="text-[10px] font-light opacity-80">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepositSteps;
