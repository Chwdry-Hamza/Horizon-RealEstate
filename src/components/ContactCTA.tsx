"use client";

import { useState } from "react";

const ContactCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative h-[920px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
        <h2 className="text-white text-5xl md:text-6xl font-semibold text-center mb-2">
          Ready To Go With Us ?
        </h2>
        <h3 className="text-[#af8e5b] text-5xl md:text-6xl font-semibold text-center mb-12">
          We'd Love To Hear From You!
        </h3>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-xl">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-gray-800/80 text-white px-6 py-4 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#af8e5b]"
            required
          />
          <button
            type="submit"
            className="bg-[#af8e5b] text-white px-8 py-4 text-base font-medium hover:bg-[#9a7d4f] transition-colors"
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
