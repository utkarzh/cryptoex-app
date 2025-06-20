"use client";
import Model from "@/components/common/Model";
import { saira } from "@/utils/Font";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiUserForbidLine } from "react-icons/ri";
import DeletionRequestPopup from "./DeletionRequestPopup";
import { useTranslations } from "next-intl";

const AccountManagement = () => {
  const t = useTranslations("dashboard.profile.accManagement");
  const [isDeleteRequest, setIsDeleteRequest] = useState(false);

  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-lg  mx-auto">
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>
      <div className="flex flex-col gap-6 mt-4">
        {/* nickname */}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-center gap-2  ">
            <div className="">
              <RiUserForbidLine className=" text-[17px] xl:text-[24px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90">
                {t("closeAcc.label")}
              </div>
              <div className="text-[11px] xl:text-[0.65rem] font-extralight opacity-60">
                {t("closeAcc.content")}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-end">
            <button className=" " onClick={() => setIsDeleteRequest(true)}>
              <MdOutlineKeyboardArrowRight className="text-xl cursor-pointer hover:scale-110 transition-all" />
            </button>
          </div>
        </div>
      </div>
      {isDeleteRequest && (
        <Model>
          <DeletionRequestPopup onClose={() => setIsDeleteRequest(false)} />
        </Model>
      )}
    </div>
  );
};

export default AccountManagement;
