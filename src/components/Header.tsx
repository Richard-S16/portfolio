import Link from "next/link";
import type { Locale } from "@/lib/site";
import { localePath } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { ThemeToggle } from "./ThemeToggle";
import { Arrow } from "./Arrow";

export function Header({
  locale,
  path = "",
}: {
  locale: Locale;
  path?: string;
}) {
  const { nav } = getDictionary(locale);
  const home = localePath(locale);
  const other = locale === "en" ? "pt-br" : "en";
  const links = [
    ["work", nav.work],
    ["experience", nav.experience],
    ["about", nav.about],
    ["contact", nav.contact],
  ];

  return (
    <header className="site-header wrap" id="top">
      <Link href={home} className="wordmark">
        <span className="brand-mark">
          r<span>.</span>
        </span>
        <span>Richard Schmidt</span>
      </Link>
      <nav
        className="desktop-nav"
        aria-label={locale === "en" ? "Main navigation" : "Navegação principal"}
      >
        {links.map(([id, label]) => (
          <a key={id} href={`${home}#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <Link
          href={localePath(other, path)}
          hrefLang={other === "en" ? "en" : "pt-BR"}
          className="language-switch"
          title={nav.language}
        >
          <span className={locale === "en" ? "current" : ""}>EN</span>
          <span className="language-divider">/</span>
          <span className={locale === "pt-br" ? "current" : ""}>PT</span>
          <span className="sr-only"> — {nav.language}</span>
        </Link>
        <ThemeToggle label={nav.theme} />
        <a className="header-resume" href="/resume.pdf">
          {nav.resume}
          <Arrow diagonal />
        </a>
      </div>
      <details className="mobile-nav">
        <summary>
          {nav.menu}
          <span aria-hidden="true"> +</span>
        </summary>
        <nav aria-label={nav.menu}>
          {links.map(([id, label]) => (
            <a key={id} href={`${home}#${id}`}>
              {label}
            </a>
          ))}
          <a href="/resume.pdf">{nav.resume}</a>
        </nav>
      </details>
    </header>
  );
}
