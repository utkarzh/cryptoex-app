import Image from "next/image";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Auth: FC<Props> = ({ children }) => {
  return (
    <div className="w-full  h-full md:h-[calc(100vh-110px)]  flex justify-center items-center relative mt-[30px] ">
      {/* background images*/}
      <div className="w-[50%] opacity-40 dark:opacity-80 h-full z-[30]  absolute top-0 right-0 bg-[url(/images/homebg.png)] bg-cover "></div>
      <div className="w-[50%] h-full z-[30] opacity-40 dark:opacity-80 absolute top-0 left-0 rotate-y-180 bg-[url(/images/homebg.png)] bg-cover "></div>
      {/* overlay */}
      <div className="w-full h-full absolute z-[40] bg-[#eff0f2] dark:bg-[#06062a] opacity-85 dark:opacity-[0.87] top-0 left-0 ">
        {" "}
      </div>

      {/* content */}
      <div className="w-full h-full  lg:pt-10  2xl:pt-20 overflow-y-auto flex flex-col md:flex-row justify-center gap-10 z-[60]">
        {/* image part */}
        <div className="w-full items-start flex justify-center  py-10 md:py-0">
          <div className="w-[80vw] h-[80vw] max-w-[500px] 2xl:max-w-[600px] 2xl:max-h-[600px] max-h-[500px] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] 2xl:w-[70vw] 2xl:h-[70vw] 2xl:max-w-auto 2xl:max-h-auto rounded-full bg-gradient-to-b from-green-500/40 via-green-600/30 to-transparent flex justify-center items-center relative z-[50] ">
            {/* btc image */}
            <Image
              src="/images/login/login_btc.png"
              alt=""
              height={80}
              width={80}
              className="w-16 h-auto absolute bottom-[0%] -translate-y-[60%] right-[10%] z-[60]"
            />
            {/* eth image */}
            <Image
              src="/images/login/login_eth.png"
              alt=""
              height={80}
              width={80}
              className="w-16 h-auto absolute top-[0%] translate-y-[0%] left-[18%] z-[30]"
            />
            <div className="w-[86%] h-[86%] relative  overflow-hidden rounded-full ">
              {/* green cut circle */}
              <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3vw] border-[#27a043] border-r-transparent overflow-hidden  z-[30]"></div>

              {/* image */}
              <Image
                width={1000}
                height={1000}
                src="/images/login/login_img.png"
                alt=""
                className="w-auto h-full max-h-[90%] absolute bottom-0 left-1/2 -translate-x-1/2 z-[40]"
              />
            </div>
          </div>
        </div>
        {/* form part */}
        {/* <div className="w-full h-full overflow-auto  flex items-start md:py-10 lg:py-14 xl:py-24  "> */}
        <div className="w-full h-full  flex items-start ">{children}</div>
      </div>
    </div>
  );
};

export default Auth;
