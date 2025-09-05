"use server";

import { revalidatePath } from "next/cache";

export type Message = { id: number; text: string; createdAt: number };

// Память процесса — демо-хранилище
const store: Message[] = [];

export async function getMessages(): Promise<Message[]> {
    await new Promise((r) => setTimeout(r, 120));
    return [...store].sort((a, b) => b.createdAt - a.createdAt);
}

export async function addMessage(formData: FormData): Promise<void> {
    const text = String(formData.get("text") || "").trim();
    if (!text) throw new Error("Пустое сообщение");
    await new Promise((r) => setTimeout(r, 250));

    store.push({ id: store.length + 1, text, createdAt: Date.now() });

    // Обновим обе локали (просто и надёжно)
    revalidatePath("/ru/messages");
    revalidatePath("/en/messages");
}
