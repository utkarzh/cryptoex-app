"use client";
import Model from "@/components/common/Model";
import { saira } from "@/utils/Font";
import Image from "next/image";
import React, { useState } from "react";
import { IoCameraReverseOutline } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
import ChangeNamePopup from "./ChangeNamePopup";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ChangePicturePopup from "./ChangePicturePopup";
import { useTranslations } from "next-intl";

const Profile = () => {
  const t = useTranslations("dashboard.profile.profile");

  const [isChangeName, setIsChangeName] = useState(false);
  const [nickname, setNickname] = useState("FalconXUser1234");
  const [successMessage, setIsSuccessMessage] = useState("");

  const [isPictureChange, setIsPictureChange] = useState(false);
  const [imgUrl, setImgUrl] = useState("/images/profile.png");

  const nameChangeHandler = (data: string) => {
    setNickname(data);
    setIsChangeName(false);
    setIsSuccessMessage(t("nameChangeSucMessage"));
    setTimeout(() => {
      setIsSuccessMessage("");
    }, 2000);
  };

  const pictureChangeHandler = (data: string) => {
    console.log("Data", data);
    setImgUrl(data);
    setIsPictureChange(false);
    setIsSuccessMessage(t("profileChangeSucMessage"));
    setTimeout(() => {
      setIsSuccessMessage("");
    }, 2000);
  };

  const pictureDeleteHandler = () => {
    setImgUrl("/images/profile.png");
  };
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-lg  mx-auto relative">
      {/* success status message card */}
      {successMessage && (
        <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-[10] bg-[#eff0fe] dark:bg-[#24243c] p-2 rounded flex flex-col gap-2 items-center justify-center">
          <BsFillPatchCheckFill className="text-3xl text-green-600" />
          <p className="text-xs font-normal">{successMessage} </p>
        </div>
      )}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>
      <div className="flex flex-col gap-6 mt-4">
        {/* nickname */}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-center gap-2  ">
            <div className="">
              <TbUserPentagon className=" text-[17px] xl:text-[22px]" />
            </div>
            <div>
              <div className="text-xs font-light opacity-90">
                {t("nickName.label")}
              </div>
              <div className="text-[11px] xl:text-[0.65rem] font-extralight opacity-60">
                {t("nickName.content")}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-end">
            {
              <>
                <span className="flex items-center gap-1 text-sm">
                  <span className="opacity-80 flex gap-1 text-xs xl:text-[0.65rem] font-light">
                    {nickname}
                  </span>
                </span>
              </>
            }

            <button
              className="border border-slate-500/20 bg-slate-500/25 cursor-pointer text-[10px] xl:text-[0.65rem]  px-2 py-1 text-sm rounded dark:hover:bg-slate-500/30 hover:bg-slate-500/15"
              onClick={() => setIsChangeName(true)}
            >
              {t("nickName.button")}
            </button>
          </div>
        </div>

        {/* photo */}
        <div className="flex justify-between items-center  text-xs ">
          <div className="flex items-center gap-2  ">
            <div className="">
              <IoCameraReverseOutline className=" text-[17px] xl:text-[24px]" />
            </div>
            <div>
              <div className="font-xs font-light opacity-90 capitalize">
                {t("photo.label")}
              </div>
              <div className="text-[11px] xl:text-[0.65rem] font-extralight opacity-60">
                {t("photo.content")}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-end">
            {
              <>
                <span className="flex items-center gap-1 text-sm">
                  <Image
                    src={imgUrl}
                    alt="profile"
                    width={40}
                    height={40}
                    className="rounded-full w-9 h-9"
                  />
                </span>
              </>
            }

            <button
              className="border  cursor-pointer text-[10px] px-2 py-1 text-sm xl:text-[0.65rem] rounded border-red-500 text-red-500 hover:text-red-600 hover:border-red-600 dark:hover:text-red-400 dark:hover:border-red-400 transition-all"
              onClick={pictureDeleteHandler}
            >
              {t("photo.buttons.delete")}
            </button>

            <button
              className="border border-slate-500/20 bg-slate-500/25 cursor-pointer text-[10px] xl:text-[0.65rem]  px-2 py-1 text-sm rounded dark:hover:bg-slate-500/30 hover:bg-slate-500/15"
              onClick={() => setIsPictureChange(true)}
            >
              {t("photo.buttons.upload")}
            </button>
          </div>
        </div>
      </div>

      {isChangeName && (
        <Model>
          {" "}
          <ChangeNamePopup
            onClose={() => setIsChangeName(false)}
            onSuccess={nameChangeHandler}
            nickname={nickname}
          />
        </Model>
      )}

      {isPictureChange && (
        <Model>
          {" "}
          <ChangePicturePopup
            onClose={() => setIsPictureChange(false)}
            onSuccess={pictureChangeHandler}
          />
        </Model>
      )}
    </div>
  );
};

export default Profile;
