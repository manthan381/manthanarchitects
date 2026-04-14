"use client";

import {
  CalendarClock,
  Mail,
  MapPin,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-8 pt-4">
          {/* Logo + About */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Manthan Architects
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Manthan Architects is a platform that is transforming the experience of
              creating, maintaining, and managing spaces with technology,
              organizing the industry, creating standards and processes, and
              driving transparency.
            </p>
            {/* Socials */}
            <div className="pt-6 pb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.facebook.com/manthandezinstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook"
                  className="text-gray-400 hover:text-[#eb5e22] transition-colors duration-200"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="https://www.instagram.com/manthan.architects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram"
                  className="text-gray-400 hover:text-[#eb5e22] transition-colors duration-200"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://in.linkedin.com/company/manthan-dezin-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn"
                  className="text-gray-400 hover:text-[#eb5e22] transition-colors duration-200"
                >
                  <FaLinkedinIn size={30} />
                </a>
                <a
                  href="https://x.com/manthan_archi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our X"
                  className="text-gray-400 hover:text-[#eb5e22] transition-colors duration-200"
                >
                  <FaXTwitter size={30} />
                </a>
                <a
                  href="https://www.youtube.com/@MANTHANARCHITECTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our YouTube channel"
                  className="text-gray-400 hover:text-[#eb5e22] transition-colors duration-200"
                >
                  <FaYoutube size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:justify-self-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Company Information
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-lg text-gray-400 sm:block sm:space-y-2">
              <li>
                <Link href="/" className="hover:text-[#eb5e22] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#eb5e22] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#eb5e22] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#eb5e22] transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#eb5e22] transition-colors duration-200">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#eb5e22] transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-[#eb5e22] transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:justify-self-end">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm sm:text-lg text-gray-100">
              <li className="flex items-start gap-2">
                <div>
                  <MapPin
                    size={28}
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
                    size={28}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>+91-9958097927, 0124-4446207</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Mail
                    size={28}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>hello@manthanarchitects.com</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <MessageCircle
                    size={28}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>WhatsApp: +91 9218028364</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <CalendarClock
                    size={28}
                    className="bg-gray-100 text-gray-900 p-1 rounded-full"
                  />
                </div>
                <div>Mon - Sat: 9:30 AM to 6:30 PM</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 border-t border-neutral-800 py-6 text-center text-gray-500">
          <p className="text-[11px] sm:text-xs">
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