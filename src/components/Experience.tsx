import Image from "next/image";
import { roles, lenovoProjects } from "@/data/portfolio";
import { getDictionary } from "@/lib/dictionary";
import { dateRange, type Locale } from "@/lib/site";
import { Section } from "./Section";

export function Experience({ locale }: { locale: Locale }) {
  const { experience: c } = getDictionary(locale);
  return (
    <div className="experience-band">
      <Section id="experience" title={c.title} intro={c.intro}>
        <div className="career">
          <h3>{c.tenure}</h3>
          <ol className="timeline">
            {roles.map((role, i) => (
              <li key={role.title}>
                <div>
                  <h4>{c.roleTitles[i]}</h4>
                  <p className="date-range">
                    {dateRange(
                      locale,
                      role.start,
                      "end" in role ? role.end : undefined,
                    )}
                  </p>
                </div>
                <p>{c.roles[i]}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="lenovo-heading">
          <h3>{c.projects}</h3>
          <p>{c.confidentiality}</p>
        </div>
        <div className="lenovo-grid">
          {lenovoProjects.map((p) => (
            <article key={p.id} className="lenovo-project">
              <div
                className="lenovo-thumbnail"
              >
                <Image
                  {...p.image}
                  alt={c.imageAlts[p.id]}
                  sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1352px) 50vw, 598px"
                />
              </div>
              <div>
                <p className="date-range">
                  {dateRange(locale, p.start, "end" in p ? p.end : undefined)}
                </p>
                <h4>{p.name}</h4>
                <p>{c.items[p.id]}</p>
                <p className="tech-list">{p.stack.join(" · ")}</p>
                <span className="contribution">
                  {c.contribution} · Lenovo R&D
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
