import Image from "next/image";
import React from "react";

type Props = {};

const Test3 = (props: Props) => {
  return (
    <div className="text-red-300 dark:text-green-500">
      Test3
      <Image
        src="https://cdn.pixabay.com/photo/2025/04/16/06/25/duck-9536937_1280.jpg"
        alt=""
        width={7000}
        height={7000}
        className="w-[500px] h-auto"
      />
      <br />
      <img
        width={1000}
        height={1000}
        className="w-[500px]"
        src={
          "https://cdn.pixabay.com/photo/2025/04/16/06/25/duck-9536937_1280.jpg"
        }
      />
    </div>
  );
};

export default Test3;
