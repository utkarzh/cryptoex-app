import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/coins/usdtrounded.png",
  "/images/coins/binancerounded.png",
  "/images/coins/btc.png",
  "/images/coins/ethereumrounded.png",
  "/images/coins/polygonrounded.png",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-64 overflow-hidden">
        <div className="w-[50%] sm:w-[30%] mx-auto   flex justify-center items-center absolute top-[12%] left-0 translate-x-0 sm:left-1/2 sm:-translate-x-1/2 ">
          <AnimatePresence mode="wait">
            {/* <div className="flex gap-2"> */}
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 0.9, x: 0 }}
              exit={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="w-[16%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative z-[30] left-[10%] "
              alt="Rotating Image"
            />
            <motion.img
              key={currentIndex + 1}
              src={images[(currentIndex + 1) % images.length]}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="w-[20%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative  z-[40] left-[5%] "
              alt="Rotating Image1"
            />

            <motion.img
              key={currentIndex + 2}
              src={images[(currentIndex + 2) % images.length]}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="w-[25%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full  h-auto z-[50] "
              alt="Rotating Image1"
            />

            <motion.img
              key={currentIndex + 3}
              src={images[(currentIndex + 3) % images.length]}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="w-[20%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative -left-[5%] z-[40]"
              alt="Rotating Image1"
            />

            <motion.img
              key={currentIndex + 4}
              src={images[(currentIndex + 4) % images.length]}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="w-[16%] p-[6px] bg-[#eff0f2] dark:bg-[#161735] rounded-full h-auto relative z-[30] -left-[10%]"
              alt="Rotating Image1"
            />
            {/* </div> */}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
