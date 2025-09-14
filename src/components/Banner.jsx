import React from "react";
import Image from "next/image";
import TrustedBadge from "./TrustedBadge";
import Navbar from "./Navbar";
import Form from "./Form";
import FootBanner from "./FootBanner";

export default function Banner() {
  return (
    <section className="relative min-h-auto lg:min-h-screen  overflow-hidden">
      <Navbar></Navbar>

      <div className="flex flex-col py-16 items-center justify-center">
        <div className="md:max-w-[614px] lg:max-w-[960px] text-center">
          <div className="flex justify-center items-center mb-4">
            <TrustedBadge />
          </div>

          <h1 className="text-[36px]  md:text-[64px] lg:text-[68px] font-bold text-white leading-tight">
            Strategic Landing Pages That Convert From Just{" "}
            <span className="text-[#1FFFA5]">$200</span>
          </h1>

          {/* Subtitle */}
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
