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
      className={`s-btn rounded-lg px-3 py-1.5 text-sm transition ${isActive(path) ? "s-btn-accent" : ""
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
