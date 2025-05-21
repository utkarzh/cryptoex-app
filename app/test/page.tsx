// type Props = {};

import OrderBook from "@/components/trade/trade_book/TradeBook";
import TradeForm from "@/components/trade/trade_form/TradeForm";

const Page = () => {
  return (
    <div className="mt-10 ml-10 mb-10 h-full  flex gap-4">
      <TradeForm />
      <OrderBook />
    </div>
  );
};

export default Page;
