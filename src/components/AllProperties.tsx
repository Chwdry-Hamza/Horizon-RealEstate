"use client";

import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Ranch Home in Denver",
    price: "$564,900",
    beds: 2,
    baths: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Luxury Loft in Uptown LA",
    price: "$564,900",
    beds: 2,
    baths: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80",
  },
  {
    id: 3,
    title: "Modern Villa in Miami",
    price: "$789,000",
    beds: 3,
    baths: 2,
    parking: 2,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 4,
    title: "Cozy Apartment in NYC",
    price: "$425,000",
    beds: 1,
    baths: 1,
    parking: 1,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Beach House in Malibu",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    parking: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "Penthouse in Chicago",
    price: "$875,000",
    beds: 3,
    baths: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80",
  },
];

const AllProperties = () => {
  return (
    <section className="bg-black py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-10 md:mb-16">
          <span className="text-[#af8e5b] text-base md:text-lg mb-3 md:mb-4 block">All Properties</span>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8">
            Explore Our Properties
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              {/* Decorative element */}
              <div className="flex items-center gap-2">
                <div className="w-8 md:w-12 h-px bg-white" />
                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-white" />
                </div>
              </div>
              <span className="text-gray-400 text-base md:text-xl">Discover your dream home</span>
            </div>
            <Link
              href="/properties"
              className="bg-[#af8e5b] text-white px-4 md:px-6 py-2.5 md:py-3 rounded text-sm md:text-base hover:bg-[#9a7d4f] transition-colors self-start sm:self-auto"
            >
              Explore More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="group block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Image Container */}
                <div className="relative h-52 sm:h-64 md:h-72 lg:h-80">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Property Stats Overlay */}
                  <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3">
                    {/* Beds */}
                    <div className="flex items-center gap-1.5 md:gap-2 bg-[#2a2a2a]/80 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-md">
                      <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-white text-xs md:text-sm font-medium">{property.beds}</span>
                    </div>

                    {/* Baths */}
                    <div className="flex items-center gap-1.5 md:gap-2 bg-[#2a2a2a]/80 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-md">
                      <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 16V8a4 4 0 014-4h1m7 12h4M4 16h16M8 4h.01M12 4h8v4H12V4z" />
                      </svg>
                      <span className="text-white text-xs md:text-sm font-medium">{property.baths}</span>
                    </div>

                    {/* Parking */}
                    <div className="flex items-center gap-1.5 md:gap-2 bg-[#2a2a2a]/80 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-md">
                      <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                      </svg>
                      <span className="text-white text-xs md:text-sm font-medium">{property.parking}</span>
                    </div>
                  </div>
                </div>

                {/* Property Info */}
                <div className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {property.title}
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-[#af8e5b]">
                    {property.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProperties;
