import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoIosArrowRoundForward, IoLogoInstagram } from "react-icons/io";
import { RiThreadsFill, RiYoutubeLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

const FooterGlance = () => {
  const t = useTranslations("footer.glance");
  return (
    <div className="w-full flex flex-col gap-8 justify-between items-start">
      {/* content */}
      <div className="w-fit flex flex-col gap-3">
        {/* logo */}
        <Link href="/" className="">
          <Image
            width={300}
            height={300}
            className="w-auto cursor-pointer rounded p-1 block dark:hidden"
            src="/images/logo/logo_indoex_black.svg"
            alt="logo"
          />

          <Image
            width={300}
            height={300}
            className="w-[50%] cursor-pointer rounded p-1 dark:block hidden"
            src="/images/logo/logo_indoex_white.svg"
            alt="logo"
          />
        </Link>
        {/* content */}
        <p className="text-xs ">{t("text")}</p>
        {/* button */}
        <Link
          href="/signup"
          className=" w-fit flex text-xs xl:py-2 font-normal  items-center gap-1 px-3 py-1 rounded-full bg-green-700 text-white dark:text-black cursor-pointer hover:bg-green-600 transition-all duration-200"
        >
          {t("button")}
          <IoIosArrowRoundForward className="text-lg" />
        </Link>
      </div>
      {/* social icons */}
      <div className="w-fit flex gap-2 items-center">
        {/* facebook */}
        <div className="w-fit p-1 cursor-pointer hover:scale-110 transition-all duration-300  bg-slate-200 dark:bg-[#63647e]/70 rounded-full">
          <TiSocialFacebook />
        </div>
        {/* insta */}
        <div className="w-fit p-1 cursor-pointer hover:scale-110 transition-all duration-300 bg-slate-200 dark:bg-[#63647e]/70 rounded-full">
          <IoLogoInstagram />
        </div>
        {/* thread */}
        <div className="w-fit p-1 cursor-pointer hover:scale-110 transition-all duration-300 bg-slate-200 dark:bg-[#63647e]/70 rounded-full">
          <RiThreadsFill />
        </div>
        {/* x */}
        <div className="w-fit p-[5px] cursor-pointer hover:scale-110 transition-all duration-300 bg-slate-200 dark:bg-[#63647e]/70 rounded-full">
          <BsTwitterX className="p-0.5" />
        </div>
        {/* youtube */}
        <div className="w-fit p-1 cursor-pointer hover:scale-110 transition-all duration-300 bg-slate-200 dark:bg-[#63647e]/70 rounded-full">
          <RiYoutubeLine />
        </div>
      </div>
    </div>
  );
};

export default FooterGlance;
