"use client";
import { useDeferredValue, useMemo, useState, useTransition } from "react";
import { motion } from "framer-motion";

export default function ClientSearch({
    placeholder = "Введите запрос…",
    pending = "обновление…",
}: {
    placeholder?: string;
    pending?: string;
}) {
    const [query, setQuery] = useState("");
    const [isPending, startTransition] = useTransition();
    const deferred = useDeferredValue(query);

    const items = useMemo(() => {
        const base = Array.from({ length: 200 }).map((_, i) => `Item ${i + 1}`);
        const q = deferred.toLowerCase();
        const t = performance.now();
        while (performance.now() - t < 6) { }
        return base.filter((x) => x.toLowerCase().includes(q));
    }, [deferred]);

    return (
        <div className="space-y-4">
            <div className="relative">
                <input
                    className="w-full rounded-2xl border px-4 py-3 shadow-sm outline-none focus:border-gray-300"
                    style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--text)" }}
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => startTransition(() => setQuery(e.target.value))}
                />
                {isPending && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "var(--muted)" }}>
                        {pending}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                {items.map((x) => (
                    <motion.div
                        key={x}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl s-card p-3"
                    >
                        {x}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
