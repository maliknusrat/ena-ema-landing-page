import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import PricingCard from "./PricingCard";

export default function OurPlan() {
  return (
    <section className="bg-[#0A0F0D] text-white py-16 px-6">
      <div className="lg:max-w-[1200px] mx-auto ">
        {/* Heading */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Simple, Transparent Pricing —{" "}
            <span className="text-[#1FFFA5] ">Choose Your Plan</span>
          </h2>
          <p className="text-[#b2b2b2] mt-2">
            No hidden fees, no surprises. Just premium landing pages at
            unbeatable prices.
          </p>
        </div>

        {/* Pricing Cards */}
        <PricingCard></PricingCard>

        {/* Limited Availability */}
        <div className="my-10 flex items-center justify-start  gap-3">
          <div>
            <BsLightningCharge className="text-4xl text-[#1FFFA5]" />
          </div>
          <div className="">
            <p className="text-[#f5f5f5] text-[24px]  font-semibold">
              Limited Availability
            </p>
            <p className="text-[#b2b2b2] text-sm mt-2">
              We only onboard 5 new clients per month. 2 spots left for this
              month — secure yours today.
            </p>
          </div>
        </div>

        {/* Special Offer */}
        <div className="max-w-[1200px] mx-auto bg-[#192420] rounded-xl mt-12 p-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Special Offer For Early Clients
          </h3>
          <p className="text-[#b2b2b2] mb-6">
            Get <span className="text-[#1FFFA5]  font-semibold">10% OFF</span> +
            Free Hosting Setup when you book this week.
          </p>

          <button
            type="submit"
            className="text-[12px] md:text-[16px]  px-6 py-3 bg-[#1FFFA5] text-[#0A0F0D] font-semibold rounded-lg 
             shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset] 
             transition-all duration-200 ease-in-out
             hover:bg-[#17d78a] 
             hover:shadow-[0px_7px_8px_0px_#FFFFFF80_inset,0px_9px_24px_0px_#1FFFA540]"
          >
            Claim my 10% discount →
          </button>
        </div>
      </div>
    </section>
  );
}
