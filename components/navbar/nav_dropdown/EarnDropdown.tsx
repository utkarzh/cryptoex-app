import React from "react";
import DropdownCard from "./DropdownCard";
import Link from "next/link";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";

const financeOptions = [
  {
    icon: <FaHandHoldingUsd className="text-xl" />,
    title: "Loans",
    description: "Unlock funds, keep your crypto.",
    href: "/loans",
  },
  {
    icon: <RiStackLine className=" text-xl" />,
    title: "Staking",
    description: "Stake coins, earn passive income.",
    href: "#",
  },
];

const EarnDropdown = () => {
  return (
    <DropdownCard>
      <ul className="w-full rounded-2xl p-2  max-w-md">
        {financeOptions.map((opt, index) => (
          <li key={index}>
            <Link
              href={opt.href}
              className="flex items-center gap-4 p-3.5 rounded-md dark:hover:bg-[#35354b] hover:bg-slate-200"
            >
              <div className="border border-md border-slate-500/20 p-2 rounded-lg">
                {opt.icon}
              </div>
              <div>
                <div className="text-xs">{opt.title}</div>
                <div className="text-[10px] opacity-50">{opt.description}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </DropdownCard>
  );
};

export default EarnDropdown;
