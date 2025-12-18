"use client";

const OfficeTime = () => {
  const officeLocations = [
    {
      city: "New York",
      timezone: "EST",
      hours: "Monday - Friday",
      time: "9:00 AM - 6:00 PM",
      icon: "🗽"
    },
    {
      city: "Los Angeles",
      timezone: "PST",
      hours: "Monday - Friday",
      time: "9:00 AM - 6:00 PM",
      icon: "🌴"
    },
    {
      city: "London",
      timezone: "GMT",
      hours: "Monday - Friday",
      time: "9:00 AM - 5:00 PM",
      icon: "🇬🇧"
    }
  ];

  return (
    <section className="relative bg-linear-to-b from-[#0f0f0f] to-[#1a1a1a] py-12 md:py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#af8e5b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#af8e5b]/5 rounded-full blur-3xl" />

        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(175,142,91,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-8 md:w-12 h-0.5 bg-linear-to-r from-[#af8e5b] to-transparent" />
              <span className="text-[#af8e5b] text-base md:text-lg font-medium tracking-wider uppercase">Office Hours</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-3 md:mb-4">
              <span className="text-white">Our International</span>
              <br />
              <span className="text-white/40 italic">Offices</span>
            </h2>

            {/* Time indicator */}
            <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6">
              <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Time Zone</span>
              <div className="flex items-center gap-2">
                <div className="w-6 md:w-10 h-0.5 bg-white/30" />
                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full border-2 border-[#af8e5b] flex items-center justify-center animate-pulse">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#af8e5b]" />
                </div>
              </div>
            </div>
          </div>

          {/* Animated Badge - Hidden on mobile */}
          <div className="hidden lg:block relative w-36 h-36 md:w-44 md:h-44 shrink-0 mt-8 lg:mt-0 group">
            <div className="absolute inset-0 rounded-full bg-[#af8e5b]/10 blur-2xl group-hover:bg-[#af8e5b]/20 transition-all duration-500" />
            <div className="relative w-full h-full rounded-full bg-linear-to-br from-[#c9a86c] via-[#af8e5b] to-[#8a7045] flex items-center justify-center shadow-xl shadow-[#af8e5b]/10">
              {/* Rotating text */}
              <svg viewBox="0 0 180 180" className="absolute w-full h-full animate-spin" style={{ animationDuration: '15s' }}>
                <defs>
                  <path
                    id="officeCirclePath"
                    d="M 90, 90 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                  />
                </defs>
                <text fill="white" fontSize="11" fontWeight="500" letterSpacing="2">
                  <textPath href="#officeCirclePath" startOffset="0%">
                    • 24/7 SUPPORT • GLOBAL REACH •
                  </textPath>
                </text>
              </svg>
              {/* Clock icon */}
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                  <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {officeLocations.map((office, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card glow */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#af8e5b]/0 via-[#af8e5b]/20 to-[#af8e5b]/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative bg-linear-to-br from-[#1f1f1f] to-[#141414] rounded-xl md:rounded-2xl p-5 md:p-8 border border-white/5 hover:border-[#af8e5b]/30 transition-all duration-500 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#af8e5b]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                {/* Icon and city */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{office.icon}</span>
                    <div>
                      <h3 className="text-white text-xl font-semibold">{office.city}</h3>
                      <span className="text-[#af8e5b] text-sm font-medium">{office.timezone}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#af8e5b]/10 flex items-center justify-center group-hover:bg-[#af8e5b]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#af8e5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-6" />

                {/* Hours info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Working Days</span>
                    <span className="text-white text-sm font-medium">{office.hours}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Office Hours</span>
                    <span className="text-[#af8e5b] text-sm font-semibold">{office.time}</span>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-500 text-xs font-medium">Currently Open</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info bar */}
        <div className="mt-8 md:mt-12 bg-linear-to-r from-[#af8e5b]/10 via-[#af8e5b]/5 to-[#af8e5b]/10 rounded-xl md:rounded-2xl p-5 md:p-8 border border-[#af8e5b]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#af8e5b]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#af8e5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-lg">Need Immediate Assistance?</p>
                <p className="text-gray-400 text-sm">Our team responds within 2 hours during business hours</p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-[#af8e5b] hover:bg-[#9a7d4f] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#af8e5b]/20">
              Schedule a Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeTime;
