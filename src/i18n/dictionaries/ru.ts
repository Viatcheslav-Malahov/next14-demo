import type { DictSchema } from "../schema";

const ru = {
    app: {
        title: "Next.js 14 — демо ({locale})",
        subtitle: "Server & Client Components · Tailwind v4 · i18n",
        nav: {
            home: "Главная",
            search: "Поиск",
            products: "Продукты",
            messages: "Сообщения",
        },
    },
    search: {
        heading: "Клиентский поиск",
        placeholder: "Введите запрос…",
        pending: "обновление…",
    },
    products: {
        listHeading: "Продукты (revalidate: 60s)",
        back: "← Назад к списку",
    },
    messages: {
        heading: "Сообщения (useOptimistic)",
        placeholder: "Напиши сообщение…",
        send: "Отправить",
        info:
            "Новые сообщения появляются мгновенно (optimistic UI), затем подтверждаются данными с сервера после revalidate.",
        empty: "Пока нет сообщений",
    },
} as const satisfies DictSchema;

export default ru;
