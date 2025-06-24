import Trade from "@/components/trade/trade/Trade";
import React, { FC } from "react";

type Props = {
  params: Promise<{ pair: string; locale: string }>;
};

const Page: FC<Props> = async ({ params }) => {
  const pair = (await params).pair;
  return (
    <>
      <Trade isSpot={false} pair={pair} />
    </>
  );
};

export default Page;
