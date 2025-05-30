"use client";
import { useEffect, useState } from "react";

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-06-02T00:00:00") - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-fit bg-white dark:bg-[#161735] p-4 rounded-xl px-6 flex gap-4 justify-start items-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center  ">
          <span className="text-green-100 text-lg font-bold bg-green-600 dark:bg-green-500/20 dark:text-green-600 px-4 py-3 border border-green-600 rounded-md hover:bg-green-700 dark:hover:bg-green-500/30">
            {value}
          </span>
          <span className=" text-xs mt-1">
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Countdown;
