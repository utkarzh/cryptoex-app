import React from "react";
// import DashboardSidebar from "../navbar/DashboardSidebar";
import TotalAsset from "./TotalAsset";
import WalletSummary from "./WalletSummery";
import Security from "./Security";
import Market from "./Market";
import TradeHistoryTable from "./TradeHistoryTable";

// type Props = {};

const Dashboard = () => {
  return (
    <div className="flex w-full">
      {/* side bar */}
      {/* <DashboardSidebar /> */}
      <div className="w-full flex flex-col gap-4">
        {/* top cards */}
        <div className="w-full h-fit flex flex-col lg:flex-row gap-4">
          {/* total assets */}
          <div className="w-full ">
            <TotalAsset />
          </div>
          {/* wallet summary */}
          <div className="w-full">
            <WalletSummary />
          </div>
        </div>

        {/* security */}
        <Security />

        {/* market */}
        <Market />

        {/* trade history table */}
        <TradeHistoryTable />
      </div>
    </div>
  );
};

export default Dashboard;
