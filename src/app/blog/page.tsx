import { BlogGrid } from "@/components/shared/BlogGrid";
import { BlogHero } from "@/components/shared/BlogHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { getPublishedPosts } from "@/lib/blog/repository";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights on Architecture, Design & Construction | Manthan Architects Blog",
  description:
    "Read the latest architecture blogs, interior design ideas, and construction insights from Manthan Architects. Stay updated with modern design trends and expert tips.",
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
      <section className="mx-auto max-w-7xl pt-30 pb-12">
        <BlogHero />
        <BlogGrid posts={posts} />
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
