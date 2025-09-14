import React from 'react'

export default function () {
  return (
    <div>  <div className="mt-10 bg-[#151E1B] border border-[#2A3C36] rounded-xl p-6 shadow-[0px_12px_32px_0px_#1FFFA51A]">
            <form className="flex flex-col items-center gap-4">
              <div className="w-full flex flex-col md:flex-row items-center gap-4">
  {/* Name input with icon */}
  <div className="relative w-full flex-1">
    <span className="absolute left-3 top-1/2 -translate-y-1/2">
      <img src="/icons/User.png" alt="user" className="w-4 h-4" />
    </span>
    <input
      type="text"
      placeholder="Your name"
      className="w-full pl-10 px-4 py-3 rounded-sm bg-[#0A0F0D] text-white placeholder-gray-400 border-2 border-[#2A3C36] focus:outline-none focus:ring-2 focus:ring-[#1FFFA5]"
    />
  </div>

  {/* Email input with icon */}
  <div className="relative w-full flex-1">
    <span className="absolute left-3 top-1/2 -translate-y-1/2">
      <img src="/icons/EnvelopeSimpleOpen.png" alt="email" className="w-4 h-4" />
    </span>
    <input
      type="email"
      placeholder="Email Address"
      className="w-full pl-10 px-4 py-3 rounded-sm bg-[#0A0F0D] text-white placeholder-gray-400 border-2 border-[#2A3C36] focus:outline-none focus:ring-2 focus:ring-[#1FFFA5]"
    />
  </div>

  {/* Phone input with icon */}
  <div className="relative w-full flex-1">
    <span className="absolute left-3 top-1/2 -translate-y-1/2">
      <img src="/icons/Phone.png" alt="phone" className="w-4 h-4" />
    </span>
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full pl-10 px-4 py-3 rounded-sm bg-[#0A0F0D] text-white placeholder-gray-400 border-2 border-[#2A3C36] focus:outline-none focus:ring-2 focus:ring-[#1FFFA5]"
    />
  </div>
</div>

              <button
  type="submit"
  className="w-full px-6 py-3 bg-[#1FFFA5] text-[#0A0F0D] font-semibold rounded-lg hover:bg-[#17d78a] transition-all shadow-[0px_9px_24px_0px_#1FFFA540,0px_7px_8px_0px_#FFFFFF80_inset]"
>
  Get my high-converting landing page →
</button>


            </form>
          </div></div>
  )
}
