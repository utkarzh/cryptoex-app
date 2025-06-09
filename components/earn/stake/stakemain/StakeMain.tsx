import React from "react";
import ContentCard from "./ContentCard";
import StakeTable from "./StakeTable";
import Faq from "@/components/common/faq/Faq";
import { useTranslations } from "next-intl";

const StakeMain = () => {
  const t = useTranslations("stakingPage");
  const test = [
    {
      title: t("info.info1.title"),
      content: t("info.info1.content"),
    },
    {
      title: t("info.info2.title"),
      content: t("info.info2.content"),
    },
    {
      title: t("info.info3.title"),
      content: t("info.info3.content"),
    },
  ];

  const testFaq = [
    {
      question: t("faq.faq1.ques"),
      answer: t("faq.faq1.ans"),
    },
    {
      question: t("faq.faq2.ques"),
      answer: t("faq.faq2.ans"),
    },
    {
      question: t("faq.faq3.ques"),
      answer: t("faq.faq3.ans"),
    },
    {
      question: t("faq.faq4.ques"),
      answer: t("faq.faq4.ans"),
    },
  ];
  return (
    <div className="w-[95%] sm:w-[85%] md:w-[80%]  lg:w-[70%] mx-auto py-20 h-full">
      {/* content cards */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        {test.map((val, index) => (
          <ContentCard title={val.title} content={val.content} key={index} />
        ))}
      </div>

      {/* table */}
      <StakeTable />
      {/* faq */}
      <Faq data={testFaq} />
    </div>
  );
};

export default StakeMain;
