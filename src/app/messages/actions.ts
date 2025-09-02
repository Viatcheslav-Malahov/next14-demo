"use server";

import { revalidatePath } from "next/cache";

export type Message = { id: number; text: string; createdAt: number };

// Простое «хранилище» в памяти процесса (для демо)
const store: Message[] = [];

export async function getMessages(): Promise<Message[]> {
    // имитация задержки
    await new Promise((r) => setTimeout(r, 120));
    // возвращаем копию (не мутируй исходник)
    return [...store].sort((a, b) => b.createdAt - a.createdAt);
}

export async function addMessage(formData: FormData): Promise<void> {
    const text = String(formData.get("text") || "").trim();
    if (!text) throw new Error("Пустое сообщение");
    // имитация сервера
    await new Promise((r) => setTimeout(r, 250));

    store.push({
        id: store.length + 1,
        text,
        createdAt: Date.now(),
    });

    // Перерисуем страницу со свежими данными
    revalidatePath("/messages");
}
