import React from "react";

const ApiForm = () => {
  return (
    <div className="w-full space-y-6">
      {/* notes */}
      <div>
        <label className="block mb-1 text-[12px] font-light">Notes</label>
        <input
          type="text"
          // value={data.confirmPin}
          name="confirmPin"
          placeholder="Please enter new pin again"
          className="w-full p-1 rounded-md bg-slate-500/10 border border-gray-500/20 focus:outline-none  placeholder:text-[10px]"
          // onChange={inputChangeHandler}
        />
      </div>
      {/* Permission settings */}
      <div className="w-full space-y-3">
        <div className="text-[12px] font-light">
          Permission settings
          <span className="text-slate-500">(Multiple choice)</span>
        </div>
        {/* checkbox */}
        <div className="flex justify-between gap-2 flex-wrap">
          {/* account balance */}
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="" />
            <label className="text-[10px] font-light">Account Balance</label>
          </div>
          {/* add order */}
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="" />
            <label className="text-[10px] font-light">Add Order</label>
          </div>
          {/* get order */}
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="" />
            <label className="text-[10px] font-light">Get Order</label>
          </div>
          {/* close order */}
          <div className="flex gap-1 items-center">
            <input type="checkbox" className="" />
            <label className="text-[10px] font-light">Close Order</label>
          </div>
        </div>
      </div>

      {/* bind ip address */}
      <div className="w-full space-y-3">
        <div className="text-[12px] font-light">
          Bind IP address
          <span className="text-slate-500">(optional)</span>
        </div>
        {/* textarea */}
        <div className="">
          <textarea
            rows={3}
            cols={5}
            className="w-full p-1 rounded-md bg-slate-500/10 border border-gray-500/20"
          ></textarea>
          <p className="text-slate-500 text-[12px]">
            Expiry date of the key unbound to IP address is 100 days
          </p>
        </div>
      </div>

      {/* create button */}
      <div className="w-full flex justify-end">
        <button
          className="w-fit border text-[12px] border-transparent bg-green-600 dark:text-black text-white
                     py-1 px-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ApiForm;
