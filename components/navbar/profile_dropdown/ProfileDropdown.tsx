"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { HiMiniCodeBracket } from "react-icons/hi2";
import {
  IoGiftOutline,
  IoHomeOutline,
  IoLayersOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import { SlBasketLoaded } from "react-icons/sl";
import AmountCard from "./AmountCard";
import { GiMoneyStack } from "react-icons/gi";

type MenuItem = {
  label: string;
  icon: React.ReactNode;
  children?: string[];
  bottom?: boolean;
};

const menuItems: MenuItem[] = [
  {
    label: "Overview",
    icon: <IoHomeOutline />,
  },
  {
    label: "Account",
    icon: <RiShieldUserLine />,
    children: ["Profile", "Settings"],
  },
  {
    label: "Wallet",
    icon: <IoWalletOutline />,
    children: ["Deposit", "Withdraw"],
  },
  {
    label: "History",
    icon: <MdOutlineHistory />,
    children: ["Login History", "Transaction History"],
  },
  {
    label: "Orders",
    icon: <SlBasketLoaded />,
    children: ["Open Orders", "Order History"],
  },
  {
    label: "Staking",
    icon: <IoLayersOutline />,
  },
  {
    label: "Loan",
    icon: <GiMoneyStack />,
  },
  {
    label: "Referrals",
    icon: <IoGiftOutline />,
  },
  {
    label: "Login Activity",
    icon: <AiOutlineLogin />,
  },
  {
    label: "API",
    icon: <HiMiniCodeBracket />,
  },
];

export default function ProfileDropdown() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [activeMenu, setActiveMenu] = useState<string>("Overview");

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    // setOpenMenus((prev) => ({ [label]: !prev[label] }));
  };

  console.log("openMenus", openMenus);

  return (
    <aside className="w-fit min-w-[250px] bg-gray-50/95 dark:bg-[#21213b]/95   h-fit  py-4 rounded-lg flex flex-col justify-between">
      <div>
        {/* Profile Header */}
        <div className="flex mx-4 items-center space-x-3 mb-6">
          <Image
            src="/images/profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
            width={40}
            height={40}
          />
          <div>
            <p className="font-normal text-sm ">John Williams</p>
            <p className="text-[10px] text-gray-400">28798498</p>
          </div>
          <button className=" p-2 rounded-full dark:bg-slate-200/20 bg-slate-700/20 ml-4 cursor-pointer hover:scale-105 transition-all duration-300">
            <FiEdit className="text-sm " />
          </button>
        </div>

        {/* amount card */}
        <AmountCard />

        {/* Top Menu Items */}
        <nav className="space-y-2 ">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={` ml-2 ${
                activeMenu === item.label
                  ? "border-l-3 border-green-600 bg-gradient-to-r from-green-500/20 via-green-500/20 to-transparent hover:bg-none"
                  : ""
              }`}
            >
              <Link
                href=""
                className="flex items-center justify-between p-2 rounded cursor-pointer text-xs font-normal hover:bg-slate-400/30 "
                onClick={() => {
                  if (item.children) {
                    toggleMenu(item.label);
                  } else {
                    setActiveMenu(item.label);
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="">{item.label}</span>
                </div>
                {item.children && (
                  <span>
                    {openMenus[item.label] ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                )}
              </Link>

              {item.children && openMenus[item.label] && (
                <div className=" mt-1 mb-1 space-y-2 opacity-80 text-xs font-normal">
                  {item.children.map((sub) => (
                    <div
                      key={`${item.label}-${sub}`}
                      className={` ${
                        activeMenu === sub
                          ? "border-l-3 border-green-600 bg-gradient-to-r from-green-500/20 via-green-500/20 to-transparent hover:bg-none"
                          : ""
                      } pl-10 cursor-pointer hover:bg-slate-400/20 hover:rounded-md py-2 flex gap-1 items-center`}
                      onClick={() => {
                        setActiveMenu(sub);
                      }}
                    >
                      <GoDotFill />
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      {/* Bottom Log Out */}
      <div className="mt-8">
        <div className="border-t border-gray-700 pt-4">
          <div className="flex ml-1 items-center gap-2 text-red-500 cursor-pointer dark:hover:text-red-400 hover:text-red-600 group">
            <span className=" p-2 rounded-full border dark:border-slate-200/40 border-slate-700/20 group-hover:bg-red-500 group-hover:border-transparent group-hover:text-white transition-all duration-300">
              <AiOutlineLogout className="text-md" />
            </span>
            <span className="text-sm">Log Out</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
