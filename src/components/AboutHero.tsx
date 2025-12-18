"use client";

import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="bg-[#2a2a2a] py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light mb-24">
          Luxury Living Awaits
        </h1>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6 md:justify-center lg:justify-end">
        {/* Orange Badge */}
        <div className="relative w-36 h-36 md:w-40 md:h-40 shrink-0">
          <div className="w-full h-full rounded-full bg-[#E86A33] flex items-center justify-center">
            {/* Circular Text */}
            <svg viewBox="0 0 160 160" className="absolute w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 80, 80 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                />
              </defs>
              <text fill="white" fontSize="11" fontWeight="400" letterSpacing="1">
                <textPath href="#circlePath" startOffset="0%">
                  2 HOURS - BEST SUPPORT - RESPONSE IN -
                </textPath>
              </text>
            </svg>
            {/* Arrow Icon */}
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>

        {/* Divider Line + Description */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block w-16 h-px bg-gray-600"></div>
          <p className="text-lg md:text-xl leading-relaxed max-w-lg">
            <span className="text-white font-medium">
              Explore our handpicked selection of the most exquisite homes in prime locations,
            </span>{" "}
            <span className="text-gray-400">
              designed to captivate and inspire. Each featured property showcases unparalleled
              luxury.
            </span>
          </p>
        </div>
        </div>

        {/* Random Image */}
        <div className="mt-16">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=600&fit=crop"
            alt="Luxury property"
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
