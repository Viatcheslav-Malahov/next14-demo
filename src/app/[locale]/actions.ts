"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isLocale } from "@/i18n/locales";

export async function switchLocale(formData: FormData) {
  const locale = String(formData.get("locale") || "");
  let next = String(formData.get("next") || "/");

  if (!isLocale(locale)) return;
  if (!next.startsWith("/")) next = `/${next}`;
  if (next === "/") next = ""; // чтобы /ru вместо /ru/

  const cookieStore = await cookies(); // 👈 ждём промис
  cookieStore.set("locale", locale, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 год
  });

  redirect(`/${locale}${next}`);
}
