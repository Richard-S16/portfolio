import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/site";
import { Education } from "./Education";

export function About({ locale }: { locale: Locale }) {
  const c = getDictionary(locale).about;
  return (
    <section
      className="about section wrap"
      id="about"
      aria-labelledby="about-title"
    >
      <div>
        <h2 id="about-title">{c.title}</h2>
        <p className="about-copy">{c.text}</p>
      </div>
      <Education locale={locale} />
    </section>
  );
}
