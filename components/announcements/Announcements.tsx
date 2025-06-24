"use client";
import { useGetAnnouncementMutation } from "@/redux/features/footer/footerApi";
// import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AnnouncementApiResult_int } from "./types";
import LoadingTableSkeleton from "../common/loading/LoadingTableSkeleton";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";

type Props = {
  type: string;
};

const Announcements: FC<Props> = () => {
  // const t = useTranslations("announcementsPage");
  // const listedTokens = [
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  //   {
  //     title: t("terms.annu"),
  //     token: "the real goal (land)",
  //     timestamp: "2025-04-30 06:17:44 UTC",
  //   },
  // ];

  const pathName = usePathname();
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const handlePageChange = (event: { selected: number }) => {
    if (event.selected >= 0 && event.selected <= pageCount) {
      setCurrentPage(event.selected + 1);
      getAnnouncements({ pagenumber: event.selected, searchquery: search });
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [getAnnouncements, { data }] =
    useGetAnnouncementMutation<AnnouncementApiResult_int>();

  useEffect(() => {
    getAnnouncements(0);
  }, []);

  useEffect(() => {
    if (!data) return;
    if (data.status === 1) {
      const totalPages = data.announmentcount / data.pagecoun;
      setPageCount(totalPages);
    }
  }, [data]);

  useEffect(() => {
    const handler = setTimeout(() => {
      getAnnouncements({ pagenumber: 0, searchquery: search });
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return (
    <div className=" ml-2 h-full w-full dark:bg-[#161735]  bg-white rounded-md relative ">
      <div className="absolute z-[50] right-0 -top-2 -translate-y-[100%]  w-fit  ">
        <input
          type="text"
          placeholder={"Search"}
          value={search}
          onChange={handleSearch}
          className="dark:bg-[#1a1c36] bg-slate-600/15 text-xs px-8 py-2 rounded-md focus:outline-none"
        />
        <IoSearch className="absolute top-2 left-2 opacity-60 " />
      </div>
      {/* </div> */}
      {data && data.status === 1 ? (
        <div className="w-full flex flex-col gap-3 px-4 py-6 ">
          {data.announments.map((val, index) => (
            <Link
              href={`${pathName}/${val.announcement_id}`}
              key={index}
              className="cursor-pointer"
            >
              <div className="flex ">
                <p className="text-xs ">{val.announcement_title} &nbsp;</p>
              </div>
              <div className="text-[10px] xl:text-[0.7rem] font-light text-slate-600 dark:text-slate-500">
                {val.announcement_date}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <LoadingTableSkeleton rows={6} columns={1} />
      )}
      {/* Pagination */}
      <div className="mt-8 mb-4">
        {pageCount > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Announcements;
