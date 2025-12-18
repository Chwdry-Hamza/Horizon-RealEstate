"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const VirtualStaging = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#af8e5b] text-lg font-medium">Virtual Staging</span>

          <h2 className="text-white text-4xl md:text-5xl font-semibold mt-4 mb-6">
            Transform Your Home With Expert
          </h2>

          {/* Virtual Staging indicator */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-white" />
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
            <span className="text-gray-500 text-3xl md:text-4xl font-light">Virtual Staging</span>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          {!isPlaying ? (
            <>
              {/* Video Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
                }}
              />

              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors group-hover:scale-110 duration-300">
                  <Play size={32} className="text-gray-800 ml-1" fill="currentColor" />
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/NrXqgfz8Kmc?autoplay=1"
              title="Virtual Staging Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VirtualStaging;
