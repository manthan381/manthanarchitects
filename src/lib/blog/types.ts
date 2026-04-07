export type BlogPostStatus = "draft" | "published";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  authorName: string;
  metaTitle?: string | null;
  metaDesc?: string | null;
  metaKeyword?: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  status: BlogPostStatus;
};

export type BlogPostPreview = Pick<
  BlogPost,
  "id" | "title" | "slug" | "excerpt" | "coverImage" | "authorName" | "publishedAt"
>;
