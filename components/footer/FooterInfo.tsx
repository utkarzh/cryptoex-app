import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const FooterInfo = () => {
  const t = useTranslations("footer.others");
  const otherLinks = [
    {
      title: t("items.faq"),
      url: "/faq",
    },
    {
      title: t("items.contact"),
      url: "/contact-us",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <h3 className={` ${saira.className} text-[14px] font-medium`}>
          {t("label")}
        </h3>
        <div className="flex flex-col gap-[7px]">
          {otherLinks.map((val, index) => (
            <Link
              href={`${val.url}`}
              className="text-[13px] font-extralight"
              key={index}
            >
              {val.title}
            </Link>
          ))}
          <div className="text-[13px] font-extralight flex flex-col gap-[2px] ">
            <span className="opacity-70">{t("items.support")}</span>
            <span>support@indoex.io</span>
          </div>

          <div className="text-[13px] font-extralight flex flex-col gap-[2px] ">
            <span className="opacity-70">{t("items.mails")}</span>
            <div>
              <div>gracenorth@indoex.io</div>
              <div>relations@indoex.io</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
