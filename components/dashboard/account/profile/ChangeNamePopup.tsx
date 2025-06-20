import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";
import React, { FC, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
  nickname: string;
};

const ChangeNamePopup: FC<Props> = ({ onClose, onSuccess, nickname }) => {
  const t = useTranslations("dashboard.profile.profile.nickName.popUp");
  const [changedNickname, setChangedNickname] = useState(nickname);

  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-4">
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
      <div>
        <label className="block mb-2 text-[10px] xl:text-xs font-light">
          {t("nickname")}
        </label>
        <input
          type="text"
          value={changedNickname}
          placeholder={t("enterNickname")}
          className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-xs"
          onChange={(e) => setChangedNickname(e.target.value)}
        />
        <p className="text-[9px] xl:text-[0.6rem] font-normal mt-1 text-red-600">
          {t("message")}
        </p>
      </div>

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
          onClick={() => onSuccess(changedNickname)}
        >
          {t("buttons.confirm")}
        </button>
      </div>
    </div>
  );
};

export default ChangeNamePopup;
