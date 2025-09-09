# Next.js 14 — App Router Demo

Демонстрационный проект на **Next.js 14** с использованием **App Router**, серверных компонентов, локализацией и переключением темы (Solarized Light/Dark).

## 🚀 Возможности

- **App Router** + серверные/клиентские компоненты
- **i18n**: поддержка `ru` и `en`, переключение языка без перезагрузки
- **Темы**: светлая/тёмная (Solarized), сохраняется в cookie
- **Tailwind CSS v4** + CSS-переменные для тем
- **Демо страницы**:
  - `/[locale]/products` — список товаров (ISR + `revalidateTag`)
  - `/[locale]/search` — поиск с `useTransition` / `useDeferredValue`
  - `/[locale]/messages` — форма сообщений с `useOptimistic`
- **next/image** с конфигом внешних хостов
- **Framer Motion** для анимаций
- **Server Actions** (`"use server"`) для мутаций

---

## 📦 Установка и запуск

```bash
git clone https://github.com/Viatcheslav-Malahov/next14-demo.git
cd next14-demo
npm install
npm run dev

```
---

## 🛠 Структура проекта

src/
  app/
    [locale]/
      layout.tsx          # Локальный лейаут с переключателем языка/темы
      page.tsx            # Главная
      products/           # Список и деталка товаров
      search/             # Демо поиска
      messages/           # Демо чата
    components/           # Общие UI-компоненты
    actions.theme.ts      # Server Action для переключения темы
  i18n/                   # Словари и конфиг локалей
  styles/
    globals.css           # Tailwind и CSS-переменные Solarized


## 🎨 Темы (Solarized)
Тема хранится в cookie (theme=light|dark), читается в корневом layout.tsx и применяется через data-theme на <html>.
:root[data-theme="light"] { --bg: #fdf6e3; --text: #073642; ... }
:root[data-theme="dark"]  { --bg: #002b36; --text: #93a1a1; ... }

Классы .s-card, .s-btn, .s-btn-accent используют эти переменные, чтобы элементы выглядели консистентно в обеих темах.

## 🌐 Локализация
- Поддержка ru и en
- Язык хранится в cookie locale
- middleware.ts перенаправляет / на /ru или /en по языку браузера
- Словари лежат в src/i18n