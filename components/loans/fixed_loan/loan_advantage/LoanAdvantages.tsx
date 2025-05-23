import { saira } from "@/utils/Font";
import { useRef } from "react";
import { FaCoins, FaPercent, FaRobot, FaUserShield } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const advantages = [
  {
    icon: <FaUserShield className="text-xl" />,
    title: "Stable and Predictable Costs for Borrowers",
    description:
      "Lock in a fixed APR for a set duration, eliminating fluctuations and unexpected costs.",
  },
  {
    icon: <FaRobot className="text-xl" />,
    title: "Efficient Automated Process",
    description:
      "Enjoy easy, and automated borrowing and lending experience with auto-repay and auto-renew options available.",
  },
  {
    icon: <FaPercent className="text-xl" />,
    title: "Attractive Fixed APR for Suppliers",
    description: "Supply your assets for a customizable and fixed APR.",
  },
  {
    icon: <FaCoins className="text-xl" />,
    title: "Multi-Asset Collateral",
    description:
      "Borrowers can set multiple assets as collateral to reduce the risk of liquidation.",
  },
];

export default function LoanAdvantages() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className={`${saira.className} text-[20px]`}>
          Fixed Rate Loans Advantages
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
        className="flex space-x-4  overflow-hidden scrollbar-hide py-2"
      >
        {advantages.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[250px] bg-white  shadow shadow-black/40 dark:shadow-white/20 dark:bg-[#161735]  rounded-xl p-3 py-5 flex  flex-col gap-3"
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
