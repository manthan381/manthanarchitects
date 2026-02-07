import AboutSection from "@/components/shared/AboutSection";
import BlogSection from "@/components/shared/BlogSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import ProjectsSection from "@/components/shared/ProjectsSection";
import { StatsSection } from "@/components/shared/StatsSection";
import { TeamSection } from "@/components/shared/TeamSection";
import TrustedBy from "@/components/shared/TrustedBy";
import { VisionMission } from "@/components/shared/VisionMission";
import { WhyChooseUs } from "@/components/shared/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <TrustedBy />
      <StatsSection />
      <div className="bg-gray-900 py-20">
        <ProjectsSection />
      </div>
      <VisionMission />
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
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <WhyChooseUs />
      <div className="bg-white py-20">
        <BlogSection />
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
