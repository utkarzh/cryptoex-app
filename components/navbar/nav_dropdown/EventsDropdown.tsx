import React from "react";
import DropdownCard from "./DropdownCard";
import Link from "next/link";
import { PiChartLine, PiParachuteLight } from "react-icons/pi";
import { RxRocket } from "react-icons/rx";
import { useTranslations } from "next-intl";

const EventsDropdown = () => {
  const t = useTranslations("Navbar.NavItems.events.items");
  const items = [
    {
      icon: <PiParachuteLight className="text-xl" />,
      title: t("airdrop.label"),
      description: t("airdrop.desc"),
      href: "/airdrop",
    },
    {
      icon: <RxRocket className="text-xl" />,
      title: t("launchpad.label"),
      description: t("launchpad.desc"),
      href: "/launchpad",
    },
    {
      icon: <PiChartLine className="text-xl" />,
      title: t("tradeCompetition.label"),
      description: t("tradeCompetition.desc"),
      href: "/tradecontest",
    },
  ];
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
