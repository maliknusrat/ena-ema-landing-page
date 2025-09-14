import React from "react";

export default function OurPlan() {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Simple, Transparent Pricing —{" "}
          <span className="text-green-400">Choose Your Plan</span>
        </h2>
        <p className="text-gray-400 mt-2">
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-gray-400 mb-6">Perfect for solopreneurs</p>
            <p className="text-3xl font-bold text-green-400 mb-6">$200</p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ 1 Landing Page (Design + Development)</li>
              <li>✔ Hosting Deployment</li>
              <li>✔ 5-Day Delivery</li>
              <li>✔ Basic Support</li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 bg-green-600 rounded-lg hover:bg-green-500 transition">
            Start my project →
          </button>
        </div>

        {/* Standard */}
        <div className="bg-[#0a0a0a] border border-green-400 rounded-xl p-6 flex flex-col justify-between relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
            Most popular
          </span>
          <div>
            <h3 className="text-xl font-semibold mb-2">Standard</h3>
            <p className="text-gray-400 mb-6">
              Best balance of value & features
            </p>
            <p className="text-3xl font-bold text-green-400 mb-6">$300</p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Everything in Basic</li>
              <li>✔ Extra Custom Section</li>
              <li>✔ Free Hosting Setup</li>
              <li>✔ Free Consultation Call</li>
              <li>✔ Priority Support</li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 bg-green-600 rounded-lg hover:bg-green-500 transition">
            Start my project →
          </button>
        </div>

        {/* Premium */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-400 mb-6">For brands & agencies</p>
            <p className="text-3xl font-bold text-green-400 mb-6">$500</p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Everything in Standard</li>
              <li>✔ Advanced Animations</li>
              <li>✔ Priority Delivery (3 Days)</li>
              <li>✔ 6 Months Free Support</li>
              <li>✔ Performance Optimization</li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 bg-green-600 rounded-lg hover:bg-green-500 transition">
            Start my project →
          </button>
        </div>
      </div>

      {/* Limited Availability */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <p className="text-green-400 font-semibold flex items-center justify-center gap-2">
          ⚡ Limited Availability
        </p>
        <p className="text-gray-400 mt-2">
          We only onboard 5 new clients per month. 2 spots left for this month —
          secure yours today.
        </p>
      </div>

      {/* Special Offer */}
      <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-gray-800 rounded-xl mt-12 p-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Special Offer For Early Clients
        </h3>
        <p className="text-gray-400 mb-6">
          Get <span className="text-green-400 font-semibold">10% OFF</span> +
          Free Hosting Setup when you book this week.
        </p>
        <button className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500 transition">
          Claim my 10% discount →
        </button>
      </div>
    </section>
  );
}
