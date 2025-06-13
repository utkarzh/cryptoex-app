"use client";

import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Vendors_int } from "../home/types";
import Link from "next/link";

type Props = {
  newListing: Vendors_int[];
};

const NewListingCard: FC<Props> = ({ newListing }) => {
  const t = useTranslations("Navbar");
  const [index, setIndex] = useState(0);
  const [tokens] = useState(newListing);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tokens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = tokens[index];

  return (
    <div className="flex gap-3 items-center px-3 p-1 border border-gray-700 rounded-full text-sm ">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.vendors_id}
          initial={{ y: 2, opacity: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -2, opacity: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Image
            src={current.vendors_logopath}
            alt={current.vendors_vendorshortcode}
            className="w-7 h-7 rounded-full"
            width={40}
            height={40}
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col  text-xs">
        <span className="text-slate-500">{t("auth.new_listing")}</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.vendors_id}
            initial={{ y: 2, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -2, opacity: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-[100px] xl:w-[200px]"
          >
            <p className="text-nowrap text-ellipsis  truncate overflow-hidden whitespace-nowrap">
              {current.vendors_vendorname}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <Link href="/markets" className="text-green-600 cursor-pointer ">
        {t("auth.see_all")}
      </Link>
    </div>
  );
};

export default NewListingCard;
