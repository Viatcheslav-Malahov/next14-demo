# 🚀 Next.js 14 Demo — Server & Client Components + Tailwind v4

Демонстрация возможностей **Next.js 14 (App Router)** с использованием **Server Components**, **Client Components**, плавной навигации через `next/link`, а также стилизации с **Tailwind CSS v4**.

---

## 📌 Возможности
- **App Router** — современная файловая маршрутизация через `/app`.
- **Server Components** — серверный рендеринг с загрузкой данных на стороне сервера.
- **Client Components** — интерактивные элементы с хуками (`useState`, `useTransition`, `useDeferredValue`).
- **Tailwind CSS v4** — мгновенная стилизация, адаптивная верстка.
- **Framer Motion** — плавные анимации.
- **TypeScript** — строгая типизация.

---

## 📂 Структура проекта
- src/
- app/
- layout.tsx # Общий макет, навигация через next/link
- page.tsx # Главная страница (Server Component)
- search/
- page.tsx # Страница поиска (Client Component)
- components/
- ClientSearch.tsx # Поиск с useTransition + useDeferredValue
- styles/
- globals.css # Tailwind v4 (@import "tailwindcss")