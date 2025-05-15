import { saira } from "@/utils/Font";
import Image from "next/image";
import React from "react";
import {  PiCurrencyDollarSimpleBold } from "react-icons/pi";

const Marketing = () => {
  // const width = 500;
  // const height = 500;
  return (
    <div>
      <div className="w-[700px]  flex gap-2  ">
        <div className="w-[35%] h-[320px]  bg-[#161735] shadow-[1px_1px_1px_green] border-t border-l border-green-600/0 rounded-lg">
        </div>

        <div className="w-[65%] h-[300px]  flex flex-col gap-4  relative  ">

          <div className="relative w-[100%] h-[70%]   ">
            <div className="w-full h-full bg-[#161735] rounded-lg"></div>
            <div className="w-[50%] h-[50%] bg-[#06062a]  rounded-tl-lg absolute bottom-0 right-0"></div>
            <div className="w-[50%] h-[50%] bg-[#161735] rounded-r-lg absolute top-0 -right-[10px] shadow-[1px_1px_1px_green]  flex justify-center items-center ">
              {/* content */}
              <div className=" flex gap-4 justify-evenly items-center w-full">
                <div>
                  <p className="text-[10px] font-light">24h volume (BTC)</p>
                  <h2 className={`text-[16px] font-bold ${saira.className}`}>62689.44</h2>
                </div>
                <div className="p-1 rounded-full bg-green-100 ">
                  <PiCurrencyDollarSimpleBold className=" text-green-700 text-md"/>
                </div>
              </div>
            </div>
            <div className="w-[50%] h-[50%] bg-[#161735]  rounded-b-lg absolute -bottom-[10px] left-0 ">
              <Image src="/images/man.png" alt=""  width={300} height={300} className="w-[96%]  absolute bottom-0 right-0 -translate-x-[5%]"/>
               <div className="absolute z-[20] top-0 left-0 w-full  h-full bg-gradient-to-b from-transparent via-[#06062a]/0  to-[#06062a]/60 pointer-events-none "></div>
            </div>
          </div>

          <div className=" absolute -bottom-[20px]  left-0 w-[50%] h-[30%] rounded-lg bg-[#161735] shadow-[1px_1px_1px_green]">
             <div className=" flex gap-4 h-full w-full justify-evenly items-center">
                <div>
                 
                  <h2 className={`text-[16px] font-bold ${saira.className}`}>150</h2>
                  <p className="text-[10px] font-light">Countries</p>
                </div>
                <div className="p-1 rounded-full bg-green-100 ">
                  <PiCurrencyDollarSimpleBold className=" text-green-600 text-md"/>
                </div>
                
              </div>
          </div>

          <div className="w-[50%] h-[68%] rounded-lg bg-[#161735] absolute -bottom-[20px] -right-[10px] shadow-[1px_1px_1px_green]">
            <div className=" flex gap-4 h-fit mt-[10px] w-full justify-evenly items-center">
                <div>
                 
                  <h2 className={`text-[16px] font-bold ${saira.className}`}>187</h2>
                  <p className="text-[10px] font-light">Coins listed</p>
                </div>
                <div className="p-1 rounded-full bg-green-100/90">
                  <PiCurrencyDollarSimpleBold className=" text-green-600 text-md"/>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
