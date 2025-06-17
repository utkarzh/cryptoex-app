import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FC } from "react";
import { IeoVendorDetails_int } from "../../types";

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

type Props = {
  contestInfo: IeoVendorDetails_int;
};

const SocialMediaIconCardAirdrop: FC<Props> = ({ contestInfo }) => {
  const t = useTranslations("airDrop.contest.terms");
  return (
    <div className="w-full p-6 space-y-4">
      <h4 className="text-xs">{t("sMedia")}</h4>
      <div className="w-full flex gap-1">
        {/* x.com */}
        {contestInfo.vendors_twitter && (
          <a className="" target="_blank" href={contestInfo.vendors_twitter}>
            <Image
              src={socialIcons[0]}
              alt=""
              width={144}
              height={144}
              className={`w-8 h-auto border p-[3px] rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        )}
        {/* youtube */}
        {contestInfo.vendors_youtube && (
          <a className="" target="_blank" href={contestInfo.vendors_youtube}>
            <Image
              src={socialIcons[1]}
              alt=""
              width={144}
              height={144}
              className={`w-8 h-auto border p-[3px] rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        )}
        {/* thread */}
        {contestInfo.vendors_threads && (
          <a className="" target="_blank" href={contestInfo.vendors_threads}>
            <Image
              src={socialIcons[2]}
              alt=""
              width={144}
              height={144}
              className={`w-8 h-auto border p-[2px] rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        )}
        {/* discord */}
        {contestInfo.vendors_discord && (
          <a className="" target="_blank" href={contestInfo.vendors_discord}>
            <Image
              src={socialIcons[3]}
              alt=""
              width={144}
              height={144}
              className={`w-8 h-auto border p-[2px] rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        )}
        {/* facebook */}
        {contestInfo.vendors_facebook && (
          <a className="" target="_blank" href={contestInfo.vendors_facebook}>
            <Image
              src={socialIcons[4]}
              alt=""
              width={144}
              height={144}
              className={`w-8 h-auto border p-[2px] rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        )}
        {/* insta */}
        {contestInfo.vendors_instagram && (
          <a className="" target="_blank" href={contestInfo.vendors_instagram}>
            <Image
              src={socialIcons[5]}
              alt=""
              width={144}
              height={144}
              className={`w-8 h-auto border p-[2px] rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        )}

        {/* Linkedin*/}
        {contestInfo.vendors_linkedin && (
          <a className="" target="_blank" href={contestInfo.vendors_linkedin}>
            <Image
              src={socialIcons[6]}
              alt=""
              width={144}
              height={144}
              className={`w-8 h-auto border p-[2px] rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
            />
          </a>
        )}
        {/* telegram */}
        <a className="" target="_blank" href={contestInfo.vendors_telegram}>
          <Image
            src={socialIcons[7]}
            alt=""
            width={144}
            height={144}
            className={`w-8 h-auto border p-[2px] rounded-full cursor-pointer hover:scale-110 transition-all duration-200`}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIconCardAirdrop;
