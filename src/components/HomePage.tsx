import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { FeaturedWork } from "./FeaturedWork";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function HomePage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Software Engineer",
    sameAs: [site.github, site.linkedin],
    knowsLanguage: ["en", "pt-BR"],
    worksFor: { "@type": "Organization", name: "Lenovo" },
  };
  return (
    <>
      <a className="skip-link" href="#main">
        {d.nav.skip}
      </a>
      <Header locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <FeaturedWork locale={locale} />
        <Experience locale={locale} />
        <Skills locale={locale} />
        <About locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
