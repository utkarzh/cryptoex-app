import React, { FC } from "react";
import Benefits from "./Benefits";
import Marketing from "./Marketing";
import GetStartedHeading from "./GetStartedHeading";
import { HomeDataStructure_int } from "../types";

type Props = {
  marketData: HomeDataStructure_int;
};
const GetStarted: FC<Props> = ({ marketData }) => {
  return (
    <div className="w-full h-full  ">
      <GetStartedHeading />
      {/* card part */}
      <div className="w-full flex justify-center items-center pt-20 pb-30 ">
        <Marketing marketData={marketData} />
      </div>
      {/* benifits */}
      <div className="w-full">
        <Benefits />
      </div>
    </div>
  );
};

export default GetStarted;
