import React, { FC } from "react";
import BorrowSection from "./BorrowSection";
import Faq from "@/components/common/faq/Faq";
import { LoanValue } from "../Loans";
import BorrowTable from "./BorrowTable";

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

const FlexibleLoan: FC<Props> = ({ loanValue }) => {
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
