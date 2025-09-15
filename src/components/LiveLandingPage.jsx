"use client";
import { motion } from "framer-motion";
import React from "react";
import { LuUserRound, LuPalette } from "react-icons/lu";
import { PiRocketLaunchBold } from "react-icons/pi";

export default function LiveLandingPage() {
  const steps = [
    {
      day: "Day 1",
      icon: <LuUserRound className="w-9 h-9 text-[#1fffa5]" />,
      title: "Book Your Project",
      desc: "Fill out a short form and we'll get started immediately.",
    },
    {
      day: "Day 2-4",
      icon: <LuPalette className="w-9 h-9 text-[#1fffa5]" />,
      title: "Design & Development",
      desc: "Unlimited revisions until perfect. You're involved every step.",
    },
    {
      day: "Day 5",
      icon: <PiRocketLaunchBold className="w-9 h-9 text-[#1fffa5]" />,
      title: "Launch",
      desc: "Fully deployed on your hosting and ready to convert visitors.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="py-20">
      <div className="px-10 md:px-32">
        <p className="text-[#f5f5f5] text-[36px] md:text-[36px] lg:text-[48px] font-semibold text-center">
          From Idea to Live Landing Page in{" "}
          <span className="text-[#1fffa5]">Just 5 Days</span>
        </p>
        <p className="text-[14px] md:text-[16px] text-center text-[#f5f5f5]">
          Our streamlined process ensures fast delivery without compromising
          quality.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center my-10 gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-[304px] h-[263px] flex flex-col items-center gap-5 justify-center bg-[#192420] rounded-lg cursor-pointer"
          >
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-[18px] px-2 text-[#1FFFA5] text-[12px] rounded-full border border-[#1FFFA5] bg-[#151E1B] opacity-100">
              {step.day}
            </span>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[84px] h-[84px] flex items-center justify-center rounded-full bg-[#003D25]"
            >
              {step.icon}
            </motion.div>
            <div className="w-[232px] space-y-2 text-center">
              <h1 className="text-[20px] font-semibold text-[#f5f5f5]">
                {step.title}
              </h1>
              <p className="text-[14px] text-[#b2b2b2]">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
