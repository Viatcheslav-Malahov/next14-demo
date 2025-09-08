import type { Locale } from "./locales";

const currencyByLocale: Record<Locale, string> = {
    ru: "RUB",
    en: "USD",
};

export function formatCurrency(locale: Locale, amount: number) {
    const currency = currencyByLocale[locale] ?? "USD";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 2,
    }).format(amount);
}

export function formatTime(locale: Locale, ts: number) {
    return new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(ts);
}
