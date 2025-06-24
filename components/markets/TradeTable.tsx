"use client";

// import { saira } from "@/utils/Font";
import { FC, useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SiBinance, SiEthereum, SiTether } from "react-icons/si";
import ReactPaginate from "react-paginate";
import { useTranslations } from "next-intl";
import { Analytics_int } from "../home/types";
import Link from "next/link";
import CoinCard from "../common/CoinCard";
import { formatDecimalNumber } from "@/utils/formatDecimalNumber";
import MiniGraph from "../common/MiniGraph";

const tokenTabs = [
  { label: "BTC", icon: <FaBitcoin className="text-lg text-orange-400" /> },
  { label: "ETH", icon: <SiEthereum className="text-lg text-blue-400" /> },
  { label: "BNB", icon: <SiBinance className="text-lg text-yellow-400" /> },
  {
    label: "USDT",

    icon: <SiTether className="text-lg text-green-400" />,
  },
  // { label: "MATIC", icon: <SiPolygon className="text-lg text-purple-400" /> },
];

type Props = {
  listData: Analytics_int[];
};

const TradeTable: FC<Props> = ({ listData }) => {
  const t = useTranslations("marketPage.table");
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(listData);
  const [selectedTab, setSelectedTab] = useState("all");

  const selectTabHandler = (data: string) => {
    setSelectedTab(data);
    if (data === "all") {
      setSearch("");
      return;
    }
    setSearch(data);
  };

  const itemsPerPage = 10;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event: { selected: number }) => {
    console.log("None", event);
    if (event.selected >= 0 && event.selected <= pageCount) {
      setCurrentPage(event.selected + 1);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const tempArr = listData;
      const filterArr = tempArr.filter(
        (item) =>
          item.vendor.toLowerCase().includes(search.toLowerCase()) ||
          item.pair.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filterArr);
      setCurrentPage(1);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    setFilteredData(listData);
    setCurrentPage(1);
  }, [listData]);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        {/* tabs */}
        <div className="flex items-center gap-4 border-b-2 dark:border-white/10 border-[#161735]/10 pt-2  px-4 ">
          <button
            onClick={() => selectTabHandler("all")}
            className={`text-[14px] font-light pb-2 cursor-pointer top-[2px] relative  ${
              selectedTab === "all"
                ? "text-green-400 border-b-2 "
                : "border-b-2 border-transparent"
            }`}
          >
            <div className="flex gap-1 items-center text-sm">
              {t("terms.all")}
            </div>
          </button>

          {tokenTabs.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => selectTabHandler(label)}
              className={`text-md font-light pb-2 cursor-pointer top-[2px] relative  ${
                selectedTab === label
                  ? "text-green-400 border-b-2 "
                  : "border-b-2 border-transparent"
              }`}
            >
              <div className="flex gap-1 items-center text-xs">
                {icon}
                {label}
              </div>
            </button>
          ))}
        </div>

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder={t("terms.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dark:bg-[#1a1c36] bg-slate-600/15 text-[12px] px-8 py-2 rounded-md focus:outline-none xl:placeholder:text-[0.7rem]"
          />
          <IoSearch className="absolute top-2 left-2 opacity-60 " />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className=" ">
            <tr className="text-xs opacity-90 dark:opacity-60">
              <th className="py-3 px-2 font-extralight">{t("tHead.coin")}</th>
              <th className="py-3 px-2 font-extralight text-center">
                {t("tHead.lPrice")}
              </th>
              <th className="py-3 px-2 font-extralight  text-center">
                {t("tHead.24hChange")}
              </th>
              <th className="py-3 px-2 font-extralight text-center pr-6">
                {t("tHead.24hHigh")}
              </th>
              <th className="py-3 px-2 font-extralight text-center pr-6">
                {t("tHead.24hLow")}
              </th>
              <th className="py-3 px-2 font-extralight text-center pr-6">
                {t("tHead.24hVol")}
              </th>
              <th className="py-3 px-2 font-extralight text-center pr-6">
                {t("tHead.chart")}
              </th>
              <th className="py-3 px-2 font-extralight text-right pr-6">
                {t("tHead.trade")}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => {
              return (
                <tr
                  key={item.pair}
                  className="border-b dark:border-slate-200/20 border-slate-600/15"
                >
                  <td className="py-3 px-2 ">
                    <Link href={`/spot/${item.pair}`} className="">
                      <CoinCard
                        isSmall={true}
                        cointTitle={item.pair}
                        coinName={item.pair}
                        coinImgUrl={item.logopath}
                      />
                    </Link>
                  </td>
                  <td className="py-3 px-2  text-center">
                    ${formatDecimalNumber(item.last)}
                  </td>
                  <td
                    className={`py-3 px-2 text-center ${
                      item.rate > 0
                        ? "text-green-500"
                        : item.rate < 0
                        ? "text-red-400"
                        : ""
                    }`}
                  >
                    {item.rate > 0 && "+"}
                    {item.rate.toFixed(4)}%
                  </td>
                  <td className="py-3 px-2  text-center">
                    {formatDecimalNumber(item.t24hrhigh)}
                  </td>
                  <td className="py-3 px-2  text-center">
                    {formatDecimalNumber(item.t24hrlow)}
                  </td>
                  <td className="py-3 px-2  text-center">
                    {formatDecimalNumber(item.baseVolume)}
                  </td>
                  <td className="py-3 px-2  text-center">
                    <div className="px-2">
                      <MiniGraph
                        rate={item.rate}
                        vendor={item.vendor}
                        dataRange={item.graphimage}
                      />
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right">
                    <Link
                      href={`/spot/${item.pair}`}
                      className="text-xs text-green-100 bg-green-600 dark:bg-green-500/30 dark:text-green-600 px-4 py-1 rounded-full hover:bg-green-700 dark:hover:bg-green-500/20 cursor-pointer  transition-all duration-300"
                    >
                      {t("button")}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-8 mb-4">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          forcePage={currentPage - 1}
          containerClassName="flex justify-center items-center gap-2 text-sm mt-4"
          pageClassName="px-3 py-1 rounded border border-slate-600/50 dark:border-slate-200/50 cursor-pointer" //remaining page number
          activeClassName="dark:bg-green-600 bg-green-600 text-white dark:text-black" // active page number
          previousClassName="px-3 py-1 rounded border-slate-600/50 dark:border-slate-200/50 border cursor-pointer" //prev click button
          nextClassName="px-3 py-1 rounded border border-slate-600/50 dark:border-slate-200/50 bg-transparent cursor-pointer" //next click button
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default TradeTable;
