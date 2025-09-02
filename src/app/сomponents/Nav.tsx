"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const item = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        className={`rounded-lg border px-3 py-1.5 hover:bg-white transition ${
          active ? "bg-gray-900 text-white hover:bg-gray-900" : ""
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="mt-4 flex gap-3 text-sm">
      {item("/", "Главная")}
      {item("/search", "Поиск")}
      {item("/products", "Продукты")}
      {item("/messages", "Сообщения")}
    </nav>
  );
}
