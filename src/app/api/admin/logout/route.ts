import { getCookieConfig } from "@/lib/admin/session";
import { NextResponse } from "next/server";

export async function POST() {
  const { name, options } = getCookieConfig();
  const response = NextResponse.json({ success: true });

  response.cookies.set(name, "", {
    ...options,
    maxAge: 0,
  });

  return response;
}
