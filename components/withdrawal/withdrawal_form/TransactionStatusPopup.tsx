"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { IoHourglassOutline } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";

type Props = {
  status: "pending" | "failed" | "successful" | "";
};

const TransactionStatusPopup: FC<Props> = ({ status }) => {
  // const [status] = useState<"pending" | "failed" | "successful">("successful");
  return (
    <div className="bg-white dark:bg-[#161735] rounded-xl p-4 max-w-60 text-center relative shadow-xl">
      {/*  Icon */}
      <div className="flex justify-center mt-6 mb-4">
        {status === "pending" && (
          <>
            <Image
              width={80}
              height={80}
              src="/images/icons/greenhourglass.png"
              alt=""
              className="w-6 h-auto hidden dark:block"
            />

            <IoHourglassOutline className=" text-4xl block dark:hidden" />
          </>
        )}

        {status === "failed" && (
          <span className="p-1 rounded-full bg-[#e14d4e] text-white">
            <RiCloseFill className="text-3xl" />
          </span>
        )}

        {status === "successful" && (
          <span className="  text-green-600">
            <BsFillPatchCheckFill className="text-[38px]" />
          </span>
        )}
      </div>

      <h2 className="text-xs font-medium mb-6">
        <span className="capitalize">{status}</span> Withdrawal
      </h2>
      {status === "pending" && (
        <p className="text-[11px] font-light mb-6 opacity-80 dark:opacity-50">
          Your withdrawal request is being reviewed and will take approximately
          12 hours. You can view the status in history page.
        </p>
      )}
      {status === "failed" && (
        <p className="text-[11px] font-light mb-6 opacity-80 dark:opacity-50">
          There was a problem processing this Withdrawal. Please double check
          the submitted details and try again.
        </p>
      )}
      {status === "successful" && (
        <p className="text-[11px] font-light mb-6 opacity-80 dark:opacity-50">
          Your withdrawal request has been successfully submitted. You can view
          the status in history page.
        </p>
      )}

      <div className="w-full flex justify-between gap-2">
        <Link
          href="/withdrawal/history"
          // onClick={onClose}
          className={`w-full ${
            status === "failed"
              ? "bg-slate-500/20 hover:bg-slate-500/40"
              : "bg-green-500 hover:bg-green-600 text-white dark:text-black "
          }   py-1.5 px-2 rounded-full transition text-xs cursor-pointer`}
        >
          View History
        </Link>

        {status === "failed" && (
          <Link
            href="#"
            className=" w-full bg-green-500 hover:bg-green-600 text-white dark:text-black  py-1.5 px-2 rounded-full transition text-xs cursor-pointer"
          >
            Check Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default TransactionStatusPopup;
