import { Document } from "@/components/Document";
import Link from "next/link";

export const metadata = {
  title: "Page not found — Richard Schmidt",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <Document locale="en">
      <main className="not-found wrap">
        <Link href="/" className="wordmark">
          Richard Schmidt
        </Link>
        <p>404</p>
        <h1>This page took a wrong turn.</h1>
        <p>The project or page you’re looking for isn’t here.</p>
        <Link href="/" className="button primary">
          Back to the portfolio <span aria-hidden="true">→</span>
        </Link>
        <Link href="/pt-br" lang="pt-BR" className="text-link">
          Ver portfólio em português
        </Link>
      </main>
    </Document>
  );
}
