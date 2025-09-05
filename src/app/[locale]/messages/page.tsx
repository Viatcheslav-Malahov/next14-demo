import { getMessages } from "./actions";
import MessageForm from "./MessageForm";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/locales";

export const metadata = { title: "Messages" };

export default async function MessagesPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getDictionary(locale as Locale);

  const messages = await getMessages();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">{t.messages.heading}</h1>
      <p className="text-gray-600">{t.messages.info}</p>
      <MessageForm initial={messages} />
    </main>
  );
}
