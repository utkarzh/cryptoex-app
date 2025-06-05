"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  //  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useSidebarItems } from "./MenuItems";
import { useTranslations } from "next-intl";

export default function DashboardSidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [activeMenu, setActiveMenu] = useState<string>("Overview");
  const [isSidebar, setIsSidebar] = useState(false);

  const t = useTranslations("sidebar");

  // multi language data
  const menuItems = useSidebarItems();

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    // setOpenMenus((prev) => ({ [label]: !prev[label] }));
  };

  return (
    <>
      {/* opener for sidebar at small screen */}
      <button
        className={` ${
          isSidebar ? "hidden" : "block"
        } lg:hidden fixed top-20 z-[100] left-0 p-1 px-0.5 rounded-r-md bg-green-600 cursor-pointer`}
        onClick={() => setIsSidebar(true)}
      >
        <MdOutlineKeyboardArrowRight className="text-3xl" />
      </button>

      {/* content */}
      <aside
        className={` ${
          isSidebar ? "translate-x-0" : "-translate-x-[110%]"
        } w-fit fixed top-20 left -translate-x-[110%] lg:translate-x-0 lg:static shadow lg:shadow-none dark:shadow-white z-[10] min-w-[250px]  h-fit dark:bg-[#161735]  bg-white py-4 rounded-lg flex flex-col justify-between transition-all duration-300`}
      >
        {/* close button */}
        {/* <button className=" absolute top-0 right-0 ">
          <MdOutlineKeyboardArrowLeft className="text-3xl" />
        </button> */}
        <div>
          {/* Profile Header */}
          <div className="flex mx-4 items-center space-x-3 mb-6 relative ">
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

            {/* close button */}
            <button
              className=" lg:hidden absolute top-1/2 -translate-y-1/2 -right-4 p-1 px-0.5 rounded-l-md bg-green-600 cursor-pointer "
              onClick={() => setIsSidebar(false)}
            >
              <MdOutlineKeyboardArrowLeft className="text-2xl" />
            </button>
          </div>

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
    </>
  );
}
