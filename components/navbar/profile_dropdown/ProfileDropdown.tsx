"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import AmountCard from "./AmountCard";
import { useSidebarItems } from "../MenuItems";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ProfileDropdown() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [activeMenu, setActiveMenu] = useState<string>("Overview");

  // multi language data
  const menuItems = useSidebarItems();
  const t = useTranslations("sidebar");

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    // setOpenMenus((prev) => ({ [label]: !prev[label] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <aside className="w-fit max-h-[90vh] overflow-y-auto min-w-[280px] 2xl:px-4 bg-gray-50/50 dark:bg-[#21213b]/95   h-fit  py-4 rounded-lg flex flex-col justify-between">
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
              <p className="font-normal text-sm 2xl:text-nowrap ">
                John Williams
              </p>
              <p className="text-[10px] 2xl:text-[0.6rem] text-gray-400">
                28798498
              </p>
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
                {item.children ? (
                  <div
                    // href={item.href}
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
                  </div>
                ) : (
                  <Link
                    href={item.link}
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
                )}

                {item.children && openMenus[item.label] && (
                  <div className=" mt-1 mb-1 space-y-2 opacity-80 text-xs font-normal">
                    {item.children.map((sub) => (
                      <Link
                        href={sub.link}
                        key={`${item.label}-${sub}`}
                        className={` ${
                          activeMenu === sub.item
                            ? "border-l-3 border-green-600 bg-gradient-to-r from-green-500/20 via-green-500/20 to-transparent hover:bg-none"
                            : ""
                        } pl-10 cursor-pointer hover:bg-slate-400/20 hover:rounded-md py-2 flex gap-1 items-center`}
                        onClick={() => {
                          setActiveMenu(sub.item);
                        }}
                      >
                        <GoDotFill />
                        {sub.item}
                      </Link>
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
              <span className="text-sm">{t("logout")}</span>
            </div>
          </div>
        </div>
      </aside>
    </motion.div>
  );
}
