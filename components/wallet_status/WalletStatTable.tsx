"use client";

import { useGetFeeListMutation } from "@/redux/masternode/footer/footerApi";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import LoadingTableSkeleton from "../common/loading/LoadingTableSkeleton";
import CoinCard from "../common/CoinCard";
import { FeeApiResult_int, VendorFee_int } from "../fee/types";

export default function WalletStatTable() {
  const t = useTranslations("walletStatus");
  const itemsPerPage = 10;
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<VendorFee_int[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [getFeeList, { data }] = useGetFeeListMutation<FeeApiResult_int>();
  useEffect(() => {
    getFeeList({});
  }, []);

  const handlePageChange = (event: { selected: number }) => {
    console.log("None", event);
    if (event.selected >= 0 && event.selected <= pageCount) {
      setCurrentPage(event.selected + 1);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!data) return;
    if (data?.status === 1) {
      const filterArr = data.vendors.filter(
        (item) =>
          item.vendors_vendorshortcode
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.vendors_vendorname.toLowerCase().includes(search.toLowerCase())
      );

      const pages = Math.ceil(filterArr.length / itemsPerPage);

      const paginatedArray = filterArr.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
      setPageCount(pages);
      setFilteredData(paginatedArray);
    }
  }, [data, currentPage, search]);

  return (
    <div className="bg-white dark:bg-[#161735] rounded-md p-6 px-8">
      {/* heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={` ${saira.className} text-lg font-semibold`}>
          {t("title")}
        </h2>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder={t("terms.search")}
            value={search}
            onChange={handleSearch}
            className="dark:bg-[#202344] bg-slate-600/15 text-xs px-8 py-2 rounded-md focus:outline-none"
          />
          <IoSearch className="absolute top-2 left-2 opacity-60 " />
        </div>
      </div>

      <div className="overflow-x-auto">
        {data && data.status === 1 ? (
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-200 dark:bg-slate-700/40 dark:opacity-70 opacity-90 text-center">
              <tr className="text-xs opacity-90 dark:opacity-60">
                <th className="py-3 px-2 font-extralight">{t("tHead.name")}</th>
                <th className="py-3 px-2 font-extralight text-center">
                  {t("tHead.tSupply")}
                </th>
                <th className="py-3 px-2 font-extralight  text-center">
                  {t("tHead.cSupply")}
                </th>
                <th className="py-3 px-2 font-extralight  text-center">
                  {t("tHead.buyFee")}
                </th>
                <th className="py-3 px-2 font-extralight  text-center">
                  {t("tHead.sellFee")}
                </th>
                <th className="py-3 px-2 font-extralight  text-center">
                  {t("tHead.status")}
                </th>
              </tr>
            </thead>
            {filteredData.length > 0 && (
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr
                    key={idx}
                    className=" dark:even:bg-slate-700/20 even:bg-slate-300/20 transition text-center text-xs"
                  >
                    <td className="py-3 px-2 ">
                      <div className="w-fit min-w-[150px] mx-auto overflow-visible">
                        <CoinCard
                          isSmall={false}
                          cointTitle={item.vendors_vendorshortcode}
                          coinName={item.vendors_vendorname}
                          coinImgUrl={item.vendors_logopath}
                        />
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      {item.vendors_maxsupply}
                    </td>
                    <td className="py-3 px-2  text-center">
                      {item.vendors_maxsupply}
                    </td>
                    <td className="py-3 px-2  text-center">
                      {(item.vendors_buypricefee * 100).toFixed(2)} %
                    </td>
                    <td className="py-3 px-2  text-center">
                      {(item.vendors_salepricefee * 100).toFixed(2)} %
                    </td>
                    <td className="py-3 px-2  text-center">
                      <button
                        className={`text-xs w-[100px] xl:w-[120px] py-1 ${
                          item.vendors_status === "ACTIVE"
                            ? "text-green-100  bg-green-600 dark:bg-green-500/30 dark:text-green-600 hover:bg-green-700 dark:hover:bg-green-500/20"
                            : "text-gray-100  bg-gray-600 dark:bg-gray-500/30 dark:text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-500/20"
                        }   rounded-full  cursor-pointer  transition-all duration-300`}
                      >
                        {t(`tHead.buttons.${item.vendors_status}`)}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        ) : (
          <LoadingTableSkeleton rows={8} columns={6} />
        )}
      </div>

      {/* Pagination */}
      <div className="mt-8 mb-4">
        {pageCount > 0 ? (
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
        ) : (
          <div className="w-full text-center opacity-60">No Data Found</div>
        )}
      </div>
    </div>
  );
}
