import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  const t = useTranslations("footer");

  const serviceLinks = [
    {
      title: t("services.items.terms"),
      url: "/terms-of-use",
    },
    {
      title: t("services.items.policy"),
      url: "#",
    },
    {
      title: t("services.items.status"),
      url: "/wallet-status",
    },
    {
      title: t("services.items.announcements"),
      url: "/announcements/all",
    },
    {
      title: t("services.items.media"),
      url: "/media-kit",
    },
  ];

  const legalisationLinks = [
    {
      title: t("legalisation.items.fee"),
      url: "/fee",
    },
    {
      title: t("legalisation.items.legalities"),
      url: "#",
    },
    {
      title: t("legalisation.items.kyc"),
      url: "#",
    },
    {
      title: t("legalisation.items.protect"),
      url: "#",
    },
    {
      title: t("legalisation.items.verification"),
      url: "/verification",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4 justify-between">
      <div className="w-full flex flex-wrap lg:flex-nowrap gap-8 lg:gap-16 ">
        {/* services */}
        <div className="flex flex-col gap-2">
          <h3 className={` ${saira.className} text-lg font-medium`}>
            {t("services.label")}
          </h3>
          <div className="flex flex-col gap-1">
            {serviceLinks.map((val, index) => (
              <Link
                href={`${val.url}`}
                className="text-xs font-light hover:text-green-600"
                key={index}
              >
                {val.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Legalisation */}
        <div className="flex flex-col gap-2">
          <h3 className={` ${saira.className} text-lg font-medium`}>
            {t("legalisation.label")}
          </h3>
          <div className="flex flex-col gap-1">
            {legalisationLinks.map((val, index) => (
              <Link
                href={`${val.url}`}
                className="text-xs font-light text-nowrap hover:text-green-600"
                key={index}
              >
                {val.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* rights */}
      <p className="text-xs font-normal text-slate-400/70">{t("rights")}</p>
    </div>
  );
};

export default FooterLinks;
