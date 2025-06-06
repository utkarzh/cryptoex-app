import React, { FC } from "react";
import BorrowSection from "./BorrowSection";
import Faq from "@/components/common/faq/Faq";
import { LoanValue } from "../Loans";
import BorrowTable from "./BorrowTable";
import { useTranslations } from "next-intl";

type Props = {
  loanValue: LoanValue;
};

const FlexibleLoan: FC<Props> = ({ loanValue }) => {
  const t = useTranslations("loansPage.flexibleLoan.faq");
  const testFaq = [
    {
      question: t("item1.ques"),
      answer: t("item1.ans"),
    },
    {
      question: t("item2.ques"),
      answer: t("item2.ans"),
    },
    {
      question: t("item3.ques"),
      answer: t("item3.ans"),
    },
    {
      question: t("item4.ques"),
      answer: t("item4.ans"),
    },
    {
      question: t("item5.ques"),
      answer: t("item5.ans"),
    },
  ];

  return (
    <div className="w-full mb-10">
      {loanValue === "data" ? (
        <div>Data</div>
      ) : loanValue === "history" ? (
        <div>History</div>
      ) : (
        <>
          <BorrowSection />
          <BorrowTable />
          <Faq data={testFaq} />
        </>
      )}
    </div>
  );
};

export default FlexibleLoan;
