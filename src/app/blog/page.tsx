import { BlogGrid } from "@/components/shared/BlogGrid";
import { BlogHero } from "@/components/shared/BlogHero";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { getPublishedPosts } from "@/lib/blog/repository";

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
