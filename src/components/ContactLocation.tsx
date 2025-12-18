"use client";

import Link from "next/link";

const ContactLocation = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-0 w-125 h-125 bg-[#af8e5b]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#af8e5b]/5 rounded-full blur-3xl translate-y-1/2" />

        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-[#af8e5b]/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-[#af8e5b]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-linear-to-r from-[#af8e5b] to-transparent" />
              <span className="text-[#af8e5b] text-xl font-medium tracking-wider uppercase">Location</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              <span className="text-white">Our Office</span>
              <br />
              <span className="text-white/40 italic">On The Map</span>
            </h2>

            {/* Explore indicator */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-0.5 bg-white/30" />
                <div className="w-10 h-10 rounded-full border-2 border-[#af8e5b] flex items-center justify-center group hover:bg-[#af8e5b]/10 transition-colors cursor-pointer">
                  <svg className="w-4 h-4 text-[#af8e5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-500 text-2xl md:text-3xl font-light">Explore Location</span>
            </div>
          </div>

          {/* Button */}
          <Link
            href="https://maps.google.com/?q=New+York"
            target="_blank"
            className="mt-8 lg:mt-0 inline-flex items-center gap-3 bg-linear-to-r from-[#c9a86c] via-[#af8e5b] to-[#8a7045] hover:shadow-lg hover:shadow-[#af8e5b]/20 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
          >
            <span>Get Directions</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Map Container */}
        <div className="relative group">
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-[#af8e5b]/20 rounded-3xl pointer-events-none" />
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#af8e5b] rounded-tl-xl" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#af8e5b] rounded-tr-xl" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#af8e5b] rounded-bl-xl" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#af8e5b] rounded-br-xl" />

          {/* Map */}
          <div className="relative w-full h-125 rounded-2xl overflow-hidden bg-[#1a1a1a]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1703000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating location card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#c9a86c] to-[#af8e5b] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Horizon Homes HQ</h3>
                  <p className="text-gray-400 text-sm mb-3">123 Luxury Avenue, Manhattan<br />New York, NY 10001</p>
                  <div className="flex items-center gap-4">
                    <a href="tel:+1234567890" className="flex items-center gap-2 text-[#af8e5b] text-sm hover:text-[#c9a86c] transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </a>
                    <span className="text-gray-600">|</span>
                    <Link href="https://maps.google.com/?q=New+York" target="_blank" className="flex items-center gap-2 text-[#af8e5b] text-sm hover:text-[#c9a86c] transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Directions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: "50+", label: "Properties Listed", icon: "🏠" },
            { number: "3", label: "Office Locations", icon: "📍" },
            { number: "24/7", label: "Available Support", icon: "💬" },
            { number: "15+", label: "Years Experience", icon: "⭐" }
          ].map((stat, index) => (
            <div
              key={index}
              className="group bg-linear-to-br from-[#1f1f1f] to-[#141414] rounded-xl p-6 border border-white/5 hover:border-[#af8e5b]/30 transition-all duration-300 text-center"
            >
              <span className="text-3xl mb-3 block">{stat.icon}</span>
              <p className="text-[#af8e5b] text-3xl font-bold mb-1">{stat.number}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
