"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tokens = [
  "/images/coins/usdtrounded.png",
  "/images/coins/binancerounded.png",
  "/images/coins/btc.png",
  "/images/coins/ethereumrounded.png",
  "/images/coins/polygonrounded.png",
];

export default function TokenCard1() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tokens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = tokens[index];

  return (
    <div className="w-[300px] h-[60px] overflow-hidden rounded-full bg-[#0b0b2a] text-white flex items-center justify-between px-4 shadow-lg">
      <AnimatePresence mode="wait">
        <div className="w-[50%] sm:w-[90%] mx-auto   flex justify-center items-center absolute top-[12%] left-0 translate-x-0 sm:left-1/2 sm:-translate-x-1/2">
          <motion.div
            key={index}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Image
              src={current}
              alt=""
              width={100}
              height={100}
              className="w-8 h-8 rounded-full"
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}
