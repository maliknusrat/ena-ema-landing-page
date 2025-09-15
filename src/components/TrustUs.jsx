"use client";
import { motion } from "framer-motion";
import React from "react";

export default function TrustUs() {
  const cards = [
    {
      img: "/trust-icons/RocketLaunch.png",
      title: "Proven Conversion Framework",
      desc: "Designs based on 100+ tested layouts that actually convert visitors into customers.",
    },
    {
      img: "/trust-icons/Palette.png",
      title: "Agency Level Design",
      desc: "Modern, premium, and tailored for your brand - without the agency price tag.",
    },
    {
      img: "/trust-icons/Lightning.png",
      title: "5-day Guaranteed Delivery",
      desc: "With a highly professional team, we deliver on time, everytime.",
    },
    {
      img: "/trust-icons/CurrencyDollar.png",
      title: "Transparent Pricing",
      desc: "No hidden fees, just clear value. What you see is what you pay.",
    },
    {
      img: "/trust-icons/ArrowsClockwise.png",
      title: "Revisions Until You're Happy",
      desc: "We keep working until it's right. Your satisfaction is guaranteed.",
    },
    {
      img: "/trust-icons/Trophy.png",
      title: "Results That Speak",
      desc: "Our pages consistently outperform industry averages for conversions.",
    },
  ];

  const floatTransition = {
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut",
  };

  return (
    <div>
      <div className="max-w-[361px] md:max-w-[500px] lg:max-w-[1200px] mx-auto">
        <p className="text-[36px] md:text-[36px] lg:text-[48px] Manrope text-center">
          Why Businesses <span className="text-[#1FFFA5]">Trust Us</span> With
          Their Designs
        </p>
        <p className="Manrope mt-2 text-[14px] md:text-[14px] lg:text-[16px] text-center text-[#f5f5f5]">
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>
      </div>
      <div className="max-w-[361px] md:max-w-[616px] lg:max-w-[1200px] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(31, 255, 165, 0.4)",
              }}
              className="md:w-[200px] md:h-[264px] md:p-4 
                       lg:w-[376px] h-[204px] 
                       flex flex-col items-start justify-center 
                       rounded-lg px-12 lg:px-12
                       bg-[#192420] 
                       transition-all duration-300 ease-out
                       hover:border hover:border-[#1FFFA5]
                       hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)] cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="w-12"
                  animate={{ y: [0, -5, 0] }}
                  transition={floatTransition}
                />
              </motion.div>

              <div className="mt-5">
                <motion.p
                  className="text-base text-[#f5f5f5] font-semibold Manrope"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.25 }}
                  viewport={{ once: true }}
                >
                  {card.title}
                </motion.p>
                <motion.p
                  className="text-sm mt-3 text-[#b2b2b2] GeneralSansRegular"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  {card.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
