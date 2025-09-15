"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  const icons = [
    { src: "/icons/mingcute_linkedin-line.png", alt: "linkedin" },
    { src: "/icons/qlementine-icons_facebook-16.png", alt: "facebook" },
    { src: "/icons/lets-icons_insta.png", alt: "instagram" },
    { src: "/icons/ri_behance-fill.png", alt: "behance" },
    { src: "/icons/icon-park-outline_dribble.png", alt: "dribbble" },
  ];
  return (
    <footer className="w-full h-[164px] bg-[#1FFFA5] flex items-center ">
      <div className="hidden md:flex max-w-6xl mx-auto items-center justify-between w-full px-4">
        <div>
          <Image src="/Images/Logo.png" alt="logo" width={150} height={50} />
        </div>

        <div>
          <p className="text-[#0A0F0D] text-sm font-[GeneralSansRegular]">
            © All rights reserved to Ena Ema Technologies
          </p>
        </div>

        <div className="flex items-center gap-3">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src={icon.src} alt={icon.alt} width={16} height={16} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex md:hidden  items-start justify-between w-full px-4">
        <div>
          <Image src="/Images/Logo.png" alt="logo" width={120} height={40} />
        </div>

        <div className="w-1/2 flex flex-col items-end">
          <p className="text-[#0A0F0D] text-xs text-right font-[GeneralSansRegular] mb-2">
            © All rights reserved to Ena Ema Technologies
          </p>

          <div className="flex items-center gap-3">
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src={icon.src} alt={icon.alt} width={16} height={16} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
