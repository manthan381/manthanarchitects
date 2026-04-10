"use client";

import {
  CalendarClock,
  Mail,
  MapPin,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#273027] text-white">
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-8 pt-10">
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Manthan Architects
            </h2>
            <p className="text-gray-400">
              Manthan Architects is a platform that is transforming the experience of
              creating, maintaining, and managing spaces with technology,
              organizing the industry, creating standards and processes, and
              driving transparency.
            </p>
            {/* Socials */}
            <div className="py-10">
              <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/manthandezinstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="https://www.instagram.com/manthan.architects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://in.linkedin.com/company/manthan-dezin-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedinIn size={30} />
                </a>
                <a
                  href="https://x.com/manthan_archi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our X"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaXTwitter size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:justify-self-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Company Information
            </h3>
            <ul className="space-y-2 text-lg text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="hover:text-white transition">
                  Architects Design
                </Link>
              </li>
              <li>
                <Link href="/elevation-design" className="hover:text-white transition">
                  Elevation Design
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:justify-self-end">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-8 text-lg text-gray-100">
              <li className="flex gap-2">
                <div>
                  <MapPin
                    size={32}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>
                  <p>Manthan Architects,</p>
                  <p className="mt-1">
                    J-2/5, DLF City Phase - 2, Sector - 25, Gurugram, Haryana -
                    122008
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Smartphone
                    size={32}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>+91-9958097927, 0124-4446207</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Mail
                    size={32}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>hello@manthanarchitects.com</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <MessageCircle
                    size={32}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>WhatsApp: +91 98765 43210</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <CalendarClock
                    size={32}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>Mon - Sat: 9:30 AM to 6:30 PM</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 border-t border-neutral-700 py-6 text-center text-gray-300">
          <p className="text-xs">
            © {new Date().getFullYear()} Manthan Architects. All rights
            reserved.
            <br />
            Content Owned, updated and maintained by Manthan Architects.
            <br />
            The information or content displayed on this website is the
            intellectual property of the Manthan Architects.com.
            <br />
            All the trademarks, copyrights, industrial designs, and patents are
            the intellectual property of Manthan Architects.
          </p>
        </div>
      </footer>
  );
}