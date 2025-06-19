"use client";
import { FC } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

type Props = {
  minValue: number;
  maxValue: number;
  currentValue: number;
  setCoins: (data: number) => void;
};

const SliderLunchpad: FC<Props> = ({
  minValue,
  maxValue,
  setCoins,
  currentValue,
}) => {
  // const [value, setValue] = useState(currentValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(
      maxValue,
      Math.max(minValue, Number(e.target.value))
    );
    // setValue(newValue);
    setCoins(newValue);
  };

  const increment = () => {
    setCoins(Math.min(maxValue, currentValue + 1));
    // setValue((prev) => Math.min(maxValue, prev + 1));
  };

  const decrement = () => {
    setCoins(Math.max(minValue, currentValue - 1));
    // setValue((prev) => Math.max(minValue, prev - 1));
  };

  return (
    <div className="flex items-center gap-3 ] p-2 rounded-full w-fit">
      {/* Minus Button */}
      <button
        onClick={decrement}
        className=" p-1 bg-slate-400/30 hover:bg-slate-400/50 transition-all flex items-center justify-center rounded-full"
      >
        <BiMinus size={16} />
      </button>

      {/* Slider */}
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={currentValue}
        onChange={handleChange}
        className="appearance-none w-40 h-1 bg-slate-400/40 dark:bg-[#3b3b5b] rounded-full [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-green-600 [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-white"
      />

      {/* Plus Button */}
      <button
        onClick={increment}
        className=" p-1 bg-slate-400/30 hover:bg-slate-400/50 transition-all flex items-center justify-center rounded-full"
      >
        <BiPlus size={16} className="cursor-pointer  " />
      </button>
    </div>
  );
};

export default SliderLunchpad;
