"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export default function CarouselOne() {
  return (
    <div className="w-full mb-10 bg-transparent">
      <Marquee
        gradient={false} // removes default gradient background
        speed={100} // control scrolling speed
        pauseOnHover={true} // optional
        className="flex items-center"
      >
        {[
          "/Carousel/Size=Default.png",
          "/Carousel/Size=Default-1.png",
          "/Carousel/Size=Default-2.png",
          "/Carousel/Size=Default-3.png",
          "/Carousel/Size=image 1.png",
        ].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[393px] md:w-[743px] lg:w-full  "
          >
            <img
              src={src}
              alt={`slide ${index + 1}`}
              className="w-full px-2 rounded-2xl h-auto lg:h-[470px] object-cover"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
