"use client";

import { useState } from "react";

const mockOrders = {
  buy: [
    { price: 0.01377, amount: "29.49K", total: "406.036" },
    { price: 0.01376, amount: "90.76K", total: "1.25K" },
    { price: 0.01375, amount: "324.59K", total: "4.46K" },
    { price: 0.01374, amount: "263.82K", total: "3.26K" },
    { price: 0.01373, amount: "60.80K", total: "834.798" },
    { price: 0.01372, amount: "131.26K", total: "1.80K" },
    { price: 0.01371, amount: "390.06K", total: "5.35K" },
    { price: 0.0137, amount: "31.40K", total: "430.139" },
  ],
  sell: [
    { price: 0.01385, amount: "137.22K", total: "1.90K" },
    { price: 0.01384, amount: "36.77K", total: "508.897" },
    { price: 0.01383, amount: "103.07K", total: "1.43K" },
    { price: 0.01382, amount: "38.76K", total: "535.594" },
    { price: 0.01381, amount: "37.45K", total: "517.143" },
    { price: 0.0138, amount: "36.87K", total: "508.737" },
    { price: 0.01379, amount: "29.50K", total: "406.777" },
    { price: 0.01378, amount: "13.75K", total: "189.530" },
  ],
  recent: { price: 0.01379 },
};

export default function OrderBook() {
  const [view, setView] = useState<"buy" | "sell" | "both">("both");

  const renderRows = (
    orders: (typeof mockOrders)["buy"],
    type: "buy" | "sell"
  ) =>
    orders.map((order, idx) => (
      <tr
        key={idx}
        className={`text-sm ${
          type === "buy" ? "text-green-500" : "text-red-500"
        }`}
      >
        <td className="py-1 px-2">{order.price}</td>
        <td className="py-1 px-2 text-white">{order.amount}</td>
        <td className="py-1 px-2 text-white">{order.total}</td>
      </tr>
    ));

  const TableHeader = () => (
    <thead>
      <tr className="text-xs text-gray-400">
        <th className="py-1 px-2">Price (USDT)</th>
        <th className="py-1 px-2">Amount (FIO)</th>
        <th className="py-1 px-2">Total</th>
      </tr>
    </thead>
  );

  return (
    <div className="w-full max-w-md bg-[#0e0e0e] border border-gray-800 rounded-md shadow-md text-white p-4">
      {/* Control Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        {["buy", "sell", "both"].map((type) => (
          <button
            key={type}
            className={`px-4 py-1 text-sm rounded border ${
              view === type
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
            onClick={() => setView(type as "buy" | "sell" | "both")}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="max-h-[500px] flex flex-col overflow-hidden divide-y divide-gray-700">
        {/* Only SELL */}
        {view === "sell" && (
          <>
            <div className="overflow-auto flex-1">
              <table className="w-full text-right">
                <TableHeader />
                <tbody>{renderRows(mockOrders.sell, "sell")}</tbody>
              </table>
            </div>
            <div className="py-2 text-center text-sm text-gray-300 border-t border-gray-700">
              Recent:{" "}
              <span className="text-white">{mockOrders.recent.price}</span>
            </div>
          </>
        )}

        {/* Only BUY */}
        {view === "buy" && (
          <>
            <div className="py-2 text-center text-sm text-gray-300 border-b border-gray-700">
              Recent:{" "}
              <span className="text-white">{mockOrders.recent.price}</span>
            </div>
            <div className="overflow-auto flex-1">
              <table className="w-full text-right">
                <TableHeader />
                <tbody>{renderRows(mockOrders.buy, "buy")}</tbody>
              </table>
            </div>
          </>
        )}

        {/* BOTH */}
        {view === "both" && (
          <>
            {/* Sell Top */}
            <div className="overflow-auto max-h-[50%] border-b border-gray-700">
              <table className="w-full text-right">
                <TableHeader />
                <tbody>{renderRows(mockOrders.sell, "sell")}</tbody>
              </table>
            </div>

            {/* Recent in Center */}
            <div className="py-2 text-center text-sm text-gray-300">
              Recent:{" "}
              <span className="text-white">{mockOrders.recent.price}</span>
            </div>

            {/* Buy Bottom */}
            <div className="overflow-auto max-h-[50%]">
              <table className="w-full text-right">
                <TableHeader />
                <tbody>{renderRows(mockOrders.buy, "buy")}</tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
