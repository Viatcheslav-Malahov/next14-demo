import Link from "next/link";

export const metadata = {
  title: "Next.js 14 — App Router Demo",
  description: "Server & Client Components + Tailwind v4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full bg-gray-50">
      <body className="min-h-screen antialiased text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <header className="mb-8">
            <h1 className="text-2xl font-bold">Next.js 14 — App Router Demo</h1>
            <p className="text-gray-600">
              Server Components, Client Components, Tailwind v4
            </p>
            <nav className="mt-4 flex gap-3 text-sm">
              <Link
                className="rounded-lg border px-3 py-1.5 hover:bg-white"
                href="/"
              >
                Главная
              </Link>
              <Link
                className="rounded-lg border px-3 py-1.5 hover:bg-white"
                href="/search"
              >
                Поиск (client)
              </Link>
            </nav>
          </header>
          {children}
          <footer className="mt-12 text-sm text-gray-500">
            © {new Date().getFullYear()} Next14 Demo
          </footer>
        </div>
      </body>
    </html>
  );
}
