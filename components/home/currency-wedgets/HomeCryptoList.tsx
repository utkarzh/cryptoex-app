import CoinCard from "@/components/common/CoinCard";
import { saira } from "@/utils/Font";
import React, { FC, useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { MdClose, MdSearch } from "react-icons/md";
import { IoSearch, IoStatsChart } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { Analytics_int } from "../types";
import Link from "next/link";
import { formatDecimalNumber } from "@/utils/formatDecimalNumber";
import MiniGraph from "@/components/common/MiniGraph";
import { FiTarget } from "react-icons/fi";

type Value = "spot" | "newadded" | "topgainer";

type Props = {
  title: string;
  value: Value;
  onSelect: (data: Value) => void;
  isExpended: boolean;
  listData: Analytics_int[];
};
const HomeCryptoList: FC<Props> = ({
  isExpended,
  title,
  value,
  onSelect,
  listData: data,
}) => {
  const t = useTranslations("homePage.currencyWedgets");
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [listData, setListData] = useState(data);

  const selectHandler = () => {
    onSelect(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const tempArr = data;
      const filterArr = tempArr.filter(
        (item) =>
          item.vendor.toLowerCase().includes(search.toLowerCase()) ||
          item.pair.toLowerCase().includes(search.toLowerCase())
      );
      setListData(filterArr);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return (
    <div
      className={` bg-white dark:bg-[#161735] ${
        isExpended
          ? "w-full min-w-none md:min-w-md"
          : "w-full min-w-none md:w-fit md:min-w-fit px-0 md:px-8 xl:px-10 pb-4 opacoty-100 md:opacity-35"
      }  overflow-x-auto overflow-y-hidden scrollbar-custom  rounded-md px-6  flex flex-col gap-4 transition-all duration-700 ease-in-out `}
      onClick={selectHandler}
    >
      <div
        className={`w-[84%]  mx-auto flex px-4 mt-4 ${
          isExpended ? "justify-between" : " justify-between md:justify-center"
        } `}
      >
        {/* heading */}
        <div className="w-fit gap-1 flex items-center justify-center">
          {value === "spot" && <FaFire />}
          {value === "newadded" && <FiTarget />}
          {value === "topgainer" && <IoStatsChart />}
          <h2
            className={`text-nowrap font-medium text-lg cursor-pointer ${saira.className}`}
          >
            {title}
          </h2>
        </div>
        <div className="">
          {!isSearch ? (
            <MdSearch
              className={`${
                isExpended ? "block" : "block md:hidden"
              } text-2xl cursor-pointer`}
              onClick={() => setIsSearch(true)}
            />
          ) : (
            <div
              className={`${
                isExpended ? "block" : "block md:hidden"
              } relative flex items-center -right-3 `}
            >
              <input
                type="text"
                placeholder={t("terms.search")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="dark:bg-[#444561] bg-slate-600/15 text-xs px-8 py-2 rounded-md focus:outline-none w-30 md:w-40  lg:w-full autofill "
              />
              <IoSearch className="absolute top-2 left-2 opacity-60 " />
              <MdClose
                className="absolute top-2 right-1 sm:right-2 opacity-60 cursor-pointer hover:scale-110 hover:text-red-600 transition-all"
                onClick={() => {
                  setIsSearch(false);
                  setSearch("");
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="w-full  border-b border-slate-500/30"></div>

      <div className="w-full items-start justify-center flex flex-col gap-6">
        <table className=" w-full table-auto">
          <thead>
            <tr className="text-xs text-left text-slate-800 dark:text-slate-300 ">
              <th className="font-extralight pb-4 pl-0 lg:pl-2">
                {t("tableHead.coins")}
              </th>
              <th
                className={` ${
                  isExpended ? "table-cell" : " table-cell md:hidden"
                } font-extralight pb-4`}
              >
                {t("tableHead.lastPrice")}
              </th>
              <th
                className={` ${
                  isExpended ? "table-cell" : "table-cell md:hidden"
                } font-extralight pb-4`}
              >
                {t("tableHead.24hChange")}
              </th>
              <th
                className={`text-center ${
                  isExpended ? "table-cell" : "table-cell md:hidden"
                } font-extralight pb-4`}
              >
                {t("tableHead.markets")}
              </th>
              <th
                className={`text-right ${
                  isExpended ? "table-cell" : "table-cell md:hidden"
                } font-extralight pb-4 pr-0 lg:pr-2`}
              >
                {t("tableHead.24hVolume")}
              </th>
            </tr>
          </thead>

          <tbody className="w-full text-left ">
            {listData.map((val, index) => {
              if (index > 9) return;
              return (
                <tr key={index} className="text-xs font-normal ">
                  <td className="text-[12px] flex justify-start items-center my-3 pl-0 lg:pl-2 ">
                    <Link href={`/spot/${val.pair}`} className="">
                      <CoinCard
                        cointTitle={val.vendor}
                        coinName={val.pair}
                        coinImgUrl={val.logopath}
                        key={index}
                      />
                    </Link>
                  </td>

                  <td
                    className={` ${
                      isExpended ? "table-cell" : "table-cell md:hidden"
                    }`}
                  >
                    <div className="text-nowrap " title={val.last.toString()}>
                      ${formatDecimalNumber(val.last)}{" "}
                    </div>
                  </td>
                  <td
                    className={` ${
                      isExpended ? "table-cell" : "table-cell md:hidden"
                    }`}
                  >
                    <div
                      className={`text-nowrap ${
                        val.rate > 0
                          ? "text-green-700 dark:text-green-600"
                          : val.rate < 0
                          ? "text-red-600 dark:text-[#d24e4c]"
                          : ""
                      }`}
                    >
                      {" "}
                      {val.rate > 0 && "+"}
                      {val.rate.toFixed(4)}%
                    </div>
                  </td>

                  <td
                    className={` ${
                      isExpended ? "table-cell" : "table-cell md:hidden"
                    }`}
                  >
                    <div className="px-2">
                      <MiniGraph
                        rate={val.rate}
                        vendor={val.vendor}
                        dataRange={val.graphimage}
                      />
                    </div>
                  </td>
                  <td
                    className={`text-right pr-0 lg:pr-2 ${
                      isExpended ? "table-cell" : "table-cell md:hidden"
                    }`}
                  >
                    {val.baseVolume.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeCryptoList;
