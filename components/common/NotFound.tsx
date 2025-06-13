"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFoundCompo = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[calc(100vh-120px)]  px-6 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="mb-6 text-gray-400">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFoundCompo;
