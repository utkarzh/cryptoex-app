"use client";
import { useGetCodeMutation } from "@/redux/features/auth/authApi";
import { saira } from "@/utils/Font";
import { isPasswordValid, isValidEmail } from "@/utils/regex";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaApple, FaTelegramPlane } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import OtpVerificationPopup from "./OtpVerificationPopup";
import Model from "../common/Model";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import ErrorCard from "../common/ErrorCard";
import Spinner from "../common/Spinner";
import { AuthApiResult_int, LoginResponse_int } from "./types";

export default function LoginForm() {
  const t = useTranslations("auth.signin");
  const [showPass, setShowPass] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    login: string;
  }>({
    email: "",
    password: "",
    login: "",
  });

  const [isOtpPopUp, setIsOtpPopUp] = useState(false);

  const [getCode, { data, isLoading, error }] =
    useGetCodeMutation<AuthApiResult_int<LoginResponse_int>>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });

    if (name === "email") {
      if (!value || isValidEmail(value)) {
        setErrors({
          email: "",
          password: "",
          login: "",
        });
      } else if (!isValidEmail(value)) {
        setErrors({
          email: t("errors.email"),
          password: "",
          login: "",
        });
      }
    } else if (name === "password") {
      if (!value || isPasswordValid(value)) {
        setErrors({
          email: "",
          password: "",
          login: "",
        });
      } else if (!isPasswordValid(value)) {
        setErrors({
          email: "",
          password: t("errors.password"),
          login: "",
        });
      }
    }
  };

  const formSubmitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isValidEmail(credentials.email) &&
      isPasswordValid(credentials.password)
    ) {
      getCode({
        useremail: credentials.email,
        userpassword: credentials.password,
      });
    } else {
      setErrors({
        email: "",
        password: "",
        login: t("errors.checkCre"),
      });
      setTimeout(() => {
        setErrors({
          email: "",
          password: "",
          login: "",
        });
      }, 2000);
    }
  };

  useEffect(() => {
    if (error) {
      setErrors({
        email: "",
        password: "",
        login: error,
      });
    }

    if (data && data?.status === 1) {
      setIsOtpPopUp(true);
    } else {
      setErrors({
        email: "",
        password: "",
        login: data?.message,
      });
    }
  }, [data, error]);

  return (
    <div className="w-full  flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-full md:max-w-sm p-6 rounded-2xl bg-white dark:bg-[#161735] shadow-2xl">
        <div className="w-full flex justify-between">
          {/* heading */}
          <h2 className={` ${saira.className} text-lg font-semibold mb-6`}>
            {t("title")}
          </h2>
          {/* qr */}
          <IoQrCodeOutline className="text-green-600 cursor-pointer xl:text-xl" />
        </div>
        {/*  */}
        <form className="space-y-4 xl:space-y-6" onSubmit={formSubmitHandler}>
          <div>
            {/* email */}
            <div className="w-full border py-3 border-black/30 dark:border-white/30 flex justify-between items-center  rounded-lg pl-4 relative">
              {/* label */}
              <label className="text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
                {t("items.email.label")}
              </label>
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                className="outline-none border-none w-full bg-transparent text-xs font-light placeholder:text-[11px] xl:placeholder:text-[0.7rem]"
                placeholder={t("items.email.holder")}
              />
            </div>
            {errors.email && (
              <p className="text-[12px] ml-1 mt-1 indent-2 text-red-700 dark:text-red-500 font-normal">
                {errors.email}
              </p>
            )}
          </div>

          {/* password */}
          <div>
            <div className="w-full border py-3 border-black/30 dark:border-white/30 flex justify-between items-center  rounded-lg pl-4 relative">
              {/* label */}
              <label className="text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
                {t("items.password.label")}
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="outline-none border-none w-full bg-transparent text-xs font-light placeholder:text-[11px] xl:placeholder:text-[0.7rem]"
                placeholder={t("items.password.holder")}
              />
              <span
                className="pr-2 cursor-pointer opacity-70 transition-all hover:opacity-100"
                onClick={() => setShowPass((prev) => !prev)}
              >
                {showPass ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </div>
            {errors.password && (
              <p className="text-[12px] ml-1 mt-1 text-red-700 dark:text-red-600 font-normal">
                {errors.password}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-2 py-2 bg-green-500 rounded-full text-black font-semibold hover:bg-green-600 transition text-xs cursor-pointer"
            >
              {isLoading ? <Spinner /> : t("button")}
            </button>
            {errors.login && <ErrorCard error={errors.login} />}
          </div>
        </form>
      </div>

      <div className="mb-4">
        <div className="text-center text-[10px] xl:text-xs text-slate-500 dark:text-gray-400 mt-4">
          {t("signinOption")}
        </div>

        <div className="flex justify-center gap-4 mt-2">
          <button className=" cursor-pointer bg-slate-400/30 dark:bg-slate-500/20 p-2 rounded-lg hover:scale-105 transition-all duration-200">
            {/* <FaGoogle className="text-white" /> */}
            <Image
              src="/images/icons/google.png"
              alt=""
              width={40}
              height={40}
              className="w-5 h-5"
            />
          </button>
          <button className=" cursor-pointer bg-slate-400/40 dark:bg-slate-500/20 p-2 rounded-lg hover:scale-105 transition-all duration-200 ">
            <FaApple className="text-white min-w-5 min-h-5" />
          </button>
          <button className=" cursor-pointer bg-slate-400/30 dark:bg-slate-500/20 p-2 rounded-lg hover:scale-105 transition-all duration-200 ">
            <FaTelegramPlane className="text-[#059ce6] min-w-5 min-h-5" />
          </button>
        </div>

        <div className="text-center text-[10px] xl:text-xs mt-4">
          {t("noAcc.part1")}{" "}
          <span className="text-green-400 hover:underline cursor-pointer">
            {t("noAcc.part2")}
          </span>
        </div>
      </div>
      {isOtpPopUp && (
        <Model>
          <OtpVerificationPopup
            onClose={() => setIsOtpPopUp(false)}
            credentials={credentials}
          />
        </Model>
      )}
    </div>
  );
}
