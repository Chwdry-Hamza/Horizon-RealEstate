"use client";

import Link from "next/link";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Luxury Loft in Uptown San Diego",
    price: "$564,900",
    bedrooms: 2,
    bathrooms: 2,
    kitchen: 1,
    size: "1200 SQ in Size",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Urban Apartment in Chicago",
    price: "$564,900",
    bedrooms: 2,
    bathrooms: 2,
    kitchen: 1,
    size: "1200 SQ in Size",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Luxury Condo in Dallas",
    price: "$564,900",
    bedrooms: 2,
    bathrooms: 2,
    kitchen: 1,
    size: "1200 SQ in Size",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Suburban House in Austin",
    price: "$564,900",
    bedrooms: 2,
    bathrooms: 2,
    kitchen: 1,
    size: "1200 SQ in Size",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

const ExclusiveProperties = () => {
  return (
    <section className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10 md:mb-16">
          <div>
            <span className="text-[#af8e5b] text-base md:text-lg font-medium">Exclusive property</span>

            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 md:mt-4 mb-4 md:mb-6">
              Explore Our All Properties
            </h2>

            {/* Latest Luxury Homes indicator */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 md:w-12 h-0.5 bg-white" />
                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-white" />
                </div>
              </div>
              <span className="text-gray-500 text-lg sm:text-xl md:text-3xl lg:text-4xl font-light">Latest Luxury Homes</span>
            </div>
          </div>

          {/* Explore More Button */}
          <Link
            href="/properties"
            className="bg-[#af8e5b] hover:bg-[#9a7d4f] text-black text-xs md:text-sm font-medium px-4 md:px-6 py-2.5 md:py-3 rounded transition-colors self-start sm:self-auto"
          >
            Explore More
          </Link>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {properties.map((property) => (
            <Link href={`/properties/${property.id}`} key={property.id} className="group cursor-pointer block">
              {/* Property Image */}
              <div className="relative h-52 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-3 md:mb-4">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Property Details Bar */}
              <div className="bg-white rounded-lg p-3 md:p-4 mb-3 md:mb-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 md:h-6 bg-[#af8e5b] rounded-full" />
                    <span className="text-black text-xs md:text-sm">bedrooms {property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 md:h-6 bg-[#af8e5b] rounded-full" />
                    <span className="text-black text-xs md:text-sm">bathrooms {property.bathrooms}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-1 h-5 md:h-6 bg-[#af8e5b] rounded-full" />
                    <span className="text-black text-xs md:text-sm">kitchen {property.kitchen}</span>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    <div className="w-1 h-5 md:h-6 bg-[#af8e5b] rounded-full" />
                    <span className="text-black text-xs md:text-sm">{property.size}</span>
                  </div>
                </div>
              </div>

              {/* Title and Price */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">{property.title}</h3>
                <span className="text-[#af8e5b] text-lg md:text-xl font-semibold">{property.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProperties;
