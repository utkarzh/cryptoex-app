"use client";

import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { useGetCombinationInfoMutation } from "@/redux/masternode/events/eventsApi";
import { useGetIndoexDepthQuery } from "@/redux/newapi/trade/newtradeApi";

interface DepthOrder {
  price: number;
  quantity: number;
}

interface OrderBookPageProps {
  pair: string;
}

const formatNum = (val: number): string =>
  val
    .toFixed(8)
    .replace(/\.0+$/, "")
    .replace(/(\.\d*?[1-9])0+$/, "$1");

const getOrderSumPoint = (
  orders: DepthOrder[],
  index: number,
  include: boolean
): number => {
  const slice = include ? orders.slice(0, index) : orders.slice(0, index - 1);
  return slice.reduce((acc, o) => acc + o.price * o.quantity, 0);
};

const updaterFunction = (orders: DepthOrder[]): DepthOrder[] => {
  if (orders.length < 15) return orders;
  const posn = helper(2, Math.min(14, orders.length - 1));
  const multiplier = helper(101, 103) / 100;
  return orders.map((order, i) =>
    i === posn ? { ...order, quantity: order.quantity * multiplier } : order
  );
};

const helper = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const OrderBookPage: React.FC<OrderBookPageProps> = ({ pair }) => {
  const [vendor, market] = pair.split("_");
  const [getCombinationInfo] = useGetCombinationInfoMutation();
  const { data: depthData } = useGetIndoexDepthQuery({ pair });

  const [isUIValid, setIsUIValid] = useState(false);
  const [orderToShow, setOrderToShow] = useState(15);
  const [buyOrders, setBuyOrders] = useState<DepthOrder[]>([]);
  const [sellOrders, setSellOrders] = useState<DepthOrder[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const res = await getCombinationInfo({ vendor, market }).unwrap();
        if (res?.uistatus === 200) {
          setIsUIValid(true);
          setBuyOrders(depthData?.bids?.slice(0, 100) ?? []);
          setSellOrders(depthData?.asks?.slice(0, 100) ?? []);
        } else {
          setIsUIValid(false);
        }
      } catch (e) {
        console.error("Error in getCombinationInfo", e);
        setIsUIValid(false);
      }
    };

    if (vendor && market) {
      fetchInitial();
    }
  }, [pair, getCombinationInfo, depthData, vendor, market]);

  useEffect(() => {
    const shouldSimulate =
      isUIValid && buyOrders.length >= 15 && sellOrders.length >= 15;

    if (shouldSimulate && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setBuyOrders((prev) => updaterFunction(prev));
        setSellOrders((prev) => updaterFunction(prev));
      }, 200);
    } else if (!shouldSimulate && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isUIValid, buyOrders.length, sellOrders.length]);

  const renderOrderRow = (
    order: DepthOrder,
    i: number,
    isBuy: boolean,
    totalSum: number,
    orders: DepthOrder[]
  ) => {
    const proportion =
      ((totalSum - getOrderSumPoint(orders, i + 9, false)) * 100) / totalSum;

    return (
      <div
        key={i}
        className="relative h-8 flex items-center text-[10px] sm:text-xs"
      >
        <span
          className={clsx("absolute top-0 left-0 h-full", {
            "bg-green-200 dark:bg-green-700": isBuy,
            "bg-red-200 dark:bg-red-700": !isBuy,
          })}
          style={{ width: `${proportion}%` }}
        />
        <div className="flex w-full justify-between relative z-10 px-2 font-mono text-[10px] sm:text-xs">
          <span
            className={clsx("w-1/5", isBuy ? "text-green-500" : "text-red-500")}
          >
            {isBuy ? "Buy" : "Sell"} {i + 1}
          </span>
          <span className="w-1/5 text-center">{formatNum(order.price)}</span>
          <span className="w-1/5 text-center">{formatNum(order.quantity)}</span>
          <span className="w-1/5 text-center">
            {formatNum(order.price * order.quantity)}
          </span>
          <span className="w-1/5 text-right">
            {formatNum(getOrderSumPoint(orders, i + 1, true))}
          </span>
        </div>
      </div>
    );
  };

  const buySum = buyOrders.reduce((acc, o) => acc + o.price * o.quantity, 0);
  const sellSum = sellOrders.reduce((acc, o) => acc + o.price * o.quantity, 0);

  return (
    <div className="w-full bg-white dark:bg-[#161735] rounded-xl p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Orderbook – {vendor}/{market}
      </h2>

      <div className="flex flex-wrap justify-between sm:justify-end items-center gap-2 mb-4 sm:mb-6 text-xs">
        <label htmlFor="depth-select">Depth</label>
        <select
          id="depth-select"
          className="border border-slate-500/40 rounded px-2 py-1 text-sm"
          onChange={(e) => setOrderToShow(Number(e.target.value))}
          value={orderToShow}
        >
          {[15, 30, 50, 100].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {!isUIValid ? (
        <p className="text-center text-sm text-red-500">Invalid trading pair</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-green-600 font-semibold mb-2">Buy Orders</h3>
            <div className="grid grid-cols-5 text-[9px] sm:text-[10px] opacity-60 px-2 mb-2">
              <span>Side</span>
              <span className="text-center">Price ({market})</span>
              <span className="text-center">Amount ({vendor})</span>
              <span className="text-center">Total ({market})</span>
              <span className="text-right">Sum ({market})</span>
            </div>
            {buyOrders
              .slice(0, orderToShow)
              .map((order, i) =>
                renderOrderRow(order, i, true, buySum, buyOrders)
              )}
          </div>

          <div>
            <h3 className="text-red-600 font-semibold mb-2">Sell Orders</h3>
            <div className="grid grid-cols-5 text-[9px] sm:text-[10px] opacity-60 px-2 mb-2">
              <span>Side</span>
              <span className="text-center">Price ({market})</span>
              <span className="text-center">Amount ({vendor})</span>
              <span className="text-center">Total ({market})</span>
              <span className="text-right">Sum ({market})</span>
            </div>
            {sellOrders
              .slice(0, orderToShow)
              .map((order, i) =>
                renderOrderRow(order, i, false, sellSum, sellOrders)
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderBookPage;
