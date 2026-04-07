import { verifyAdminFromCookieHeader } from "@/lib/admin/session";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;

function sanitizeFileName(name: string) {
  return name
    .toLowerCase()
    .replaceAll(/[^a-z0-9._-]/g, "-")
    .replaceAll(/-+/g, "-")
    .replaceAll(/^-|-$/g, "");
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

  const bucket = process.env.SUPABASE_STORAGE_BUCKET ?? "blog-images";
  const formData = await req.formData();
  const rawFile = formData.get("file");

  if (!(rawFile instanceof File)) {
    return NextResponse.json(
      { success: false, error: "Image file is required" },
      { status: 400 }
    );
  }

  if (!ALLOWED_TYPES.has(rawFile.type)) {
    return NextResponse.json(
      { success: false, error: "Only jpg, png, webp or gif files are allowed" },
      { status: 400 }
    );
  }

  if (rawFile.size > MAX_IMAGE_SIZE_BYTES) {
    return NextResponse.json(
      { success: false, error: "File is too large. Max size is 5MB" },
      { status: 400 }
    );
  }

  const now = new Date();
  const year = String(now.getUTCFullYear());
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const safeName = sanitizeFileName(rawFile.name || "image");
  const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeName}`;
  const path = `blog/${year}/${month}/${uniqueName}`;

  const bytes = await rawFile.arrayBuffer();

  const { error: uploadError } = await client.storage
    .from(bucket)
    .upload(path, bytes, {
      cacheControl: "3600",
      upsert: false,
      contentType: rawFile.type,
    });

  if (uploadError) {
    return NextResponse.json(
      { success: false, error: uploadError.message },
      { status: 500 }
    );
  }

  const { data: publicData } = client.storage.from(bucket).getPublicUrl(path);

  return NextResponse.json({
    success: true,
    url: publicData.publicUrl,
    path,
    bucket,
  });
}
