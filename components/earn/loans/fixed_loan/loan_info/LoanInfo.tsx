import { saira } from "@/utils/Font";
import React, { useState } from "react";

// type Props = {}
const MOCK_DATA = [
  {
    title: "1. Order placing",
    content:
      "Place a Borrow Order or select an existing order from the Borrow Market.",
  },
  {
    title: "2. Select Collateral",
    content:
      "Select collateral asset(s) from the list of your spot wallet assets. The Loan-to-Value (LTV) should be lower than the Initial LTV.",
  },
  {
    title: "3. Confirm Order",
    content:
      "Confirm the order details, including the estimated interest, terms, Margin Call LTV, etc. Your collateral assets will be frozen in your spot wallet once the order is placed.",
  },
  {
    title: "4. Order Matched",
    content:
      "Once matched, your collateral moves to Binance custody, and you receive the borrowed amount (minus interest) in your spot wallet. Monitor LTV to avoid liquidation.",
  },
  {
    title: "5. Repayment",
    content:
      "Repay by the expiry date to avoid penalties. After expiry, a 3x interest penalty applies hourly for 24 hours, then your collateral may be liquidated.",
  },
];

const LoanInfo = () => {
  const [selectedTab, setSelectedTab] = useState<"borrower" | "supplier">(
    "borrower"
  );
  return (
    <div className="w-full mt-20 mb-10">
      {/* heading part */}
      <div className="w-full flex justify-between border-b-2 dark:border-white/10 border-[#161735]/10 pt-2">
        {/* heading */}
        <h2 className={`${saira.className} text-[20px]`}>
          How Do Fixed Rate Loans Work?
        </h2>
        {/* Tabs */}
        <div className="flex gap-6   ">
          {["borrower", "supplier"].map((val) => (
            <button
              key={val}
              onClick={() => setSelectedTab(val as typeof selectedTab)}
              className={`text-[14px] font-light pb-2 cursor-pointer top-[2px] relative  ${
                selectedTab === val
                  ? "text-green-400 border-b-2 "
                  : "border-b-2 border-transparent"
              }`}
            >
              <span>As a </span>
              <span>{val}</span>
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      <div className="w-[98%] mx-auto mt-4 flex gap-3 justify-start flex-wrap">
        {MOCK_DATA.map(({ title, content }, index) => (
          <div
            className="w-fit min-w-[250px] w-full sm:max-w-[calc(94%/3)] bg-white  shadow shadow-black/40 dark:shadow-white/20 dark:bg-[#161735]  rounded-xl p-4 py-6 flex  flex-col gap-3"
            key={index}
          >
            {/* title */}
            <div className="flex gap-1 items-center">
              <h4 className={`${saira.className}`}>{title}</h4>
            </div>

            {/* border line */}
            <div className="w-full border-b opacity-30 "></div>
            {/* content */}
            <p className="text-[12px] font-light">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanInfo;
