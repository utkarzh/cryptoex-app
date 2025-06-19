"use client";
import { saira } from "@/utils/Font";
import React, { FC, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  question: string;
  answer: string;
  defaultVisibility: boolean;
};

const FaqCard: FC<Props> = ({ question, answer, defaultVisibility }) => {
  const [isVisible, setIsVisible] = useState(defaultVisibility);
  const visibilityHandler = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="w-full rounded-xl p-6 px-8 bg-white dark:bg-[#161735] shadow shadow-black/40 dark:shadow-white/20 flex flex-col gap-3">
      {/* question */}
      <div className="w-full flex justify-between items-center">
        <h2 className={`${saira.className} text-xs xl:text-[0.9rem] font-bold`}>
          {question}
        </h2>
        <div onClick={visibilityHandler} className="cursor-pointer text-lg">
          {!isVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>

      {/* answer*/}
      {isVisible && (
        <div className="w-full text-xs font-extralight ">{answer}</div>
      )}
    </div>
  );
};

export default FaqCard;
