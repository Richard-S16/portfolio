import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richard Schmidt | Software Engineer",
  description: "Portfolio of Richard Schmidt - Software Engineer II at Lenovo R&D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
