import React, { FC } from "react";
import Image from "next/image";
import { Data_Type } from "./AirdropContent";

type Props = {
  data: Data_Type[];
};

const AirdropStatusCard: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 ">
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`relative w-64 p-4 rounded-xl rounded-tr-3xl bg-white dark:bg-[#161735] ${item.shadow}`}
        >
          {/* status */}
          <div
            className={`absolute top-0 right-0 rounded-bl-3xl capitalize rounded-tr-[22px] px-6 py-1 text-sm text-white ${item.statusColor}`}
          >
            {item.status}
          </div>

          <div className="flex items-center gap-2 mb-2 mt-6">
            <Image
              src={item.logo}
              alt={item.token}
              width={32}
              height={32}
              className={`border-2 ${item.borderColor} rounded-full`}
            />
            <h3 className="text-[14px]">{item.token}</h3>
          </div>

          <p className="text-[12px] font-extralight mb-4">{item.disc}</p>

          <div className="text-xs font-light my-10 flex justify-between">
            <span className="">Airdrop supply:</span>
            <span className="ml-2 font-medium">{item.supply}</span>
          </div>

          <hr className="my-2 border-gray-600" />

          <div className="text-xs font-light flex flex-col gap-3 mt-8 mb-2">
            <p className="text-xs font-light  flex justify-between">
              <span>Start:</span>
              <span>{item.start} (UTC)</span>
            </p>
            <p className="text-xs font-light  flex justify-between">
              <span>End:</span>
              <span>{item.end} (UTC)</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AirdropStatusCard;
