import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const ContactUsForm = () => {
  const t = useTranslations("contactPage");
  return (
    <div className="w-full flex flex-col md:flex-row  gap-6 bg-white  dark:bg-[#161735] rounded-xl p-6   relative shadow-xl">
      {/* left section */}
      <section className="w-full flex flex-col gap-6">
        {/* heading */}
        <div className="w-full space-y-1">
          <h2 className={`${saira.className} text-xl`}>{t("title")}</h2>
          <p className="text-[10px] ">{t("subTitle")}</p>
        </div>

        {/* form */}
        <form className="w-full space-y-4">
          {/* email */}
          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              {t("terms.email")}
            </label>
            <input
              type="text"
              className="outline-none border-none w-full bg-transparent text-[12px]"
              placeholder={t("terms.enterEmail")}
            />
          </div>

          {/* category */}
          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              {t("terms.category")}
            </label>

            <select className="outline-none border-none w-full bg-transparent text-[12px] mr-2">
              <option className="dark:bg-[#06062a] bg-slate-50 px-2 py-1.5 ">
                {t("terms.selectType")}
              </option>
              <option className="dark:bg-[#06062a] bg-slate-50 px-2 py-1.5  ">
                item1
              </option>
              <option className="dark:bg-[#06062a] bg-slate-50 px-2 py-1.5  ">
                item2
              </option>
              <option className="dark:bg-[#06062a] bg-slate-50 px-2 py-1.5  ">
                item3
              </option>
            </select>
          </div>

          {/* message */}
          <div className="w-full border min-h-[50px] border-black/30 dark:border-white/30 flex justify-between items-center py-3 rounded-lg pl-4 relative">
            {/* label */}
            <label className="text-[10px] font-medium absolute top-0 -translate-y-1/2 left-2 bg-white  dark:bg-[#161735] px-1 ">
              {t("terms.message")}
            </label>
            <textarea
              rows={5}
              cols={5}
              className="outline-none border-none w-full bg-transparent text-[12px]"
              placeholder={t("terms.messageHere")}
            />
          </div>

          {/* submit */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white dark:text-black font-medium py-3 rounded-full transition text-xs cursor-pointer">
            {t("terms.button")}
          </button>
        </form>

        {/* phome and email */}
        <div className="w-full flex gap-4">
          {/*  phone*/}
          <div className="w-fit flex gap-2 items-center">
            {/* icon */}
            <span className="p-1.5 rounded-full border dark:border-slate-500/30 border-slate-600/30 ">
              <FiPhoneCall className="text-xs opacity-70" />
            </span>
            <div className="text-[8px]">
              <p> {t("terms.phone")}</p>
              <p className="font-light">03 5432 1234</p>
            </div>
          </div>

          {/*  Email*/}
          <div className="w-fit flex gap-2 items-center">
            {/* icon */}
            <span className="p-1.5 rounded-full border dark:border-slate-500/30 border-slate-600/30 ">
              <MdOutlineEmail className="text-xs opacity-70" />
            </span>
            <div className="text-[8px]">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.014578510763!2d78.47125807501843!3d17.361563705620404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978fc0bb3f95%3A0x8b3d905122c4df21!2sCharminar!5e0!3m2!1sen!2sin!4v1717071234567!5m2!1sen!2sin
"
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUsForm;
