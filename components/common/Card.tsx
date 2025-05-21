import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Card: FC<Props> = ({ children }) => {
  return (
    <div className="w-fit rounded-md p-2 bg-white dark:bg-[#161735]">
      {children}
    </div>
  );
};

export default Card;
