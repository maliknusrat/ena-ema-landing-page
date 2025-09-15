
"use client";

import { motion } from "framer-motion";
import React from "react";
import Form from "./Form";
import Image from "next/image";

export default function FootBanner() {
  const items = [
    { src: "/icons/Lock.png", alt: "ssl", text: "SSL secure" },
    { src: "/icons/Check.png", alt: "check", text: "Money-back guarantee" },
    { src: "/icons/Vector.png", alt: "satisfaction", text: "Satisfaction guaranteed" },
  ];
  return (
    <div>
      <div className="px-2 md:px-0  md:max-w-[614px] lg:max-w-[794px] mx-auto">
        <Form></Form>

        <div className="grid grid-cols-2 md:grid-cols-3 place-items-start md:place-items-center gap-0 mt-4 text-gray-400 text-sm">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src={item.src} alt={item.alt} width={12} height={12} />
          {item.text}
        </motion.div>
      ))}
    </div>
      </div>
    </div>
  );
}
