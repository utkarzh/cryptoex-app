import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion } from "framer-motion";
// import LanguageSwitcher from "./LanguageSwitcher";

const LangDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="w-fit max-h-[90vh] overflow-y-auto min-w-[130px] 2xl:min-w-[200px]  h-fit  py-4  flex flex-col justify-between  bg-gray-50/50 dark:bg-[#21213b]/80 rounded-md relative backdrop-blur 2xl:backdrop-blur-xl ">
        <LanguageSwitcher />
      </div>
    </motion.div>
  );
};

export default LangDropdown;
