import OpenOrderAndHistory from "@/components/trade/trade/open_order_n_history/OpenOrderAndHistory";
import TradeBook from "@/components/trade/trade/trade_book/TradeBook";
import TradeForm from "@/components/trade/trade/trade_form/TradeForm";
import CryptoStats from "@/components/trade/trade/trade_graph/CryptoStats";
import TradeStats from "@/components/trade/trade/trade_stats/TradeStats";
import React from "react";
const Page = () => {
  return (
    <div className="w-[98%] mx-auto">
      {/* top part */}
      <div className="w-full h-full lg:h-[480px]  flex flex-col lg:flex-row gap-4">
        {/*trade book*/}
        <div className="w-full max-w-xs hidden lg:block">
          <TradeBook />
        </div>
        {/* Graph */}
        <div className="w-full   ">
          {/* Graph here */}
          <CryptoStats />
        </div>
        {/* Trade form */}
        <div className="w-full lg:max-w-xs  flex gap-2 flex-wrap sm:flex-nowrap justify-evenly  ">
          <div className="w-full min-w-xs max-h-[480px] lg:max-w-xs block lg:hidden ">
            <TradeBook />
          </div>
          <TradeForm />
        </div>
      </div>

      {/* bottom part */}
      <div className="w-full mt-6 mb-2">
        <OpenOrderAndHistory />
        <TradeStats />
      </div>
    </div>
  );
};

export default Page;
