import Card from "@/components/common/Card";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoApple } from "react-icons/io";

const PartnersContent = () => {
  const t = useTranslations("homePage.partners.content");
  return (
    <div className="w-full h-fit py-20 flex justify-center items-center ">
      {/* container */}
      <div className=" flex flex-col lg:flex-row gap-6 items-center justify-center w-full">
        {/* image and effect */}
        <div className="w-full  flex justify-center lg:justify-end ">
          <div className="w-[80vw] h-[80vw] md:w-[50vw]  md:h-[50vw] lg:w-[36vw] lg:h-[36vw] xl:w-[40vw] xl:h-[40vw] relative flex justify-center lg:justify-end  p-6 ">
            <div className="  border-2 border-gray-400/60 dark:border-slate-800 bg-transparent rounded-full w-full h-full flex justify-center items-center">
              <div className="w-[90%] h-[90%] bg-gray-400/20 dark:bg-[#161735] rounded-full flex justify-center items-center ">
                <div className="w-[80%] h-[80%] bg-green-400 dark:bg-green-600 animate-pulse duration-1000 rounded-full">
                  <Image
                    width={1500}
                    height={1500}
                    src="/images/computermobile.png"
                    alt=""
                    className="w-[90%] pl-2 h-auto absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 invert dark:invert-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* text content */}
        <div className="w-full  flex flex-col items-center lg:items-start  gap-4  ">
          <div className="flex flex-col items-start   gap-4">
            <div className="w-fit  lg:w-full flex flex-col">
              <h3
                className={` ${saira.className} text-wrap text-start lg:text-nowrap text-[24px] lg:text-[1.5rem] xl:text-[2rem] font-medium`}
              >
                {t("title")}
              </h3>
              <p className=" text-wrap text-start lg:text-nowrap text-xs lg:text-[0.8rem] xl:text-[1rem] font-extralight">
                {t("subTitle")}
              </p>
            </div>
            <div className="w-fit  lg:w-full h-full  flex gap-2  ">
              {/* qr code */}
              <div className="   flex items-center justify-center ">
                <Card>
                  <Image
                    width={500}
                    height={500}
                    src="/images/testqr.png"
                    alt=""
                    className="w-28 h-28 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-md invert dark:invert-0"
                  />
                </Card>
              </div>

              <div className="h-full flex flex-col justify-between gap-2 ">
                {/*  android store*/}

                <div className="w-full h-15 lg:h-13 xl:h-15 flex  items-center text-center rounded-md p-2 px-2 bg-white dark:bg-[#161735]">
                  <div className=" w-full h-full flex gap-2 items-center">
                    {/* logo */}
                    <BiLogoPlayStore className="text-lg lg:text-3xl" />
                    {/* title and subtitle */}
                    <div className="flex flex-col items-start">
                      <p className="text-xs font-extralight text-nowrap">
                        GET IT ON
                      </p>
                      <h4 className="text-sm lg:text-lg font-medium text-nowrap">
                        Google Play
                      </h4>
                    </div>
                    <div></div>
                  </div>
                </div>

                {/* apple store */}

                <div className="w-full h-15 lg:h-13 xl:h-15 flex items-center text-center">
                  <div className="w-full h-full flex items-center text-center gap-2 rounded-md p-2 px-3 bg-white dark:bg-[#161735]">
                    {/* logo */}
                    <IoLogoApple className="text-lg lg:text-3xl" />
                    {/* title and subtitle */}
                    <div className="flex flex-col items-start">
                      <p className="text-xs font-extralight text-nowrap">
                        Download on the
                      </p>
                      <h4 className="text-sm lg:text-lg font-medium text-nowrap">
                        App Store
                      </h4>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersContent;
