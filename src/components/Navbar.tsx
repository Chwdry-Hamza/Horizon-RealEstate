"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
    { name: "FAQs", href: "/faqs" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full py-4 md:py-5 px-4 md:px-8 bg-linear-to-r from-[#1a1612] via-[#2a2420] to-[#1a1612] relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/HorizonHomesLogo.png"
            alt="Horizone Homes"
            width={180}
            height={50}
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Center Navigation - Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[#af8e5b]"
                  : "text-white/80 hover:text-[#af8e5b]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button - Desktop */}
        <Link
          href="/contact"
          className="hidden lg:block bg-[#af8e5b] hover:bg-[#9a7d4f] text-black text-sm font-medium px-6 py-3 rounded transition-colors"
        >
          Contact Us
        </Link>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#1a1612] border-t border-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium py-2 transition-colors ${
                isActive(link.href)
                  ? "text-[#af8e5b]"
                  : "text-white/80 hover:text-[#af8e5b]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#af8e5b] hover:bg-[#9a7d4f] text-black text-sm font-medium px-6 py-3 rounded transition-colors text-center mt-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
