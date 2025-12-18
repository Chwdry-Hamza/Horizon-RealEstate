"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

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
    <nav className="w-full py-5 px-8 bg-linear-to-r from-[#1a1612] via-[#2a2420] to-[#1a1612]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/HorizonHomesLogo.png"
            alt="Horizone Homes"
            width={180}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center gap-10">
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

        {/* Contact Button */}
        <Link
          href="/contact"
          className="bg-[#af8e5b] hover:bg-[#9a7d4f] text-black text-sm font-medium px-6 py-3 rounded transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
