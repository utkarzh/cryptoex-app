import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const socialIcons = [
  "/images/social_icons/twitter.png",
  "/images/social_icons/youtube.png",
  "/images/social_icons/threads.png",
  "/images/social_icons/discord.svg",
  "/images/social_icons/facebook.svg",
  "/images/social_icons/instagram.svg",
  "/images/social_icons/linkedin.svg",
  //   "/images/social_icons/medium.svg",
  "/images/social_icons/telegram.svg",
];

const SocialMediaIconCard = () => {
  const t = useTranslations("airDrop.contest.terms");
  return (
    <div className="w-full p-6 space-y-4">
      <h4 className="text-xs">{t("sMedia")}</h4>
      <div className="w-full flex gap-1">
        {socialIcons.map((link, index) => (
          <a className="" key={index} href="#">
            <Image
              src={link}
              alt=""
              width={144}
              height={144}
              className={`w-8 h-auto border ${
                index < 2 ? "p-[3px]" : "p-[2px]"
              } rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaIconCard;
