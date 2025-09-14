import React from "react";
import Image from "next/image";
import TrustedBadge from "./TrustedBadge";
import Navbar from "./Navbar";
import Form from "./Form";

export default function Banner() {
  return (
    <section className="relative min-h-auto lg:min-h-screen  overflow-hidden">
      {/* Navbar */}
      <Navbar></Navbar>

      <div className="flex flex-col py-16 items-center justify-center">
        <div className="md:max-w-[614px] lg:max-w-[960px] text-center">
          {/* Badge */}
          <div className="flex justify-center items-center mb-4">
            <TrustedBadge />
          </div>

          {/* Heading */}
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

        <div className=" md:max-w-[614px] lg:max-w-[794px] mx-auto">
          {/* Form */}
          <Form></Form>

          {/* Footer benefits */}
          <div className="grid grid-cols-2 md:grid-cols-3  place-items-start md:place-items-center  gap-0 mt-8 text-gray-400 text-sm">
            <div className="flex items-center  gap-2">
              <Image src="/icons/Lock.png" alt="ssl" width={12} height={12} />{" "}
              SSL secure
            </div>
            <div className="flex items-center  gap-2">
              <Image src="/icons/Check.png" alt="ssl" width={12} height={12} />{" "}
              Money-back guarantee
            </div>
            <div className="flex items-center  gap-2">
              <Image src="/icons/Vector.png" alt="ssl" width={12} height={12} />{" "}
              Satisfaction guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
