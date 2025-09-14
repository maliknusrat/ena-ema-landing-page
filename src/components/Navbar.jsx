import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <Image
        src="/Images/Ellipse 1.png"
        alt="bg"
        width={816}
        height={0}
        className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
      />
     
      <div
        className=" flex items-center justify-center
               mb-6"
      >
        <Image
          src="/Images/Logo-white.png"
          alt="logo"
          width={90}
          height={20}
          className="py-5 relative z-10"
        />
      </div>
    </div>
  );
}
