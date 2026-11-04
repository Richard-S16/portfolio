import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { getDictionary } from "@/lib/dictionary";
import { localePath, site, type Locale } from "@/lib/site";
import { Arrow } from "./Arrow";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const d = getDictionary(locale);
  const c = d.projects[project.slug];
  const href = localePath(locale, `/work/${project.slug}`);
  return (
    <article className={`project-card project-${project.field}`}>
      <Link
        href={href}
        className="preview-link"
      >
        <ProjectPreview
          field={project.field}
          name={project.name}
          label={d.work.placeholder}
          note={d.work.placeholderNote}
        />
      </Link>
      <div className="project-info">
        <h3>
          <Link href={href}>
            {project.name}
            <Arrow diagonal />
          </Link>
        </h3>
        <p className="project-description">{c.description}</p>
        <p className="tech-list">{project.stack.join(" · ")}</p>
        <div className="project-links">
          <Link href={href}>
            {d.work.caseStudy}
            <Arrow />
          </Link>
          <a
            href={`${site.github}/${project.repo}`}
            aria-label={`${d.work.repository}: ${project.name}`}
          >
            GitHub
            <Arrow diagonal />
          </a>
        </div>
      </div>
    </article>
  );
}
