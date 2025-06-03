import { saira } from "@/utils/Font";
import React from "react";
import ApiNotes from "./ApiNotes";
import ApiForm from "./ApiForm";

const ApiManagement = () => {
  return (
    <div className="w-full bg-white dark:bg-[#161735]  rounded-xl p-6 ">
      <div className="space-y-2 mb-8">
        {/* heading */}
        <h2 className={`${saira.className} text-sm font-semibold`}>
          API Management
        </h2>
        <p className="text-[10px] font-light">Create API Key</p>
      </div>

      {/* content */}
      <div className="w-full h-full flex flex-col sm:flex-row gap-6">
        {/* form */}
        <ApiForm />
        {/* border */}
        <div className="border border-slate-500/30 "></div>
        {/* note */}
        <ApiNotes />
      </div>
    </div>
  );
};

export default ApiManagement;
