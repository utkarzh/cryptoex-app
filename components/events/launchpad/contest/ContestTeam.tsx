import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const teamImgUrl = [
  "/images/profile.png",
  "/images/profile.png",
  "/images/profile.png",
  "/images/profile.png",
  "/images/profile.png",
];

const ContestTeam = () => {
  const t = useTranslations("launchPad.contest.terms");
  return (
    <div className="w-full p-6 space-y-4">
      <h4 className="text-xs">{t("team")}</h4>
      <div className="w-full flex gap-4">
        {teamImgUrl.map((link, index) => (
          <a className="" key={index} href="#">
            <Image
              src={link}
              alt=""
              width={144}
              height={144}
              className={`w-10 h-10 border rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContestTeam;
