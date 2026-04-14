import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";

const furnitureGallery = [
  "/images/services/customizable-furniture-7.webp",
  "/images/services/customizable-furniture-4.webp",
  "/images/services/customizable-furniture-5.webp",
  "/images/services/customizable-furniture-6.webp",
  "/images/services/customizable-furniture-8.webp",
  "/images/services/customizable-furniture-9.webp",
  "/images/services/customizable-furniture-10.webp",
] as const;

export default function FurniturePage() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-gray-50 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c2a22] lowercase leading-tight">
              custom furniture solutions
            </h1>
            <p className="mt-8 text-gray-600 leading-relaxed text-base md:text-lg lowercase font-medium">
              we design and deliver furniture systems tailored to your architecture and interiors.
              from concept sketches to manufacturing details, every piece is engineered for utility,
              comfort, and visual continuity with your space.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] xl:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl lg:scale-110 lg:transform-origin-left my-10 lg:my-0">
            <Image
              src={furnitureGallery[0]}
              alt="Custom Furniture Studio"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {furnitureGallery.slice(1).map((image, index) => (
              <div
                key={image}
                className="relative overflow-hidden rounded-2xl border border-gray-100 aspect-[4/3] sm:aspect-square md:aspect-[4/3] xl:aspect-[3/2] group shadow-md"
              >
                <Image
                  src={image}
                  alt={`Furniture collection piece ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-24 pb-20 md:pb-32">
        <div className="rounded-3xl border border-gray-100 bg-[#fafafa] p-10 md:p-16 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1c2a22] lowercase tracking-tight">what we deliver</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-gray-700">
            <div className="flex flex-col">
              <h3 className="font-semibold text-[#1c2a22] text-xl lowercase border-b border-gray-200 pb-3">material + finish strategy</h3>
              <p className="mt-5 text-base leading-relaxed font-medium lowercase text-gray-600">
                surface, texture, and durability selection based on usage, lighting, and maintenance needs.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-[#1c2a22] text-xl lowercase border-b border-gray-200 pb-3">custom detailing</h3>
              <p className="mt-5 text-base leading-relaxed font-medium lowercase text-gray-600">
                built-to-fit modules and joinery details that integrate with your architectural envelope.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-[#1c2a22] text-xl lowercase border-b border-gray-200 pb-3">execution support</h3>
              <p className="mt-5 text-base leading-relaxed font-medium lowercase text-gray-600">
                technical coordination from drawings to fabrication and installation for on-site precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
