// app/blog/[slug]/page.tsx
import ConsultationForm from "@/components/shared/ConsultationForm";
import { ContactCTA } from "@/components/shared/ContactCTA";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { getPublishedPostBySlug } from "@/lib/blog/repository";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Readonly<BlogPageProps>): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.metaTitle?.trim() || post.title;
  const description = post.metaDesc?.trim() || post.excerpt;
  const keywords = post.metaKeyword
    ? post.metaKeyword
        .split(",")
        .map((keyword) => keyword.trim())
        .filter(Boolean)
    : undefined;

  return {
    title,
    description,
    keywords,
  };
}

export default async function BlogDetailPage({
  params,
}: Readonly<BlogPageProps>) {
  const { slug } = await params;

  const post = await getPublishedPostBySlug(slug);
  if (!post) return notFound();

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                {post.title}
              </h1>
              <p className="text-sm text-gray-500 text-center">
                By <strong>{post.authorName}</strong>
                {publishedDate ? ` • ${publishedDate}` : ""}
              </p>
            </header>

            <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden mb-10">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <article
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:sticky top-24 h-fit rounded-xl border p-6 shadow-sm bg-white dark:bg-muted">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Book Free Consultation
            </h2>
            <ConsultationForm />
          </aside>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
