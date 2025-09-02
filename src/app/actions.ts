"use server";

export type SaveState = { ok: boolean; error?: string; text?: string };

export async function saveMessageWithState(
  prevState: SaveState,
  formData: FormData
): Promise<SaveState> {
  const text = String(formData.get("text") || "").trim();
  if (!text) return { ok: false, error: "Пустое сообщение" };

  await new Promise((r) => setTimeout(r, 300));
  return { ok: true, text };
}
