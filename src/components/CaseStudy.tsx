import Link from "next/link";
import { projects, type Project } from "@/data/portfolio";
import { getDictionary } from "@/lib/dictionary";
import { localePath, site, type Locale } from "@/lib/site";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProjectPreview } from "./ProjectPreview";
import { Arrow } from "./Arrow";

export function CaseStudy({
  locale,
  project,
}: {
  locale: Locale;
  project: Project;
}) {
  const d = getDictionary(locale);
  const c = d.projects[project.slug];
  const next =
    projects[
      (projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length
    ];
  const repoUrl = `${site.github}/${project.repo}`;
  return (
    <>
      <a className="skip-link" href="#main">
        {d.nav.skip}
      </a>
      <Header locale={locale} path={`/work/${project.slug}`} />
      <main id="main" className="case-study wrap">
        <a className="back-link" href={`${localePath(locale)}#work`}>
          <Arrow direction="left" />
          {d.study.back}
        </a>
        <div className="case-heading">
          <h1>{project.name}</h1>
          <p>{c.description}</p>
          <div className="case-meta">
            <span className="tech-list">{project.stack.join(" · ")}</span>
            <a className="text-link" href={repoUrl}>
              {d.work.repository}
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <ProjectPreview
          field={project.field}
          image={{ ...project.image, alt: c.imageAlt }}
          sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1352px) calc(100vw - 112px), 1240px"
        />
        <div className="case-body">
          <section>
            <h2>{d.study.problem}</h2>
            <p>{c.problem}</p>
          </section>
          <section>
            <h2>{d.study.approach}</h2>
            <p>{c.approach}</p>
          </section>
          <section className="case-wide">
            <h2>{d.study.architecture}</h2>
            <ol className="architecture-flow" aria-label={d.study.flowLabel}>
              {c.flow.map((step) => (
                <li key={step}>
                  <span>{step}</span>
                  <Arrow />
                </li>
              ))}
            </ol>
          </section>
          <section className="case-wide">
            <h2>{d.study.decisions}</h2>
            <div className="decisions-grid">
              {c.decisions.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="case-status case-wide">
            <h2>{d.study.status}</h2>
            <p>{c.status}</p>
          </section>
          <section className="case-wide case-sources">
            <h2>{d.study.sources}</h2>
            <p>{d.study.sourceNote}</p>
            <ul>
              {project.sourcePaths.map((path) => (
                <li key={path}>
                  <a href={`${repoUrl}/blob/main/${path}`}>
                    <code>{path}</code>
                    <Arrow diagonal />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Link
          className="next-project"
          href={localePath(locale, `/work/${next.slug}`)}
        >
          <span>
            {d.study.next}
            <strong>{next.name}</strong>
          </span>
          <Arrow />
        </Link>
      </main>
      <Footer locale={locale} />
    </>
  );
}
