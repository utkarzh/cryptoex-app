"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Token = {
  name: string;
  symbol: string;
  logo: string;
};

const tokens: Token[] = [
  {
    name: "Plath",
    symbol: "PLATH",
    logo: "https://cdncheck.nyc3.cdn.digitaloceanspaces.com/data/logo/plath.png",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    logo: "https://cdncheck.nyc3.cdn.digitaloceanspaces.com/data/logo/btc.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    logo: "https://cdncheck.nyc3.cdn.digitaloceanspaces.com/data/logo/eth.png",
  },
  // Add more tokens as needed
];

export default function TokenCard() {
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
        <motion.div
          key={current.symbol}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <img
            src={current.logo}
            alt={current.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-xs text-gray-400 -mb-1">New Listing</p>
            <p className="font-semibold text-sm">
              {current.name} ({current.symbol})
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="text-green-400 font-semibold text-sm cursor-pointer">
        See All
      </p>
    </div>
  );
}
