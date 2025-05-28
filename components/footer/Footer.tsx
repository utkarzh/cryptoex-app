import React from "react";
import { CiWarning } from "react-icons/ci";
import FooterGlance from "./FooterGlance";
import FooterLinks from "./FooterLinks";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    // shadow-[1px_0px_4px_#48b873]
    <div className="w-full max-w-[100vw]  h-fit  flex justify-center bg-[#eff0f2] dark:bg-[#06062a]/100 items-center rounded-md pt-14 pb-6 relative  ">
      {/* shadow effect left*/}
      <div className="partShadowFooterLeft"></div>
      {/* shadow effect left*/}
      <div className="partShadowFooterRight"></div>
      {/* footer container */}
      <div className="w-[80%] flex flex-col gap-4 justify-center items-center overflow-hidden">
        {/* content section */}
        <div className="w-full h-full flex flex-col lg:flex-row gap-10 lg:gap-24 pb-4">
          <FooterGlance />
          <FooterLinks />
          <FooterInfo />
        </div>
        {/* border line section */}
        <div className="w-full border-t border-[#63647e]"></div>
        {/* message section */}
        <div className="w-full flex gap-2 items-center justify-start text-slate-400">
          <CiWarning className="text-lg" />
          <p className="text-[12px] font-extralight">
            Crypto investments are subject to market risks—invest wisely and
            stay informed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
