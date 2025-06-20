import { useTranslations } from "next-intl";
import React, { FC } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

type Props = {
  message: {
    message: string;
    isError: boolean;
  };
  onClose: () => void;
};

const IndoexStatus: FC<Props> = ({ message, onClose }) => {
  const t = useTranslations("indoexVerify.message");
  return (
    <div className="bg-white dark:bg-[#161735] rounded-xl p-4 max-w-60 text-center relative shadow-xl">
      {/*  Icon */}
      <div className="flex justify-center mt-6 mb-4">
        {message.isError ? (
          <span className="p-1 rounded-full bg-[#e14d4e] text-white">
            <RiCloseFill className="text-3xl" />
          </span>
        ) : (
          <span className="  text-green-600">
            <BsFillPatchCheckFill className="text-[38px]" />
          </span>
        )}
      </div>

      <h2 className="text-xs font-medium mb-6">
        {message.isError ? t("error") : t("success")}
      </h2>

      <div className="w-full flex justify-between gap-2">
        <div
          onClick={onClose}
          className={`w-full ${
            message.isError
              ? "bg-[#dd270f] hover:bg-[#dd270fad]"
              : "bg-green-500 hover:bg-green-600  "
          } text-white   py-1.5 px-2 rounded-full transition text-xs cursor-pointer`}
        >
          OK
        </div>
      </div>
    </div>
  );
};

export default IndoexStatus;
