import "./globals.css";
import { cookies } from "next/headers";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const theme = (jar.get("theme")?.value === "dark" ? "dark" : "light") as "light" | "dark";

  return (
    <html lang="ru" data-theme={theme} className="h-full">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
