import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function MobileViewCase() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Card 1 */}
      <div className="bg-[#151E1B] mx-2 border-2 rounded-xl border-[#2A3C36] md:w-[583px] md:h-[504px] transition-all duration-300 ease-out hover:border-[#1FFFA5] hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)]">
        <img
          src="/case-studies/image 26.png"
          className="w-full h-auto object-cover rounded-t-xl"
        />
        <div className="w-full p-3 flex items-start justify-between">
          <div>
            <p className="text-[16px] font-bold text-[#f5f5f5] Manrope">
              Flowpilot
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <button className="w-full h-[34px] text-[10px] px-4 py-2 flex items-center justify-center gap-1 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
              <FaCheck className="text-[#1FFFA5] text-[12px]" />
              20% high conversion than average in first week
            </button>
            <button className="h-[34px] text-[10px] px-3 py-2 flex items-center justify-center gap-2 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
              <FaCheck className="text-[#1FFFA5] text-[12px]" />
              Clean and modern design with clear CTA
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#151E1B] mx-2 border-2 rounded-xl border-[#2A3C36] md:w-[583px] md:h-[504px] transition-all duration-300 ease-out hover:border-[#1FFFA5] hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)]">
        <img
          src="/case-studies/image 27.png"
          className="w-full h-auto object-cover rounded-t-xl"
        />
        <div className="w-full p-3 flex items-start justify-between">
          <div>
            <p className="text-[16px] font-bold text-[#f5f5f5] Manrope">
              Flowpilot
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <button className="w-full h-[34px] text-[10px] px-4 py-2 flex items-center justify-center gap-1 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
              <FaCheck className="text-[#1FFFA5] text-[12px]" />
              20% high conversion than average in first week
            </button>
            <button className="h-[34px] text-[10px] px-3 py-2 flex items-center justify-center gap-2 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
              <FaCheck className="text-[#1FFFA5] text-[12px]" />
              Clean and modern design with clear CTA
            </button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#151E1B] mx-2 border-2 rounded-xl border-[#2A3C36] md:w-[583px] md:h-[504px] transition-all duration-300 ease-out hover:border-[#1FFFA5] hover:bg-[radial-gradient(51.72%_51.72%_at_50%_92.16%,rgba(31,255,165,0.2)_0%,rgba(31,255,165,0.02)_100%),linear-gradient(0deg,#192420,#192420)]">
        <img
          src="/case-studies/MacBook Pro 16_ - 1.png"
          className="w-full h-auto object-cover rounded-t-xl"
        />
        <div className="w-full p-3 flex items-start justify-between">
          <div>
            <p className="text-[16px] font-bold text-[#f5f5f5] Manrope">
              Flowpilot
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <button className="w-full h-[34px] text-[10px] px-4 py-2 flex items-center justify-center gap-1 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
              <FaCheck className="text-[#1FFFA5] text-[12px]" />
              20% high conversion than average in first week
            </button>
            <button className="h-[34px] text-[10px] px-3 py-2 flex items-center justify-center gap-2 rounded-full border border-[#003D25] bg-[#003D25] opacity-100">
              <FaCheck className="text-[#1FFFA5] text-[12px]" />
              Clean and modern design with clear CTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
