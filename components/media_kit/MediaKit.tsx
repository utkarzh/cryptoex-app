import { saira } from "@/utils/Font";
import Image from "next/image";
import React from "react";

const MediaKit = () => {
  return (
    <div className="w-full my-10 flex flex-col gap-8">
      {/*heading  */}
      <div>
        <h2 className={`${saira.className} text-xl font-medium`}>Media Kit</h2>
        <p className="text-[10px] font-light mt-1">
          Follow these guidelines to ensure consistency and accuracy when
          promotingIndoex in marketing communications, including advertising,
          articles, websites, and printed materials.
        </p>
      </div>

      {/* download part  */}
      <div className="space-y-4">
        {/* header and download button */}
        <div className="w-full flex justify-between">
          <h4 className="text-sm font-medium">
            Download the IndoEx brand logo usage guide
          </h4>
          {/* button */}
          <button className="w-fit text-[10px] bg-green-500 hover:bg-green-600 text-white dark:text-black font-medium py-1.5 px-3 rounded-full transition text-xs cursor-pointer">
            Download PDF
          </button>
        </div>

        {/*  */}
        <div className="w-full  bg-green-600 text-white flex flex-col justify-center items-center rounded-md ">
          <div className="text-[50px] font-medium py-20">
            <p>IndoEx</p>
            <p>Brand Guidelines</p>
          </div>
        </div>
      </div>

      {/* Brand Assets */}
      <div className="flex h-full flex-col gap-6">
        <h4 className="text-sm font-medium">Brand Assets</h4>
        {/* logos */}
        <div className="rounded-md p-4 bg-white dark:bg-[#161735] h-full flex gap-2 items-center ">
          <Image
            src="/images/logo/logo_indoex_black.svg"
            alt="logo"
            width={200}
            height={200}
            className="w-[100px] block dark:hidden h-auto"
          />

          <Image
            src="/images/logo/logo_indoex_white.svg"
            alt="logo"
            width={300}
            height={300}
            className="w-[100px] dark:block hidden h-auto"
          />

          <div className="w-full flex flex-col gap-1 border-l-2 border-slate-500/20 pl-6 ml-6">
            <h3 className="text-sm font-normal">Logos</h3>
            <p className="text-[10px] fonr-light opacity-80 ">
              Get official indoex logos here. Our logo represents the
              Indoex&apos;s brand so we ask that you use them without any
              alterations.
            </p>
            <button className="w-fit mt-1 text-[10px] bg-green-500 hover:bg-green-600 text-white dark:text-black font-medium py-1.5 px-3 rounded-full transition text-xs cursor-pointer">
              Download
            </button>
          </div>
        </div>
        {/* font */}
        <div className="rounded-md p-4 bg-white dark:bg-[#161735] h-full flex gap-2 items-center ">
          <div className="flex flex-col gap-1 max-w-[100px]">
            <p className="text-sm font-bold">Saira Bold</p>
            <p className="text-sm font-normal">Inter Regular & Medium</p>
          </div>

          <div className="w-full flex flex-col gap-1 border-l-2 border-slate-500/20 pl-6 ml-6">
            <h3 className="text-sm font-normal">Typeface</h3>
            <p className="text-[10px] fonr-light opacity-80 ">
              Get a copy of our corporate font, Saira and Inter.
            </p>
            <button className="w-fit text-[10px] mt-1 bg-green-500 hover:bg-green-600 text-white dark:text-black font-medium py-1.5 px-3 rounded-full transition text-xs cursor-pointer">
              Download
            </button>
          </div>
        </div>

        {/* color */}
        <div className="rounded-md p-4 bg-white dark:bg-[#161735] h-full flex gap-2 items-center ">
          <div className="flex flex-col gap-1 max-w-[100px]">
            <p className="text-sm font-bold">Saira Bold</p>
            <p className="text-sm font-normal">Inter Regular & Medium</p>
          </div>

          <div className="w-full flex flex-col gap-1 border-l-2 border-slate-500/20 pl-6 ml-6">
            <h3 className="text-sm font-normal">Colors</h3>
            <p className="text-[10px] fonr-light opacity-80 ">
              Below are the primary and secondary brand colors for Indoex
            </p>

            {/*  */}
            <div className="flex gap-4 mt-1">
              {/* first */}
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 bg-[#27a043] rounded-md"></div>
                <div className="text-[10px] font-light">
                  <p>Green</p>
                  <p className="text-[#27a043] font-extralight">#27A043</p>
                </div>
              </div>

              {/*second*/}
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 bg-[#07082D] rounded-md"></div>
                <div className="text-[10px] font-light">
                  <p>Dark Blue</p>
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
