"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

type MenuItem = {
  label: string;
  // icon: React.ReactNode;
  children?: string[];
  bottom?: boolean;
};

const menuItems: MenuItem[] = [
  {
    label: "All",
  },
  {
    label: "News",
    children: ["Indoex updates", "Public news"],
  },
  {
    label: "New Listings",
  },
  {
    label: "Events",
    children: ["Event1", "Events2"],
  },
  {
    label: "Web3",
  },
  {
    label: "API",
  },
  {
    label: "Dlisting",
  },
];

export default function AnnouncementsSidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [activeMenu, setActiveMenu] = useState<string>("Overview");

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    // setOpenMenus((prev) => ({ [label]: !prev[label] }));
  };

  console.log("openMenus", openMenus);

  return (
    <aside className="w-fit min-w-[250px] h-full dark:bg-[#161735]  bg-white py-4 rounded-lg flex flex-col justify-between">
      <div>
        {/* Top Menu Items */}
        <nav className="space-y-2 ">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={` mx-3 ${
                activeMenu === item.label
                  ? "border-l-3 border-green-600 bg-gradient-to-r from-green-500/20 via-green-500/20 to-transparent hover:bg-none"
                  : ""
              }`}
            >
              <Link
                href="#"
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
                  {/* <span className="text-lg">{item.icon}</span> */}
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
    </aside>
  );
}
