import React, { FC } from "react";
import DropdownCard from "./DropdownCard";
import Link from "next/link";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

type Props = {
  isVisible: boolean;
};

const EarnDropdown: FC<Props> = ({ isVisible }) => {
  const t = useTranslations("Navbar.NavItems.earn.items");

  const financeOptions = [
    {
      icon: <FaHandHoldingUsd className="text-xl" />,
      title: t("loans.label"),
      description: t("loans.desc"),
      href: "/loans",
    },
    {
      icon: <RiStackLine className=" text-xl" />,
      title: t("staking.label"),
      description: t("staking.desc"),
      href: "/staking",
    },
  ];

  return (
    <DropdownCard isVisible={isVisible}>
      <ul className="w-full rounded-2xl p-2  max-w-md">
        {financeOptions.map((opt, index) => (
          <li key={index}>
            <Link
              href={opt.href}
              className="flex items-center gap-4 p-2.5 rounded-md dark:hover:bg-[#35354b] hover:bg-slate-200 "
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

export default EarnDropdown;
