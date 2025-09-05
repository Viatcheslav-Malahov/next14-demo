export default async function LocaleHome(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  return (
    <main className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="text-sm text-gray-500">Текущая локаль: {locale}</div>
        <h2 className="mt-1 text-lg font-medium">
          Локализованная главная ({locale})
        </h2>
        <p className="mt-2 text-gray-700">
          Это тестовый экран сегмента <code>[locale]</code>. Навигацию и контент
          перенесём по шагам на следующие итерации.
        </p>
      </div>
    </main>
  );
}
