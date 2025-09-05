// src/app/[locale]/components/Nav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/locales";

type Labels = {
  home: string;
  search: string;
  products: string;
  messages: string;
};

export default function Nav({ locale, labels }: { locale: Locale; labels: Labels }) {
  const pathname = usePathname();
  const href = (p: string) => `/${locale}${p}`;
  const isActive = (p: string) => pathname === href(p);

  const item = (path: string, label: string) => (
    <Link
      key={path}
      href={href(path)}
      className={`rounded-lg border px-3 py-1.5 text-sm transition hover:bg-white ${isActive(path) ? "bg-gray-900 text-white hover:bg-gray-900" : ""
        }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="mt-4 flex gap-3">
      {item("/", labels.home)}
      {item("/search", labels.search)}
      {item("/products", labels.products)}
      {item("/messages", labels.messages)}
    </nav>
  );
}
