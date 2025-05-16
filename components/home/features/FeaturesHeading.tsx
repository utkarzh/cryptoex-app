import { saira } from "@/utils/Font";
import React from "react";

const FeaturesHeading = () => {
  return (
    <div className='w-full h-[30vw] z-[60]  relative overflow-hidden '>
          <div className={`${saira.className} w-full h-full text-white text-[24vw]  font-bold text-nowrap text-center absolute top-0 left-0 overflow-hidden `}>
            <span className="opacity-10 relative -left-10 top-1 uppercase">Features</span>
            <div className="absolute z-[20] -bottom-[7vw] -translate-y-1 left-0 w-full h-full   bg-gradient-to-t from-green-400/60 via-transparent/10  to-[#06062a] pointer-events-none rounded "></div>
            <div className="absolute z-[20] bottom-[4.5vw]  w-full  h-full  border-b-2 border-green-500 bg-gradient-to-b from-[#06062a]/100 via-[#06062a]/65  to-green-400/30 pointer-events-none"></div>
            {/*Extra char hide */}
            <div className='w-full  absolute bottom-0 right-0 h-[6.1vw] z-[60] bg-[#06062a]'></div>
               </div>
            </div>
  );
};

export default FeaturesHeading;
