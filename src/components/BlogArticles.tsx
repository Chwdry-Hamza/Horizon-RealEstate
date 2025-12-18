"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "Trends",
    date: "December 4, 2024",
    title: "The Ultimate Guide to Home Renovations for Maximum ROI",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 2,
    category: "Real estate",
    date: "December 4, 2024",
    title: "Understanding Market Trends in 2024: What Buyers Need to Know",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    category: "Finance",
    date: "December 4, 2024",
    title: "The Future of Home Tours and How to Get Started",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

const BlogArticles = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          {/* Left - Title */}
          <div>
            <span className="text-[#af8e5b] text-xl font-medium">
              Blog Articles
            </span>
            <h2 className="text-white text-5xl md:text-6xl font-semibold mt-4 mb-4">
              Our Blogs & Insights
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-white" />
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              <span className="text-gray-400 text-3xl md:text-4xl font-light">
                Explore More And Learn
              </span>
            </div>
          </div>

          {/* Right - Button */}
          <Link
            href="/blog"
            className="bg-[#af8e5b] text-white px-8 py-4 text-base font-medium hover:bg-[#9a7d4f] transition-colors"
          >
            Explore More
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative h-107.5 mb-4 overflow-hidden rounded-lg">
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
                  <div className="w-3 h-3 bg-gray-600" />
                  <span className="text-gray-400 text-base">{post.category}</span>
                </div>
                <span className="text-gray-400 text-base">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl font-medium leading-snug group-hover:text-[#af8e5b] transition-colors">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
