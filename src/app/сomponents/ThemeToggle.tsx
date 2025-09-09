"use client";

import { usePathname } from "next/navigation";
import { switchTheme } from "../actions.theme";
// (необязательно) иконки: npm i lucide-react
// import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ current }: { current: "light" | "dark" }) {
    const pathname = usePathname() || "/";
    const to = current === "dark" ? "light" : "dark";
    const label = current === "dark" ? "Light" : "Dark";
    // const Icon = current === "dark" ? Sun : Moon;

    return (
        <form action={switchTheme}>
            <input type="hidden" name="theme" value={to} />
            <input type="hidden" name="next" value={pathname} />
            <button
                type="submit"
                className="s-btn rounded-lg px-3 py-1.5 text-sm inline-flex items-center gap-2"
                aria-label={`Switch to ${to} mode`}
                title={`Switch to ${to} mode`}
            >
                {/* <Icon className="h-4 w-4" /> */}
                {label}
            </button>
        </form>
    );
}
