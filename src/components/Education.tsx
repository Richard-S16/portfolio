import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/site";

export function Education({ locale }: { locale: Locale }) {
  const c = getDictionary(locale).about;
  return (
    <div className="about-details">
      <div>
        <h3>{c.education}</h3>
        <p className="degree">{c.degree}</p>
        {locale === "en" ? (
          <p lang="pt-BR">Tecnólogo em Sistemas para Internet</p>
        ) : null}
        <p>{c.school}</p>
        <p className="date-range">{c.dates}</p>
      </div>
      <div>
        <h3>{c.languages}</h3>
        <p className="preserve-lines">{c.languageText}</p>
      </div>
    </div>
  );
}
