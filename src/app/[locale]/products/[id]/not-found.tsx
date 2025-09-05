import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-10">
            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-yellow-800">
                <div className="text-lg font-semibold">Товар не найден</div>
                <p className="mt-1 text-sm opacity-90">
                    Возможно, он был удалён или ID указан неверно.
                </p>
                <Link
                    href="/products"
                    className="mt-4 inline-block rounded-lg border px-3 py-1.5 text-sm hover:bg-white"
                >
                    ← Вернуться к списку
                </Link>
            </div>
        </main>
    );
}
