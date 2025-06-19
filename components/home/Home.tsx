"use client";
import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import CurrencyWedgets from "./currency-wedgets/CurrencyWedgets";
import CreateAccount from "./create-account/CreateAccount";
import GetStarted from "./get-started/GetStarted";
import Features from "./features/Features";
import Partners from "./partners/Partners";
import { useGetHomePageDataMutation } from "@/redux/features/homepage/homeApi";
import { HomeDataApi_int } from "./types";
import { toast } from "sonner";

const Home = () => {
  const [getHomeData, { data, error }] =
    useGetHomePageDataMutation<HomeDataApi_int>();
  useEffect(() => {
    getHomeData({});
  }, []);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="w-full">
      <Hero stripData={data} />
      <CurrencyWedgets listsData={data} />
      <CreateAccount />
      <GetStarted marketData={data} />
      <Features />
      <Partners />
    </div>
  );
};

export default Home;
