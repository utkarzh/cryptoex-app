"use client";

import { useTranslations } from "next-intl";

export default function TermsContent() {
  const t = useTranslations("termsOfUse");
  const termsOfUse = [
    {
      title: t("arti1.title"),
      points: [
        t("arti1.content.point1"),
        t("arti1.content.point2"),
        t("arti1.content.point3"),
        t("arti1.content.point4"),
      ],
    },
    {
      title: t("arti2.title"),
      points: [
        t("arti2.content.point1"),
        t("arti2.content.point2"),
        t("arti2.content.point3"),
      ],
    },
    {
      title: t("arti3.title"),
      points: [
        t("arti3.content.point1"),
        t("arti3.content.point2"),
        t("arti3.content.point3"),
        t("arti3.content.point4"),
      ],
    },
    {
      title: t("arti4.title"),
      points: [t("arti4.content.point1")],
    },
    {
      title: t("arti1.title"),
      points: [
        t("arti1.content.point1"),
        t("arti1.content.point2"),
        t("arti1.content.point3"),
        t("arti1.content.point4"),
      ],
    },
    {
      title: t("arti2.title"),
      points: [
        t("arti2.content.point1"),
        t("arti2.content.point2"),
        t("arti2.content.point3"),
      ],
    },
    {
      title: t("arti3.title"),
      points: [
        t("arti3.content.point1"),
        t("arti3.content.point2"),
        t("arti3.content.point3"),
        t("arti3.content.point4"),
      ],
    },
    {
      title: t("arti4.title"),
      points: [t("arti4.content.point1")],
    },
  ];

  return (
    <section className="w-[95%] sm:w-[85%] md:w-[80%]  lg:w-[70%] px-6 py-10 mb-10 relative z-[60]  mx-auto bg-white dark:bg-[#161735] rounded-md">
      <h1 className="text-sm font-semibold">{t("subTitle")}</h1>
      <p className="mt-2 text-xs font-light ">{t("content")}</p>

      {termsOfUse.map((section, index) => (
        <div key={index} className="mb-4 mt-6">
          <h2 className="text-sm font-semibold">{section.title}</h2>
          <ol className="list-decimal list-inside space-y-1 mt-2 text-xs font-light">
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}
