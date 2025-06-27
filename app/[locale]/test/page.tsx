// import Auth from "@/components/auth/Auth";
// import CryptoConvert from "@/components/convert/ConvertTest1";
// import LoginForm from "@/components/auth/LoginForm";
"use client";
import IndoExDualSocket from "./SocketTest";
import SliderControl from "./Test1";
// import TokenCard1 from "./Test2";
// import LangDropdown from "@/components/navbar/lang_dropdown/LangDropdown";
// import ImageCarousel from "./Test";
// import LangDropdown from "@/components/navbar/lang_dropdown/LangDropdown";

const Page = () => {
  return (
    <div className="w-[90%] mx-auto flex justify-end mr-10 relative ">
      {/* <SliderControl /> */}
      <IndoExDualSocket />
    </div>
  );
};

export default Page;
