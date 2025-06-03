"use client";
import { saira } from "@/utils/Font";
import React, { FC, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onSuccess: (data: string) => void;
};

const ChangePinPopup: FC<Props> = ({ onClose, onSuccess }) => {
  const [data, setData] = useState({
    currentPin: "",
    newPin: "",
    confirmPin: "",
  });
  const [error, setError] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log("Data is", data);

  const changeMailHandler = () => {
    if (
      data.confirmPin === data.newPin &&
      data.newPin.length > 3 &&
      data.currentPin === "1234"
    ) {
      onSuccess("error");
      return;
    }
    setError("Error occured");
    setTimeout(() => setError(""), 2000);
  };
  return (
    <div className="sm:min-w-[300px] bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-5">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* heading and close button*/}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        Update pin
      </h2>
      {/* inputs */}
      <div className="w-full space-y-3">
        {/*current pin*/}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            Current Pin
          </label>
          <input
            type="text"
            value={data.currentPin}
            name="currentPin"
            placeholder="Please enter current pin "
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none  placeholder:text-[10px]"
            onChange={inputChangeHandler}
          />
        </div>

        {/*New  pin*/}
        <div>
          <label className="block mb-1 text-[10px] font-light">New Pin</label>
          <input
            type="text"
            value={data.newPin}
            name="newPin"
            placeholder="Please enter new pin "
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none  placeholder:text-[10px]"
            onChange={inputChangeHandler}
          />
        </div>

        {/*confirm  pin*/}
        <div>
          <label className="block mb-1 text-[10px] font-light">
            Confirm Pin
          </label>
          <input
            type="text"
            value={data.confirmPin}
            name="confirmPin"
            placeholder="Please enter new pin again"
            className="w-full p-2 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none  placeholder:text-[10px]"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      {error && <p className="text-[10px] font-light text-red-700">{error}</p>}

      {/* Action buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-2 justify-between mt-2 text-xs">
        <button
          className="w-full border border-slate-500/30 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="w-full border border-transparent bg-green-600 dark:text-black text-white
                     py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={changeMailHandler}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ChangePinPopup;
