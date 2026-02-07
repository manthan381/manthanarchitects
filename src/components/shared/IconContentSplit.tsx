"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type InfoBlock = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type IconContentSplitProps = {
  blocks: InfoBlock[];
  imageSrc: string;
  imageAlt?: string;
};

export default function IconContentSplit({
  blocks,
  imageSrc,
  imageAlt,
}: IconContentSplitProps) {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <Image
        src="/images/brands/bench-logo.png" // Replace with your image path
        alt="About Bench Architects"
        width={200}
        height={100}
        className="mx-auto mb-8"
      ></Image>
      <h2 className="text-4xl font-bold mb-2 text-center">
        Introducing Bench Furnitures
      </h2>
      <h3 className="text-base font-semibold mb-16 text-center tracking-wider">
        Office Furniture ♦ Kitchens & Wardrobes ♦ Loose Furniture ♦ Furniture
        Accessories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Left Content Column (1/3) */}
        <div className="flex flex-col gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              className="flex flex-col text-left border border-gray-100 bg-[#dff1e0] rounded-xl p-5 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <block.icon className="w-14 h-14 text-primary mb-3 border border-gray-400 rounded-full p-1" />
              <h4 className="text-xl font-bold mb-1">{block.title}</h4>
              <p className="text-base text-gray-600">{block.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Image Column (2/3) */}
        <div className="md:col-span-2">
          <div className="w-full h-full relative rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt || "Split layout image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-gray-600 text-center">
          Bench, a registered trademark of Manthan Architects Pvt. Ltd. was
          established to address key challenges faced by architects—meeting
          tight deadlines, ensuring furniture quality, and sourcing innovative
          office solutions. Since 2009, we have been dedicated to transform
          workspaces with furniture that seamlessly merges exceptional design
          and practical functionality. Our mission is to support the evolving
          demands of modern office environments while upholding the highest
          standards of craftsmanship and service. At Bench, we view furniture
          not merely as a necessity but as a vital element of great design,
          creating office furnishings that enhance interiors with both style and
          purpose. Proudly ISO 9001:2015 certified, we are committed to
          consistent quality and continuous improvement.
        </p>
      </div>

      <div className="text-center mt-5">
        <Link href="https://benchfurnitures.com/">
          <Button className="mt-5 text-lg cursor-pointer">
            Visit Bench Furnitures Website
          </Button>
        </Link>
      </div>
    </section>
  );
}
