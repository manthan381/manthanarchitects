import { blogPosts as fallbackBlogPosts } from "@/lib/blogData";
import { projects } from "@/lib/projectData";
import { getSiteUrl } from "@/lib/site";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { MetadataRoute } from "next";

type SupabaseBlogSitemapRow = {
  slug: string;
  updated_at: string;
};

// ─── Priority Guide (SEO optimised for an Architecture Firm) ─────────────────
// 1.00 → Homepage (only one)
// 0.90 → /projects (core portfolio — most valuable for leads)
// 0.85 → /contact-us (direct lead generation page)
// 0.80 → Service / brand pages (about, expertise, architects-design, elevation-design)
// 0.80 → Individual project pages (real unique content — high SEO value)
// 0.75 → /blog listing + category filter pages
// 0.90 → Individual blog posts (content marketing, updates frequently)
// ─────────────────────────────────────────────────────────────────────────────

const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
    { path: "", priority: 1, changeFrequency: "daily" },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact-us", priority: 0.85, changeFrequency: "monthly" },
    { path: "/career", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.85, changeFrequency: "weekly" },
    { path: "/services/furniture", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/architects-design", priority: 0.8, changeFrequency: "weekly" },
    { path: "/elevation-design", priority: 0.8, changeFrequency: "weekly" },
    { path: "/expertise", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" },
  ];

// All unique project categories — each category filter page is independently indexable
const PROJECT_CATEGORIES = [
  "Office",
  "Hotel and Resort",
  "Hospital",
  "Restaurant, Bar and Microbrewery",
  "Commercial",
  "Highways and Toll Plaza",
  "Modern Villa",
  "Gym",
] as const;

// Sitemap revalidates every hour so new blog posts appear quickly
export const revalidate = 3600;

function toAbsoluteUrl(siteUrl: string, path: string) {
  return `${siteUrl}${path}`;
}

async function getPublishedBlogEntries(siteUrl: string): Promise<MetadataRoute.Sitemap> {
  const client = getSupabaseServerClient();

  // Fallback to static data when Supabase is not available
  if (!client) {
    return fallbackBlogPosts.map((post) => ({
      url: toAbsoluteUrl(siteUrl, `/blog/${post.slug}`),
      lastModified: new Date(post.date),        // actual publish date from static data
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  }

  const { data, error } = await client
    .from("blog_posts")
    .select("slug,updated_at")
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error || !data) {
    return fallbackBlogPosts.map((post) => ({
      url: toAbsoluteUrl(siteUrl, `/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  }

  // updated_at is set by Supabase automatically every time the row changes
  return (data as SupabaseBlogSitemapRow[]).map((post) => ({
    url: toAbsoluteUrl(siteUrl, `/blog/${post.slug}`),
    lastModified: new Date(post.updated_at),    // real last-edit timestamp from DB
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}

// Individual project pages — static data, use today as lastModified
// (update this file whenever project content changes to signal Google to re-crawl)
function getProjectEntries(siteUrl: string): MetadataRoute.Sitemap {
  const now = new Date();
  return projects.map((project) => ({
    url: toAbsoluteUrl(siteUrl, `/projects/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
}

// Category filter pages — useful entry points for specific project types
function getProjectCategoryEntries(siteUrl: string): MetadataRoute.Sitemap {
  const now = new Date();
  return PROJECT_CATEGORIES.map((category) => ({
    url: toAbsoluteUrl(siteUrl, `/projects?category=${encodeURIComponent(category)}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));
}

function getStaticEntries(siteUrl: string): MetadataRoute.Sitemap {
  const now = new Date();
  return STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: toAbsoluteUrl(siteUrl, path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const blogEntries = await getPublishedBlogEntries(siteUrl);

  return [
    ...getStaticEntries(siteUrl),
    ...getProjectCategoryEntries(siteUrl),
    ...getProjectEntries(siteUrl),
    ...blogEntries,
  ];
}
