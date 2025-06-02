import { saira } from "@/utils/Font";
import Link from "next/link";
import React, { FC } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  onClose: () => void;
};
const DeletionRequestPopup: FC<Props> = ({ onClose }) => {
  return (
    <div className="bg-white dark:bg-[#161735] p-8 rounded-2xl max-w-[400px] mx-auto shadow-lg relative space-y-4">
      {/* close button */}
      <button
        className="absolute border rounded-full border-slate-600 dark:border-slate-500 right-2 top-2 hover:scale-105 transition-all duration-200 cursor-pointer"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>

      {/* heading and close button*/}
      <h2 className={`${saira.className} text-sm font-semibold `}>
        Request for Deletion of Account
      </h2>
      {/* message */}
      <p className="text-[10px] font-light opacity-100 dark:opacity-80">
        Dear Valued Client, If you wish to permanently delete your account with
        IndoEx, please send an email through{" "}
        <a
          href="mailto:support@indoex.io"
          className="text-green-600 no-underline  "
        >
          support@indoex.io
        </a>
        . The request must be sent from the same email address used to register
        your account.
      </p>

      {/* notice*/}
      <div className="rounded-md bg-slate-200 dark:bg-[#24243c] p-3 space-y-4">
        <h5 className="text-[11px] font-light">Notice:</h5>
        <p className="text-[10px] font-light opacity-100 dark:opacity-80">
          Be aware that account deletion is permanent. After your account is
          deleted, you will lose access to it, including any transaction history
          or data.
        </p>
        <p className="text-[10px] font-light opacity-100 dark:opacity-80">
          If you have any assets remaining in your account, please make sure to
          settle them. Otherwise, these assets will be lost and cannot be
          recovered after the deletion of account.
        </p>
        <p className="text-[10px] font-light opacity-100 dark:opacity-80">
          Although IndoEx can delete your account permanently as per request,
          please note that we must retain certain personal data for a specified
          period after deletion. This retention is required by law, such as
          AML/CFT regulations, or as may be necessary for handling any future
          disputes or claims. Your personal data will be deleted once the
          legally required retention period has elapsed. For reference, please
          see IndoEx{" "}
          <Link href="#" className="text-green-600">
            Terms and Conditions
          </Link>
        </p>
        <p className="text-[10px] font-light opacity-100 dark:opacity-80">
          Additional information about how we store your personal data can be
          found in our{" "}
          <Link href="#" className="text-green-600">
            Privacy Policy.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DeletionRequestPopup;
