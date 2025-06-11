import React from "react";
import Hero from "./hero/Hero";
import CurrencyWedgets from "./currency-wedgets/CurrencyWedgets";
import CreateAccount from "./create-account/CreateAccount";
import GetStarted from "./get-started/GetStarted";
import Features from "./features/Features";
import Partners from "./partners/Partners";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <CurrencyWedgets />
      <CreateAccount />
      <GetStarted />
      <Features />
      <Partners />
    </div>
  );
};

export default Home;
