import Image from "next/image";
import React from "react";

export default function Footer() {
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

        
        <div className="flex items-center gap-4">
          <Image src="/icons/mingcute_linkedin-line.png" alt="linkedin" width={18} height={18} />
          <Image src="/icons/qlementine-icons_facebook-16.png" alt="facebook" width={18} height={18} />
          <Image src="/icons/lets-icons_insta.png" alt="instagram" width={18} height={18} />
          <Image src="/icons/ri_behance-fill.png" alt="behance" width={18} height={18} />
          <Image src="/icons/icon-park-outline_dribble.png" alt="dribbble" width={18} height={18} />
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
            <Image src="/icons/mingcute_linkedin-line.png" alt="linkedin" width={16} height={16} />
            <Image src="/icons/qlementine-icons_facebook-16.png" alt="facebook" width={16} height={16} />
            <Image src="/icons/lets-icons_insta.png" alt="instagram" width={16} height={16} />
            <Image src="/icons/ri_behance-fill.png" alt="behance" width={16} height={16} />
            <Image src="/icons/icon-park-outline_dribble.png" alt="dribbble" width={16} height={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}
