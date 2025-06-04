import { saira } from "@/utils/Font";
import React, { FC, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
  nickname: string;
};

const ChangeNamePopup: FC<Props> = ({ onClose, onSuccess, nickname }) => {
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
        Change Nickname
      </h2>
      {/* input */}
      <div>
        <label className="block mb-2 text-[10px] font-light">Nickname</label>
        <input
          type="text"
          value={changedNickname}
          placeholder="Enter nickname"
          className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20  focus:outline-none  placeholder:text-xs"
          onChange={(e) => setChangedNickname(e.target.value)}
        />
        <p className="text-[9px] font-light mt-1 text-red-600">
          5-20 characters. Special characters not allowed.
        </p>
      </div>

      {/* Action buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-between mt-2 text-xs">
        <button
          className="w-full border border-slate-500/30 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
               py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={() => onSuccess(changedNickname)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ChangeNamePopup;
