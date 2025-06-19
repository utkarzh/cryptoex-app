import { LuClock3 } from "react-icons/lu";
import { MdReplay } from "react-icons/md";
import { TiClipboard } from "react-icons/ti";
import FixedBorrowForm from "./FixedBorrowForm";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";

const BorrowSection = () => {
  const t = useTranslations("loansPage.fixedLoan.borrowSection");
  return (
    <div className="mt-16 rounded-lg mx-auto flex flex-col md:flex-row justify-between gap-12">
      {/* Left Side */}
      <div className="w-full ">
        {/* heading */}
        <h2 className={` ${saira.className} text-2xl font-semibold mb-6`}>
          {t("title")}
        </h2>
        {/*  */}
        <div className="flex h-fit items-center gap-3 text-sm mb-8">
          <div className="">
            <p className="text-xs opacity-70 font-light">
              {t("stats.totalBorrowed")}
            </p>
            <p className="text-xs font-bold">$173.02M</p>
          </div>

          <div className="flex h-full opacity-30 ">|</div>

          <div>
            <p className="text-xs opacity-70 font-light">
              {t("stats.currentOrders")}
            </p>
            <p className="text-xs font-bold">$39.11M</p>
          </div>

          <div className="flex h-full opacity-30 ">|</div>

          <div>
            <p className="text-xs opacity-70 font-light">
              {t("stats.rate.label")}
            </p>
            <p className="text-xs opacity-70 font-light">
              {t("stats.rate.content")}
            </p>
          </div>
        </div>

        {/* order section */}
        <div className="w-[80%] pt-10">
          {/* My Order Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md font-semibold">{t("myOrder.label")}</h3>
            <div className="p-[6px] rounded-lg border dark:border-slate-200/40 border-slate-700/40 ">
              <TiClipboard className="text-xl" />
            </div>
          </div>

          {/* Order Options */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between  px-4 py-2 rounded-xl transition dark:bg-[#161735] bg-slate-700/15">
              <div className="flex items-center gap-3">
                <LuClock3 />
                <div className="text-left">
                  <p className="text-[14px] xl:text-[1rem]  font-medium">
                    {t("myOrder.pOrders.label")}
                  </p>
                  <p className="text-xs font-extralight">
                    {t("myOrder.pOrders.content")}
                  </p>
                </div>
              </div>
            </button>

            <button className="w-full flex items-center justify-between  px-4 py-2 rounded-xl  transition dark:bg-[#161735] bg-slate-700/15">
              <div className="flex items-center gap-3">
                <MdReplay className="text-lg rotate-y-180" />
                <div className="text-left">
                  <p className="text-[14px] xl:text-[1rem] font-medium">
                    {t("myOrder.oOrders.label")}
                  </p>
                  <p className="text-xs font-extralight">
                    {t("myOrder.oOrders.content")}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full xl:w-[86%] ">
        <FixedBorrowForm />
      </div>
    </div>
  );
};

export default BorrowSection;
