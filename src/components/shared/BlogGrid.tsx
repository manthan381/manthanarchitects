import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Sustainable Architecture Trends in 2025",
    excerpt:
      "Discover how modern architecture embraces sustainability and green technology.",
    image: "/images/blogs/blog-1.webp",
    date: "June 15, 2025",
    author: "Vivek Kumar",
    slug: "sustainable-architecture-trends-2025",
  },
  {
    id: "2",
    title: "How Smart Homes are Changing Urban Living",
    excerpt:
      "Explore the rise of automation and smart living spaces in urban construction.",
    image: "/images/blogs/blog-2.jpg",
    date: "June 10, 2025",
    author: "Neha Sharma",
    slug: "smart-homes-are-changing-urban-living",
  },
  {
    id: "3",
    title: "Designing for Wellness: The New Trend in Office Spaces",
    excerpt:
      "Learn why biophilic design and ergonomics are at the forefront of workplace architecture.",
    image: "/images/blogs/blog-3.jpg",
    date: "June 5, 2025",
    author: "Arjun Mehta",
    slug: "new-trend-in-office-spaces",
  },
];

export function BlogGrid() {
  return (
    <section className="px-4 md:px-12 py-16">
      <div className="grid md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              </Link>
              <p className="text-gray-950 text-sm mb-4">{post.excerpt}</p>
              <div className="text-xs text-gray-900">
                {post.author} • {post.date}
              </div>
              <div className="py-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
