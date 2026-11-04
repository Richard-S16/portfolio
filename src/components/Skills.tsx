import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/site";
import { Section } from "./Section";
import { Arrow } from "./Arrow";

export function Skills({ locale }: { locale: Locale }) {
  const c = getDictionary(locale).expertise;
  return (
    <Section id="expertise" title={c.title} intro={c.intro}>
      <div className="expertise-grid">
        {c.items.map((item) => (
          <article key={item.slug}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <p className="tech-list">{item.tools}</p>
            <Link
              className="text-link"
              href={localePath(locale, `/work/${item.slug}`)}
            >
              {item.proof}
              <Arrow diagonal />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
