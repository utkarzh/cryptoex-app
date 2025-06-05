import Auth from "@/components/auth/Auth";
import SignupForm from "@/components/auth/SignupForm";
import React from "react";

const page = () => {
  return (
    <>
      <Auth>
        <SignupForm />
      </Auth>
    </>
  );
};

export default page;
