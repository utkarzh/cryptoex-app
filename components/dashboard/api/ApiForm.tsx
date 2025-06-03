import React from "react";

const ApiForm = () => {
  return (
    <div className="w-full">
      {/* notes */}
      <div>
        <label className="block mb-1 text-[10px] font-light">Notes</label>
        <input
          type="text"
          // value={data.confirmPin}
          name="confirmPin"
          placeholder="Please enter new pin again"
          className="w-full p-1 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none  placeholder:text-[10px]"
          // onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
};

export default ApiForm;
