"use client";

import Image from "next/image";
import Link from "next/link";

const orbitItems = [
  {
    image: "/images/orbit/5.png",
    label: "COMMERCIAL",
    link: "/projects?category=Commercial",
  },
  {
    image: "/images/orbit/7.png",
    label: "HIGHWAYS & TOLL PLAZA",
    link: "/projects?category=Highways+and+Toll+Plaza",
  },
  {
    image: "/images/orbit/9.png",
    label: "RESIDENTIAL",
    link: "projects?category=Modern+Villa",
  },
  {
    image: "/images/orbit/8.png",
    label: "BREWERY",
    link: "/projects?category=Restaurant%2C+Bar+and+Microbrewery",
  },
  {
    image: "/images/orbit/6.png",
    label: "FURNITURE",
    link: "/projects?category=Commercial",
  },
  {
    image: "/images/orbit/4.png",
    label: "BAR & LOUNGE",
    link: "/projects?category=Restaurant%2C+Bar+and+Microbrewery",
  },
  {
    image: "/images/orbit/3.png",
    label: "HOSPITAL",
    link: "/projects?category=Hospital",
  },
  {
    image: "/images/orbit/1.png",
    label: "OFFICE",
    link: "/projects?category=Office",
  },
  {
    image: "/images/orbit/2.png",
    label: "HOTEL",
    link: "/projects?category=Hotel",
  },
];

export default function OrbitLayout() {
  //const orbitRadius = 350;
  const imageSize = 120;
  const offset = 300;
  //const offset = orbitRadius - imageSize / 2;

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
      {/* Center logo */}
      <div className="absolute z-10 text-center">
        <Image
          src="/images/space-manthan-round.png"
          alt="Space Manthan"
          width={120}
          height={120}
          className="mx-auto rounded-full"
          objectFit="cover"
        />
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
              key={index}
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
  );
}
