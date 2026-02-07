"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Expertise", href: "/expertise" },
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logoo.jpeg" // Replace with your actual logo file path
            alt="Space Manthan"
            width={34}
            height={34}
            className="object-contain"
          />
          <span className="text-xl font-bold text-[#012169]">
            Manthanarchitects
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#012169] hover:text-[#012169] transition font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact-us">
            <Button
              variant="outline"
              className="bg-[#012169] text-white hover:bg-gray-100 hover:text-[#012169]"
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
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
