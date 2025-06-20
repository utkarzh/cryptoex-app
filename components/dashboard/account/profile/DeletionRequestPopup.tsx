import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { FC } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
};
const DeletionRequestPopup: FC<Props> = ({ onClose }) => {
  const t = useTranslations("dashboard.profile.accManagement.closeAcc.popUp");
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] xl:max-w-[700px] mx-auto shadow-lg relative space-y-4">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* heading and close button*/}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>
      {/* message */}
      <p className="text-[10px] xl:text-xs xl:font-extralight font-light opacity-100 dark:opacity-80">
        {t("content.part1")}{" "}
        <a
          href="mailto:support@indoex.io"
          className="text-green-600 no-underline  "
        >
          {t("content.part2")}
        </a>
        . {t("content.part3")}
      </p>

      {/* notice*/}
      <div className="rounded-md bg-slate-200 dark:bg-[#24243c] p-3 space-y-4">
        <h5 className="text-[11px] xl:text-xs font-light"> {t("notice")}:</h5>
        <p className="text-[10px] xl:text-xs xl:font-extralight font-light opacity-100 dark:opacity-80">
          {t("noticePoints.point1")}
        </p>
        <p className="text-[10px] xl:text-xs xl:font-extralight font-light opacity-100 dark:opacity-80">
          {t("noticePoints.point2")}
        </p>
        <p className="text-[10px] xl:text-xs xl:font-extralight font-light opacity-100 dark:opacity-80">
          {t("noticePoints.point3.part1")}{" "}
          <Link href="#" className="text-green-600">
            {t("noticePoints.point3.part2")}
          </Link>
        </p>
        <p className="text-[10px] xl:text-xs xl:font-extralight font-light opacity-100 dark:opacity-80">
          {t("noticePoints.point4.part1")}{" "}
          <Link href="#" className="text-green-600">
            {t("noticePoints.point4.part2")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DeletionRequestPopup;
