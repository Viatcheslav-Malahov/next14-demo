"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function switchTheme(formData: FormData) {
  const to = String(formData.get("theme") || "light");  // "light" | "dark"
  const next = String(formData.get("next") || "/");

  const jar = await cookies();
  jar.set("theme", to === "dark" ? "dark" : "light", {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  redirect(next.startsWith("/") ? next : `/${next}`);
}
