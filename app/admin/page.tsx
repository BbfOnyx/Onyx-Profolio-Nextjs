import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminDashboardClient } from "./admin-client";

export const metadata: Metadata = {
  title: "Admin Dashboard | OnyxAdmin",
  description: "Administrative CMS dashboard for portfolio management.",
};

async function logoutAdmin() {
  "use server";

  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;

  if (session !== "authenticated") {
    redirect("/admin/login?from=/admin");
  }

  return <AdminDashboardClient logoutAction={logoutAdmin} />;
}
