"use client";

import Image from "next/image";
import React from "react";

const images = [
  "/images/coins/usdtrounded.png",
  "/images/coins/binancerounded.png",
  "/images/coins/btc.png",
  "/images/coins/ethereumrounded.png",
  "/images/coins/polygonrounded.png",
  "/images/coins/usdtrounded.png",
  "/images/coins/binancerounded.png",
  "/images/coins/btc.png",
  "/images/coins/ethereumrounded.png",
  "/images/coins/polygonrounded.png",
  "/images/coins/usdtrounded.png",
  "/images/coins/binancerounded.png",
  "/images/coins/btc.png",
  "/images/coins/ethereumrounded.png",
  "/images/coins/polygonrounded.png",
   "/images/coins/usdtrounded.png",
  "/images/coins/binancerounded.png",
  
];

const CoinCircle = () => {
  const imageSize = 30; // Size of each image
  const padding = 6; // Padding between image and outer border
  const spacing = 36; // Arc length spacing between images in pixels
  const innerRadius = 100; // Radius at which images are placed
  const outerRadius = innerRadius + imageSize / 2 + padding; // Outer radius of container
  const containerSize = outerRadius * 2; // Width and height of the parent div
  const center = containerSize / 2;

  const circumference = 2 * Math.PI * innerRadius;

  return (
    <div
      className="relative bg-green-600 dark:bg-green-700 animate-rotate360"
      style={{
        width: `${containerSize}px`,
        height: `${containerSize}px`,
        borderRadius: `${outerRadius}px`,
      }}
    >
      <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-[#eff0f2] dark:bg-[#161735] h-[calc(100%-80px)] w-[calc(100%-80px)] rounded-full"></div>
      {images.map((src, index) => {
        const angle = (2 * Math.PI * index * spacing) / circumference + Math.PI;
        const x = center + innerRadius * Math.cos(angle) - imageSize / 2;
        const y = center + innerRadius * Math.sin(angle) - imageSize / 2;

        return (
          <Image
            key={index}
            src={src}
            alt={`crypto-${index}`}
            width={imageSize}
            height={imageSize}
            className="absolute rounded-full  object-cover"
            style={{
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              top: `${y}px`,
              left: `${x}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CoinCircle;