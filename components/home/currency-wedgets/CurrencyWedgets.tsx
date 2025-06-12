"use client";
import React, { useState } from "react";
import HomeCryptoList from "./HomeCryptoList";
import { useTranslations } from "next-intl";

type SelectedList = "spot" | "newadded" | "topgainer";

const CurrencyWedgets = () => {
  const [selectedList, setSelectedList] = useState<SelectedList>("spot");

  const selectListHandler = (data: SelectedList) => {
    setSelectedList(data);
  };

  const t = useTranslations("homePage.currencyWedgets");

  return (
    <div className="w-full 2xl:w-[90%] mx-auto mt-20 text-black dark:text-white  flex justify-center p-4 sm:p-6 md:p-8 lg:p-10  ">
      {/* container */}
      <div className="w-full flex flex-col md:flex-row gap-2 overflow-x-auto scrollbar-custom overflow-y-hidden ">
        <HomeCryptoList
          isExpended={selectedList === "spot"}
          title={t("tableTitle.spot")}
          value="spot"
          onSelect={selectListHandler}
        />
        <HomeCryptoList
          isExpended={selectedList === "newadded"}
          title={t("tableTitle.newlyListed")}
          value="newadded"
          onSelect={selectListHandler}
        />
        <HomeCryptoList
          isExpended={selectedList === "topgainer"}
          title={t("tableTitle.topGainers")}
          value="topgainer"
          onSelect={selectListHandler}
        />
      </div>
    </div>
  );
};

export default CurrencyWedgets;
