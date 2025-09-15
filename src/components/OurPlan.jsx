"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsLightningCharge } from "react-icons/bs";
import PricingCard from "./PricingCard";

export default function OurPlan() {
  return (
    <section className="bg-[#0A0F0D] text-white py-16 px-6">
      <div className="lg:max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Simple, Transparent Pricing —{" "}
            <span className="text-[#1FFFA5]">Choose Your Plan</span>
          </h2>
          <p className="text-[#b2b2b2] mt-2">
            No hidden fees, no surprises. Just premium landing pages at
            unbeatable prices.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <PricingCard />
        </motion.div>

        {/* Limited Availability */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="my-10 flex items-center justify-start gap-3"
        >
          {/* Floating Icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <BsLightningCharge className="text-4xl text-[#1FFFA5]" />
          </motion.div>
          <div>
            <p className="text-[#f5f5f5] text-[24px] font-semibold">
              Limited Availability
            </p>
            <p className="text-[#b2b2b2] text-sm mt-2">
              We only onboard 5 new clients per month. 2 spots left for this
              month — secure yours today.
            </p>
          </div>
        </motion.div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-[1200px] mx-auto bg-[#192420] rounded-xl mt-12 p-10 text-center shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Special Offer For Early Clients
          </h3>
          <p className="text-[#b2b2b2] mb-6">
            Get <span className="text-[#1FFFA5] font-semibold">10% OFF</span> +
            Free Hosting Setup when you book this week.
          </p>

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.08, rotate: [-1, 1, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="text-[12px] md:text-[16px] px-6 py-3 bg-[#1FFFA5] text-[#0A0F0D] font-semibold rounded-lg 
              shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset] 
              transition-all duration-200 ease-in-out
              hover:bg-[#17d78a] 
              hover:shadow-[0px_7px_8px_0px_#FFFFFF80_inset,0px_9px_24px_0px_#1FFFA540]"
          >
            Claim my 10% discount →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
