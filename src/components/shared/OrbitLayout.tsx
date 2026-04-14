"use client";

import Image from "next/image";
import Link from "next/link";

const orbitItems = [
  {
    image: "/images/orbit/5.png",
    label: "COMMERCIAL",
    link: "/projects?category=Hospital+%26+Commercial",
  },
  {
    image: "/images/orbit/7.png",
    label: "HIGHWAYS & TOLL PLAZA",
    link: "/projects?category=Toll+Plaza+%26+Expressway",
  },
  {
    image: "/images/orbit/9.png",
    label: "RESIDENTIAL",
    link: "/projects?category=Modern+Villa",
  },

  {
    image: "/images/orbit/6.png",
    label: "FURNITURE",
    link: "/services/furniture",
  },
  {
    image: "/images/orbit/4.png",
    label: "BAR & LOUNGE",
    link: "/projects?category=Restaurant+%26+Bar",
  },
  {
    image: "/images/orbit/3.png",
    label: "HOSPITAL",
    link: "/projects?category=Hospital+%26+Commercial",
  },
  {
    image: "/images/orbit/1.png",
    label: "OFFICE",
    link: "/projects?category=Office+%26+Residence",
  },
  {
    image: "/images/orbit/2.png",
    label: "HOTEL",
    link: "/projects?category=Hotel+%26+Resort",
  },
];

export default function OrbitLayout() {
  const imageSize = 120;
  const offset = 300;

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Scale wrapper for mobile responsiveness */}
      <div className="relative flex items-center justify-center scale-[0.45] sm:scale-[0.65] md:scale-100">
        {/* Center logo */}
        <div className="absolute z-30 text-center pointer-events-none">
          <div className="h-36 w-36 rounded-full bg-white shadow-lg ring-4 ring-white/70 flex items-center justify-center">
          <Image
            src="/logoo.jpeg"
            alt="Manthanarchitects"
            width={88}
            height={88}
            unoptimized
            className="mx-auto object-contain"
            priority
          />
          </div>
        </div>

        {/* Orbit rings */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-700/30" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-700/20" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-700/10" />

        {/* Orbiting Items */}
        <div className="absolute w-[700px] h-[700px]">
          {orbitItems.map((item, index) => {
            const angle = (360 / orbitItems.length) * index;
            return (
              <div
                key={item.label}
                className="absolute left-[40%] top-[40%]"
                style={{
                  transform: `rotate(${angle}deg) translate(${offset}px) rotate(-${angle}deg)`,
                  transformOrigin: "center center",
                }}
              >
                <Link
                  href={item.link}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={imageSize}
                    height={imageSize}
                    className="rounded-full border-2 border-white group-hover:border-primary transition"
                  />
                  <p className="text-gray-900 mt-2 text-sm font-bold w-24">
                    {item.label}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
