import { verifyAdminFromCookieHeader } from "@/lib/admin/session";
import {
    blogPostUpdateSchema,
    slugify,
    validateSlug,
} from "@/lib/blog/validation";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

function unauthorizedResponse() {
  return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
}

function misconfiguredResponse() {
  return NextResponse.json(
    { success: false, error: "Supabase admin is not configured" },
    { status: 500 }
  );
}

function getAuthorizedAdminClient(req: Request) {
  if (!verifyAdminFromCookieHeader(req.headers.get("cookie"))) {
    return { errorResponse: unauthorizedResponse() };
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return { errorResponse: misconfiguredResponse() };
  }

  return { client };
}

function buildUpdates(payload: ReturnType<typeof blogPostUpdateSchema.parse>) {
  const updates: Record<string, string | null> = {
    updated_at: new Date().toISOString(),
  };

  if (payload.title) {
    updates.title = payload.title;
  }

  if (payload.slug) {
    const slug = slugify(payload.slug);
    if (!validateSlug(slug)) {
      return {
        errorResponse: NextResponse.json(
          { success: false, error: "Invalid slug format" },
          { status: 400 }
        ),
      };
    }

    updates.slug = slug;
  } else if (payload.title) {
    updates.slug = slugify(payload.title);
  }

  if (payload.excerpt) {
    updates.excerpt = payload.excerpt;
  }
  if (payload.content) {
    updates.content = payload.content;
  }
  if (payload.coverImage) {
    updates.cover_image = payload.coverImage;
  }
  if (payload.authorName) {
    updates.author_name = payload.authorName;
  }
  if (payload.metaTitle !== undefined) {
    updates.meta_title = payload.metaTitle?.trim() || null;
  }
  if (payload.metaDesc !== undefined) {
    updates.meta_desc = payload.metaDesc?.trim() || null;
  }
  if (payload.metaKeyword !== undefined) {
    updates.meta_keyword = payload.metaKeyword?.trim() || null;
  }

  if (payload.status) {
    updates.status = payload.status;
    updates.published_at =
      payload.status === "published" ? new Date().toISOString() : null;
  }

  return { updates };
}

async function revalidateBlogPaths(client: ReturnType<typeof getSupabaseAdminClient>, id: string) {
  if (!client) {
    return;
  }

  const { data: row } = await client
    .from("blog_posts")
    .select("slug")
    .eq("id", id)
    .maybeSingle();

  revalidatePath("/");
  revalidatePath("/blog");
  if (row?.slug) {
    revalidatePath(`/blog/${row.slug}`);
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = getAuthorizedAdminClient(req);
  if (auth.errorResponse) {
    return auth.errorResponse;
  }
  const client = auth.client;

  const { id } = await params;
  const parsed = blogPostUpdateSchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  const payload = parsed.data;

  const updatesResult = buildUpdates(payload);
  if (updatesResult.errorResponse) {
    return updatesResult.errorResponse;
  }

  const { error } = await client
    .from("blog_posts")
    .update(updatesResult.updates)
    .eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { success: false, error: "Slug already exists. Try a different slug." },
        { status: 409 }
      );
    }

    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  await revalidateBlogPaths(client, id);

  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = getAuthorizedAdminClient(req);
  if (auth.errorResponse) {
    return auth.errorResponse;
  }
  const client = auth.client;

  const { id } = await params;

  const { error } = await client.from("blog_posts").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  await revalidateBlogPaths(client, id);

  return NextResponse.json({ success: true });
}
