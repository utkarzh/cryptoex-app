import Card from "@/components/common/Card";
import { saira } from "@/utils/Font";
import Image from "next/image";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoApple } from "react-icons/io";

const PartnersContent = () => {
  return (
    <div className="w-full h-fit py-20 flex justify-center items-center ">
      {/* container */}
      <div className=" flex flex-col lg:flex-row gap-6 items-center justify-center w-full">
        {/* image and effect */}
        <div className="w-full  flex justify-center lg:justify-end">
          <div className=" w-[80vw] h-[80vw] lg:w-[36vw] lg:h-[36vw] relative flex justify-center lg:justify-end  p-6 ">
            <div className="  border-2 border-gray-400/20 dark:border-[#161735] bg-transparent rounded-full w-full h-full flex justify-center items-center">
              <div className="w-[90%] h-[90%] bg-gray-400/20 dark:bg-[#161735] rounded-full flex justify-center items-center ">
                <div className="w-[80%] h-[80%] bg-green-400 dark:bg-green-600 animate-pulse duration-1000 rounded-full">
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/computermobile.png"
                    alt=""
                    className="w-[500px] pl-2 h-auto absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 invert dark:invert-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* text content */}
        <div className="w-full  flex flex-col items-center  gap-4  ">
          <div className="w-fit  lg:w-full flex flex-col">
            <h3
              className={` ${saira.className} text-wrap text-center lg:text-start lg:text-nowrap text-[24px] font-medium`}
            >
              Trade seamlessly across devices
            </h3>
            <p className=" text-wrap text-center lg:text-start lg:text-nowrap text-[12px] font-extralight">
              Download our mobile app for effortless crypto trading!
            </p>
          </div>
          <div className="w-fit lg:w-full h-full  flex gap-2  ">
            {/* qr code */}
            <div className="   flex items-center justify-center ">
              <Card>
                <Image
                  width={100}
                  height={100}
                  src="/images/testqr.png"
                  alt=""
                  className="w-20 h-20 rounded-md invert dark:invert-0"
                />
              </Card>
            </div>

            <div className="h-full flex flex-col justify-between gap-2 ">
              {/*  android store*/}

              <div className="w-full h-full flex items-center text-center rounded-md p-2 px-3 bg-white dark:bg-[#161735]">
                <div className=" w-full h-full flex gap-2 items-center">
                  {/* logo */}
                  <BiLogoPlayStore className="text-lg" />
                  {/* title and subtitle */}
                  <div className="flex flex-col items-start">
                    <p className="text-[8px] font-extralight text-nowrap">
                      GET IT ON
                    </p>
                    <h4 className="text-[10px] font-medium text-nowrap">
                      Google Play
                    </h4>
                  </div>
                  <div></div>
                </div>
              </div>

              {/* apple store */}

              <div className="w-full h-full flex items-center text-center">
                <div className="w-full h-full flex items-center text-center gap-2 rounded-md p-2 px-3 bg-white dark:bg-[#161735]">
                  {/* logo */}
                  <IoLogoApple className="text-lg" />
                  {/* title and subtitle */}
                  <div className="flex flex-col items-start">
                    <p className="text-[8px] font-extralight text-nowrap">
                      Download on the
                    </p>
                    <h4 className="text-[10px] font-medium text-nowrap">
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
  );
};

export default PartnersContent;
