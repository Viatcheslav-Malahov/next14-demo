import { getMessages } from "./actions";
import MessageForm from "./MessageForm";

export const metadata = { title: "Messages — useOptimistic" };

export default async function MessagesPage() {
    const messages = await getMessages(); // SSR
    return (
        <main className="mx-auto max-w-3xl px-4 py-10 space-y-6">
            <h1 className="text-2xl font-semibold">Сообщения (useOptimistic)</h1>
            <p className="text-gray-600">
                Новые сообщения появляются мгновенно (optimistic UI), затем подтверждаются
                данными с сервера после revalidate.
            </p>
            <MessageForm initial={messages} />
        </main>
    );
}
