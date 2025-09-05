import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full bg-gray-50">
      <body className="min-h-screen antialiased text-gray-900">
        {children}
      </body>
    </html>
  );
}
