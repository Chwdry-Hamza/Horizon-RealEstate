"use client";

import Image from "next/image";

const AboutStory = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Luxury Home"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#af8e5b] rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-[#af8e5b] text-lg font-medium">Our Story</span>
            <h2 className="text-white text-4xl md:text-5xl font-semibold mt-4 mb-6">
              Redefining Luxury Real Estate Since 2010
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Founded in Dubai, Horizon Homes has been at the forefront of luxury real estate for over a decade. Our journey began with a simple vision: to connect discerning clients with extraordinary properties that reflect their lifestyle and aspirations.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Today, we pride ourselves on our unparalleled market knowledge, personalized service, and commitment to excellence. Every property we represent is carefully curated to meet the highest standards of luxury living.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-[#af8e5b] text-4xl font-bold mb-2">15+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-[#af8e5b] text-4xl font-bold mb-2">500+</p>
                <p className="text-gray-400 text-sm">Properties Sold</p>
              </div>
              <div>
                <p className="text-[#af8e5b] text-4xl font-bold mb-2">98%</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
