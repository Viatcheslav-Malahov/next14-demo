import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";
import LanguageSwitch from "./LanguageSwitch";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Next.js 14 — App Router Demo ({locale})</h1>
          <p className="text-gray-600">Server & Client Components · Tailwind v4 · i18n</p>
        </div>
        <LanguageSwitch current={locale as Locale} />
      </header>
      {props.children}
    </div>
  );
}
