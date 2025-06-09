import React from "react";
import Faq from "../common/faq/Faq";
import { useTranslations } from "next-intl";

const MainFaq = () => {
  const t = useTranslations("faqPage");
  const stakingFaq = [
    {
      question: t("faq1.ques"),
      answer: t("faq1.ans"),
    },
    {
      question: t("faq2.ques"),
      answer: t("faq2.ans"),
    },
    {
      question: t("faq3.ques"),
      answer: t("faq3.ans"),
    },
    {
      question: t("faq4.ques"),
      answer: t("faq4.ans"),
    },
    {
      question: t("faq1.ques"),
      answer: t("faq1.ans"),
    },
    {
      question: t("faq2.ques"),
      answer: t("faq2.ans"),
    },
    {
      question: t("faq3.ques"),
      answer: t("faq3.ans"),
    },
    {
      question: t("faq4.ques"),
      answer: t("faq4.ans"),
    },
    {
      question: t("faq1.ques"),
      answer: t("faq1.ans"),
    },
    {
      question: t("faq2.ques"),
      answer: t("faq2.ans"),
    },
    {
      question: t("faq3.ques"),
      answer: t("faq3.ans"),
    },
    {
      question: t("faq4.ques"),
      answer: t("faq4.ans"),
    },
  ];
  return (
    <div>
      <Faq data={stakingFaq} />
    </div>
  );
};

export default MainFaq;
