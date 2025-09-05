import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, type Locale, isLocale } from "./locales";

export function detectPreferredLocale(req: NextRequest): Locale {
    // 1) cookie имеет высший приоритет
    const fromCookie = req.cookies.get("locale")?.value;
    if (fromCookie && isLocale(fromCookie)) return fromCookie;

    // 2) Accept-Language: ru-RU,ru;q=0.9,en;q=0.8 ...
    const header = req.headers.get("accept-language") || "";
    const candidates = header
        .split(",")
        .map((part) => part.split(";")[0]?.trim().toLowerCase())
        .filter(Boolean);

    for (const c of candidates) {
        // exact match: "ru" | "en"
        if (isLocale(c)) return c;
        // match by prefix: "ru-RU" -> "ru"
        const prefix = c.split("-")[0];
        if (isLocale(prefix)) return prefix;
    }

    // 3) дефолт
    return DEFAULT_LOCALE;
}
