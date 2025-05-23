"use client";
import { saira } from "@/utils/Font";
import { FC, useState } from "react";
import ReactPaginate from "react-paginate";

const tableData = Array.from({ length: 35 }, () => ({
  rate: "3.56%",
  duration: "30 Days",
  minAmount: "50,000",
  borrowable: "50,000",
}));

type Props = {
  isSupply: boolean;
};

const BorrowSupplyTable: FC<Props> = ({ isSupply }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const pageCount = Math.ceil(tableData.length / itemsPerPage);
  const currentItems = tableData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="mt-14">
      <div className="flex justify-between items-center mb-6">
        <h2 className={` ${saira.className} text-lg font-semibold`}>
          I Want to {isSupply ? "Supply" : "Borrow"}
        </h2>
        <div className="border dark:border-slate-200/20 border-slate-600/20 px-2 py-1 rounded-md flex gap-1 justify-center items-center">
          <span className="opacity-70 text-[12px] font-extralight">
            Duration
          </span>
          <select className="text-xs border-none outline-none">
            <option className="bg-white dark:bg-[#06062a]">All</option>
            <option className="bg-white dark:bg-[#06062a]">30 days</option>
            <option className="bg-white dark:bg-[#06062a]">40 days</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className=" border px-3 border-slate-600/20 dark:border-slate-200/20 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className=" ">
            <tr className="text-[12px] opacity-90 dark:opacity-60">
              <th className="py-3 px-4 text-left font-extralight">
                {isSupply ? "Supply APR (Fixed)" : "Borrow rate (Fixed)"}
              </th>
              <th className="py-3 px-4 text-left font-extralight">Duration</th>
              <th className="py-3 px-4 text-left font-extralight">
                {isSupply ? "Est. Interest" : "Min borrow amount"}
              </th>
              <th className="py-3 px-4 text-left font-extralight">
                {isSupply ? "Total amount" : "Borrowable amount"}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, i) => (
              <tr
                key={i}
                className="border-b sm:text-nowrap border-slate-600/20 dark:border-slate-200/20 text-center text-[12px]"
              >
                <td className="py-3 px-4 ">{row.rate}</td>
                <td className="py-3 px-4">{row.duration}</td>
                <td className="py-3 px-4">{row.minAmount}</td>
                <td className="py-3 px-4">{row.borrowable}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 mb-4">
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName="flex justify-center items-center gap-2 text-sm mt-4"
            pageClassName="px-3 py-1 rounded border border-slate-600/50 dark:border-slate-200/50 cursor-pointer" //remaining page number
            activeClassName="dark:bg-green-600 bg-green-600 text-white dark:text-black" // active page number
            previousClassName="px-3 py-1 rounded border-slate-600/50 dark:border-slate-200/50 border cursor-pointer" //prev click button
            nextClassName="px-3 py-1 rounded border border-slate-600/50 dark:border-slate-200/50 bg-transparent cursor-pointer" //next click button
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
};

export default BorrowSupplyTable;
