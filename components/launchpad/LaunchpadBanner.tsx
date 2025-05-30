"use client";

import { saira } from "@/utils/Font";

const LaunchpadBanner = () => {
  return (
    <div className="mb-10">
      <div className="w-full h-[50vh] sm:h-[calc(100vh-70px)] flex justify-center items-center relative  shadow-2xl rounded-xl partShadowAirdrop  ">
        {/* overlay */}
        <div className="w-full h-full absolute z-[40] bg-[#eff0f2] dark:bg-[#06062a] opacity-100 dark:opacity-[1] top-0 left-0 rounded-xl ">
          {" "}
        </div>

        {/* white overlay */}
        <div className="absolute top-0 z-[50] left-0 w-full h-full bg-gradient-to-t from-black/100 dark:from-white/40  via-transparent to-transparent opacity-30  rounded-xl "></div>

        {/* text with effect */}
        <div
          className={` ${saira.className} text-[18vw] lg:text-[14vw] font-bold tracking-wide opacity-100 dark:opacity-100  z-[40] relative mt-10`}
        >
          <div className="absolute z-[40] top-1/2 -translate-y-[50%] left-0 w-full h-[50%] bg-gradient-to-b from-transparent to-[#eff0f2]/100 dark:to-[#06062a]/70 "></div>

          <span className=" bg-gradient-to-b from-white via-slate-600 to-black bg-clip-text text-transparent opacity-20">
            LAUNCHPAD
          </span>
        </div>
      </div>

      <div className="w-full mt-12 flex flex-col gap-1 items-center text-center ">
        <h2
          className={`${saira.className} w-fit text-4xl font-bold text-green-600`}
        >
          Claim Your Free Crypto!
        </h2>

        <p className="w-fit text-xl font-light">
          Launch Your Crypto Token with IndoEx Launchpad
        </p>
      </div>
    </div>
  );
};

export default LaunchpadBanner;
