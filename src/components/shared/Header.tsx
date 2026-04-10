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
        className="max-w-[1600px] w-full mx-auto pl-6 pr-10 sm:pl-10 sm:pr-16 lg:pl-14 lg:pr-24 py-4 flex items-center justify-between"
      >
        {/* Left Side: Logo + Name */}
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-0 whitespace-nowrap">
            <Image
              src="/manthan-logo.png"
              alt="manthan architects"
              width={130}
              height={130}
              unoptimized
              className="object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
            <span className="text-[19px] sm:text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-md lowercase -ml-12 transition-colors duration-300 group-hover:text-[#eb5e22]">
              manthan architects
            </span>
          </Link>
        </div>

        {/* Right Side: Navigation Links & Mobile Toggle */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-white hover:text-[#eb5e22] transition-all duration-500 text-lg drop-shadow-md whitespace-nowrap lowercase flex flex-col items-center justify-center h-8"
              >
                {/* Rolling Text Container */}
                <div className="relative overflow-hidden h-7 w-full flex items-center justify-center">
                  {/* Spacer to reserve maximum width and prevent layout shift */}
                  <span className="invisible font-black" aria-hidden="true">
                    {link.name}
                  </span>

                  {/* Sliding Wrapper */}
                  <div className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                    {/* Original Text (Normal) */}
                    <span className="flex h-full items-center justify-center font-normal">
                      {link.name}
                    </span>
                    {/* Replacement Text (Bold + Brand Color) */}
                    <span className="flex h-full items-center justify-center font-black text-[#eb5e22]">
                      {link.name}
                    </span>
                  </div>
                </div>

                {/* Animated Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#eb5e22] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
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
