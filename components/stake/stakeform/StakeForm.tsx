import CoinCard from "@/components/common/CoinCard";
import React, { FC } from "react";
import { IoIosArrowDown, IoIosCloseCircleOutline } from "react-icons/io";
import StakeFormInfoCard from "./StakeFormInfoCard";

type Props = {
  onClose: () => void;
};

const StakeForm: FC<Props> = ({ onClose }) => {
  const testInfoLeft = [
    {
      title: "Reference APR",
      value: "3%",
      color: "green",
    },

    {
      title: "Term",
      value: "Flexible",
      color: "",
    },

    {
      title: "Funding account",
      value: "0 BTC",
      color: "",
    },

    {
      title: "Max amount",
      value: "1,00,00 BTC",
      color: "",
    },
  ];

  const testInfoRight = [
    {
      title: "Subscription date",
      value: "4/22/2025, 15:37",
      color: "",
    },

    {
      title: "Accrual date",
      value: "4/22/2025, 21:30",
      color: "",
    },

    {
      title: "Profit distribution date",
      value: "4/24/2025, 17:30",
      color: "",
    },

    {
      title: "Redemption period",
      value: "14 days",
      color: "",
    },
    {
      title: "Profit received",
      value: "Daily",
      color: "",
    },
  ];
  return (
    <div className=" mt-30 sm:mt-0 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-fit">
      {/* conatiner */}
      <div className="w-full h-fit mx-auto flex flex-col rounded-xl bg-white  dark:bg-[#1d1f38]">
        {/* heading */}
        <div className="w-full  bg-[#eff0f2] dark:bg-[#2d2d47] rounded-t-xl py-2 flex justify-between items-center">
          <h2 className="text-md ml-4">Staking</h2>
          <IoIosCloseCircleOutline
            className=" text-[20px] mr-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-200 "
            onClick={onClose}
          />
        </div>
        {/* content */}
        <div className="w-full h-full  pt-8 pb-6  flex flex-col sm:flex-row gap-4 ">
          {/* left section */}
          <div className="w-full   px-4 flex flex-col gap-4">
            {/* inputs */}
            <div className="flex flex-col gap-4">
              {/* coin selector  */}
              <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
                {/* label */}
                <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#1d1f38] px-1 ">
                  Currency
                </label>
                <CoinCard
                  cointTitle="Bitcoin (BTC)"
                  coinImgUrl="/images/coins/btc.png"
                  isSmall={true}
                />
                <IoIosArrowDown className="mr-4 cursor-pointer" />
              </div>

              {/* amount selector */}
              <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
                {/* label */}
                <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#1d1f38] px-1 ">
                  Amount
                </label>

                <div className="w-full flex gap-2 justify-between">
                  <div className="text-[11px] font-extralight opacity-80 dark:opacity-70">
                    Min amount 0.0001 BTC
                  </div>

                  <div className="flex gap-[6px] opacity-80 dark:opacity-70 text-[11px] font-extralight mr-4">
                    <div className="">BTC</div>
                    <div className="border-l dark:border-white/30 border-black/30"></div>
                    <div className="text-green-700 font-medium">Max</div>
                  </div>
                </div>
              </div>
            </div>
            {/* info */}
            <div className="w-[90%] mx-auto  ">
              {testInfoLeft.map((val, index) => (
                <StakeFormInfoCard
                  title={val.title}
                  value={val.value}
                  key={index}
                  color={val.color}
                />
              ))}
            </div>
          </div>
          {/* border */}
          <div className="  border-r opacity-30"></div>
          {/* right section */}
          <div className="w-full  px-4  flex flex-col gap-4 ">
            {/* preview */}
            <div className="w-full flex flex-col gap-3">
              {/* heading */}
              <div className="text-[12px] text-start font-medium">Preview</div>
              <div className="border-b opacity-30"></div>
              {/* info */}
              <div>
                {testInfoRight.map((val, index) => (
                  <StakeFormInfoCard
                    title={val.title}
                    value={val.value}
                    key={index}
                    color={val.color}
                  />
                ))}
              </div>
            </div>

            {/* Estimated Returns */}
            <div className="w-full flex flex-col gap-3">
              {/* heading */}
              <div className="text-[12px] text-start font-medium">
                Estimated returns
              </div>
              <div className="border-b opacity-30"></div>
              {/* info */}
              <div>
                <StakeFormInfoCard title="BTC earnings" value="" />
              </div>
            </div>

            {/* agree checkbox */}
            <div className="w-full flex gap-1 items-center mt-2">
              <input type="checkbox" className="bg-transparent" />
              <label className="text-[11px] font-normal">
                I have read and agree to{" "}
                <span className="text-green-600">Staking User Agreement</span>
              </label>
            </div>

            {/* stake button */}
            <div className="w-full  mt-2">
              <button className="w-full rounded-full py-1 text-center text-white dark:text-black bg-green-500 hover:bg-green-600   dark:bg-green-600 dark:hover:bg-green-700 transition-all duration-200 cursor-pointer">
                Stake
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeForm;
