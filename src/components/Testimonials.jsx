import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function TestimonialCard({ name, role, text, image, stars = 5 }) {
  return (
    <div className="w-[314px] mx-2 h-[262px] bg-[#192420] rounded-lg p-6 flex flex-col justify-between">
      {/* Stars */}
      <div className="flex space-x-1">
        {Array.from({ length: stars }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="#1FFFA5"
            viewBox="0 0 24 24"
            stroke="none"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c.414 0 .787.252.939.636l2.086 5.217 5.64.402c.413.03.77.293.894.687.124.394-.01.823-.34 1.09l-4.28 3.53 1.347 5.49c.096.391-.055.804-.388 1.037a.956.956 0 01-1.07.056L12 18.354l-4.828 2.775a.956.956 0 01-1.07-.056.96.96 0 01-.388-1.037l1.347-5.49-4.28-3.53a.96.96 0 01-.34-1.09c.124-.394.481-.657.894-.687l5.64-.402 2.086-5.217A.965.965 0 0112 2.25z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>

      
      <p className="text-[#f5f5f5] text-[14px] leading-relaxed mt-4">{`"${text}"`}</p>
      <div className="flex items-center gap-3 mt-6">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h3 className="text-[#f5f5f5] font-semibold text-[14px]">{name}</h3>
          <p className="text-[#b2b2b2] text-[12px]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
 
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "SaaS Founder",
      text: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
      image: "/Testimonials/Ellipse 3.png",
    },
    {
      name: "Mike Chen",
      role: "Fitness Coach",
      text: "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
      image: "/Testimonials/Ellipse 3-1.png",
    },
    {
      name: "Amanda Rodriguez",
      role: "E-Commerce Owner",
      text: "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
      image: "/Testimonials/Ellipse 3-2.png",
    },
    {
      name: "David Lee",
      role: "SaaS Founder",
      text: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
      image: "/Testimonials/Ellipse 3-3.png",
    },
  ];

  return (
    <div className="max-w-[361px] md:max-w-[612px] lg:max-w-[1220px] mx-auto mt-10 mb-30">
     
      <div className="max-w-[361px] md:max-w-full mb-10 lg:max-w-[1200px]">
        <p className="text-[36px] md:text-[34px] lg:text-[48px] Manrope text-start">
          What Our Clients Are Saying
          <span className="text-[#1FFFA5]"> About Us</span>
        </p>
        <p className="Manrope text-[14px] md:text-[14px] lg:text-[16px] text-start text-[#f5f5f5]">
          Real feedback from real businesses who've seen real results.
        </p>
      </div>

      <Marquee>
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </Marquee>
    </div>
  );
}
