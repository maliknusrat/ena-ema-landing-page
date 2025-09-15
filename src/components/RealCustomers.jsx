import React from "react";
import FootBanner from "./FootBanner";

export default function RealCustomers() {
  return (
    <div className="bg-[#0A0F0D] relative">
    
      <div className=" flex justify-between items-center w-full  absolute inset-0">
        <div className="hidden md:block w-[104px] h-[104px] opacity-100 absolute md:-left-10 lg:-left-30 blur-[200px]
 bg-[#1FFFA5]  rounded-full"></div>
        <div className="hidden md:block w-[104px] h-[104px] opacity-100 absolute md:-right-0  blur-[200px]    bg-[#1FFFA5]  rounded-full"></div>
      </div>

      
      <div className="flex flex-col py-16 items-center justify-center relative z-10">
        <div className="md:max-w-[614px] lg:max-w-[960px] text-center">
          <h1 className="text-[36px] md:text-[64px] lg:text-[68px] font-bold text-white leading-tight">
            Ready to Turn Visitors Into{" "}
            <span className="text-[#1FFFA5]">Real Customers?</span>
          </h1>

          
          <p className="text-[#f5f5f5] mt-4 text-base md:text-lg">
            Don't settle for an average page. Get a premium, conversion-focused{" "}
            <br />
            landing page that pays for itself.
          </p>
        </div>
        <FootBanner />
      </div>
    </div>
  );
}
