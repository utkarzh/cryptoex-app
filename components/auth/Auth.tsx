import Image from "next/image";
import React from "react";
// import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Auth = () => {
  return (
    <div className="w-full flex justify-center items-center relative mt-20  ">
      {/* background images*/}
      <div className="w-[50%] opacity-40 dark:opacity-80 h-full z-[30]  absolute top-0 right-0 bg-[url(/images/homebg.png)] bg-cover "></div>
      <div className="w-[50%] h-full z-[30] opacity-40 dark:opacity-80 absolute top-0 left-0 rotate-y-180 bg-[url(/images/homebg.png)] bg-cover "></div>
      {/* overlay */}
      <div className="w-full h-full absolute z-[40] bg-[#eff0f2] dark:bg-[#06062a] opacity-85 dark:opacity-[0.87] top-0 left-0 ">
        {" "}
      </div>

      {/* content */}
      <div className="w-full h-full   flex flex-col sm:flex-row justify-center gap-10 z-[60]">
        {/* image part */}
        <div className="w-full  flex justify-center mt-2 items-start">
          <div className="w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] sm:w-[40vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw] rounded-full bg-gradient-to-b from-green-500/40 via-green-600/30 to-transparent flex justify-center items-center relative z-[50]">
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
        <div className="w-full  ">
          {/* <SignupForm /> */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
