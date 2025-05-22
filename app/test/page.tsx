// type Props = {};

// import OpenOrderAndHistory from "@/components/trade/open_order_n_history/OpenOrderAndHistory";
import CryptoStats from "@/components/trade/trade_graph/CryptoStats";
// import TradeStats from "@/components/trade/trade_stats/TradeStats";
// import OrderBook from "@/components/trade/trade_book/TradeBook";
// import TradeForm from "@/components/trade/trade_form/TradeForm";

const Page = () => {
  return (
    <div className="w-full mt-10 ml-10 mb-10 h-full  flex flex-col gap-4">
      {/* <TradeForm />
      <OrderBook /> */}
      {/* <OpenOrderAndHistory />
      <TradeStats /> */}
      <CryptoStats />
    </div>
  );
};

export default Page;
