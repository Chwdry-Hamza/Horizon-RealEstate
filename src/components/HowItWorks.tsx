"use client";

import Image from "next/image";

const steps = [
  {
    title: "Consultation and Planning",
    description:
      "Our professional photographers capture high-resolution images of your property.",
  },
  {
    title: "Professional Photography",
    description:
      "Our professional photographers capture high-resolution images of your property, ensuring every detail is perfectly showcased.",
  },
  {
    title: "Design and Staging",
    description:
      "Using cutting-edge software, our designers transform your photos into beautifully staged interiors. We add furniture, décor",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#1a1a1a] py-20 relative overflow-hidden">
      {/* 3D Cube Shape */}
      {/* <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <div className="w-40 h-40 relative">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)",
              transform: "perspective(200px) rotateX(10deg) rotateY(-10deg)",
              borderRadius: "8px",
            }}
          />
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-32">
          {/* Left - Title */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
              How Our Virtual Staging
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-white text-4xl md:text-5xl font-semibold">Works</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-[2px] bg-white" />
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Icon and Text */}
          <div className="text-right max-w-sm">
            <div className="flex justify-end mb-4">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="10" height="10" fill="#af8e5b" />
                <rect x="18" y="4" width="10" height="10" fill="#af8e5b" />
                <rect x="4" y="18" width="10" height="10" fill="#af8e5b" />
                <rect x="18" y="18" width="10" height="10" fill="#af8e5b" />
              </svg>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Our project aims to develop an innovative mobile application that enhances accessibility for individuals with visual impairments
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Circle and Line */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex-shrink-0" />
                  {index < steps.length - 1 && (
                    <div className="w-[2px] h-24 bg-gray-600" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-[#af8e5b] text-lg font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Phone Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Virtual Staging on Phone"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
