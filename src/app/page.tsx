import ClientSearch from "@/app/сomponents/ClientSearch";
import MessageForm from "@/app/сomponents/MessageForm";

export const metadata = { title: "Клиентский поиск" };

export default async function SearchPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">Next.js 14 — Client Components</h1>
      <MessageForm />
      <ClientSearch />
    </main>
  );
}
