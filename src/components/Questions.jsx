
"use client";
import React from "react";
import { motion } from "framer-motion";

const faqVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Questions() {
    const faqs = [
    {
      title: "How long does it take?",
      description:
        "5 days from start to finish - design, development, and deployment included.",
    },
    {
      title: "What's the payment process?",
      description:
        "50% upfront to get started, 50% after final delivery and your approval.",
    },
    {
      title: "Can you deploy on my hosting?",
      description:
        "Absolutely! Deployment is included in every package, on your hosting or ours.",
    },
    {
      title: "Why are your prices so affordable compared to agencies?",
      description:
        "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.",
    },
  ];
  return (
    <div className="px-4 md-px-32 lg:px-0 flex flex-col gap-10  mt-10 mb-20 ">
      <div className="mx-auto max-w-[616px]  md:max-w-[960px] ">
        <p className="text-[#f5f5f5] text-[36px] md:text-[36px] lg:text-[48px]  text-center ">
          Got Questions
          <span className="text-[#1fffa5] ">?</span>
          We’ve Got The Answers
        </p>
      </div>

      <div className="flex flex-col gap-5 mx-auto justify-center">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={faqVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start justify-center rounded-xl px-4 gap-4 max-w-[616px] md:max-w-[616px] lg:max-w-[960px] bg-[#192420] h-[200px] md:h-[160px]"
        >
          <div className="w-3 h-3 rounded-full bg-[#1FFFA5]"></div>
          <h1 className="Manrope font-bold text-[24px] text-[#f5f5f5]">
            {faq.title}
          </h1>
          <p className="text-[18px] text-[#B2B2B2]">{faq.description}</p>
        </motion.div>
      ))}
    </div>
    </div>
  );
}
