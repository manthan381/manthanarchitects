"use client";

import { BlogGrid } from "@/components/shared/BlogGrid";
import { BlogHero } from "@/components/shared/BlogHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Blog() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl py-20">
        <BlogHero />
        <BlogGrid />
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
