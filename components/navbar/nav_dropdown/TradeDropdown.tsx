"use client";

import { FiTarget, FiTrendingUp, FiRepeat } from "react-icons/fi";
import DropdownCard from "./DropdownCard";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FC } from "react";

type Props = {
  isVisible: boolean;
};

const TradeDropdown: FC<Props> = ({ isVisible }) => {
  const t = useTranslations("Navbar.NavItems.trade.items");
  const options = [
    {
      icon: <FiTarget className=" text-xl" />,
      title: t("spot.label"),
      description: t("spot.desc"),
      href: "/trade",
    },
    {
      icon: <FiTrendingUp className=" text-xl" />,
      title: t("margin.label"),
      description: t("margin.desc"),
      href: "/trade",
    },
    {
      icon: <FiRepeat className=" text-xl" />,
      title: t("convert.label"),
      description: t("convert.desc"),
      href: "/convert",
    },
  ];
  return (
    <DropdownCard isVisible={isVisible}>
      <ul className="w-full rounded-2xl p-2  max-w-md">
        {options.map((opt, index) => (
          <li key={index}>
            <Link
              href={opt.href}
              className="flex items-center gap-4 p-2.5 rounded-md dark:hover:bg-[#35354b] hover:bg-slate-200"
            >
              <div className="border border-md border-slate-500/20 p-2 rounded-lg">
                {opt.icon}
              </div>
              <div>
                <div className="text-xs">{opt.title}</div>
                <div className="text-[10px] 2xl:text-[0.6rem] opacity-50">
                  {opt.description}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </DropdownCard>
  );
};

export default TradeDropdown;
