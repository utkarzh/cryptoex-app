"use client";
import Auth from "@/components/auth/Auth";
import LoginForm from "@/components/auth/LoginForm";
import { useTestApiQuery } from "@/redux/features/apiSlice";
import React from "react";

const Page = () => {
  const { data } = useTestApiQuery(undefined);
  console.log("Data value at login page is:--", data);
  return (
    <>
      <Auth>
        <LoginForm />
      </Auth>
    </>
  );
};

export default Page;
