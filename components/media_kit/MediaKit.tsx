"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const MediaKit = () => {
  const t = useTranslations("mediaKitPage");

  const handleDownload = (file: string, downloadName?: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = downloadName ? downloadName : "indoex";
    link.click();
  };
  return (
    <div className="w-full my-10 flex flex-col gap-8">
      {/*heading  */}
      <div>
        <h2
          className={`${saira.className} text-xl xl:text-[1.7rem] font-medium`}
        >
          {t("title")}
        </h2>
        <p className="text-xs font-light mt-1">{t("content")}</p>
      </div>

      {/* download part  */}
      <div className="space-y-4">
        {/* header and download button */}
        <div className="w-full flex justify-between">
          <h4 className="text-sm xl:text-lg font-medium">
            {t("terms.downloadHeading")}
          </h4>
          {/* button */}
          <button
            className="w-fit text-[10px] xl:text-xs bg-green-500 hover:bg-green-600 text-white dark:text-black font-medium py-1.5 px-3 rounded-full transition text-xs cursor-pointer"
            onClick={() => handleDownload("/test.pdf", "brand_guidelines.pdf")}
          >
            {t("terms.buttons.downloadPdf")}
          </button>
        </div>

        {/*  */}
        <div className="w-full bg-white  dark:bg-[#161735] flex flex-col justify-center items-center rounded-md ">
          <div className="text-[50px] xl:text-[4rem] font-medium py-20">
            <p>IndoEx</p>
            <p>{t("terms.guideHeading")}</p>
          </div>
        </div>
      </div>

      {/* Brand Assets */}
      <div className="flex h-full flex-col gap-6 mt-6">
        <h4 className="text-sm xl:text-lg font-medium">
          {t("terms.brandAssets")}
        </h4>
        {/* logos */}
        <div className="rounded-md p-4 bg-white dark:bg-[#161735] h-full flex gap-2 items-center ">
          <Image
            src="/images/logo/logo_indoex_black.svg"
            alt="logo"
            width={200}
            height={200}
            className="w-[100px] xl:min-w-[200px]  block dark:hidden h-auto"
          />

          <Image
            src="/images/logo/logo_indoex_white.svg"
            alt="logo"
            width={300}
            height={300}
            className="w-[100px] xl:min-w-[200px] dark:block hidden h-auto"
          />

          <div className="w-full flex flex-col gap-1 xl:gap-2 border-l-2 border-slate-500/20 pl-6 ml-6">
            <h3 className="text-sm xl:text-lg font-normal">
              {t("terms.logos")}
            </h3>
            <p className="text-[10px] xl:text-xs fonr-light opacity-80 ">
              {t("terms.logosContent")}
            </p>
            <button
              className="w-fit mt-1 text-[10px] xl:text-xs bg-green-500 hover:bg-green-600 text-white dark:text-black font-medium py-1.5 px-3 rounded-full transition text-xs cursor-pointer"
              onClick={() =>
                handleDownload(
                  "/images/logo/logo_indoex_black.svg",
                  "indoex_logos"
                )
              }
            >
              {t("terms.buttons.download")}
            </button>
          </div>
        </div>
        {/* font */}
        <div className="rounded-md p-4 bg-white dark:bg-[#161735] h-full flex gap-2 items-center ">
          <div className="flex flex-col gap-1 max-w-[100px] xl:min-w-[200px]">
            <p className="text-sm xl:text-lg font-bold">
              {t("terms.sairaBold")}
            </p>
            <p className="text-sm xl:text-lg font-normal">{t("terms.inter")}</p>
          </div>

          <div className="w-full flex flex-col gap-1 xl:gap-2 border-l-2 border-slate-500/20 pl-6 ml-6">
            <h3 className="text-sm xl:text-lg font-normal">
              {t("terms.typeFace")}
            </h3>
            <p className="text-[10px] xl:text-xs fonr-light opacity-80 ">
              {t("terms.typeFaceContent")}
            </p>
            <button
              className="w-fit text-[10px] xl:text-xs mt-1 bg-green-500 hover:bg-green-600 text-white dark:text-black font-medium py-1.5 px-3 rounded-full transition text-xs cursor-pointer"
              onClick={() => handleDownload("/indoex_font.zip", "indoex_fonts")}
            >
              {/* indoex_font */}
              {t("terms.buttons.download")}
            </button>
          </div>
        </div>

        {/* color */}
        <div className="rounded-md p-4  bg-white dark:bg-[#161735] h-full flex gap-2 items-center ">
          <div className="flex bg-[#07082D]  rounded-lg flex-col gap-1 h-[100%] max-w-[100px] xl:min-w-[200px] min-h-[110px]">
            <div className="w-[60%] bg-[#27A043] min-h-[110px] rounded-l-lg "></div>
          </div>

          <div className="w-full  flex flex-col gap-1 xl:gap-2 border-l-2 border-slate-500/20 pl-6 ml-6">
            <h3 className="text-sm xl:text-lg font-normal">
              {t("terms.colors")}
            </h3>
            <p className="text-[10px] xl:text-xs fonr-light opacity-80 ">
              {t("terms.colorsContent")}
            </p>

            {/*  */}
            <div className="flex gap-4 mt-1">
              {/* first */}
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 xl:w-10 xl:h-10 bg-[#27a043] rounded-md"></div>
                <div className="text-[10px] xl:text-xs font-light">
                  <p>{t("terms.green")}</p>
                  <p className="text-[#27a043] font-extralight">#27A043</p>
                </div>
              </div>

              {/*second*/}
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 xl:w-10 xl:h-10 bg-[#07082D] rounded-md"></div>
                <div className="text-[10px] xl:text-xs font-light">
                  <p>{t("terms.dBlue")}</p>
                  <p className="text-[#27a043] font-extralight">#07082D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaKit;
