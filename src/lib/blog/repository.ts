import { blogPosts as fallbackHtmlPosts } from "@/lib/blogData";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { unstable_noStore as noStore } from "next/cache";
import type { BlogPost, BlogPostPreview } from "./types";

type SupabaseBlogRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author_name: string;
  meta_title: string | null;
  meta_desc: string | null;
  meta_keyword: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  status: "draft" | "published";
};

function stripHtml(input: string) {
  return input.replaceAll(/<[^>]*>/g, " ").replaceAll(/\s+/g, " ").trim();
}

function makeExcerpt(html: string, max = 140) {
  const text = stripHtml(html);
  if (text.length <= max) {
    return text;
  }

  return `${text.slice(0, max).trim()}...`;
}

function mapFallbackPosts(): BlogPost[] {
  return fallbackHtmlPosts.map((post, index) => {
    const publishedAt = new Date(post.date).toISOString();
    const now = new Date().toISOString();

    return {
      id: String(index + 1),
      title: post.title,
      slug: post.slug,
      excerpt: makeExcerpt(post.content),
      content: post.content,
      coverImage: post.image,
      authorName: post.author,
      metaTitle: null,
      metaDesc: null,
      metaKeyword: null,
      publishedAt,
      createdAt: publishedAt,
      updatedAt: now,
      status: "published",
    };
  });
}

const fallbackPosts = mapFallbackPosts();

function toPost(row: SupabaseBlogRow): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    coverImage: row.cover_image,
    authorName: row.author_name,
    metaTitle: row.meta_title,
    metaDesc: row.meta_desc,
    metaKeyword: row.meta_keyword,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    status: row.status,
  };
}

function toPreview(post: BlogPost): BlogPostPreview {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    authorName: post.authorName,
    publishedAt: post.publishedAt,
  };
}

export async function getPublishedPosts(): Promise<BlogPostPreview[]> {
  noStore();
  const client = getSupabaseServerClient();

  if (!client) {
    return fallbackPosts.map(toPreview);
  }

  const { data, error } = await client
    .from("blog_posts")
    .select(
      "id,title,slug,excerpt,cover_image,author_name,meta_title,meta_desc,meta_keyword,published_at,created_at,updated_at,status"
    )
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Supabase getPublishedPosts failed:", error?.message);
    return fallbackPosts.map(toPreview);
  }

  return data.map((row) =>
    toPreview(
      toPost({
        ...row,
        content: "",
      } as SupabaseBlogRow)
    )
  );
}

export async function getPublishedPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  noStore();
  const client = getSupabaseServerClient();

  if (!client) {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  const { data, error } = await client
    .from("blog_posts")
    .select(
      "id,title,slug,excerpt,content,cover_image,author_name,meta_title,meta_desc,meta_keyword,published_at,created_at,updated_at,status"
    )
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Supabase getPublishedPostBySlug failed:", error.message);
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  if (!data) {
    return null;
  }

  return toPost(data as SupabaseBlogRow);
}

export async function getLatestPublishedPosts(
  limit = 3
): Promise<BlogPostPreview[]> {
  const posts = await getPublishedPosts();
  return posts.slice(0, limit);
}
