"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import AllProperties from "@/components/AllProperties";
import ContactCTA from "@/components/ContactCTA";

const properties = [
  {
    id: 1,
    title: "Ranch Home in Denver",
    price: "$564,900",
    beds: 2,
    baths: 2,
    parking: 1,
    sqft: "2,450",
    yearBuilt: 2019,
    propertyType: "Single Family Home",
    location: "Denver, Colorado",
    address: "1234 Mountain View Dr, Denver, CO 80202",
    description:
      "This stunning ranch-style home offers modern living with breathtaking mountain views. Features include an open floor plan, gourmet kitchen with premium appliances, and a spacious master suite. The property sits on a beautifully landscaped lot with mature trees and a private backyard perfect for entertaining.",
    features: [
      "Open Floor Plan",
      "Gourmet Kitchen",
      "Hardwood Floors",
      "Central Air Conditioning",
      "Smart Home Technology",
      "Energy Efficient Windows",
      "Attached 2-Car Garage",
      "Private Backyard",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: 2,
    title: "Luxury Loft in Uptown LA",
    price: "$564,900",
    beds: 2,
    baths: 2,
    parking: 1,
    sqft: "1,850",
    yearBuilt: 2021,
    propertyType: "Loft",
    location: "Los Angeles, California",
    address: "5678 Sunset Blvd, Los Angeles, CA 90028",
    description:
      "Experience urban luxury in this stunning loft located in the heart of Uptown LA. Floor-to-ceiling windows flood the space with natural light, while exposed brick and modern finishes create a perfect blend of industrial charm and contemporary elegance.",
    features: [
      "Floor-to-Ceiling Windows",
      "Exposed Brick Walls",
      "Chef's Kitchen",
      "In-Unit Laundry",
      "Rooftop Access",
      "Concierge Service",
      "Fitness Center",
      "Pet Friendly",
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: 3,
    title: "Modern Villa in Miami",
    price: "$789,000",
    beds: 3,
    baths: 2,
    parking: 2,
    sqft: "3,200",
    yearBuilt: 2020,
    propertyType: "Villa",
    location: "Miami, Florida",
    address: "9012 Ocean Drive, Miami, FL 33139",
    description:
      "Discover paradise in this modern Miami villa featuring sleek architecture and premium finishes throughout. Enjoy indoor-outdoor living with a resort-style pool, outdoor kitchen, and stunning views of the Miami skyline.",
    features: [
      "Resort-Style Pool",
      "Outdoor Kitchen",
      "Smart Home System",
      "Impact Windows",
      "Wine Cellar",
      "Home Theater",
      "Electric Car Charger",
      "Security System",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80",
    ],
  },
  {
    id: 4,
    title: "Cozy Apartment in NYC",
    price: "$425,000",
    beds: 1,
    baths: 1,
    parking: 1,
    sqft: "950",
    yearBuilt: 2018,
    propertyType: "Apartment",
    location: "New York, New York",
    address: "350 Park Avenue, New York, NY 10022",
    description:
      "A charming apartment in one of Manhattan's most sought-after neighborhoods. This beautifully renovated unit features high ceilings, custom cabinetry, and views of the city skyline. Building amenities include a doorman, gym, and rooftop terrace.",
    features: [
      "High Ceilings",
      "Custom Cabinetry",
      "City Views",
      "24/7 Doorman",
      "Rooftop Terrace",
      "Fitness Center",
      "Storage Unit",
      "Bike Room",
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  {
    id: 5,
    title: "Beach House in Malibu",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    parking: 2,
    sqft: "4,100",
    yearBuilt: 2017,
    propertyType: "Beach House",
    location: "Malibu, California",
    address: "27000 Pacific Coast Hwy, Malibu, CA 90265",
    description:
      "Wake up to ocean waves in this exceptional Malibu beach house. Direct beach access, panoramic ocean views, and luxurious finishes make this property a true coastal retreat. Perfect for entertaining with multiple outdoor living spaces.",
    features: [
      "Direct Beach Access",
      "Panoramic Ocean Views",
      "Gourmet Kitchen",
      "Multiple Decks",
      "Outdoor Shower",
      "Fire Pit",
      "Guest Suite",
      "Private Beach",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80",
    ],
  },
  {
    id: 6,
    title: "Penthouse in Chicago",
    price: "$875,000",
    beds: 3,
    baths: 2,
    parking: 1,
    sqft: "2,800",
    yearBuilt: 2022,
    propertyType: "Penthouse",
    location: "Chicago, Illinois",
    address: "401 N Wabash Ave, Chicago, IL 60611",
    description:
      "Live above the clouds in this spectacular Chicago penthouse. Featuring wraparound terraces with stunning views of Lake Michigan and the city skyline, this residence offers the ultimate in urban luxury living.",
    features: [
      "Wraparound Terrace",
      "Lake Views",
      "Private Elevator",
      "Wine Storage",
      "Custom Closets",
      "Heated Floors",
      "Building Pool",
      "Valet Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
  },
];

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = Number(params.id);
  const property = properties.find((p) => p.id === propertyId);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    }
  };

  const prevImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    }
  };

  if (!property) {
    return (
      <main className="bg-black min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-white text-4xl mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-[#af8e5b] hover:underline">
            Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen">
      {/* Fullscreen Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#af8e5b] transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#af8e5b] transition-colors z-10 bg-black/50 p-3 rounded-full"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#af8e5b] transition-colors z-10 bg-black/50 p-3 rounded-full"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-auto px-16">
            <Image
              src={property.images[currentImageIndex]}
              alt={property.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/properties" className="text-gray-400 hover:text-white">
              Properties
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#af8e5b]">{property.title}</span>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div
              onClick={() => openLightbox(0)}
              className="relative h-100 lg:h-125 rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => openLightbox(1)}
                className="relative h-48 lg:h-60.5 rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={property.images[1]}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                onClick={() => openLightbox(2)}
                className="relative h-48 lg:h-60.5 rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={property.images[2]}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                onClick={() => openLightbox(0)}
                className="col-span-2 relative h-48 lg:h-60.5 rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/40 transition-colors">
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    View All Photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Title and Location */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#af8e5b]/20 text-[#af8e5b] px-3 py-1 rounded-full text-sm">
                    {property.propertyType}
                  </span>
                  <span className="text-gray-400 text-sm">
                    Built in {property.yearBuilt}
                  </span>
                </div>
                <h1 className="text-white text-4xl font-light mb-2">
                  {property.title}
                </h1>
                <p className="text-gray-400 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {property.address}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 mb-10 p-6 bg-[#1a1a1a] rounded-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6 text-[#af8e5b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-2xl font-semibold">
                    {property.beds}
                  </p>
                  <p className="text-gray-400 text-sm">Bedrooms</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6 text-[#af8e5b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 16V8a4 4 0 014-4h1m7 12h4M4 16h16M8 4h.01M12 4h8v4H12V4z"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-2xl font-semibold">
                    {property.baths}
                  </p>
                  <p className="text-gray-400 text-sm">Bathrooms</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6 text-[#af8e5b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-2xl font-semibold">
                    {property.sqft}
                  </p>
                  <p className="text-gray-400 text-sm">Sq Ft</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg
                      className="w-6 h-6 text-[#af8e5b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7h8m-8 4h8m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-2xl font-semibold">
                    {property.parking}
                  </p>
                  <p className="text-gray-400 text-sm">Parking</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="text-white text-2xl font-light mb-4">
                  About This Property
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-white text-2xl font-light mb-6">
                  Property Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Laundry */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Laundry</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  {/* Parking */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Parking</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                      <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="500">P</text>
                    </svg>
                  </div>
                  {/* Swimming Pool */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Swimming Pool</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.483 0 4.345-1 6-3 1.655 2 3.517 3 6 3s4.345-1 6-3M3 19c2.483 0 4.345-1 6-3 1.655 2 3.517 3 6 3s4.345-1 6-3" />
                    </svg>
                  </div>
                  {/* Security */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Security</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  {/* Gym */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Gym</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h2v8H4V8zM18 8h2v8h-2V8zM6 10h2v4H6v-4zM16 10h2v4h-2v-4zM8 11h8v2H8v-2z" />
                    </svg>
                  </div>
                  {/* Playground */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Playground</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  {/* Air Conditioner */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Air Conditioner</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M12 3l4 4M12 3L8 7M12 21l4-4M12 21l-4-4M3 12h18M3 12l4 4M3 12l4-4M21 12l-4 4M21 12l-4-4" />
                    </svg>
                  </div>
                  {/* Elevator */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Elevator</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                      <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="500">P</text>
                    </svg>
                  </div>
                  {/* Cable TV */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Cable TV</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {/* Garden */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Garden</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  {/* Dishwasher */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Dishwasher</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  {/* Wifi-internet */}
                  <div className="flex items-center justify-between p-5 border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors">
                    <span className="text-white text-lg">Wifi-internet</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-[#1a1a1a] rounded-xl p-6">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">Listed Price</p>
                  <p className="text-[#af8e5b] text-4xl font-semibold">
                    {property.price}
                  </p>
                </div>

                {/* Contact Form */}
                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#af8e5b]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-black border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#af8e5b]"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full bg-black border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#af8e5b]"
                  />
                  <textarea
                    placeholder="I'm interested in this property..."
                    rows={4}
                    className="w-full bg-black border border-gray-700 rounded-lg hover:border-[#af8e5b] transition-colors px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#af8e5b] resize-none"
                  />
                </div>

                <button className="w-full bg-[#af8e5b] text-white py-4 rounded-lg font-medium hover:bg-[#9a7d4f] transition-colors mb-4">
                  Schedule a Tour
                </button>

                <button className="w-full border border-gray-700 text-white py-4 rounded-lg font-medium hover:border-[#af8e5b] transition-colors">
                  Request More Info
                </button>

                {/* Agent Info */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#af8e5b] flex items-center justify-center text-white text-xl font-medium">
                      JD
                    </div>
                    <div>
                      <p className="text-white font-medium">John Davidson</p>
                      <p className="text-gray-400 text-sm">Luxury Agent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Agent Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#af8e5b] text-sm font-medium uppercase tracking-wider mb-4 block">
                Contact agent
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-light mb-8 leading-tight">
                Connect With Our Experienced Agents For The Best Deals.
              </h2>
              <button className="bg-[#af8e5b] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#9a7d4f] transition-colors flex items-center gap-3">
                Contact now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Content - Agent Image with Badge and Stats */}
            <div className="relative">
              {/* Agent Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                  alt="Real Estate Agent"
                  width={600}
                  height={500}
                  className="w-full h-125 object-cover"
                />

                {/* Rotating Badge */}
                <div className="absolute top-6 right-6 w-24 h-24 md:w-28 md:h-28">
                  <div className="relative w-full h-full rounded-full bg-[#af8e5b] flex items-center justify-center">
                    {/* Rotating text */}
                    <svg
                      viewBox="0 0 160 160"
                      className="absolute w-full h-full animate-spin"
                      style={{ animationDuration: "20s" }}
                    >
                      <defs>
                        <path
                          id="agentCirclePath"
                          d="M 80, 80 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                        />
                      </defs>
                      <text
                        fill="white"
                        fontSize="11"
                        fontWeight="500"
                        letterSpacing="2"
                      >
                        <textPath href="#agentCirclePath" startOffset="0%">
                          YEARS - EXPERIENCE - 12 -
                        </textPath>
                      </text>
                    </svg>
                    {/* Center text */}
                    <div className="text-center z-10">
                      <span className="text-white text-2xl font-bold">12</span>
                      <span className="text-white text-xs block">YEARS</span>
                    </div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm">
                  <div className="grid grid-cols-4 divide-x divide-gray-700">
                    <div className="p-4 text-center">
                      <p className="text-gray-400 text-xs mb-1">Total sold</p>
                      <p className="text-white text-sm font-medium">3 luxury residential</p>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-gray-400 text-xs mb-1">For sale</p>
                      <p className="text-white text-sm font-medium">4 luxury house</p>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-gray-400 text-xs mb-1">Last listing</p>
                      <p className="text-white text-sm font-medium">2024-07-17</p>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-gray-400 text-xs mb-1">Activity range</p>
                      <p className="text-white text-sm font-medium">$145K-$1.58M</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-8 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#af8e5b]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#af8e5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <p className="text-white text-sm font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#af8e5b]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#af8e5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-white text-sm font-medium">agent@horizon.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Properties Section */}
      <AllProperties />
      <ContactCTA />

    </main>
  );
}
