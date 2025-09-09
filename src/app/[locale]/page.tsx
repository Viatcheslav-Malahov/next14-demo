import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/locales";

export const metadata = { title: "Home" };

export default async function LocaleHome(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getDictionary(locale as Locale);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <section className="rounded-2xl s-card p-6 shadow-sm">
        <p className="mt-2" style={{ color: "var(--muted)" }}>
          {t.app.nav.home}
        </p>
      </section>
    </main>
  );
}
