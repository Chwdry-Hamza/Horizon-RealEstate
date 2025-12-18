"use client";

import Link from "next/link";
import Image from "next/image";

const properties = [
  {
    id: 1,
    label: "Featured property",
    title: "Luxury Loft in Uptown San Diego",
    price: "$564,900",
    bedrooms: 2,
    kitchen: 1,
    size: "1200 SQ in Size",
    bedroomDesc: "Fully luxury, AI controlled",
    kitchenDesc: "Full moduler",
    sizeDesc: "Spacious living area",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 2,
    label: "Featured property",
    title: "Urban Apartment in Chicago",
    price: "$564,900",
    bedrooms: 2,
    kitchen: 1,
    size: "1200 SQ in Size",
    bedroomDesc: "Fully luxury, AI controlled",
    kitchenDesc: "Full moduler",
    sizeDesc: "Spacious living area",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="bg-[black]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex items-start justify-between gap-16">
          {/* Left Side */}
          <div className="flex flex-col gap-12">
            <span className="text-[#af8e5b] text-lg font-medium">Featured property</span>

            {/* Circular Badge */}
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
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              {/* Circular Text */}
              <svg className="absolute inset-0 w-32 h-32 animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[8px] fill-white uppercase tracking-widest">
                  <textPath href="#circlePath">
                    24 HOURS • BEST SUPPORT • RESPONSE IN •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Right Side - Heading */}
          <div className="flex-1 max-w-3xl">
            <h2 className="text-white text-4xl md:text-5xl font-light leading-tight">
              Explore Our Handpicked Selection Of The Most Exquisite Homes In Prime Locations, Designed To Captivate And Inspire.
            </h2>
          </div>
        </div>
      </div>

      {/* Property Cards Section */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-[#f5f5f5] rounded-lg overflow-hidden">
              {/* Card Content */}
              <div className="p-8">
                <span className="text-gray-500 text-sm">{property.label}</span>

                <h3 className="text-2xl font-semibold text-black mt-4 mb-2">
                  {property.title}
                </h3>

                <p className="text-[#af8e5b] text-2xl font-semibold mb-6">
                  {property.price}
                </p>

                {/* Property Details */}
                <div className="flex gap-8 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-12 bg-[#af8e5b] rounded-full" />
                    <div>
                      <p className="text-black font-medium">bedrooms {property.bedrooms}</p>
                      <p className="text-gray-500 text-xs">{property.bedroomDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-1 h-12 bg-[#af8e5b] rounded-full" />
                    <div>
                      <p className="text-black font-medium">kitchen {property.kitchen}</p>
                      <p className="text-gray-500 text-xs">{property.kitchenDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-1 h-12 bg-[#af8e5b] rounded-full" />
                    <div>
                      <p className="text-black font-medium">{property.size}</p>
                      <p className="text-gray-500 text-xs">{property.sizeDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <Link
                  href={`/properties/${property.id}`}
                  className="inline-block border-2 border-black text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Explore property
                </Link>
              </div>

              {/* Property Image */}
              <div className="relative h-80">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
