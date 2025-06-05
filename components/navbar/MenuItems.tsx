"use client";

import { useTranslations } from "next-intl";
import { IoHomeOutline, IoWalletOutline, IoGiftOutline } from "react-icons/io5";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineHistory } from "react-icons/md";
import { SlBasketLoaded } from "react-icons/sl";
import { LuHandCoins } from "react-icons/lu";
import { AiOutlineLogin } from "react-icons/ai";
import { HiMiniCodeBracket } from "react-icons/hi2";

type ChildLinkData = {
  item: string;
  link: string;
};

export type MenuItem = {
  label: string;
  icon: React.ReactNode;
  children?: ChildLinkData[];
  bottom?: boolean;
  isProfileDropdown?: boolean;
  link: string;
};

export function useSidebarItems() {
  const t = useTranslations("sidebar");

  const menuItems: MenuItem[] = [
    {
      label: t("overview"),
      icon: <IoHomeOutline />,
      link: "/dashboard",
    },
    {
      label: t("account.label"),
      icon: <RiShieldUserLine />,
      link: "",
      children: [
        { item: t("account.children.profile"), link: "/profile" },
        { item: t("account.children.security"), link: "/security" },
      ],
    },
    {
      label: t("wallet.label"),
      icon: <IoWalletOutline />,
      link: "",
      children: [
        { item: t("wallet.children.assets"), link: "/assets" },
        { item: t("wallet.children.deposit"), link: "/deposit" },
        { item: t("wallet.children.withdraw"), link: "/withdrawal" },
      ],
    },
    {
      label: t("history.label"),
      icon: <MdOutlineHistory />,
      link: "",
      children: [
        {
          item: t("history.children.depositHistory"),
          link: "/deposit-history",
        },
        {
          item: t("history.children.withdrawHistory"),
          link: "/withdraw-history",
        },
      ],
    },
    {
      label: t("orders.label"),
      icon: <SlBasketLoaded />,
      link: "",
      children: [
        { item: t("orders.children.openOrders"), link: "/open-orders" },
        { item: t("orders.children.orderHistory"), link: "/order-history" },
        { item: t("orders.children.tradeHistory"), link: "/trade-history" },
      ],
    },
    {
      label: t("earn.label"),
      icon: <LuHandCoins />,
      link: "",
      children: [
        { item: t("earn.children.loans"), link: "/loans" },
        { item: t("earn.children.staking"), link: "/staking" },
      ],
    },
    {
      label: t("loginActivity.label"),
      icon: <AiOutlineLogin />,
      link: "",
      children: [
        {
          item: t("loginActivity.children.loginHistory"),
          link: "/login-history",
        },
        {
          item: t("loginActivity.children.deviceManagement"),
          link: "/device-management",
        },
      ],
    },
    {
      label: t("referrals"),
      icon: <IoGiftOutline />,
      link: "/referrals",
    },
    {
      label: t("api"),
      icon: <HiMiniCodeBracket />,
      link: "/details-api",
    },
  ];

  return menuItems;
}
