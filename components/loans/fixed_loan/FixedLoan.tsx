import React, { FC } from "react";
import { LoanValue } from "../Loans";
import BorrowSection from "./BorrowSection";
import FixedLoanTable from "./loan_tables/FixedLoanTable";
import LoanInfo from "./loan_info/LoanInfo";
import Faq from "@/components/common/faq/Faq";
import LoanAdvantages from "./loan_advantage/LoanAdvantages";

const testFaq = [
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
];

type Props = {
  loanValue: LoanValue;
};

const FixedLoan: FC<Props> = ({ loanValue }) => {
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
