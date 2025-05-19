import { saira } from "@/utils/Font";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const PartnersHeading = () => {
  const partnersUrl = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "2.png",
    "4.png",
    "6.png",
    "3.png",
  ];
  return (
    <div className="w-full h-[24vw] relative flex  ">
      <div
        className={`${saira.className}  absolute top-0 left-0 w-full  text-nowrap overflow-hidden text-[19vw] tracking-wide font-bold text-center `}
      >
        <span className="opacity-10 dark:opacity-20 relative -left-4">PARTNERS</span>
        
        <div className="absolute bottom-0 left-0 w-full h-full  bg-gradient-to-t from-white dark:from-[#06062a] via-white/90 dark:via-[#06062a]/80 to-transparent  z-[30]"></div>
        <div className="w-full bg-[#000]/2 dark:bg-[#fff]/5 absolute top-1/2 -translate-y-1/2 flex  z-[50] py-2">
          <Marquee>
            <div className="flex gap-8 justify-center items-center">
              {partnersUrl.map((url, index) => (
                <Image
                  width={100}
                  height={100}
                  src={`/images/partners/${url}`}
                  alt=""
                  className="w-auto ml-10 h-[0.12em] invert dark:invert-0"
                  key={index}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PartnersHeading;
