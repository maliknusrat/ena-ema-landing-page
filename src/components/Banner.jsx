"use client";
import React from "react";
import TrustedBadge from "./TrustedBadge";
import Navbar from "./Navbar";
import FootBanner from "./FootBanner";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative min-h-auto lg:min-h-screen  overflow-hidden">
      <Navbar></Navbar>

      <div className="flex flex-col py-16 items-center justify-center">
        <div className="md:max-w-[614px] lg:max-w-[960px] text-center">
          <div className="flex justify-center items-center mb-4">
            <TrustedBadge />
          </div>

          <motion.h1
      className="text-[36px] md:text-[64px] lg:text-[68px] font-bold text-white leading-tight"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Strategic Landing Pages That Convert From Just{" "}
      <motion.span
        className="text-[#1FFFA5]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        $200
      </motion.span>
    </motion.h1>

          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </p>
        </div>
        <FootBanner></FootBanner>
      </div>
    </section>
  );
}
