"use client";

import Image from "next/image";
import { useState } from "react";

const ContactHero = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section className="relative bg-linear-to-br from-[#1a1612] via-[#2a2420] to-[#1a1612] py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#af8e5b]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#af8e5b]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#af8e5b]/3 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22%20stroke%3D%22rgba(175%2C142%2C91%2C0.03)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-20">
          {/* Title & Contact Info */}
          <div className="relative">
            {/* Decorative line */}
            <div className="absolute -left-8 top-0 w-1 h-32 bg-linear-to-b from-[#af8e5b] to-transparent rounded-full" />

            <span className="text-[#af8e5b] text-lg font-medium tracking-wider uppercase mb-4 block">Contact Us</span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8">
              <span className="text-white">Get In Touch</span>
              <span className="text-[#af8e5b]"> &</span>
              <br />
              <span className="text-white/40 italic">Fill Up The Form</span>
            </h1>

            {/* Contact Info Cards */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#af8e5b]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#af8e5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">+1 234 567 890</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#af8e5b]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#af8e5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">agent@horizonhomes.com</span>
              </div>
            </div>
          </div>

          {/* Animated Gold Badge */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0 mt-12 lg:mt-0 group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#af8e5b]/20 blur-xl group-hover:bg-[#af8e5b]/30 transition-all duration-500" />

            {/* Main badge */}
            <div className="relative w-full h-full rounded-full bg-linear-to-br from-[#c9a86c] via-[#af8e5b] to-[#8a7045] flex items-center justify-center shadow-2xl shadow-[#af8e5b]/20 group-hover:shadow-[#af8e5b]/40 transition-all duration-500">
              {/* Animated rotating text */}
              <svg viewBox="0 0 200 200" className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                <defs>
                  <path
                    id="contactCirclePath"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text fill="white" fontSize="13" fontWeight="500" letterSpacing="3">
                  <textPath href="#contactCirclePath" startOffset="0%">
                    • RESPONSE IN 2 HOURS • BEST SUPPORT •
                  </textPath>
                </text>
              </svg>

              {/* Center icon */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Form & Image Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form Card */}
          <div className="relative group">
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-[#af8e5b]/20 via-transparent to-[#af8e5b]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-linear-to-br from-[#1f1f1f] to-[#151515] rounded-3xl p-10 border border-white/5 backdrop-blur-xl">
              {/* Form header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white text-xl font-medium">Send a Message</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#af8e5b]/30" />
                  <div className="w-3 h-3 rounded-full bg-[#af8e5b]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#af8e5b]" />
                </div>
              </div>

              <form className="space-y-6">
                {/* Full Name */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' ? '-top-2 text-xs text-[#af8e5b] bg-[#1a1a1a] px-2' : 'top-4 text-gray-500 text-sm'}`}>
                    Full name*
                  </label>
                  <input
                    type="text"
                    onFocus={() => setFocusedField('name')}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                    className="w-full bg-[#0f0f0f] border-2 border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#af8e5b] transition-all duration-300 hover:border-white/10"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' ? '-top-2 text-xs text-[#af8e5b] bg-[#1a1a1a] px-2' : 'top-4 text-gray-500 text-sm'}`}>
                    Email address*
                  </label>
                  <input
                    type="email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                    className="w-full bg-[#0f0f0f] border-2 border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#af8e5b] transition-all duration-300 hover:border-white/10"
                  />
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'phone' ? '-top-2 text-xs text-[#af8e5b] bg-[#1a1a1a] px-2' : 'top-4 text-gray-500 text-sm'}`}>
                      Phone*
                    </label>
                    <input
                      type="tel"
                      onFocus={() => setFocusedField('phone')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                      className="w-full bg-[#0f0f0f] border-2 border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#af8e5b] transition-all duration-300 hover:border-white/10"
                    />
                  </div>
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'subject' ? '-top-2 text-xs text-[#af8e5b] bg-[#1a1a1a] px-2' : 'top-4 text-gray-500 text-sm'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      onFocus={() => setFocusedField('subject')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                      className="w-full bg-[#0f0f0f] border-2 border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#af8e5b] transition-all duration-300 hover:border-white/10"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' ? '-top-2 text-xs text-[#af8e5b] bg-[#1a1a1a] px-2' : 'top-4 text-gray-500 text-sm'}`}>
                    Your message
                  </label>
                  <textarea
                    rows={5}
                    onFocus={() => setFocusedField('message')}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                    className="w-full bg-[#0f0f0f] border-2 border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#af8e5b] transition-all duration-300 resize-none hover:border-white/10"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full group/btn overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-[#c9a86c] via-[#af8e5b] to-[#8a7045] transition-transform duration-500 group-hover/btn:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-r from-[#af8e5b] to-[#c9a86c] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-black font-semibold py-5">
                    Send Message
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            {/* Main image container */}
            <div className="relative h-150 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Contact us"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating info card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#af8e5b] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Visit Our Office</p>
                    <p className="text-white/60 text-sm">123 Luxury Avenue, New York</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#af8e5b]/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#af8e5b]/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
