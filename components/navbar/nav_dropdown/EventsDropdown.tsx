import React from "react";
import DropdownCard from "./DropdownCard";
import Link from "next/link";
import { PiChartLine, PiParachuteLight } from "react-icons/pi";
import { RxRocket } from "react-icons/rx";

const items = [
  {
    icon: <PiParachuteLight className="text-xl" />,
    title: "Airdrop",
    description: "Hold tokens, claim rewards.",
    href: "#",
  },
  {
    icon: <RxRocket className="text-xl" />,
    title: "Launch pad",
    description: "Invest early in new tokens.",
    href: "#",
  },
  {
    icon: <PiChartLine className="text-xl" />,
    title: "Trade competition",
    description: "Show your skills, win prizes.",
    href: "#",
  },
];

const EventsDropdown = () => {
  return (
    <DropdownCard>
      <ul className="w-full rounded-2xl p-2  max-w-md">
        {items.map((opt, index) => (
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

export default EventsDropdown;
