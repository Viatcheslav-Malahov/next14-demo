"use client";
import { useOptimistic, useRef } from "react";
import type { Message } from "./actions";
import { addMessage } from "./actions";
import { formatTime } from "@/i18n/format";
import type { Locale } from "@/i18n/locales";

export default function MessageForm({
    initial,
    locale,
    placeholder = "Напиши сообщение…",
    send = "Отправить",
}: {
    initial: Message[];
    locale: Locale;
    placeholder?: string;
    send?: string;
}) {
    const [optimistic, addOptimistic] = useOptimistic(
        initial,
        (state: Message[], optimisticText: string) => [
            { id: state.length + 1, text: optimisticText, createdAt: Date.now() },
            ...state,
        ]
    );

    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    async function action(formData: FormData) {
        const text = String(formData.get("text") || "").trim();
        if (!text) return;
        addOptimistic(text);
        await addMessage(formData);
        if (inputRef.current) inputRef.current.value = "";
        formRef.current?.reset();
    }

    return (
        <div className="space-y-4">
            <form ref={formRef} action={action} className="flex gap-2 items-start">
                <input
                    ref={inputRef}
                    name="text"
                    placeholder={placeholder}
                    className="rounded-xl border px-3 py-2 flex-1"
                    style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--text)" }}
                />
                <button className="s-btn-accent rounded-lg px-3 py-2 text-sm">
                    {send}
                </button>
            </form>

            <ul className="space-y-2">
                {optimistic.map((m) => (
                    <li key={m.id + "-" + m.createdAt} className="rounded-xl s-card p-3">
                        {m.text}
                        <span className="ml-2 text-xs" style={{ color: "var(--muted)" }}>
                            {formatTime(locale, m.createdAt)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
