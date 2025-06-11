"use client";
import Auth from "@/components/auth/Auth";
import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const Page = () => {
  return (
    <>
      <Auth>
        <LoginForm />
      </Auth>
    </>
  );
};

export default Page;
