"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import { FaShoppingBag } from "react-icons/fa";
import {
  LuArrowDownFromLine,
  LuArrowUpFromLine,
  LuSquareArrowDown,
  LuSquareArrowUp,
} from "react-icons/lu";
// import { PiArrowDownBold, PiArrowUpBold } from "react-icons/pi";
import { MdShoppingCartCheckout, MdShoppingCart } from "react-icons/md";
// import { FaRegCircleDown, FaRegCircleUp } from "react-icons/fa6";

const WalletSummary = () => {
  const t = useTranslations("dashboard.overviewPage.wallet");
  return (
    <div className="h-full flex flex-col justify-between dark:bg-[#161735] bg-white  p-6 rounded-xl w-full shadow-lg">
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("label")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left side */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="p-2 border border-slate-600/20 dark:border-slate-400/20 rounded-md text-green-400">
              <LuArrowDownFromLine />
            </span>
            <div>
              <p className="text-xs font-medium">$50,135.12</p>
              <p className="text-[11px] font-extralight">
                {t("terms.tDeposit")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-2 border border-slate-600/20 dark:border-slate-400/20 rounded-md text-red-400">
              <LuArrowUpFromLine />
            </span>

            <div>
              <p className="text-xs font-medium">$26,135.24</p>
              <p className="text-[11px] font-extralight">
                {t("terms.tWithdraw")}
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="p-2 border border-slate-600/20 dark:border-slate-400/20 rounded-md text-green-400">
              <MdShoppingCart />
            </span>
            <div>
              <p className="text-xs font-medium">$12,135.20</p>
              <p className="text-[11px] font-extralight">
                {t("terms.tBuyOrders")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-2 border border-slate-600/20 dark:border-slate-400/20 rounded-md text-red-400">
              <MdShoppingCartCheckout />
            </span>
            <div>
              <p className="text-xs font-medium">$23,490.11</p>
              <p className="text-[11px] font-extralight">
                {t("terms.tSellOrders")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom buttons */}

      <div className="flex flex-wrap gap-4 justify-center md:justify-start font-light">
        <button className="bg-slate-400/20 px-5 py-2 rounded-full text-xs flex items-center gap-2 hover:bg-slate-400/40 transition">
          <LuSquareArrowDown /> {t("terms.deposit")}
        </button>
        <button className="bg-slate-400/20 px-5 py-2 rounded-full text-xs flex items-center gap-2 hover:bg-slate-400/40 transition">
          <LuSquareArrowUp /> {t("terms.withdraw")}
        </button>
        <button className="bg-slate-400/20  px-5 py-2 rounded-full text-xs flex items-center gap-2 hover:bg-slate-400/40 transition">
          <FaShoppingBag /> {t("terms.myAssets")}
        </button>
      </div>
    </div>
  );
};

export default WalletSummary;
