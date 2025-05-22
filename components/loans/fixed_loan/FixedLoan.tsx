import React, { FC } from "react";
import { LoanValue } from "../Loans";
import BorrowSection from "./BorrowSection";

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
        </>
      )}
    </>
  );
};

export default FixedLoan;
