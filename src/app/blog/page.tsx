import { BlogGrid } from "@/components/shared/BlogGrid";
import { BlogHero } from "@/components/shared/BlogHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { getPublishedPosts } from "@/lib/blog/repository";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture & Design Insights — Blog | Manthan Architects",
  description:
    "Read expert insights on architecture, interior design, elevation trends, and project management from the team at Manthan Architects.",
  keywords: "architecture blog India, interior design tips, elevation design ideas, home design trends, architecture insights Gurugram, interior design blog, modern home design ideas, architecture news India, design inspiration India",
  alternates: {
    canonical: "/blog",
  },
};

export default async function Blog() {
  const posts = await getPublishedPosts();

  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl py-20">
        <BlogHero />
        <BlogGrid posts={posts} />
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
