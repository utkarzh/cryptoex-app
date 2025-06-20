"use client";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const ContactUsForm = () => {
  const t = useTranslations("contactPage");
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [formInputs, setFormInputs] = useState({
    email: "",
    message: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectRef.current) {
      const selectedValue = selectRef.current.value;
      console.log("Selected value:", selectedValue);
    }

    console.log("Email and message", formInputs);
  };
  return (
    <div className="w-full  flex flex-col md:flex-row  gap-6 bg-white  dark:bg-[#161735] rounded-xl p-6   relative shadow-xl">
      {/* left section */}
      <section className="w-full flex flex-col gap-6">
        {/* heading */}
        <div className="w-full space-y-1">
          <h2 className={`${saira.className} text-xl xl:text-[1.7rem]`}>
            {t("title")}
          </h2>
          <p className="text-[10px] xl:text-xs ">{t("subTitle")}</p>
        </div>

        {/* form */}
        <form className="w-full space-y-4" onSubmit={submitHandler}>
          {/* email */}
          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              {t("terms.email")}
            </label>
            <input
              type="text"
              className="outline-none border-none w-full bg-transparent text-xs font-extralight"
              placeholder={t("terms.enterEmail")}
              value={formInputs.email}
              name="email"
              onChange={inputChangeHandler}
            />
          </div>

          {/* category */}
          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              {t("terms.category")}
            </label>

            <select
              className="outline-none space-y-2 border-none w-full bg-transparent text-xs mr-2 font-extralight"
              ref={selectRef}
            >
              <option className="dark:bg-[#1d1f38] bg-slate-50 ml-4 py-1.5 text-xs font-light ">
                {t("terms.selectType")}
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50 pl-4 py-1.5 text-xs font-light">
                New Coin / Token Listing Request
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50 ml-4 py-1.5 text-xs font-light">
                Depost/Withdrawals Issues{" "}
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50 ml-4 py-1.5 text-xs font-light">
                Email / Two-Factor(2FA) Issues{" "}
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50 ml-4 py-1.5 text-xs font-light">
                Trade Issues
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50 ml-4 py-1.5 text-xs font-light">
                KYC Issues
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50 ml-4 py-1.5 text-xs font-light">
                Technical Support Request
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50 ml-4 py-1.5 text-xs font-light">
                General Support Request
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50 ml-4 py-1.5 text-xs font-light">
                Development Suggestion
              </option>
            </select>
          </div>

          {/* message */}
          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              {t("terms.message")}
            </label>
            <textarea
              rows={5}
              cols={5}
              className="outline-none border-none w-full bg-transparent text-xs font-extralight"
              placeholder={t("terms.messageHere")}
              value={formInputs.message}
              onChange={(e) =>
                setFormInputs((prev) => {
                  return {
                    ...prev,
                    message: e.target.value,
                  };
                })
              }
            />
          </div>

          {/* submit */}
          <button
            className={`w-full ${
              formInputs.email
                ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                : "bg-green-900 cursor-not-allowed "
            } text-white dark:text-black font-medium py-3 rounded-full transition text-xs`}
            type={formInputs.email ? "submit" : "button"}
          >
            {t("terms.button")}
          </button>
        </form>

        {/* phome and email */}
        <div className="w-full flex gap-4">
          {/*  phone*/}
          <div className="w-fit flex gap-2 items-center">
            {/* icon */}
            <span className="p-1.5 rounded-full border dark:border-slate-500/30 border-slate-600/30 ">
              <FiPhoneCall className="text-xs opacity-70 xl:text-lg" />
            </span>
            <div className="text-[8px] xl:text-[12px]">
              <p> {t("terms.phone")}</p>
              <p className="font-light">03 5432 1234</p>
            </div>
          </div>

          {/*  Email*/}
          <div className="w-fit flex gap-2 items-center">
            {/* icon */}
            <span className="p-1.5 rounded-full border dark:border-slate-500/30 border-slate-600/30 ">
              <MdOutlineEmail className="text-xs opacity-70 xl:text-lg" />
            </span>
            <div className="text-[8px] xl:text-[12px]">
              <p> {t("terms.emailBot")}</p>
              <p className="font-light">info@marcc.com.au</p>
            </div>
          </div>
        </div>
      </section>

      {/* right */}
      <section className=" w-full flex justify-center items-center rounded-md">
        <iframe
          className="w-full h-full min-h-[200px] md:h-[60%] rounded-md "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4623156613243!2d78.4325854!3d17.4322204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e3436a167d%3A0xe6f56553454faa75!2sCoinearth%20Technologies!5e0!3m2!1sen!2sin!4v1718877720000!5m2!1sen!2sin"
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUsForm;
