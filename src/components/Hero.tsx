"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-screen min-h-150">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-between py-8 md:py-16">
        {/* Top Left Text */}
        <div className="mt-16 md:mt-20">
          <p className="text-white text-base md:text-lg max-w-70 leading-relaxed">
            Connect with our experienced agents for the best deals.
          </p>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4 md:pb-8">
          {/* Left Side - Heading and Button */}
          <div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 md:mb-8">
              Luxury Living Awaits
            </h1>
            <Link
              href="/properties"
              className="inline-block bg-[#af8e5b] hover:bg-[#9a7d4f] text-black text-sm font-medium px-6 md:px-8 py-3 md:py-4 rounded transition-colors"
            >
              Explore More
            </Link>
          </div>

          {/* Right Side - Scroll Down - Hidden on small screens */}
          <button
            onClick={scrollDown}
            className="hidden md:flex flex-col items-center gap-3 text-white hover:text-[#af8e5b] transition-colors"
          >
            <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-[#af8e5b]">
              <ArrowDown size={24} />
            </div>
            <span className="text-sm">Scroll down</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
