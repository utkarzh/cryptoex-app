// import Auth from "@/components/auth/Auth";
// import CryptoConvert from "@/components/convert/ConvertTest1";
// import LoginForm from "@/components/auth/LoginForm";
"use client";
import ModelCard from "@/components/common/ModelCard";

const Page = () => {
  const test = () => {
    console.log("Test");
  };
  return (
    <div className="w-[90%] mx-auto h-full flex justify-end mr-10">
      <ModelCard onClose={test} />
    </div>
  );
};

export default Page;
