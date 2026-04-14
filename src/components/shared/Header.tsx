"use client";

import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const primaryLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Career", href: "/career" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
] as const;

const serviceLinks = [
  { name: "Design", href: "/projects" },
  { name: "Build", href: "/projects?category=Office+%26+Residence&service=build" },
  { name: "Furniture", href: "/services/furniture" },
] as const;

function RollingTextLink({
  name,
  href,
  onClick,
  scrolled,
}: Readonly<{ name: string; href: string; onClick?: () => void; scrolled?: boolean }>) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative transition-all duration-500 text-base xl:text-lg drop-shadow-md whitespace-nowrap lowercase flex flex-col items-center justify-center h-8 ${scrolled ? "text-[#1c2a22]" : "text-white"
        }`}
    >
      <div className="relative overflow-hidden h-7 w-full flex items-center justify-center">
        <span className="invisible font-black" aria-hidden="true">
          {name}
        </span>

        <div className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          <span className="flex h-full items-center justify-center font-normal">
            {name}
          </span>
          <span className="flex h-full items-center justify-center font-black text-[#eb5e22]">
            {name}
          </span>
        </div>
      </div>

      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#eb5e22] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-0"
          : "bg-gradient-to-b from-black/70 via-black/20 to-transparent py-2"
        }`}
    >
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1600px] w-full mx-auto pl-6 pr-10 sm:pl-10 sm:pr-16 lg:px-8 xl:pl-14 xl:pr-24 py-[6px] flex items-center justify-between"
      >
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-0 whitespace-nowrap">
            <Image
              src="/manthan-logo.png"
              alt="manthan architects"
              width={115}
              height={115}
              unoptimized
              className="object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
            <span
              className={`text-[19px] sm:text-2xl xl:text-3xl font-bold tracking-wide drop-shadow-md lowercase -ml-10 transition-colors duration-500 ${isScrolled ? "text-[#1c2a22]" : "text-white"
                } group-hover:text-[#eb5e22]`}
            >
              manthan architects
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 xl:gap-8">
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-8">
            <RollingTextLink name="About Us" href="/about-us" scrolled={isScrolled} />

            <div className="group relative">
              <Link
                href="/services"
                className={`relative transition-all duration-500 text-base xl:text-lg drop-shadow-md whitespace-nowrap lowercase flex items-center gap-1 h-8 ${isScrolled ? "text-[#1c2a22]" : "text-white"
                  } hover:text-[#eb5e22]`}
              >
                <span>services</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#eb5e22] transition-all duration-300 group-hover:w-full" />
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-3 px-4 pb-4 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="w-52 rounded-xl border border-gray-200/50 bg-[#f4f4f4]/75 p-2 backdrop-blur-xl shadow-xl">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block rounded-lg px-4 py-2.5 text-[15px] font-medium text-gray-800 hover:bg-white hover:text-[#eb5e22] transition-colors lowercase"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {primaryLinks.map((link) => (
              <RollingTextLink
                key={link.name}
                name={link.name}
                href={link.href}
                scrolled={isScrolled}
              />
            ))}
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 -mr-2 transition-colors duration-500 ${isScrolled ? "text-[#1c2a22]" : "text-white"
                }`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 h-full w-1/2 min-w-[220px] max-w-[320px] bg-black/90 backdrop-blur text-white flex flex-col p-6 space-y-4"
          >
            <RollingTextLink name="About Us" href="/about-us" onClick={() => setIsOpen(false)} />
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-white font-semibold">
              Services
            </Link>
            <div className="pl-3 border-l border-white/20 space-y-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-white/85"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {primaryLinks.map((link) => (
              <RollingTextLink
                key={link.name}
                name={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
}
