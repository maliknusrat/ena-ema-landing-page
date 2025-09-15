import React from "react";
import Marquee from "react-fast-marquee";
import { FaCheck } from "react-icons/fa6";
import MobileViewCase from "./MobileViewCase";

export default function CaseStudies() {
  return (
    <div className="bg-[#0a0f0d] py-10">
      <div>
        <p className="Manrope text-[36px] lg:text-[48px] text-center text-[#f5f5f5]">
          Case Studies
        </p>
        <p className="Manrope text-[16px] text-center text-[#f5f5f5]">
          See the designs that delivered results
        </p>
      </div>

    <div className="hidden md:block"> <Marquee
        speed={100}
        pauseOnHover={true}
        className=" flex items-center my-10"
      >
        {/* Card 1 */}
        <div className="bg-[#151E1B] mx-2 border-2 rounded-xl border-[#2A3C36] md:w-[583px] md:h-[504px] transition-all duration-300 ease-out hover:border-[#1FFFA5] hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)]">
          <img
            src="/case-studies/image 26.png"
            className="w-full h-[372px] object-cover rounded-t-xl"
          />
          <div className="w-full p-3 flex items-start justify-between">
            <div>
              <p className="text-[24px] font-bold text-[#f5f5f5] Manrope">
                Flowpilot
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <button className="w-full h-[34px] text-[12px] px-4 py-2 flex items-center justify-center gap-1 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                20% high conversion than average in first week
              </button>
              <button className="h-[34px] text-[12px] px-3 py-2 flex items-center justify-center gap-2 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                Clean and modern design with clear CTA
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#151E1B] mx-2 border-2 rounded-xl border-[#2A3C36] md:w-[583px] md:h-[504px] transition-all duration-300 ease-out hover:border-[#1FFFA5] hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)]">
          <img
            src="/case-studies/image 27.png"
            className="w-full h-[372px] object-cover rounded-t-xl"
          />
          <div className="w-full p-3 flex items-start justify-between">
            <div>
              <p className="text-[24px] font-bold text-[#f5f5f5] Manrope">
                Flowpilot
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <button className="w-full h-[34px] text-[12px] px-4 py-2 flex items-center justify-center gap-1 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                20% high conversion than average in first week
              </button>
              <button className="h-[34px] text-[12px] px-3 py-2 flex items-center justify-center gap-2 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                Clean and modern design with clear CTA
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#151E1B] mx-2 border-2 rounded-xl border-[#2A3C36] md:w-[583px] md:h-[504px] transition-all duration-300 ease-out hover:border-[#1FFFA5] hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)]">
          <img
            src="/case-studies/MacBook Pro 16_ - 1.png"
            className="w-full h-[372px] object-cover rounded-t-xl"
          />
          <div className="w-full p-3 flex items-start justify-between">
            <div>
              <p className="text-[24px] font-bold text-[#f5f5f5] Manrope">
                Flowpilot
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <button className="w-full h-[34px] text-[12px] px-4 py-2 flex items-center justify-center gap-1 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                20% high conversion than average in first week
              </button>
              <button className="h-[34px] text-[12px] px-3 py-2 flex items-center justify-center gap-2 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                Clean and modern design with clear CTA
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#151E1B] mx-2 border-2 rounded-xl border-[#2A3C36] md:w-[583px] md:h-[504px] transition-all duration-300 ease-out hover:border-[#1FFFA5] hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)]">
          <img
            src="/case-studies/MacBook Pro 16_ - 2.png"
            className="w-full h-[372px] object-cover rounded-t-xl"
          />
          <div className="w-full p-3 flex items-start justify-between">
            <div>
              <p className="text-[24px] font-bold text-[#f5f5f5] Manrope">
                GrowthSummit
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <button className="w-full h-[34px] text-[12px] px-4 py-2 flex items-center justify-center gap-1 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                20% high conversion than average in first week
              </button>
              <button className="h-[34px] text-[12px] px-3 py-2 flex items-center justify-center gap-2 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                Clean and modern design with clear CTA
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#151E1B] mx-2 border-2 rounded-xl border-[#2A3C36] md:w-[583px] md:h-[504px] transition-all duration-300 ease-out hover:border-[#1FFFA5] hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)]">
          <img
            src="/case-studies/MacBook Pro 16_ - 3.png"
            className="w-full h-[372px] object-cover rounded-t-xl"
          />
          <div className="w-full p-3 flex items-start justify-between">
            <div>
              <p className="text-[24px] font-bold text-[#f5f5f5] Manrope">
                GrowthSummit
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <button className="w-full h-[34px] text-[12px] px-4 py-2 flex items-center justify-center gap-1 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                20% high conversion than average in first week
              </button>
              <button className="h-[34px] text-[12px] px-3 py-2 flex items-center justify-center gap-2 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
                <FaCheck className="text-[#1FFFA5] text-[16px]" />
                Clean and modern design with clear CTA
              </button>
            </div>
          </div>
        </div>
      </Marquee></div>

     <div className="block md:hidden my-10 px-1">  <MobileViewCase></MobileViewCase></div>
     



      {/* button */}
      <div className="flex items-center justify-center">
        {" "}
        <button
          type="submit"
          className=" px-8 py-4 bg-[#1FFFA5] text-[#0A0F0D] font-semibold rounded-lg 
             shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset] 
             transition-all duration-200 ease-in-out
             hover:bg-[#17d78a] 
             hover:shadow-[0px_7px_8px_0px_#FFFFFF80_inset,0px_9px_24px_0px_#1FFFA540]"
        >
          I want similar results →
        </button>
      </div>
    </div>
  );
}
