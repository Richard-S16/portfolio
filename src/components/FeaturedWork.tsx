import { projects } from "@/data/portfolio";
import { getDictionary } from "@/lib/dictionary";
import { site, type Locale } from "@/lib/site";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";
import { Arrow } from "./Arrow";

export function FeaturedWork({ locale }: { locale: Locale }) {
  const { work } = getDictionary(locale);
  return (
    <Section id="work" title={work.title} intro={work.intro}>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
      <article className="work-in-progress">
        <div>
          <span className="status-label">{work.progress}</span>
          <h3>Benchmark Bundlers</h3>
        </div>
        <p>{work.benchmark}</p>
        <a
          href={`${site.github}/Benchmark-Bundlers`}
          aria-label={`${work.repository}: Benchmark Bundlers`}
        >
          GitHub
          <Arrow diagonal />
        </a>
      </article>
    </Section>
  );
}
