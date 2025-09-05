import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/locales";
import LanguageSwitch from "./LanguageSwitch";
import Nav from "@/app/сomponents/Nav";
import { getDictionary } from "@/i18n";


export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale as Locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">
            {t.app.title.replace("{locale}", locale)}
          </h1>
          <p className="text-gray-600">{t.app.subtitle}</p>
          <Nav locale={locale as Locale} labels={t.app.nav} />        </div>
        <LanguageSwitch current={locale as Locale} />
      </header>
      {props.children}
    </div>
  );
}
