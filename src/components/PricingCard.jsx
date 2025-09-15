"use client";
import { motion } from "framer-motion";

export default function PricingCard() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-9">
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-[364px] h-[425] md:w-full bg-[#192420] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-[#b2b2b2] mb-6">Perfect for solopreneurs</p>
            </div>
            <p className="text-3xl font-bold text-[#1FFFA5] mb-6">$200</p>
          </div>
          <div className="border-[1px] border-[#2A3C36] border-b mb-4"></div>
          <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] marker:text-[#1FFFA5]">
            <li>1 Landing Page (Design + Development)</li>
            <li>Hosting Deployment</li>
            <li>5-Day Delivery</li>
            <li>Basic Support</li>
          </ul>
        </div>
        <button className="mt-8 w-full py-3 bg-[#003D25] text-[#00E58A] rounded-lg  transition">
          Start my project →
        </button>
      </motion.div>

      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-[#192420] w-[364px] h-[425] md:w-full border border-[#1FFFA5] rounded-2xl p-6 flex flex-col justify-between relative"
      >
        <span className="absolute -top-3 left-1/4 -translate-x-1/2 border bg-[#192420] border-[#1FFFA5] text-[#1FFFA5] text-sm font-semibold px-3 py-1 rounded-full">
          Most popular
        </span>
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-[#b2b2b2] mb-6">
                Best balance of value & features
              </p>
            </div>
            <p className="text-3xl font-bold text-[#1FFFA5] mb-6">$300</p>
          </div>
          <div className="border-[1px] border-[#2A3C36] border-b mb-4"></div>
          <ul className="list-disc list-inside space-y-3 text-[#B2B2B2] marker:text-[#1FFFA5]">
            <li>Everything in Basic</li>
            <li>Extra Custom Section</li>
            <li>Free Hosting Setup</li>
            <li>Free Consultation Call</li>
            <li>Priority Support</li>
          </ul>
        </div>
        <button
          type="submit"
          className="text-[12px] md:text-[16px] px-6 py-3 bg-[#1FFFA5] text-[#0A0F0D] font-semibold rounded-lg 
          shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset] 
          transition-all duration-200 ease-in-out
          hover:bg-[#17d78a] 
          hover:shadow-[0px_7px_8px_0px_#FFFFFF80_inset,0px_9px_24px_0px_#1FFFA540]"
        >
          Start my project →
        </button>
      </motion.div>

      <motion.div
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-[#192420] w-[364px] h-[425] md:w-full border border-gray-800 rounded-2xl p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-[#b2b2b2] mb-6">For brands & agencies</p>
            </div>
            <p className="text-3xl font-bold text-[#1FFFA5] mb-6">$500</p>
          </div>
          <div className="border-[1px] border-[#2A3C36] border-b mb-4"></div>
          <ul className="list-disc list-inside space-y-3 text-[#B2B2B2] marker:text-[#1FFFA5]">
            <li>Everything in Standard</li>
            <li>Advanced Animations</li>
            <li>Priority Delivery (3 Days)</li>
            <li>6 Months Free Support</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
        <button className="mt-8 w-full py-3 bg-[#003D25] text-[#00E58A] rounded-lg  transition">
          Start my project →
        </button>
      </motion.div>
    </div>
  );
}
