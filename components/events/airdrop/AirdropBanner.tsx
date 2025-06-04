"use client";

import { saira } from "@/utils/Font";
import Image from "next/image";

// import Image from "next/image";

const AirdropBanner = () => {
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
            AIRDROP
          </span>
        </div>

        {/* images */}
        <Image
          src="/images/airdrop/dogeumb.png"
          alt="Coin 1"
          className="absolute left-[10vw] top-20 w-[9vw] z-[60]"
          width={48}
          height={48}
        />

        <Image
          src="/images/airdrop/solumb.png"
          alt="Coin 2"
          className="absolute left-0 top-[50%] w-[9vw] z-[60]"
          width={40}
          height={40}
        />
        <Image
          src="/images/airdrop/usdtumb.png"
          alt="Coin 3"
          className="absolute right-1/2 translate-x-[25vw] top-10 w-[8vw] z-[60]"
          width={48}
          height={48}
        />
        <Image
          src="/images/airdrop/bitumb.png"
          alt="Coin 4"
          className="absolute right-[2vw] bottom-6 w-[15vw] z-[60]"
          width={80}
          height={80}
        />
      </div>

      <div className="w-full mt-12 flex flex-col gap-1 items-center text-center ">
        <h2
          className={`${saira.className} w-fit text-4xl font-bold text-green-600`}
        >
          Claim Your Free Crypto!
        </h2>

        <p className="w-fit text-xl font-light">
          Join the Latest IndoEx Airdrop Campaigns & Earn Instantly.
        </p>
      </div>
    </div>
  );
};

export default AirdropBanner;
