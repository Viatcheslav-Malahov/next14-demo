"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
                <div className="font-semibold">Ошибка загрузки</div>
                <div className="mt-1 text-sm opacity-80">{String(error.message)}</div>
                <button
                    onClick={reset}
                    className="mt-4 rounded-2xl border px-3 py-1.5 text-sm"
                >
                    Повторить
                </button>
            </div>
        </div>
    );
}
