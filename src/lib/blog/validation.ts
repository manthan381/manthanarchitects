import { z } from "zod";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const blogPostCreateSchema = z.object({
  title: z.string().trim().min(5).max(180),
  slug: z.string().trim().max(180).optional(),
  excerpt: z.string().trim().max(320).optional(),
  content: z.string().trim().min(20),
  coverImage: z.string().trim().min(1),
  authorName: z.string().trim().min(2).max(100),
  metaTitle: z.string().trim().max(180).optional(),
  metaDesc: z.string().trim().max(320).optional(),
  metaKeyword: z.string().trim().max(500).optional(),
  status: z.enum(["draft", "published"]).optional(),
});

export const blogPostUpdateSchema = z
  .object({
    title: z.string().trim().min(5).max(180).optional(),
    slug: z.string().trim().max(180).optional(),
    excerpt: z.string().trim().max(320).optional(),
    content: z.string().trim().min(20).optional(),
    coverImage: z.string().trim().min(1).optional(),
    authorName: z.string().trim().min(2).max(100).optional(),
    metaTitle: z.string().trim().max(180).optional(),
    metaDesc: z.string().trim().max(320).optional(),
    metaKeyword: z.string().trim().max(500).optional(),
    status: z.enum(["draft", "published"]).optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "At least one field is required",
  });

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replaceAll(/[^a-z0-9\s-]/g, "")
    .replaceAll(/\s+/g, "-")
    .replaceAll(/-+/g, "-")
    .replaceAll(/^-+|-+$/g, "");
}

export function validateSlug(slug: string) {
  return slugPattern.test(slug);
}
