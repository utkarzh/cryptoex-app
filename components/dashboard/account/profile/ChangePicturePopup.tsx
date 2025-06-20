import { saira } from "@/utils/Font";
import React, { FC, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import AvatarPicker from "./ChangeImagePicker";
import { useTranslations } from "next-intl";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const ChangePicturePopup: FC<Props> = ({ onClose, onSuccess }) => {
  const t = useTranslations("dashboard.profile.profile.photo.popUp");
  const [imgUrl, setImgUrl] = useState("");
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] xl:max-w-[500px] mx-auto shadow-lg relative space-y-4">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* heading and close button*/}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        {t("title")}
      </h2>
      {/* input */}
      <AvatarPicker
        onUpload={(data) => {
          setImgUrl(data);
        }}
      />
      {/* Action buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-between mt-2 text-xs">
        <button
          className="w-full border border-slate-500/30 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          {t("buttons.cancel")}
        </button>
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
               py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={() => onSuccess(imgUrl)}
        >
          {t("buttons.confirm")}
        </button>
      </div>
    </div>
  );
};

export default ChangePicturePopup;
