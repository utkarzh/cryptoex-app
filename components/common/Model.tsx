import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  cb?: () => void;
};

const Model: FC<Props> = ({ children, cb }) => {
  return (
    <div
      className="fixed z-[9999] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center  bg-[#161735]/30 overflow-auto"
      onClick={cb}
    >
      {children}
    </div>
  );
};

export default Model;
