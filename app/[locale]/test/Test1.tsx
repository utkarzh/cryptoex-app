"use client";
import { useState } from "react";
import { BiMinus, BiPlus, BiPulse } from "react-icons/bi";

export default function SliderControl() {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(100, Math.max(0, Number(e.target.value)));
    setValue(newValue);
  };

  const increment = () => {
    setValue((prev) => Math.min(100, prev + 1));
  };

  const decrement = () => {
    setValue((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="flex items-center gap-3 bg-[#0e0e2e] p-2 rounded-full w-fit">
      <div>{value}</div>
      {/* Minus Button */}
      <button
        onClick={decrement}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a1a40] text-white"
      >
        <BiMinus size={16} />
      </button>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        className="appearance-none w-40 h-1 bg-[#3b3b5b] rounded-full [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-green-600 [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-white"
      />

      {/* Plus Button */}
      <button
        onClick={increment}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a1a40] text-white"
      >
        <BiPlus size={16} />
      </button>
    </div>
  );
}
