

"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Smartphone,
  CalendarClock,
  MessageCircle,
  Youtube,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#273027] text-white">
        <Accordion
          type="single"
          collapsible
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-y border-y-gray-800"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Learn more about Manthanarchitects – Leading Architectural, Builder
              and Interior Designing Firm in India.
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <h3 className="text-base font-bold">
                Redefining India's Built Environment with Cutting-Edge Design &
                Engineering Excellence
              </h3>
              <p className="text-sm text-wrap text-justify">
                Manthanarchitects stands at the forefront of architectural
                innovation, combining advanced technology with timeless design
                principles to create transformative spaces worldwide. With an
                impressive portfolio of 800+ landmark projects encompassing 3.5
                million square feet across 12 countries, we have earned the
                trust of Fortune 500 companies, government entities, visionary
                startups, and discerning homeowners. Our global reach is matched
                only by our commitment to delivering exceptional quality and
                innovative solutions for every client.
              </p>
              <p className="text-sm text-wrap text-justify">
                At the core of our practice is a powerful AI-driven design
                approach that revolutionizes traditional architecture. Our
                proprietary software enables parametric modeling, real-time 3D
                visualization, and data-driven spatial optimization, allowing us
                to push creative boundaries while ensuring precision and
                efficiency. This technological advantage is powered by our
                interdisciplinary team of 150+ experts, including architects,
                structural engineers, interior designers, and project managers.
                Together, we blend international design standards with local
                craftsmanship to create spaces that are both globally inspired
                and contextually rooted.
              </p>
              <p className="text-sm text-wrap text-justify">
                Our expertise spans luxury residences, corporate offices,
                healthcare facilities, hospitality projects, and large-scale
                infrastructure. Each project reflects our dedication to
                sustainable practices, intelligent space planning, and aesthetic
                excellence. Whether designing a private villa or a government
                complex, we prioritize biophilic elements, energy efficiency,
                and user-centric functionality to ensure every space achieves
                its highest potential.
              </p>
              <p className="text-sm text-wrap text-justify">
                More than just an architecture firm, Manthanarchitects is a
                collaborative partner in bringing visionary projects to life. We
                believe in co-creation, working closely with clients to
                understand their unique needs and aspirations. Our process
                combines cutting-edge technology with human creativity,
                resulting in designs that are not only visually striking but
                also deeply purposeful. From initial concept to final execution,
                we are committed to delivering spaces that inspire, endure, and
                elevate the human experience.
              </p>
              <p className="text-sm text-wrap text-justify">
                With a foundation built on innovation, craftsmanship, and client
                trust, Manthanarchitects continues to redefine what's possible in
                architecture and design. We invite you to experience the future
                of intelligent spaces—where every detail is thoughtfully
                considered, and every project tells a meaningful story.
              </p>
              <h3 className="text-base font-bold">
                Why Manthanarchitects is India's Most Trusted Design Partner?
              </h3>
              <div className="text-sm">
                <ol className="list-decimal list-inside">
                  <li className="font-bold">
                    Unparalleled Design Legacy (2005-Present)
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>
                      18+ Years of redefining India's architectural landscape
                    </li>
                    <li>
                      4 International Design Awards (including WAF, IIID, and
                      AD50)
                    </li>
                    <li>
                      27 National Awards for sustainable architecture and
                      interior design
                    </li>
                  </ul>
                  <li className="font-bold">Comprehensive Service Portfolio</li>
                  <ul className="list-disc list-inside p-2">
                    <li>Architectural Master Planning</li>
                    <li>Structural Engineering Solutions</li>
                    <li>Interior Design & Execution</li>
                    <li>Project Management Consultancy</li>
                    <li>Sustainable Design Advisory</li>
                  </ul>
                  <li className="font-bold">
                    Cutting-Edge Technological Integration
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>
                      BIM (Building Information Modeling) Level 3 Implementation
                    </li>
                    <li>Parametric Design & 3D Printing Prototyping</li>
                    <li>
                      Virtual Reality Walkthroughs (Oculus Rift Integration)
                    </li>
                    <li>AI-Powered Space Optimization Algorithms</li>
                    <li>IoT-Enabled Smart Building Solutions</li>
                  </ul>
                  <li className="font-bold">Sustainable Design Leadership</li>
                  <ul className="list-disc list-inside p-2">
                    <li>42 LEED Platinum Certified Projects</li>
                    <li>19 Net-Zero Energy Buildings</li>
                    <li>Pioneers in Biophilic Design in India</li>
                    <li>Circular Economy Construction Practices</li>
                  </ul>
                  <li className="font-bold">
                    Unmatched Execution Capabilities
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>
                      In-House Construction Team of 500+ skilled professionals
                    </li>
                    <li>
                      Strategic Partnerships with 50+ Global Material Brands
                    </li>
                    <li>
                      Dedicated Quality Control Wing with ISO 9001:2015
                      Certification
                    </li>
                    <li>Pan-India Presence with 7 Regional Offices</li>
                  </ul>
                </ol>
              </div>
              <h3 className="text-base font-bold">
                Our Signature Design Solutions
              </h3>
              <div className="text-sm">
                <ol className="list-decimal list-inside">
                  <li className="font-bold">
                    Corporate Architecture & Interiors
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>Tech Park Design (IT/ITES, Co-working Spaces)</li>
                    <li>BFSI Interiors (Banks, Financial Institutions)</li>
                    <li>
                      Manufacturing Plant Design (Industrial Architecture)
                    </li>
                    <li>Modular Office Solutions (Plug-and-Play Workspaces)</li>
                  </ul>
                  <li className="font-bold">
                    Institutional & Public Architecture
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>Educational Campus Planning (Schools, Universities)</li>
                    <li>Healthcare Design (Hospitals, Diagnostic Centers)</li>
                    <li>
                      Government Infrastructure (Municipal Buildings, Courts,
                      National Highways, Toll Plaza's)
                    </li>
                    <li>Cultural Centers (Museums, Art Galleries)</li>
                  </ul>
                  <li className="font-bold">Luxury Residential Spaces</li>
                  <ul className="list-disc list-inside p-2">
                    <li>Penthouse & Villa Design</li>
                    <li>High-Rise Apartment Interiors</li>
                    <li>Farmhouse & Vacation Homes</li>
                    <li>AI-Powered Space Optimization Algorithms</li>
                    <li>Gated Community Master Planning</li>
                  </ul>
                  <li className="font-bold">Hospitality & Retail Design</li>
                  <ul className="list-disc list-inside p-2">
                    <li>5-Star Hotels & Resorts</li>
                    <li>Restaurant & Café Concepts</li>
                    <li>Luxury Showrooms & Malls</li>
                    <li>Theme-Based Retail Experiences</li>
                  </ul>
                </ol>
              </div>
              <h3 className="text-base font-bold">
                The Manthanarchitects Design Process (400+ Step Quality Protocol)
              </h3>
              <div className="text-sm">
                <ol className="list-decimal list-inside">
                  <li className="font-bold">
                    Phase 1: Deep Discovery (4-6 Weeks)
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>Client Vision Mapping Workshops</li>
                    <li>Micro-Climate & Site Analysis</li>
                    <li>Behavioral Space Programming</li>
                    <li>Competitive Benchmarking</li>
                  </ul>
                  <li className="font-bold">
                    Phase 2: Conceptualization (8-12 Weeks)
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>Parametric Design Development</li>
                    <li>BIM-Based Conflict Resolution</li>
                    <li>Material & Finish Laboratories</li>
                    <li>Energy Modeling & Simulations</li>
                  </ul>
                  <li className="font-bold">
                    Phase 3: Technical Design (12-16 Weeks)
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>Structural Optimization Studies</li>
                    <li>MEPF Coordination Drawings</li>
                    <li>Custom Fabrication Detailing</li>
                    <li>Smart Systems Integration</li>
                  </ul>
                  <li className="font-bold">
                    Phase 4: Execution (Project-Specific Timeline)
                  </li>
                  <ul className="list-disc list-inside p-2">
                    <li>Laser-Guided Layouts</li>
                    <li>Just-in-Time Material Procurement</li>
                    <li>Weekly Quality Audits</li>
                    <li>Client Progress Portals</li>
                  </ul>
                  <li className="font-bold">Phase 5: Handover & Beyond</li>
                  <ul className="list-disc list-inside p-2">
                    <li>1-Year Defect Liability Period</li>
                    <li>5-Year Structural Warranty</li>
                    <li>Annual Maintenance Contracts</li>
                    <li>Space Re-engineering Services</li>
                  </ul>
                </ol>
              </div>
              <h3 className="text-base font-bold">
                Our Pan-India & Global Presence
              </h3>
              <div className="text-sm">
                <ol className="list-decimal list-inside">
                  <li className="font-bold">Operations in India</li>
                  <ul className="list-disc list-inside p-2">
                    <li>Mumbai</li>
                    <li>Delhi NCR</li>
                    <li>Bangalore</li>
                    <li>Hyderabad</li>
                    <li>Chennai</li>
                  </ul>
                  <li className="font-bold">International Footprint</li>
                  <ul className="list-disc list-inside p-2">
                    <li>Middle East (Dubai, Abu Dhabi, Riyadh)</li>
                    <li>Southeast Asia (Singapore, Bangkok, Kuala Lumpur)</li>
                    <li>Europe (London, Paris Architecture Collaborations)</li>
                    <li>Africa (Luxury Safari Lodges & Resorts)</li>
                  </ul>
                </ol>
              </div>

              <h3 className="text-base font-bold">
                Let's Build the Future Together
              </h3>
              <div className="text-sm">
                <ol>
                  <li className="font-bold">
                    At Manthanarchitects, we believe great design changes
                    everything. Whether you're:
                  </li>
                  <ul className="p-2 list-disc list-inside">
                    <li>Planning a 500-acre township</li>
                    <li>Designing a cutting-edge startup office</li>
                    <li>Building your dream luxury home</li>
                    <li>Creating an iconic public landmark</li>
                  </ul>
                  <li className="font-bold">
                    Our holistic approach, technical mastery, and artistic
                    vision will bring your aspirations to life.
                  </li>
                  <ul className="p-2">
                    <li>📞 Connect with Our Design Leaders Today</li>
                    <li>📧 Email: info@manthanarchitects.com</li>
                    <li>
                      📍 Visit: Our design studios in Mumbai, Delhi, Bangalore
                    </li>
                  </ul>
                </ol>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Manthanarchitects
            </h2>
            <p className="text-gray-400">
              Manthanarchitects is a platform that is transforming the experience of
              creating, maintaining, and managing spaces with technology,
              organizing the industry, creating standards and processes, and
              driving transparency.
            </p>
            {/* Socials */}
            <div className="py-10">
              <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Facebook size={32} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Instagram size={32} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Youtube size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
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
                <Link href="/expertise" className="hover:text-white transition">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition">
                  Blogs
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
          <div>
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
                  <p>Manthanarchitects,</p>
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
                <div>info@manthanarchitects.com</div>
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
        <div className="mt-12 border-t border-neutral-700 py-6 text-center text-gray-300">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Manthanarchitects. All rights
            reserved.
            <br />
            Content Owned, updated and maintained by Manthanarchitects.
            <br />
            The information or content displayed on this website is the
            intellectual property of the Manthanarchitects.com.
            <br />
            All the trademarks, copyrights, industrial designs, and patents are
            the intellectual property of Manthanarchitects.
          </p>
        </div>
      </footer>
    </>
  );
}