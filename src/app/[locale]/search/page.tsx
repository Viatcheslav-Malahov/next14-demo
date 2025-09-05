import ClientSearchTexts from "./ClientSearch";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/locales";

export const metadata = { title: "Search" };

export default async function SearchPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getDictionary(locale as Locale);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">{t.search.heading}</h1>
      {/* пробросим тексты в клиентский компонент через props */}
      <ClientSearchPlaceholder
        placeholder={t.search.placeholder}
        pending={t.search.pending}
      />
    </main>
  );
}

/** Обёртка, чтобы передать тексты в клиентский компонент */
function ClientSearchPlaceholder(props: { placeholder: string; pending: string }) {
  return <ClientSearchTexts {...props} />;
}

