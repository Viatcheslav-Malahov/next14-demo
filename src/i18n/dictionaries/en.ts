import type { DictSchema } from "../schema";

const en = {
    app: {
        title: "Next.js 14 — demo ({locale})",
        subtitle: "Server & Client Components · Tailwind v4 · i18n",
        nav: {
            home: "Home",
            search: "Search",
            products: "Products",
            messages: "Messages",
        },
    },
    search: {
        heading: "Client-side search",
        placeholder: "Type to filter…",
        pending: "updating…",
    },
    products: {
        listHeading: "Products (revalidate: 60s)",
        back: "← Back to list",
    },
    messages: {
        heading: "Messages (useOptimistic)",
        placeholder: "Write a message…",
        send: "Send",
        info:
            "New messages appear instantly (optimistic UI) then are confirmed from the server after revalidate.",
        empty: "No messages yet",
    },
} as const satisfies DictSchema;

export default en;
