import { Manrope } from "next/font/google";
import type { Locale } from "@/lib/site";
import "@/app/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// Run before paint; storage denial must not prevent system-theme selection.
const themeScript = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'})()`;

export function Document({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale === "en" ? "en" : "pt-BR"}
      suppressHydrationWarning
      className={manrope.variable}
    >
      {/* Root App Router documents use a native head for the pre-paint theme script. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
