import { getDictionary } from "@/lib/dictionary";
import { site, type Locale } from "@/lib/site";
import { Arrow } from "./Arrow";

export function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-main">
        <h1 id="hero-title">{site.name}</h1>
        <p className="hero-role">{d.hero.role}</p>
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
      <div className="hero-bottom">
        <span>{d.hero.location}</span>
        <span className="availability">
          <span aria-hidden="true" />
          {d.hero.availability}
        </span>
        <a href="/resume.pdf">
          {d.nav.resume}
          <Arrow direction="down" />
        </a>
      </div>
    </section>
  );
}
