import { saira } from "@/utils/Font";
import React from "react";
const GetStartedHeading = () => {
  return (
    <div className="w-full h-[25vw] z-[60]  relative overflow-hidden  ">
      <div
        className={`${saira.className} w-full h-full  text-[19vw]  font-bold text-nowrap text-center absolute top-0 left-0 overflow-hidden   `}
      >
        <span className=" opacity-20 dark:opacity-10 relative -left-6 top-1">
          Get Started
        </span>

        <div className="absolute z-[20] top-[7vw] -translate-y-1 left-0 w-full h-full   border-t-2 border-green-500/10 bg-gradient-to-b from-green-400/60 via-[#eff0f2]/85 dark:via-transparent/10 to-[#eff0f2] dark:to-[#06062a] pointer-events-none rounded border"></div>

        <div className="absolute z-[20] top-[10vw]  w-full  h-full  border-t-2 border-green-500 bg-gradient-to-b from-green-400/0 via-[#eff0f2] dark:via-[#06062a] to-[#eff0f2] dark:to-[#06062a] pointer-events-none"></div>

        {/*Extra char hide */}
        <div className="w-full  absolute top-0 right-0 h-[11.5vw] z-[60]  bg-[#eff0f2] dark:bg-[#06062a]/100  ">
          <div className=" w-full h-full  relative partShadowGetstarted"></div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedHeading;
