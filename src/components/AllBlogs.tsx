"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "Trends",
    date: "4 Dec",
    title: "The Ultimate Guide to Home Renovations for Maximum ROI",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 2,
    category: "Real estate",
    date: "4 Dec",
    title: "Understanding Market Trends in 2024: What Buyers Need to Know",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    category: "Finance",
    date: "4 Dec",
    title: "The Future of Home Tours and How to Get Started",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    category: "Design",
    date: "3 Dec",
    title: "Top Interior Design Trends Shaping Luxury Homes This Year",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    category: "Investment",
    date: "2 Dec",
    title: "Smart Investment Strategies for First-Time Property Buyers",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80",
  },
  {
    id: 6,
    category: "Lifestyle",
    date: "1 Dec",
    title: "Creating the Perfect Home Office: A Complete Guide",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
  },
];

const AllBlogs = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-[#af8e5b] text-lg mb-4 block">All blogs</span>
          <h2 className="text-white text-4xl md:text-5xl font-light mb-8">
            Explore Our Blogs
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Decorative element */}
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-white" />
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              <span className="text-gray-400 text-xl">Explore more and learn</span>
            </div>
            <Link
              href="/journal"
              className="bg-[#af8e5b] text-white px-6 py-3 rounded hover:bg-[#9a7d4f] transition-colors"
            >
              Explore More
            </Link>
          </div>
        </div>

        {/* Blog Cards Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/journal/${post.id}`}
              className="group block"
            >
              <article>
                {/* Image */}
                <div className="relative h-70 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-gray-500" />
                    <span className="text-gray-400 text-sm">{post.category}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-medium leading-snug group-hover:text-[#af8e5b] transition-colors">
                  {post.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
