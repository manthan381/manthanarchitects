import AboutSection from "@/components/shared/AboutSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { StatsSection } from "@/components/shared/StatsSection";
import { TeamSection } from "@/components/shared/TeamSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <StatsSection />
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6 text-center">
            <span className="font-bold">Approch</span> Section
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Manthan Architects, every project begins with understanding the site, client vision, and environment. Our approach balances design aesthetics, functionality, and sustainability, ensuring spaces that are comfortable, efficient, and environmentally responsible. By working closely with clients, we transform ideas into meaningful, elegant, and practical architecture.
          </p>
        </div>
      </section>
      <TeamSection />
      <div className="bg-gray-50 py-20 mx-auto">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-4xl text-gray-900 mb-6">
              Our <span className="font-bold">6 Step Process</span>
            </h1>
            <p className="text-lg text-gray-900 leading-relaxed pb-5">
              Track the progress of our development journey with this refined
              timeline component. Each milestone represents a crucial step in
              bringing our vision to life.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-5xl mx-auto">
          <Image
            src="/images/process-steps.png"
            alt="Our 6 Steps Process"
            width={1500}
            height={800}
            className="object-cover grayscale-[100%] contrast-105 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
