// app/components/CryptoTicker/Ticker.tsx
"use client";

import React from "react";

export const mockCryptoData = [
  { symbol: "NULSBUSD", change: 0.18, price: 0.3224 },
  { symbol: "KLAYBUSD", change: 0.189, price: 0.3224 },
  { symbol: "TRXBUSD", change: 0.031, price: 0.3224 },
  { symbol: "ADABUSD", change: 2.71, price: 0.3224 },
];

const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a23] text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="flex items-center animate-marquee space-x-6 px-4">
        {mockCryptoData.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <span></span>
            <span className="font-medium">{item.symbol}</span>
            <span className={`text-green-400`}>+{item.change.toFixed(2)}</span>
            <span className="text-gray-300">{item.price.toFixed(4)}</span>
            <span className="text-gray-600">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
