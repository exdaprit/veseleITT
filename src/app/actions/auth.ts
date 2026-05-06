"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Hardcoded for simplicity as requested, should be in .env in production
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "VeseleIT2026";

export async function loginAdmin(password: string) {
  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    return { success: true };
  }
  return { success: false, error: "Nesprávné heslo" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}
