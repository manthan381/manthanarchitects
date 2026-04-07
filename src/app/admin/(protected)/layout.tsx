import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

export default async function ProtectedAdminLayout({
  children,
}: Readonly<ProtectedLayoutProps>) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;

  if (!verifyAdminSessionToken(token)) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
