import { useTranslations } from "next-intl";
import React from "react";

const ApiNotes = () => {
  const t = useTranslations("dashboard.apiPage.apiManagement.note");
  return (
    <div className="w-full">
      <h4 className="text-xs font-light mb-3">{t("label")}</h4>
      <ul className="space-y-2 list-disc text-[10px] xl:text-[0.65rem] font-normal pl-4">
        <li className=""> {t("point1")} </li>
        <li className=""> {t("point2")}</li>
        <li>
          {t("point3.part1")}
          <p> {t("point3.part2")}</p>
        </li>

        <li>{t("point4")}</li>
        <li>{t("point5")}</li>
        <li>
          {t("point6.part1")}{" "}
          <a
            href="mailto:support@indoex.io"
            className="text-green-600 underline"
          >
            {t("point6.part2")}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ApiNotes;
