"use client";
import React, { useState } from "react";
import FlexibleLoan from "./flexible_loan/FlexibleLoan";
import FixedLoan from "./fixed_loan/FixedLoan";

type LoanType = "fixed" | "flexible";
export type LoanValue = "history" | "data" | "";

const Loans = () => {
  const [loanType, setLoanType] = useState<LoanType>("flexible");
  const [loanValue, setLoanValue] = useState<LoanValue>("");

  const loanTypeHandler = (data: LoanType) => {
    setLoanType(data);
    setLoanValue("");
  };

  return (
    <>
      <div className=" mb-2 w-full h-full   bg-transparent  text-gray-700 dark:text-gray-400 text-sm rounded-xl  space-y-3 flex flex-col gap-4 ">
        {/* loan type and loan data and history Tabs */}
        <div className="flex justify-between  border-b-2 dark:border-white/10 border-[#161735]/10 pt-2  ">
          {/* loan type */}
          <div className="flex gap-4">
            {["flexible", "fixed"].map((pair) => (
              <button
                key={pair}
                onClick={() => loanTypeHandler(pair as LoanType)}
                className={`text-[14px] font-medium pb-2 cursor-pointer top-[2px] relative  ${
                  pair === loanType
                    ? "text-green-400 border-b-3 "
                    : "border-b-3 border-transparent"
                }`}
              >
                <span className="capitalize">{pair}</span>
                <span> rate loan</span>
              </button>
            ))}
          </div>
          {/* loan data and history */}
          <div className="flex gap-4">
            {["history", "data"].map((pair) => (
              <button
                key={pair}
                onClick={() => setLoanValue(pair as LoanValue)}
                className={`text-[14px] font-medium pb-2 cursor-pointer top-[2px] relative  ${
                  pair === loanValue
                    ? "text-green-400 border-b-3 "
                    : "border-b-3 border-transparent"
                }`}
              >
                <span>Loan </span>
                <span>{pair}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* content */}
      <section className="w-full">
        {loanType === "fixed" ? (
          <FixedLoan />
        ) : (
          <FlexibleLoan loanValue={loanValue} />
        )}
      </section>
    </>
  );
};

export default Loans;
