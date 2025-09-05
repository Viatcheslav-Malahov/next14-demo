import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/i18n/locales";
import { detectPreferredLocale } from "@/i18n/detect-locale";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Пропускаем статику и служебные пути
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/favicon") ||
        pathname.startsWith("/robots") ||
        pathname.startsWith("/sitemap") ||
        pathname.match(/\.[a-zA-Z0-9]+$/) // файлы с расширением
    ) {
        return NextResponse.next();
    }

    // Если путь уже начинается с локали — пропускаем
    const seg1 = pathname.split("/")[1]; // '' | 'ru' | 'en' | ...
    if (isLocale(seg1)) return NextResponse.next();

    // Иначе определяем локаль и редиректим: '/' -> '/ru', '/products' -> '/ru/products'
    const locale = detectPreferredLocale(req);
    const url = new URL(`/${locale}${pathname}`, req.url);

    // Можно сохранить выбор в cookie
    const res = NextResponse.redirect(url);
    res.cookies.set("locale", locale, {
        path: "/",
        httpOnly: false,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365, // 1 год
    });
    return res;
}

// Матчим все пути, кроме статики и API (ещё раз на уровне matcher для скорости)
export const config = {
    matcher: [
        // корень
        "/",
        // всё остальное, кроме _next, api и файлов со статическими расширениями
        "/((?!_next|api|.*\\..*).*)",
    ],
};
