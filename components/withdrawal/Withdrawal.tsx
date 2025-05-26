import React from "react";
import WithdrawalSteps from "./WithdrawalSteps";
import WithdrawalForm from "./WithdrawForm";
import WithdrawRecordsTable from "./WithdrawRecordsTable";

const Withdrawal = () => {
  return (
    <div className="w-full flex flex-col gap-3 ">
      <WithdrawalSteps />
      <WithdrawalForm />
      <WithdrawRecordsTable />
    </div>
  );
};

export default Withdrawal;
