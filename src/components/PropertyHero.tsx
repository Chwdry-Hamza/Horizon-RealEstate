"use client";

import { useState } from "react";

const PropertyHero = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedProperty, setSelectedProperty] = useState("Property");
  const [selectedType, setSelectedType] = useState("Type");

  const locations = ["Santorini, Greece", "New York, USA", "Tokyo, Japan", "Sydney, Australia"];
  const properties = ["Office", "Houses", "Apartments"];
  const types = ["For Rent", "For Sale"];

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <section className="relative bg-[#1a1a1a] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.02)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Main Heading */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 md:mb-12">
              Available Properties
            </h1>

            {/* Search Filters */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 md:gap-4">
              {/* Location Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => toggleDropdown("location")}
                  className="flex items-center gap-3 bg-transparent border border-gray-600 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white hover:border-gray-400 transition-colors w-full sm:min-w-50"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white text-sm md:text-base">{selectedLocation}</span>
                  <svg className={`w-4 h-4 text-gray-400 ml-auto transition-transform ${openDropdown === "location" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Location Dropdown Menu */}
                {openDropdown === "location" && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-[#2a2a2a] border border-gray-600 rounded-lg overflow-hidden z-50">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setSelectedLocation(location);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 md:px-6 py-3 text-white text-sm md:text-base hover:bg-[#3a3a3a] transition-colors"
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => toggleDropdown("property")}
                  className="flex items-center gap-3 bg-transparent border border-gray-600 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white hover:border-gray-400 transition-colors w-full sm:min-w-45"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-white text-sm md:text-base">{selectedProperty}</span>
                  <svg className={`w-4 h-4 text-gray-400 ml-auto transition-transform ${openDropdown === "property" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Property Dropdown Menu */}
                {openDropdown === "property" && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-[#2a2a2a] border border-gray-600 rounded-lg overflow-hidden z-50">
                    {properties.map((property) => (
                      <button
                        key={property}
                        onClick={() => {
                          setSelectedProperty(property);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 md:px-6 py-3 text-white text-sm md:text-base hover:bg-[#3a3a3a] transition-colors"
                      >
                        {property}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => toggleDropdown("type")}
                  className="flex items-center gap-3 bg-transparent border border-gray-600 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white hover:border-gray-400 transition-colors w-full sm:min-w-40"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-white text-sm md:text-base">{selectedType}</span>
                  <svg className={`w-4 h-4 text-gray-400 ml-auto transition-transform ${openDropdown === "type" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Type Dropdown Menu */}
                {openDropdown === "type" && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-[#2a2a2a] border border-gray-600 rounded-lg overflow-hidden z-50">
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 md:px-6 py-3 text-white text-sm md:text-base hover:bg-[#3a3a3a] transition-colors"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button className="bg-[#af8e5b] hover:bg-[#9a7d4f] text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>

          {/* Right Badge - Hidden on mobile */}
          <div className="hidden lg:block relative w-32 h-32 md:w-36 md:h-36 shrink-0 group">
            <div className="relative w-full h-full rounded-full bg-[#af8e5b] flex items-center justify-center shadow-xl">
              {/* Rotating text */}
              <svg viewBox="0 0 160 160" className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                <defs>
                  <path
                    id="propertyCirclePath"
                    d="M 80, 80 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                  />
                </defs>
                <text fill="white" fontSize="10" fontWeight="500" letterSpacing="2">
                  <textPath href="#propertyCirclePath" startOffset="0%">
                    BEST SUPPORT - RESPONSE IN 2 HOURS -
                  </textPath>
                </text>
              </svg>
              {/* Arrow icon */}
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </section>
  );
};

export default PropertyHero;
