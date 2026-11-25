import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Arrow } from "@/components/Arrow";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";
import { projects } from "@/data/portfolio";
import { getDictionary } from "@/lib/dictionary";
import { site } from "@/lib/site";
import { PrototypeSwitcher } from "./switcher";
import { variants } from "./variants";
import s from "./prototype.module.css";

// Throwaway homepage previews, switchable via ?variant= on /prototype.
export const metadata = {
  title: "Portfolio prototypes — Richard Schmidt",
  robots: { index: false, follow: false },
};

const d = getDictionary("en");
const [vitals, archlens, , vision] = projects;
type Project = (typeof projects)[number];

function ProjectImage({ project, sizes, eager = false }: {
  project: Project;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <Image
      {...project.image}
      alt={d.projects[project.slug].imageAlt}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
    />
  );
}

function Editorial() {
  return (
    <>
      <section className={`${s.hero} ${s.cover} wrap`} aria-labelledby="preview-title" data-enter>
        <div className={s.nameplate}>
          <h1 id="preview-title">Richard<br />Schmidt<span>.</span></h1>
          <div>
            <p className={s.role}>Frontend software engineer</p>
            <p>Performance, application architecture and legacy modernization. 5+ years at Lenovo R&amp;D.</p>
            <a className={s.action} href="#work">Explore selected work <Arrow direction="down" /></a>
          </div>
        </div>
        <div className={s.spread}>
          {[vitals, vision].map((project, index) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className={s.plate}>
              <span>{project.name}<Arrow diagonal /></span>
              <div className={s.frame}>
                <ProjectImage project={project} sizes="(max-width: 720px) 90vw, 45vw" eager={index === 0} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <FeaturedWork locale="en" />
    </>
  );
}

function Gallery() {
  return (
    <>
      <section className={s.stage} aria-labelledby="preview-title" data-enter>
        <div className={`${s.hero} ${s.screening} wrap`}>
          <div className={s.stageCopy}>
            <h1 id="preview-title">Inside<br />{" "}ArchLens<span>.</span></h1>
            <p>{d.projects.archlens.description}</p>
            <Link className={s.action} href="/work/archlens">Read the case study <Arrow diagonal /></Link>
            <a className={s.textLink} href="#work">See the other projects <Arrow direction="down" /></a>
          </div>
          <Link href="/work/archlens" className={`${s.plate} ${s.projection}`} aria-label="Open the ArchLens case study">
            <div className={s.frame}>
              <ProjectImage project={archlens} sizes="(max-width: 880px) 90vw, 62vw" eager />
            </div>
          </Link>
        </div>
      </section>
      <section className={`${s.galleryWork} wrap`} id="work" aria-labelledby="gallery-work">
        <h2 id="gallery-work">More selected work</h2>
        <div className={s.galleryGrid}>
          {projects.filter((project) => project !== archlens).map((project) => (
            <Link className={s.plate} key={project.slug} href={`/work/${project.slug}`}>
              <span>{project.name}<Arrow diagonal /></span>
              <div className={s.frame}>
                <ProjectImage project={project} sizes="(max-width: 720px) 90vw, 30vw" />
              </div>
            </Link>
          ))}
        </div>
        <Benchmark />
      </section>
    </>
  );
}

function Benchmark() {
  return (
    <aside className={s.benchmark} aria-label="Work in progress">
      <div><strong>Benchmark Bundlers</strong><p>{d.work.progress}</p></div>
      <p>{d.work.benchmark}</p>
      <a className={s.textLink} href={`${site.github}/Benchmark-Bundlers`}>View source <Arrow diagonal /></a>
    </aside>
  );
}

function Index() {
  return (
    <section className={`${s.hero} ${s.register} wrap`} id="work" aria-labelledby="preview-title" data-enter>
      <div className={s.rail}>
        <h1 id="preview-title">Work<br />{" "}index<span>.</span></h1>
        <p>{d.hero.intro}</p>
        <a className={s.textLink} href="#experience">See Lenovo experience <Arrow direction="down" /></a>
      </div>
      <div>
        <h2 className={s.registerHeading}>Public projects</h2>
        <ul className={s.rows}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className={s.row}>
                <div className={s.frame}>
                  <ProjectImage project={project} sizes="(max-width: 560px) 105px, 200px" eager />
                </div>
                <div>
                  <h3>{project.name}</h3>
                  <p>{d.projects[project.slug].category}</p>
                </div>
                <Arrow diagonal />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default async function Page({ searchParams }: {
  searchParams: Promise<{ variant?: string | string[] }>;
}) {
  if (process.env.NODE_ENV !== "development") notFound();
  const { variant } = await searchParams;
  const current = variants.findIndex(({ key }) => key === variant);
  const index = current < 0 ? 0 : current;

  return (
    <div className={s.preview} id="top">
      <a className="skip-link" href="#main">{d.nav.skip}</a>
      <header className={s.header}>
        <div className={`${s.masthead} wrap`}>
          <Link href="/" className={s.brand} aria-label="RS. Richard Schmidt, current portfolio">
            <span aria-hidden="true">RS<span>.</span></span>
            <span className={s.brandName}>Richard Schmidt</span>
          </Link>
          <nav aria-label="Portfolio sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className={s.tools}>
            <a href="/resume.pdf">Resume <Arrow diagonal /></a>
            <ThemeToggle label={d.nav.theme} />
          </div>
        </div>
      </header>
      <main id="main">
        {index === 0 ? <Editorial /> : index === 1 ? <Gallery /> : (
          <>
            <Index />
            <div className={`${s.indexNote} wrap`}><Benchmark /></div>
          </>
        )}
        <Experience locale="en" />
        <Skills locale="en" />
        <About locale="en" />
        <Contact locale="en" />
      </main>
      <Footer locale="en" />
      <PrototypeSwitcher index={index} />
    </div>
  );
}
