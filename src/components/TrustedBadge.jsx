
import Image from "next/image";

export default function TrustedBadge() {
  return (
    <div className="w-[334px] flex items-center justify-center gap-3 rounded-full  border-t-[1px] border-[#1FFFA5] bg-[#192420]  py-2 text-gray-300 ">
      
      <Image
        className=" relative z-10"
        src="/icons/Sparkle.png"
        alt="trusted"
        width={12}
        height={12}
      />

      <span className="text-[12px] font-extralight GeneralSansRegular">
        Trusted by 30+ startups & entrepreneurs worldwide
      </span>
    </div>
  );
}
