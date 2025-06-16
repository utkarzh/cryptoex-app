import Footer from "@/components/footer/Footer";
import Markets from "@/components/markets/Markets";
import React from "react";

const page = () => {
  return (
    <div className="space-y-20">
      <div className=" w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <Markets />
      </div>
      <Footer />
    </div>
  );
};

export default page;
