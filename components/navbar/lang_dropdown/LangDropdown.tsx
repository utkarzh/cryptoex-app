import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
// import LanguageSwitcher from "./LanguageSwitcher";

const LangDropdown = () => {
  return (
    <div className="w-fit max-h-[90vh] overflow-y-auto min-w-[130px]  bg-gray-50/95 dark:bg-[#21213b]/95   h-fit  py-4 rounded-lg flex flex-col justify-between">
      <LanguageSwitcher />
    </div>
  );
};

export default LangDropdown;
