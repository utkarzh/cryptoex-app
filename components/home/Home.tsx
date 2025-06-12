"use client";
import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import CurrencyWedgets from "./currency-wedgets/CurrencyWedgets";
import CreateAccount from "./create-account/CreateAccount";
import GetStarted from "./get-started/GetStarted";
import Features from "./features/Features";
import Partners from "./partners/Partners";
import { useGetHomePageDataMutation } from "@/redux/features/homepage/homeSlice";
import { HomeDataApi_int } from "./types";

const Home = () => {
  const [getHomeData, { data }] = useGetHomePageDataMutation<HomeDataApi_int>();
  useEffect(() => {
    getHomeData({});
  }, []);

  // useEffect(() => {
  //   if (!data) return;
  //   const newListed = [];
  //   for (
  //     let loopvar = 0;
  //     loopvar < data.vendors.length && newListed.length < 10;
  //     loopvar++
  //   ) {
  //     for (
  //       let loopvarinner = 0;
  //       loopvarinner < data.analytics.length;
  //       loopvarinner++
  //     ) {
  //       if (
  //         data.analytics[loopvarinner].vendor ==
  //         data.vendors[loopvar].vendors_vendorshortcode
  //       ) {
  //         newListed.push(data.analytics[loopvarinner]);
  //       }
  //     }
  //   }

  //   const topGainer = data.analytics.slice().sort((a, b) => b.rate - a.rate);

  //   const spotListed = [];
  //   const topGainerListed = [];
  //   for (let i = 0; i < 10; i++) {
  //     spotListed.push(data.analytics[i]);
  //     topGainerListed.push(topGainer[i]);
  //   }

  //   console.log("Top gainer", topGainerListed);
  //   console.log("newlisted", newListed);
  //   console.log("spot listed", spotListed);
  // }, [data]);

  return (
    <div className="w-full">
      <Hero stripData={data} />
      <CurrencyWedgets listsData={data} />
      <CreateAccount />
      <GetStarted />
      <Features />
      <Partners />
    </div>
  );
};

export default Home;
