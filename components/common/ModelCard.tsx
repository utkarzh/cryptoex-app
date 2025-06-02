"use client";
import React, { FC } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
  childern: React.ReactNode;
};

const ModelCard: FC<Props> = ({ onClose, childern }) => {
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative">
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {childern}
    </div>
  );
};

export default ModelCard;
