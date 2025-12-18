"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#af8e5b]/30 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#af8e5b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#af8e5b]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Logo and Description - Takes more space */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="mb-8 inline-block">
              <Image
                src="/HorizonHomesLogo.png"
                alt="Horizon Homes"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              Your premier partner for luxury real estate in Dubai. Experience the extraordinary lifestyle you deserve.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#af8e5b]/30 flex items-center justify-center text-[#af8e5b] hover:bg-[#af8e5b] hover:text-black hover:border-[#af8e5b] transition-all duration-300"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#af8e5b]/30 flex items-center justify-center text-[#af8e5b] hover:bg-[#af8e5b] hover:text-black hover:border-[#af8e5b] transition-all duration-300"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#af8e5b]/30 flex items-center justify-center text-[#af8e5b] hover:bg-[#af8e5b] hover:text-black hover:border-[#af8e5b] transition-all duration-300"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xl font-semibold mb-8 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#af8e5b]" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-base hover:text-[#af8e5b] hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#af8e5b]/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-xl font-semibold mb-8 relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#af8e5b]" />
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#af8e5b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" fill="#af8e5b" viewBox="0 0 24 24">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Address</p>
                  <p className="text-gray-400 text-sm">Sheikh Zayed Road, Dubai, UAE</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#af8e5b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" fill="#af8e5b" viewBox="0 0 24 24">
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Phone</p>
                  <a href="tel:+97143888888" className="text-gray-400 text-sm hover:text-[#af8e5b] transition-colors">
                    +971 4 388 8888
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#af8e5b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" fill="#af8e5b" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Email</p>
                  <a href="mailto:concierge@horizon.ae" className="text-gray-400 text-sm hover:text-[#af8e5b] transition-colors">
                    concierge@horizon.ae
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 <span className="text-[#af8e5b]">HORIZON</span> Luxury Homes. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-[#af8e5b] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-[#af8e5b] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
