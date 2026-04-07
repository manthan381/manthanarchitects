import { verifyAdminFromCookieHeader } from "@/lib/admin/session";
import {
    blogPostCreateSchema,
    slugify,
    validateSlug,
} from "@/lib/blog/validation";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  if (!verifyAdminFromCookieHeader(req.headers.get("cookie"))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return NextResponse.json(
      { success: false, error: "Supabase admin is not configured" },
      { status: 500 }
    );
  }

  const { data, error } = await client
    .from("blog_posts")
    .select("id,title,slug,excerpt,content,cover_image,author_name,meta_title,meta_desc,meta_keyword,status,published_at,created_at,updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, posts: data });
}

export async function POST(req: Request) {
  if (!verifyAdminFromCookieHeader(req.headers.get("cookie"))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return NextResponse.json(
      { success: false, error: "Supabase admin is not configured" },
      { status: 500 }
    );
  }

  const parsed = blogPostCreateSchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  const payload = parsed.data;

  const slug = payload.slug ? slugify(payload.slug) : slugify(payload.title);
  if (!validateSlug(slug)) {
    return NextResponse.json(
      { success: false, error: "Invalid slug format" },
      { status: 400 }
    );
  }

  const status = payload.status ?? "draft";

  const { data, error } = await client
    .from("blog_posts")
    .insert({
      title: payload.title,
      slug,
      excerpt: payload.excerpt ?? payload.content.slice(0, 140),
      content: payload.content,
      cover_image: payload.coverImage,
      author_name: payload.authorName,
      meta_title: payload.metaTitle?.trim() || null,
      meta_desc: payload.metaDesc?.trim() || null,
      meta_keyword: payload.metaKeyword?.trim() || null,
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
    })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { success: false, error: "Slug already exists. Try a different slug." },
        { status: 409 }
      );
    }

    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ success: true, id: data.id }, { status: 201 });
}
