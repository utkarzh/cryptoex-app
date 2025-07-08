import OrderBookPage from "@/components/trade/trade/order_book/OrderBook";
import React, { FC } from "react";

type Props = {
  params: Promise<{ pair: string; locale: string }>;
};

const Page: FC<Props> = async ({ params }) => {
  const pair = (await params).pair;
  return (
    <>
      <OrderBookPage pair={pair} />
    </>
  );
};

export default Page;
