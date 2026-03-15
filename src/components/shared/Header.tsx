"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Architects Design", href: "/architects-design" },
  { name: "Elevation Design", href: "/elevation-design" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border border-b-gray-50 shadow-sm">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-gray-50 to-gray-100 opacity-90">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle cx="50" cy="50" r="40" fill="url(#grad)" />
          <defs>
            <radialGradient id="grad">
              <stop offset="0%" stopColor="#ffffff20" />
              <stop offset="100%" stopColor="#00000000" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-3 items-center"
      >
        {/* Left Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#012169] hover:text-[#c8a96e] transition font-semibold text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center Logo + Name */}
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/logoo.jpeg"
            alt="Manthan Architects"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-xl font-bold text-[#012169] tracking-wide">
            Manthan Architects
          </span>
        </Link>

        {/* Right Nav */}
        <div className="hidden md:flex items-center justify-end space-x-6">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#012169] hover:text-[#c8a96e] transition font-semibold text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X size={24} color="white" /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-90 backdrop-blur text-white flex flex-col p-6 space-y-6 z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
