"use client";

const FAQsHero = () => {
  return (
    <section className="bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Heading */}
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light mb-16">
          Frequently Asked Questions
        </h1>

        {/* Badge and Description Row */}
        <div className="flex items-center justify-end gap-8">
          {/* Circular Badge */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0">
            <div className="relative w-full h-full rounded-full bg-[#af8e5b] flex items-center justify-center">
              {/* Rotating text */}
              <svg
                viewBox="0 0 160 160"
                className="absolute w-full h-full animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <defs>
                  <path
                    id="faqCirclePath"
                    d="M 80, 80 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                  />
                </defs>
                <text
                  fill="white"
                  fontSize="9"
                  fontWeight="500"
                  letterSpacing="1.5"
                >
                  <textPath href="#faqCirclePath" startOffset="0%">
                    2 HOURS - BEST SUPPORT - RESPONSE IN -
                  </textPath>
                </text>
              </svg>
              {/* Arrow icon */}
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-lg md:text-xl max-w-lg">
            <span className="text-white font-medium">
              High skilled agents in our real estate firm
            </span>
            <span className="text-gray-400">
              {" "}
              homes in prime locations, designed to captivate and inspire.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQsHero;
