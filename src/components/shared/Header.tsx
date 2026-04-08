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
    <header className="absolute top-0 left-0 z-50 w-full bg-gradient-to-b from-black/70 via-black/20 to-transparent">

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative"
      >
        {/* Left Nav */}
        <div className="flex-1 flex justify-start">
          <nav className="hidden md:flex space-x-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#c8a96e] transition font-semibold text-sm drop-shadow-md"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center Logo + Name */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center w-full max-w-fit">
          <Link href="/" className="flex items-center justify-center gap-2 whitespace-nowrap">
            <Image
              src="/logoo.jpeg"
              alt="Manthan Architects"
              width={34}
              height={34}
              className="object-contain rounded-md"
            />
            <span className="text-[15px] sm:text-lg md:text-xl font-bold text-white tracking-wide drop-shadow-md">
              Manthan Architects
            </span>
          </Link>
        </div>

        {/* Right Nav */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex items-center justify-end space-x-6">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#c8a96e] transition font-semibold text-sm drop-shadow-md"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex justify-end">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 -mr-2">
              {isOpen ? <X size={26} color="white" /> : <Menu size={26} />}
            </button>
          </div>
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
