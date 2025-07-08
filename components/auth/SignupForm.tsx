"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import { FaApple, FaTelegramPlane } from "react-icons/fa";
import { toast } from "sonner";
import {
  useRegisterUserMutation,
  useResendVerificationMailMutation,
} from "@/redux/masternode/auth/authApi";
import { validatePassword } from "@/utils/regex";

type Errors = {
  email?: string;
  username?: string;
  password?: string;
  country?: string;
};

type Touched = {
  email: boolean;
  username: boolean;
  password: boolean;
  country: boolean;
};

type RegisterResponse = {
  status: number;
  message?: string;
  sessionid?: string;
  captchacode?: string;
};

type ResendVerificationResponse = {
  status: number;
  message?: string;
};

export default function SignupForm() {
  const t = useTranslations("auth.signup");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("none");
  const [referral, setReferral] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({
    email: false,
    username: false,
    password: false,
    country: false,
  });

  const [registerUser, { isLoading: isRegistering }] =
    useRegisterUserMutation<RegisterResponse>();
  const [resendVerificationMail] =
    useResendVerificationMailMutation<ResendVerificationResponse>();

  // ✅ Validation functions
  const validateEmail = (v: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowed = /^[a-zA-Z0-9@.]+$/;
    return !emailRegex.test(v) || !allowed.test(v)
      ? "Invalid email format or unsupported characters."
      : undefined;
  };

  const validateUsername = (v: string) =>
    /^[a-zA-Z0-9]{6,}$/.test(v)
      ? undefined
      : "Username must be at least 6 letters/numbers.";

  const validateCountry = (v: string) =>
    v === "none" ? "Please select a country." : undefined;

  const validateForm = (): Errors => ({
    email: validateEmail(email),
    username: validateUsername(username),
    password: validatePassword(password),
    country: validateCountry(country),
  });

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const errs = validateForm();
    setErrors(errs);
    setIsFormValid(Object.values(errs).every((e) => !e) && acceptedTerms);
  }, [email, username, password, country, acceptedTerms]);

  const handleBlur = (field: keyof Touched) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const errs = validateForm();
    setErrors(errs);
    setTouched({
      email: true,
      username: true,
      password: true,
      country: true,
    });

    if (!Object.values(errs).every((e) => !e) || !acceptedTerms) return;

    try {
      const regRes = await registerUser({
        username,
        useremail: email,
        userpassword: password,
        country,
        phone: "",
        referalcode: referral || null,
      }).unwrap();

      if (regRes.status !== 1 || !regRes.sessionid || !regRes.captchacode) {
        toast.error(regRes.message || "Registration failed.");
        return;
      }

      const resendRes = await resendVerificationMail({
        useremail: email,
        sessionid: regRes.sessionid,
        captchacode: regRes.captchacode,
      }).unwrap();

      if (resendRes.status === 1) {
        toast.success(resendRes.message || "Verification email sent!");
        setEmail("");
        setUsername("");
        setPassword("");
        setCountry("none");
        setReferral("");
        setAcceptedTerms(false);
        setTouched({
          email: false,
          username: false,
          password: false,
          country: false,
        });
      } else {
        toast.error(resendRes.message || "Failed to send verification email.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Unexpected error occurred.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm p-6 rounded-2xl bg-white dark:bg-[#161735] shadow-2xl">
        <h2 className={`${saira.className} text-lg font-semibold mb-6`}>
          {t("title")}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
              placeholder={t("items.email.holder")}
              className="w-full border py-3 pl-4 rounded-lg bg-transparent outline-none border-black/30 dark:border-white/30 text-xs"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Username */}
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => handleBlur("username")}
              placeholder={t("items.username.holder")}
              className="w-full border py-3 pl-4 rounded-lg bg-transparent outline-none border-black/30 dark:border-white/30 text-xs"
            />
            {touched.username && errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur("password")}
              placeholder={t("items.password.holder")}
              className="w-full border py-3 pl-4 rounded-lg bg-transparent outline-none border-black/30 dark:border-white/30 text-xs"
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Country */}
          <div className="relative">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onBlur={() => handleBlur("country")}
              className="w-full border py-3 pl-4 rounded-lg outline-none border-black/30 dark:border-white/30 text-xs bg-white dark:bg-[#161735] text-black dark:text-white"
            >
              <option value="none">{t("items.country.holder")}</option>
              <option>{t("items.country.options.op1")}</option>
              <option>{t("items.country.options.op2")}</option>
              <option>{t("items.country.options.op3")}</option>
              <option>{t("items.country.options.op4")}</option>
            </select>
            {touched.country && errors.country && (
              <p className="text-red-500 text-xs mt-1">{errors.country}</p>
            )}
          </div>

          {/* Referral Code */}
          <div className="relative">
            <input
              type="text"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              placeholder={t("items.referrals.holder")}
              className="w-full border py-3 pl-4 rounded-lg bg-transparent outline-none border-black/30 dark:border-white/30 text-xs"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms((prev) => !prev)}
            />
            <label className="text-xs">
              {t("terms.part1")}{" "}
              <span className="text-green-400">{t("terms.part2")}</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isRegistering}
            className={`w-full py-2 rounded-full text-black font-semibold text-xs ${
              isFormValid
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isRegistering ? "Registering..." : t("button")}
          </button>
        </form>
      </div>

      {/* Social login */}
      <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        {t("signupOption")}
        <div className="flex justify-center gap-4 mt-2">
          <button className="p-2 bg-slate-400/30 rounded-lg hover:scale-105">
            <Image
              src="/images/icons/google.png"
              alt=""
              width={40}
              height={40}
            />
          </button>
          <button className="p-2 bg-slate-400/30 rounded-lg hover:scale-105">
            <FaApple className="text-white" />
          </button>
          <button className="p-2 bg-slate-400/30 rounded-lg hover:scale-105">
            <FaTelegramPlane className="text-[#059ce6]" />
          </button>
        </div>
        <p className="mt-4">
          {t("haveAcc.part1")}{" "}
          <Link href="/login">
            <span className="text-green-400 underline cursor-pointer">
              {t("haveAcc.part2")}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
