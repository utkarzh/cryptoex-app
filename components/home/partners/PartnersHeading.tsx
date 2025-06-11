"use client";
import { useGetPartnersMutation } from "@/redux/features/homepage/homeSlice";
import { saira } from "@/utils/Font";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

type PartnersData = {
  link: string;
  altdesc: string;
  imagepath: string;
};

const PartnersHeading = () => {
  // const partnersUrl = [
  //   "1.png",
  //   "2.png",
  //   "3.png",
  //   "4.png",
  //   "5.png",
  //   "6.png",
  //   "7.png",
  //   "2.png",
  //   "4.png",
  //   "6.png",
  //   "3.png",
  // ];

  const [PartnersData, setPartnersData] = useState<PartnersData[]>([]);

  const [getPartners, { data, isSuccess }] = useGetPartnersMutation();

  useEffect(() => {
    getPartners({});
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      setPartnersData(data.cards);
    }
  }, [data]);

  console.log("Partners data is:---,", PartnersData);

  return (
    <div className="w-full h-[24vw] relative flex  ">
      <div
        className={`${saira.className}  absolute top-0 left-0 w-full  text-nowrap overflow-hidden text-[19vw] tracking-wide font-bold text-center `}
      >
        <span className="opacity-10 dark:opacity-20 relative -left-4">
          PARTNERS
        </span>

        <div className="absolute bottom-0 left-0 w-full h-full  bg-gradient-to-t from-[#eff0f2] dark:from-[#06062a] via-[#eff0f2]/80 dark:via-[#06062a]/80 to-transparent  z-[30]"></div>
        <div className="w-full bg-[#000]/2 dark:bg-[#fff]/5 absolute top-1/2 -translate-y-1/2 flex  z-[50] py-2">
          <Marquee>
            <div className="flex gap-6 justify-center items-center">
              {PartnersData?.length > 0 &&
                PartnersData.map((url, index) => (
                  <a
                    href={url.link}
                    target="_blank"
                    key={index}
                    className="ml-4"
                  >
                    <Image
                      width={300}
                      height={300}
                      src={url.imagepath}
                      alt={url.altdesc}
                      className="w-auto h-8 dark:invert"
                      key={index}
                    />
                  </a>
                ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PartnersHeading;
