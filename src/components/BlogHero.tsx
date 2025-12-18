"use client";

import Image from "next/image";
import Link from "next/link";

const featuredArticles = [
  {
    id: 1,
    category: "Trends",
    date: "Dec 4",
    title: "The Ultimate Guide to Home Renovations for Maximum ROI",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 2,
    category: "Real estate",
    date: "Dec 4",
    title: "Understanding Market Trends in 2024: What Buyers Need to Know",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

const BlogHero = () => {
  return (
    <section className="bg-[#1a1a1a] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Heading */}
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light mb-16">
          Our Featured Articles
        </h1>

        {/* Badge and Description Row */}
        <div className="flex items-center justify-end gap-8 mb-16">
          {/* Circular Badge */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0">
            <div className="relative w-full h-full rounded-full bg-[#af8e5b] flex items-center justify-center">
              {/* Rotating text */}
              <svg viewBox="0 0 160 160" className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                <defs>
                  <path
                    id="journalCirclePath"
                    d="M 80, 80 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                  />
                </defs>
                <text fill="white" fontSize="9" fontWeight="500" letterSpacing="1.5">
                  <textPath href="#journalCirclePath" startOffset="0%">
                    2 HOURS - BEST SUPPORT - RESPONSE IN -
                  </textPath>
                </text>
              </svg>
              {/* Four arrows icon */}
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8 6h3v4H7V7L3 11l4 4v-3h4v4H8l4 4 4-4h-3v-4h4v3l4-4-4-4v3h-4V6h3l-4-4z" />
              </svg>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-lg md:text-xl max-w-lg">
            <span className="text-white font-medium">High skilled agents in our real estate firm</span>
            <span className="text-gray-400"> homes in prime locations, designed to captivate and inspire.</span>
          </p>
        </div>

        {/* Featured Articles - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Large Article - Left */}
          <Link
            href={`/journal/${featuredArticles[0].id}`}
            className="group block md:col-span-3"
          >
            <article>
              <div className="relative h-87.5 md:h-112.5 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={featuredArticles[0].image}
                  alt={featuredArticles[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-600" />
                  <span className="text-gray-400 text-base">{featuredArticles[0].category}</span>
                </div>
                <span className="text-gray-400 text-base">{featuredArticles[0].date}</span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-medium leading-snug group-hover:text-[#af8e5b] transition-colors">
                {featuredArticles[0].title}
              </h3>
            </article>
          </Link>

          {/* Smaller Article - Right */}
          <Link
            href={`/journal/${featuredArticles[1].id}`}
            className="group block md:col-span-2"
          >
            <article>
              <div className="relative h-87.5 md:h-112.5 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={featuredArticles[1].image}
                  alt={featuredArticles[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-600" />
                  <span className="text-gray-400 text-base">{featuredArticles[1].category}</span>
                </div>
                <span className="text-gray-400 text-base">{featuredArticles[1].date}</span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-medium leading-snug group-hover:text-[#af8e5b] transition-colors">
                {featuredArticles[1].title}
              </h3>
            </article>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
