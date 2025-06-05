import React, { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const DropdownCard: FC<Props> = ({ children }) => {
  return (
    <div className="absolute z-[200] min-w-[300px] w-full -bottom-0 translate-y-[100%] left-0 lg:left-1/2 translate-x-0 lg:-translate-x-1/2  hidden group-hover:block bg-transparent">
      <div className=" mt-4 bg-gray-50/95 dark:bg-[#21213b]/95 rounded-md ">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default DropdownCard;
