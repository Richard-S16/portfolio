import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/site";
import { Arrow } from "./Arrow";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const { notFound: copy } = getDictionary(locale);
  const other = locale === "en" ? "pt-br" : "en";
  return (
    <main className="not-found wrap">
      <Link href={localePath(locale)} className="wordmark">
        Richard Schmidt
      </Link>
      <p>404</p>
      <h1>{copy.title}</h1>
      <p>{copy.description}</p>
      <Link href={localePath(locale)} className="button primary">
        {copy.back}
        <Arrow />
      </Link>
      <Link
        href={localePath(other)}
        lang={other === "en" ? "en" : "pt-BR"}
        className="text-link"
      >
        {copy.otherLanguage}
      </Link>
    </main>
  );
}
