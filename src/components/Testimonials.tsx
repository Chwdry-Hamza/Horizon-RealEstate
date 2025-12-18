"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "David Brown",
    role: "CEO, Doten",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote:
      "We've been working with Evolve for over a year now and we're very happy with the results. They've helped us increase our website traffic by over 300% and our leads by over 200%. We highly recommend them to any business looking to grow their online presence.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote:
      "The virtual staging service transformed our property listings completely. We saw a 150% increase in inquiries and properties are selling 40% faster. The quality of work is exceptional and the team is incredibly responsive.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Real Estate Agent",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote:
      "Outstanding service from start to finish. The attention to detail in every staged photo is remarkable. My clients are always impressed with the results, and it has definitely helped me close more deals.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#1a1a1a] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          {/* Left - Title */}
          <div>
            <span className="text-[#af8e5b] text-xl font-medium">
              Testimonial
            </span>
            <h2 className="text-white text-5xl md:text-6xl font-semibold mt-4 mb-4">
              Our Clients Saying
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-[2px] bg-white" />
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              <span className="text-gray-400 text-3xl md:text-4xl font-light">
                Best Reviews
              </span>
            </div>
          </div>

          {/* Right - Spinning Badge and Decorative Curve */}
          <div className="relative">
            {/* Spinning Badge */}
            <div className="relative w-32 h-32">
              <div className="w-32 h-32 rounded-full bg-[#af8e5b] flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="rotate-45"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              {/* Circular Text */}
              <svg
                className="absolute inset-0 w-32 h-32 animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="testimonialCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[8px] fill-white uppercase tracking-widest">
                  <textPath href="#testimonialCirclePath">
                    24 HOURS • BEST SUPPORT • RESPONSE IN •
                  </textPath>
                </text>
              </svg>
            </div>

          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f5f5f5] rounded-2xl p-20 text-center min-h-[550px]">
            {/* Profile Image */}
            <div className="relative w-28 h-28 mx-auto mb-8">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Name and Role */}
            <h3 className="text-[#af8e5b] text-2xl font-semibold mb-1">
              {currentTestimonial.name}
            </h3>
            <p className="text-gray-600 text-base mb-8">
              {currentTestimonial.role}
            </p>

            {/* Quote */}
            <p className="text-gray-800 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {currentTestimonial.quote}
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
