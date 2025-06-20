"use client";
import CoinCard from "@/components/common/CoinCard";
import React, { FC, useState } from "react";
import { IoIosArrowDown, IoIosCloseCircleOutline } from "react-icons/io";
import StakeFormInfoCard from "./StakeFormInfoCard";
import { useTranslations } from "next-intl";

type Props = {
  onClose: () => void;
};

type CoinData = {
  symbol: string;
  name: string;
  icon: string;
};

const testCoinData: CoinData[] = [
  {
    symbol: "SOL",
    name: "Solana",
    icon: "/images/coins/solanarounded.png",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: "/images/coins/ethereumrounded.png",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: "/images/coins/btc.png",
  },
  {
    symbol: "POL",
    name: "Polygon",
    icon: "/images/coins/polygonrounded.png",
  },
  {
    symbol: "NLG",
    name: "Gulden",
    icon: "/images/coins/btc.png",
  },
];
const StakeForm: FC<Props> = ({ onClose }) => {
  const t = useTranslations("stakingPage.stakeForm");

  const testInfoLeft = [
    {
      title: t("form.terms.currency"),
      value: "3%",
      color: "green",
    },

    {
      title: t("form.terms.terms"),
      value: t("form.terms.flexible"),
      color: "",
    },

    {
      title: t("form.terms.fundAcc"),
      value: "0 BTC",
      color: "",
    },

    {
      title: t("form.terms.maxAmount"),
      value: "1,00,00 BTC",
      color: "",
    },
  ];

  const testInfoRight = [
    {
      title: t("preview.terms.subDate"),
      value: "4/22/2025, 15:37",
      color: "",
    },

    {
      title: t("preview.terms.accDate"),
      value: "4/22/2025, 21:30",
      color: "",
    },

    {
      title: t("preview.terms.profitDisDate"),
      value: "4/24/2025, 17:30",
      color: "",
    },

    {
      title: t("preview.terms.redPeriod"),
      value: `14 ${t("preview.terms.days")}`,
      color: "",
    },
    {
      title: t("preview.terms.profitRec"),
      value: t("preview.terms.daily"),
      color: "",
    },
  ];

  const [isCoinListOpen, setIsCoinListOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<CoinData>();

  const selectHandler = (data: CoinData) => {
    setSelectedCoin(data);
    setIsCoinListOpen(false);
  };
  return (
    <div className=" mt-30 sm:mt-0 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-fit">
      {/* conatiner */}
      <div className="w-full h-fit mx-auto flex flex-col rounded-xl bg-white  dark:bg-[#1d1f38]">
        {/* heading */}
        <div className="w-full  bg-[#eff0f2] dark:bg-[#2d2d47] rounded-t-xl py-2 flex justify-between items-center">
          <h2 className="text-lg ml-4">{t("title")}</h2>
          <IoIosCloseCircleOutline
            className=" text-[20px] xl:text-xl mr-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-200 "
            onClick={onClose}
          />
        </div>
        {/* content */}
        <div className="w-full h-full  pt-8 pb-6  flex flex-col sm:flex-row gap-4 ">
          {/* left section */}
          <div className="w-full   px-4 flex flex-col gap-4">
            {/* inputs */}
            <div className="flex flex-col gap-4 xl:gap-6">
              {/* coin selector  */}
              <div
                className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative "
                onClick={() => setIsCoinListOpen(true)}
              >
                {/* label */}
                <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#1d1f38] px-1 ">
                  {t("form.terms.currency")}
                </label>

                {selectedCoin ? (
                  <CoinCard
                    cointTitle={`${selectedCoin.name} (${selectedCoin.symbol})`}
                    coinImgUrl={selectedCoin.icon}
                    isSmall={true}
                  />
                ) : (
                  <div className="opacity-70 text-xs">
                    {t("form.terms.selAmount")}
                  </div>
                )}
                {/* coin list */}
                {isCoinListOpen && (
                  <div className="absolute w-full h-[200px] border top-[100%] translate-y-1 rounded-md left-0 overflow-y-auto bg-white dark:bg-[#1d1f38] z-[40] border-black/30 dark:border-white/30 flex flex-col gap-2 p-2">
                    {testCoinData.map((val) => (
                      <div
                        key={val.symbol}
                        className="p-2 bg-slate-300/30 dark:bg-slate-500/20 rounded-md cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectHandler(val);
                        }}
                      >
                        <CoinCard
                          cointTitle={`${val.name} (${val.symbol})`}
                          coinImgUrl={val.icon}
                          isSmall={true}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <IoIosArrowDown className="mr-4 cursor-pointer" />
              </div>

              {/* amount selector */}
              <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
                {/* label */}
                <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#1d1f38] px-1 ">
                  {t("form.terms.amount")}
                </label>

                <input
                  type="text"
                  className="outline-none border-none w-full bg-transparent text-xs font-light"
                  placeholder={t("form.terms.minAmount")}
                />

                <div className="flex items-center gap-1 mr-1">
                  <div className="opacity-60 pr-2 mr-1 border-r">BTC</div>
                  <div className="opacity-60 text-green-600 text-xs">Max</div>
                </div>
              </div>
            </div>
            {/* info */}
            <div className="w-[90%] mx-auto xl:space-y-1  ">
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
              <div className="text-xs xl:text-[0.9rem] text-start font-medium">
                {t("preview.lable")}
              </div>
              <div className="border-b opacity-30"></div>
              {/* info */}
              <div className="xl:space-y-1">
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
              <div className="text-xs xl:text-[0.9rem] text-start font-medium">
                {t("estimated.label")}
              </div>
              <div className="border-b opacity-30"></div>
              {/* info */}
              <div>
                <StakeFormInfoCard
                  title={t("estimated.terms.earning")}
                  value=""
                />
              </div>
            </div>

            {/* agree checkbox */}
            <div className="w-full flex gap-1 items-center mt-2">
              <input type="checkbox" className="bg-transparent xl:w-3 xl:h-3" />
              <label className="text-xs font-normal">
                {t("estimated.terms.agg.part1")}{" "}
                <span className="text-green-600 cursor-pointer hover:text-green-500 hover:underline">
                  {t("estimated.terms.agg.part2")}
                </span>
              </label>
            </div>

            {/* stake button */}
            <div className="w-full  mt-2">
              <button className="w-full rounded-full py-1 text-center text-white dark:text-black bg-green-500 hover:bg-green-600  xl:text-[1rem] xl:py-1.5  dark:bg-green-600 dark:hover:bg-green-700 transition-all duration-200 cursor-pointer">
                {t("button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeForm;
