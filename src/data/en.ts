import type { ProjectSlug, LenovoId } from "./portfolio";

export interface ProjectCopy {
  imageAlt: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  flow: string[];
  decisions: { title: string; text: string }[];
  status: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    work: string;
    experience: string;
    about: string;
    contact: string;
    resume: string;
    menu: string;
    skip: string;
    language: string;
    theme: string;
  };
  hero: {
    title: string;
    emphasis: string;
    intro: string;
    location: string;
    availability: string;
    work: string;
    contact: string;
    index: string;
    role: string;
  };
  work: {
    title: string;
    intro: string;
    caseStudy: string;
    repository: string;
    progress: string;
    benchmark: string;
  };
  experience: {
    title: string;
    intro: string;
    tenure: string;
    roleTitles: [string, string, string];
    roles: string[];
    projects: string;
    confidentiality: string;
    contribution: string;
    items: Record<LenovoId, string>;
    imageAlts: Record<LenovoId, string>;
  };
  expertise: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      tools: string;
      proof: string;
      slug: ProjectSlug;
    }[];
  };
  about: {
    title: string;
    text: string;
    education: string;
    degree: string;
    school: string;
    dates: string;
    languages: string;
    languageText: string;
  };
  contact: { title: string; text: string; email: string; location: string };
  footer: { note: string; top: string };
  notFound: {
    title: string;
    description: string;
    back: string;
    otherLanguage: string;
  };
  study: {
    back: string;
    problem: string;
    approach: string;
    architecture: string;
    decisions: string;
    status: string;
    sources: string;
    sourceNote: string;
    next: string;
    flowLabel: string;
  };
  projects: Record<ProjectSlug, ProjectCopy>;
}

export const en: Dictionary = {
  meta: {
    title: "Software Engineer · Frontend & Performance",
    description:
      "Richard Schmidt, frontend software engineer with 5+ years at Lenovo R&D. Explore work in web performance, architecture and interactive applications.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    resume: "Download resume",
    menu: "Menu",
    skip: "Skip to content",
    language: "Switch to Brazilian Portuguese",
    theme: "Switch color theme",
  },
  hero: {
    title: "Frontend engineering",
    emphasis: "Built for performance",
    intro:
      "I’m Richard Schmidt, a software engineer with 5+ years at Lenovo R&D. My work focuses on frontend performance, application architecture, and legacy modernization for global markets.",
    location: "Indaiatuba, Brazil",
    availability: "Open to relocation",
    work: "Explore my work",
    contact: "Let’s talk",
    index: "Areas I work in",
    role: "Software Engineer · React / Next.js / TypeScript",
  },
  work: {
    title: "Selected work",
    intro:
      "Personal projects that turn engineering questions into something you can explore.",
    caseStudy: "Read case study",
    repository: "View source on GitHub",
    progress: "In progress",
    benchmark:
      "Benchmark Bundlers is a Windows benchmark harness for frontend tooling. Separate SPA and Next.js tracks keep comparisons honest. Published results are partial; no overall winner is claimed.",
  },
  experience: {
    title: "Engineering at Lenovo R&D",
    intro:
      "Five years of growing responsibility at Lenovo R&D, building and maintaining applications for North America, LATAM, EMEA, and APAC.",
    tenure: "Lenovo R&D · Since July 2021",
    roleTitles: [
      "Software Engineer II",
      "Software Engineer I",
      "Software Engineer Intern",
    ],
    roles: [
      "Frontend performance through bundle optimization and SSR. Next.js applications, BFF integration, and offline PWA support. Technical backup for the Team Lead across LATAM, EMEA, and APAC.",
      "Worked on Resolute’s diagnostic tools and legacy frontend maintenance, and Smart Remote Assistance’s browser-based access to device models and technical documentation.",
      "Worked on browser-based diagnostic workflows in Smart Remote Assistance using TypeScript, Angular, and Babylon.js.",
    ],
    projects: "Lenovo projects",
    confidentiality:
      "Public-purpose summaries only. Internal code, architecture, and implementation details remain confidential.",
    contribution: "Worked on",
    imageAlts: {
      skillmatrix: "SkillMatrix workspace with skill filters, proficiency levels and assessment forms.",
      "service-central": "Service Central license-key management panel with repair-center filters and allocation controls.",
      "qr-code-scan": "QR Code Scan diagnostic report with device information, troubleshooting, guides and parts lookup.",
      resolute: "Resolute dashboard with navigation, software update notes and a global control map.",
      sra: "Smart Remote Assistance home screen with Consumer and Commercial device categories.",
    },
    items: {
      skillmatrix:
        "A platform for employees to map skills, track development, and share the projects they support.",
      "service-central":
        "A web platform for managing Windows license keys across Lenovo devices.",
      "qr-code-scan":
        "Connects hardware diagnostic results to repair guides, parts lookup, and warranty-based support through QR codes.",
      resolute:
        "Organizes diagnostic tools to support technical and management teams across global markets.",
      sra: "Gives technicians browser-based access to device 3D models, BIOS information, and official documentation.",
    },
  },
  expertise: {
    title: "Frontend, performance & architecture",
    intro:
      "A frontend focus, with the architectural context to connect the whole experience.",
    items: [
      {
        title: "Frontend engineering",
        text: "Build maintainable interfaces and make complex state understandable, from React applications to legacy modernization.",
        tools: "React · Next.js · TypeScript · Angular · Tailwind CSS",
        proof: "See server state in practice",
        slug: "tanstack-query-control-room",
      },
      {
        title: "Performance & architecture",
        text: "Investigate loading and responsiveness, move work off the main thread, and make deliberate rendering and integration decisions.",
        tools: "Core Web Vitals · SSR · Bundle optimization · PWA · BFF",
        proof: "Explore the performance tool",
        slug: "core-web-vitals-playground",
      },
      {
        title: "Backend & visualization",
        text: "Connect APIs to interfaces and bring graphs, 3D scenes, and AI integrations into the browser.",
        tools:
          "Node.js · NestJS · REST APIs · Three.js · Babylon.js · React Flow · AI SDK",
        proof: "Explore architecture visualization",
        slug: "archlens",
      },
    ],
  },
  about: {
    title: "About Richard",
    text: "I’m a Brazilian software engineer based in Indaiatuba, São Paulo. My work sits between frontend architecture and the experience people actually use. I collaborate with distributed teams, modernize existing applications, and use personal projects to explore engineering ideas in depth.",
    education: "Education",
    degree: "Technology Degree in Computer Software Development",
    school: "Centro Universitário FAM · São Paulo, Brazil",
    dates: "January 2021 – July 2023",
    languages: "Languages",
    languageText:
      "English — Full professional proficiency\nPortuguese — Native",
  },
  contact: {
    title: "Let’s talk about\nyour engineering team",
    text: "Open to engineering opportunities abroad. If my work looks like a fit for your team, I’d like to hear from you.",
    email: "Send me an email",
    location: "Indaiatuba, São Paulo, Brazil · Open to relocation",
  },
  footer: {
    note: "Frontend engineering · Brazil & beyond",
    top: "Back to top",
  },
  notFound: {
    title: "Page not found",
    description: "The project or page you’re looking for isn’t here.",
    back: "Back to the portfolio",
    otherLanguage: "Ver portfólio em português",
  },
  study: {
    back: "All work",
    problem: "The problem",
    approach: "The approach",
    architecture: "How it connects",
    decisions: "Decisions & tradeoffs",
    status: "Current status",
    sources: "Explore the implementation",
    sourceNote:
      "The notes above are grounded in these public source files. Capabilities are not production or performance guarantees.",
    next: "Next project",
    flowLabel: "Architecture flow, in order",
  },
  projects: {
    "core-web-vitals-playground": {
      imageAlt: "Core Web Vitals Playground homepage with a website analysis field and lab metrics, field data and actionable tips.",
      category: "Web performance",
      description:
        "Understand not just how a website performs, but where to investigate next.",
      problem:
        "Performance reports contain plenty of metrics, but turning them into a useful investigation requires context. This project brings PageSpeed Insights results, comparisons, and diagnostic suggestions into one interface.",
      approach:
        "A Next.js server endpoint proxies Google PageSpeed Insights. The browser parses the report in a worker when available, then presents lab metrics, available CrUX data, comparison views, and heuristic fix-impact estimates.",
      flow: [
        "Website URL",
        "Next.js API",
        "PageSpeed Insights",
        "Report worker",
        "Results & comparison",
      ],
      decisions: [
        {
          title: "Keep credentials server-side",
          text: "The PageSpeed key stays behind the Next.js endpoint. This adds an upstream service and quota dependency rather than making the browser responsible for credentials.",
        },
        {
          title: "Separate parsing from presentation",
          text: "Worker-first parsing keeps report processing outside the UI thread when supported. A main-thread fallback preserves functionality if the worker fails.",
        },
        {
          title: "Share without a database",
          text: "Compressed report URLs hold parsed results and suggestions. They avoid storage infrastructure, but omit raw audits and some detailed views, and are limited by URL size.",
        },
      ],
      status:
        "Personal analysis tool with comparison mode and a Fix Impact Estimator. Estimates are heuristics, not measured improvements. Data availability depends on PageSpeed Insights and CrUX; missing audits need care when interpreting results.",
    },
    archlens: {
      imageAlt: "ArchLens homepage with a repository input and an overview of its architecture-analysis workflow.",
      category: "Architecture & AI",
      description:
        "Make a repository’s structure visible, from import relationships to architecture insights.",
      problem:
        "Understanding an unfamiliar repository means following imports, finding central modules, and separating structural evidence from interpretation. ArchLens brings those signals into an interactive graph and analysis view.",
      approach:
        "The server fetches a bounded sample of source files from GitHub, extracts imports, builds a dependency graph, and derives heuristic scores. Optional schema-constrained Gemini analysis adds interpretation to the deterministic results.",
      flow: [
        "GitHub repository",
        "Source sampling",
        "Import graph",
        "Heuristics + optional AI",
        "Interactive visualization",
      ],
      decisions: [
        {
          title: "Bound the analysis",
          text: "Source fetching is capped and batched to control work. Larger repositories therefore produce a sampled view, not a complete map.",
        },
        {
          title: "Lightweight parsing, explicit limits",
          text: "Regex import extraction avoids compiler tooling, but is not compiler-accurate. Alias resolution uses fixed conventions rather than reading every project’s configuration.",
        },
        {
          title: "AI is an optional layer",
          text: "The core graph and heuristics work without the model. AI receives derived analysis rather than the full source, so its conclusions inherit the sample’s limitations.",
        },
      ],
      status:
        "Personal repository-analysis project with interactive dependency visualization. Architecture scores are heuristic formulas, not measured maintainability or scalability. Large-repository coverage and in-memory rate limiting are explicit constraints.",
    },
    "tanstack-query-control-room": {
      imageAlt: "TanStack Query Control Room showing a query lifecycle scenario, cache inspector and event timeline.",
      category: "Server state",
      description:
        "See what the cache is doing, and why. A hands-on environment for TanStack Query.",
      problem:
        "Caching, refetching, retries, and optimistic updates can be hard to reason about when their effects are invisible. This environment makes real TanStack Query behavior inspectable under controlled conditions.",
      approach:
        "React demos call real query and mutation hooks against an instrumented in-memory API. Seeded latency and failures produce repeatable scenarios, while cache subscriptions and request events feed inspectors and a timeline.",
      flow: [
        "Interactive scenario",
        "TanStack Query",
        "Simulated API",
        "Cache & request events",
        "Timeline & inspectors",
      ],
      decisions: [
        {
          title: "Real cache, simulated transport",
          text: "The library—not a recreated cache model—handles query behavior. The network is synthetic, so the demonstrations do not measure real backend performance.",
        },
        {
          title: "Bound the event history",
          text: "The timeline keeps a limited recent history to prevent unbounded growth. Older events are discarded, and pausing does not buffer future events.",
        },
        {
          title: "Make rollback observable",
          text: "Optimistic detail updates snapshot prior data and restore it on failure, then invalidate on settlement. The example does not synchronize every possible list representation.",
        },
      ],
      status:
        "Twelve experiments cover cache behavior, freshness, retries, pagination, dependent queries, prefetching, optimistic updates, and offline pause/resume. Data lives in memory; the offline scenario is not a durable mutation queue.",
    },
    "vision-lab": {
      imageAlt: "VISION-LAB identifying a laptop in an interactive 3D scene with a detection bounding box.",
      category: "Browser AI & 3D",
      description:
        "A live 3D scene meets object detection, entirely in the browser.",
      problem:
        "Rendering an interactive 3D scene and running machine-learning inference compete for browser resources. VISION-LAB explores how to connect the two while keeping their workloads separate.",
      approach:
        "Babylon.js renders a default or uploaded model. Downscaled snapshots move to a worker through transferable ImageBitmap objects. Transformers.js runs a pretrained detector and sends boxes back to an overlay.",
      flow: [
        "Babylon.js scene",
        "Downscaled snapshot",
        "Inference worker",
        "WebGPU / WASM",
        "Detection overlay",
      ],
      decisions: [
        {
          title: "One inference at a time",
          text: "Single-flight inference and a minimum interval avoid a growing work queue. Lower-resolution inputs reduce workload, but can lose detection detail.",
        },
        {
          title: "A practical backend fallback",
          text: "The worker tries WebGPU with fp32, then WASM with q8. Compatibility improves, but precision and runtime behavior differ; no comparative accuracy claim is made.",
        },
        {
          title: "Render with capture in mind",
          text: "Buffer preservation supports pixel capture; fixed-resolution rendering and one-time shadow maps reduce repeated work. High-DPI sharpness and dynamic shadows are tradeoffs.",
        },
      ],
      status:
        "Browser experiment with model upload, confidence controls, orbit navigation, and detection overlays. It detects objects in rendered 2D snapshots, not 3D mesh semantics. Initial model downloads and browser support are required; no accuracy or latency benchmark is claimed.",
    },
  },
};
