"use client";

import { saira } from "@/utils/Font";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

const Security = () => {
  return (
    <div className="bg-white dark:bg-[#161735] rounded-xl p-6 w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className={`${saira.className} text-sm font-semibold `}>
            Security
          </h2>
          <p className="text-xs font-extralight opacity-70">
            Increase your account security strength
          </p>
          <Link
            href="#"
            className="text-green-500 text-xs mt-2 hover:underline flex gap-0.5 items-center"
          >
            Go to Security page <RxArrowTopRight />
          </Link>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span>Strength</span>
          <div className="flex gap-1">
            <span className="w-4 h-1 rounded-sm bg-orange-500"></span>
            <span className="w-4 h-1 rounded-sm bg-orange-400"></span>
            <span className="w-4 h-1 rounded-sm bg-orange-200"></span>
            <span className="w-4 h-1 rounded-sm bg-gray-500"></span>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {["Passkey", "2-Step Verification", "Anti-phishing code"].map(
          (item) => (
            <div key={item} className="flex justify-between items-center pb-2">
              <p className="text-xs">{item}</p>
              <span className="flex items-center gap-1 text-green-50 bg-green-600 dark:text-green-400 dark:bg-green-700/30 px-3 py-1 rounded-full text-[10px]">
                &#10003; Active
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Security;
