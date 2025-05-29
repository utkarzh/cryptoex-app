import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const DropdownCard: FC<Props> = ({ children }) => {
  return (
    <div className="absolute min-w-[300px] w-full -bottom-0 translate-y-[100%] left-1/2 -translate-x-1/2  hidden group-hover:block bg-transparent">
      <div className=" mt-4 bg-gray-50/95 dark:bg-[#21213b]/95 rounded-md ">
        {children}
      </div>
    </div>
  );
};

export default DropdownCard;
