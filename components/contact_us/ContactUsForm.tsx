"use client";

import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useSubmitContactUsMutation } from "@/redux/masternode/contactUs/contactUsApi";
import { toast } from "sonner";

const ContactUsForm = () => {
  const t = useTranslations("contactPage");
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [formInputs, setFormInputs] = useState({
    email: "",
    message: "",
  });

  const [submitContactUs, { isLoading }] = useSubmitContactUsMutation();

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectRef.current?.value) {
      toast.error("Please select a category.");
      return;
    }

    const selectedValue = selectRef.current.value;

    try {
      const response = await submitContactUs({
        email: formInputs.email,
        message: formInputs.message,
        priority: "Normal",
        type: selectedValue,
        subject: "Enquiry",
      }).unwrap();

      if (response.status === 1) {
        toast.success("Form submitted successfully!");
        setFormInputs({ email: "", message: "" });
        if (selectRef.current) selectRef.current.value = "";
      } else {
        toast.error(response.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error("Error submitting form: ", err);
      toast.error("There was an error submitting the form.");
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 bg-white dark:bg-[#161735] rounded-xl p-6 relative shadow-xl">
      <section className="w-full flex flex-col gap-6">
        <div className="w-full space-y-1">
          <h2 className={`${saira.className} text-xl xl:text-[1.7rem]`}>
            {t("title")}
          </h2>
          <p className="text-[10px] xl:text-xs ">{t("subTitle")}</p>
        </div>

        <form className="w-full space-y-4" onSubmit={submitHandler}>
          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white dark:bg-[#161735] px-1">
              {t("terms.email")}
            </label>
            <input
              type="email"
              className="outline-none border-none w-full bg-transparent text-xs font-extralight"
              placeholder={t("terms.enterEmail")}
              value={formInputs.email}
              name="email"
              onChange={inputChangeHandler}
            />
          </div>

          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white dark:bg-[#161735] px-1">
              {t("terms.category")}
            </label>
            <select
              className="outline-none space-y-2 border-none w-full bg-transparent text-xs mr-2 font-extralight"
              ref={selectRef}
              defaultValue=""
            >
              <option
                value=""
                disabled
                className="dark:bg-[#1d1f38] bg-slate-50"
              >
                {t("terms.selectType")}
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50">
                New Coin / Token Listing Request
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50">
                Deposit/Withdrawals Issues
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50">
                Email / Two-Factor(2FA) Issues
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50">
                Trade Issues
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50">
                KYC Issues
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50">
                Technical Support Request
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50">
                General Support Request
              </option>
              <option className="dark:bg-[#1d1f38] bg-slate-50">
                Development Suggestion
              </option>
            </select>
          </div>

          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            <label className="text-[10px] xl:text-xs font-medium absolute top-0 -translate-y-1/2 left-2 bg-white dark:bg-[#161735] px-1">
              {t("terms.message")}
            </label>
            <textarea
              rows={5}
              cols={5}
              className="outline-none border-none w-full bg-transparent text-xs font-extralight"
              placeholder={t("terms.messageHere")}
              value={formInputs.message}
              name="message"
              onChange={inputChangeHandler}
            />
          </div>

          <button
            className={`w-full ${
              formInputs.email && formInputs.message && selectRef.current?.value
                ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                : "bg-green-900 cursor-not-allowed"
            } text-white dark:text-black font-medium py-3 rounded-full transition text-xs`}
            type="submit"
            disabled={
              isLoading ||
              !formInputs.email ||
              !formInputs.message ||
              !selectRef.current?.value
            }
          >
            {t("terms.button")}
          </button>
        </form>

        <div className="w-full flex gap-4">
          <div className="w-fit flex gap-2 items-center">
            <span className="p-1.5 rounded-full border dark:border-slate-500/30 border-slate-600/30 ">
              <FiPhoneCall className="text-xs opacity-70 xl:text-lg" />
            </span>
            <div className="text-[8px] xl:text-[12px]">
              <p>{t("terms.phone")}</p>
              <p className="font-light">03 5432 1234</p>
            </div>
          </div>

          <div className="w-fit flex gap-2 items-center">
            <span className="p-1.5 rounded-full border dark:border-slate-500/30 border-slate-600/30 ">
              <MdOutlineEmail className="text-xs opacity-70 xl:text-lg" />
            </span>
            <div className="text-[8px] xl:text-[12px]">
              <p>{t("terms.emailBot")}</p>
              <p className="font-light">info@marcc.com.au</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-4">
        <div className="h-[280px] bg-[#d4d4d4] rounded-xl">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4623156613243!2d78.4325854!3d17.4322204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e3436a167d%3A0xe6f56553454faa75!2sCoinearth%20Technologies!5e0!3m2!1sen!2sin!4v1718877720000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUsForm;
