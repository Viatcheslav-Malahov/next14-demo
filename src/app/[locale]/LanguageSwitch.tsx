"use client";

import { usePathname } from "next/navigation";
import { switchLocale } from "./actions";
import { LOCALES, type Locale } from "@/i18n/locales";

export default function LanguageSwitch({ current }: { current: Locale }) {
    const pathname = usePathname();        // напр.: /ru/products/5
    const parts = pathname.split("/");     // ["", "ru", "products", "5"]
    const rest = parts.slice(2).join("/"); // "products/5" или ""
    const next = rest ? `/${rest}` : "/";  // хвост пути без локали

    return (
        <div className="inline-flex items-center gap-2">
            {LOCALES.map((l) => (
                <form key={l} action={switchLocale}>
                    <input type="hidden" name="locale" value={l} />
                    <input type="hidden" name="next" value={next} />
                    <button
                        type="submit"
                        className={`rounded-lg border px-2 py-1 text-sm transition ${l === current ? "bg-gray-900 text-white hover:bg-gray-900" : "hover:bg-white"
                            }`}
                        disabled={l === current}
                        aria-current={l === current ? "page" : undefined}
                    >
                        {l.toUpperCase()}
                    </button>
                </form>
            ))}
        </div>
    );
}
