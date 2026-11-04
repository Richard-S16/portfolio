import { getDictionary } from "@/lib/dictionary";
import { site, type Locale } from "@/lib/site";
import { Arrow } from "./Arrow";

export function Contact({ locale }: { locale: Locale }) {
  const c = getDictionary(locale);
  return (
    <section
      id="contact"
      className="contact-band"
      aria-labelledby="contact-title"
    >
      <div className="contact wrap">
        <div>
          <h2 id="contact-title" className="preserve-lines">
            {c.contact.title}
          </h2>
          <p>{c.contact.text}</p>
          <a className="button contact-button" href={`mailto:${site.email}`}>
            {c.contact.email}
            <Arrow diagonal />
          </a>
        </div>
        <div className="contact-details">
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
            <Arrow diagonal />
          </a>
          <div className="contact-socials">
            <a href={site.github}>
              GitHub
              <Arrow diagonal />
            </a>
            <a href={site.linkedin}>
              LinkedIn
              <Arrow diagonal />
            </a>
            <a href="/resume.pdf">
              {c.nav.resume}
              <Arrow diagonal />
            </a>
          </div>
          <p>{c.contact.location}</p>
        </div>
      </div>
    </section>
  );
}
