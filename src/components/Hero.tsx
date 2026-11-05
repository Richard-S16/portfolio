import { getDictionary } from "@/lib/dictionary";
import { projects } from "@/data/portfolio";
import { localePath, site, type Locale } from "@/lib/site";
import Link from "next/link";
import { Arrow } from "./Arrow";

export function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-identity">
        <p>{d.hero.role}</p>
        <p className="availability">
          <span aria-hidden="true" />
          {d.hero.availability}
        </p>
      </div>
      <div className="hero-grid">
        <div className="hero-main">
          <h1 id="hero-title">
            {d.hero.title}
            <br />
            <span>{d.hero.emphasis}</span>
          </h1>
          <p className="hero-intro">{d.hero.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              {d.hero.work}
              <Arrow />
            </a>
            <a className="text-link" href="#contact">
              {d.hero.contact}
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <aside className="hero-index" aria-label={d.hero.index}>
          <p className="index-heading">{d.hero.index}</p>
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={localePath(locale, `/work/${p.slug}`)}
              className="index-row"
            >
              <span>{d.projects[p.slug].category}</span>
              <Arrow diagonal />
            </Link>
          ))}
          <div className="hero-socials">
            <a href={site.github}>
              GitHub
              <Arrow diagonal />
            </a>
            <a href={site.linkedin}>
              LinkedIn
              <Arrow diagonal />
            </a>
          </div>
        </aside>
      </div>
      <div className="hero-bottom">
        <span>{d.hero.location}</span>
        <a href="/resume.pdf">
          {d.nav.resume}
          <Arrow direction="down" />
        </a>
      </div>
    </section>
  );
}
