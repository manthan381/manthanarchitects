import {
    createAdminSessionToken,
    getCookieConfig,
} from "@/lib/admin/session";
import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";

function safeCompare(input: string, expected: string) {
  const a = Buffer.from(input);
  const b = Buffer.from(expected);

  if (a.length !== b.length) {
    return false;
  }

  return timingSafeEqual(a, b);
}

export async function POST(req: Request) {
  const configuredUsername = process.env.ADMIN_USERNAME;
  const configuredPassword = process.env.ADMIN_PASSWORD;

  if (!configuredUsername || !configuredPassword) {
    return NextResponse.json(
      { success: false, error: "Admin credentials are not configured" },
      { status: 500 }
    );
  }

  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { success: false, error: "Username and password are required" },
      { status: 400 }
    );
  }

  const isValidUsername = safeCompare(String(username), configuredUsername);
  const isValidPassword = safeCompare(String(password), configuredPassword);

  if (!isValidUsername || !isValidPassword) {
    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = createAdminSessionToken(configuredUsername);
  const { name, options } = getCookieConfig();

  const response = NextResponse.json({ success: true });
  response.cookies.set(name, token, options);

  return response;
}
