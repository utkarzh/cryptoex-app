import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { FaCoins, FaPercent, FaRobot, FaUserShield } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function LoanAdvantages() {
  const t = useTranslations("loansPage.fixedLoan.advantages");
  const advantages = [
    {
      icon: <FaUserShield className="text-xl" />,
      title: t("adv1.title"),
      description: t("adv1.content"),
    },
    {
      icon: <FaRobot className="text-xl" />,
      title: t("adv2.title"),
      description: t("adv2.content"),
    },
    {
      icon: <FaPercent className="text-xl" />,
      title: t("adv3.title"),
      description: t("adv3.content"),
    },
    {
      icon: <FaCoins className="text-xl" />,
      title: t("adv4.title"),
      description: t("adv4.content"),
    },
  ];
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className={`${saira.className} text-[20px] xl:text-[1.7rem]`}>
          {t("title")}
        </h2>

        {/* button */}
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="bg-slate-600/60 dark:bg-slate-200/20 cursor-pointer hover:bg-slate-600/50 transition-all p-2 rounded-full  "
          >
            <MdArrowBackIosNew />
          </button>

          <button
            onClick={scrollRight}
            className="bg-slate-600/60 dark:bg-slate-200/20 cursor-pointer hover:bg-slate-600/50 transition-all p-2 rounded-full "
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-hidden scrollbar-hide py-2"
      >
        {advantages.map((item, idx) => (
          <div
            key={idx}
            className="w-full min-w-[400px] h-[200px] bg-white  shadow shadow-black/40 dark:shadow-white/20 dark:bg-[#161735]  rounded-xl p-3 py-5 flex  flex-col gap-3"
          >
            {/* heading */}
            <div className="flex gap-1 items-center">
              <div className="border rounded-full p-3 dark:border-slate-200/20 border-slate-600/20">
                {item.icon}
              </div>
              <h4 className={`${saira.className}`}>{item.title}</h4>
            </div>

            {/* border line */}
            <div className="w-full border-b opacity-30 "></div>

            {/* content */}
            <p className="text-[12px] font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
