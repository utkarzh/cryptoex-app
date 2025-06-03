import React from "react";
import DepositSteps from "./DepositSteps";
import DepositForm from "./deposit_form/DepositForm";
import DepositRecordsTable from "./DepositRecordsTable";

const Deposit = () => {
  return (
    <div className="w-full flex flex-col gap-3 ">
      <DepositSteps />
      <DepositForm />
      <DepositRecordsTable />
    </div>
  );
};

export default Deposit;
