import React, { FC } from "react";

type Props = {
  error: string;
};

const ErrorCard: FC<Props> = ({ error }) => {
  return (
    <div className="w-full my-1 text-[10px] xl:text-xs ">
      <p className=" mt-4 font-normal bg-red-700 text-red-50 dark:bg-red-400/15  dark:text-red-500 tracking-wide px-4 py-2 rounded-full">
        {error}
      </p>
    </div>
  );
};

export default ErrorCard;
