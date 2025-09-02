"use client";

import { useFormStatus } from "react-dom";
import { saveMessageWithState, type SaveState } from "../actions";
import { useActionState } from "react";

const initialState: SaveState = { ok: false };

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="rounded-xl border px-3 py-2">
      {pending ? "Сохранение…" : "Сохранить"}
    </button>
  );
}

export default function MessageForm() {
  const [state, formAction] = useActionState(saveMessageWithState, initialState);

  return (
    <form action={formAction} className="flex gap-2 items-start">
      <input
        name="text"
        placeholder="Сообщение…"
        className="rounded-xl border px-3 py-2"
      />
      <SubmitBtn />
      {state.error && <div className="text-red-600 text-sm">{state.error}</div>}
      {state.ok && state.text && (
        <div className="text-green-700 text-sm">Сохранено: {state.text}</div>
      )}
    </form>
  );
}
