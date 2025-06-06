import React, { FC } from "react";
import { LoanValue } from "../Loans";
import BorrowSection from "./BorrowSection";
import FixedLoanTable from "./loan_tables/FixedLoanTable";
import LoanInfo from "./loan_info/LoanInfo";
import Faq from "@/components/common/faq/Faq";
import LoanAdvantages from "./loan_advantage/LoanAdvantages";
import { useTranslations } from "next-intl";

type Props = {
  loanValue: LoanValue;
};

const FixedLoan: FC<Props> = ({ loanValue }) => {
  const t = useTranslations("loansPage.fixedLoan.faq");
  const testFaq = [
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
    <>
      {loanValue === "data" ? (
        <div>Data</div>
      ) : loanValue === "history" ? (
        <div>History</div>
      ) : (
        <>
          <BorrowSection />
          <FixedLoanTable />
          <LoanInfo />
          <LoanAdvantages />
          <Faq data={testFaq} />
        </>
      )}
    </>
  );
};

export default FixedLoan;
