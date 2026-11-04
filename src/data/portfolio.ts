export const projects = [
  {
    slug: "core-web-vitals-playground",
    name: "Core Web Vitals Playground",
    repo: "Core-Web-Vitals-Playground",
    field: "performance",
    stack: ["Next.js", "TypeScript", "Web Workers", "Tailwind CSS"],
    sourcePaths: [
      "src/app/api/analyze/route.ts",
      "src/context/report-context.tsx",
      "src/lib/report-codec.ts",
      "src/lib/fix-impact-estimator.ts",
    ],
  },
  {
    slug: "archlens",
    name: "ArchLens",
    repo: "ArchLens",
    field: "architecture",
    stack: ["Next.js", "TypeScript", "React Flow", "AI SDK"],
    sourcePaths: [
      "src/lib/analyzer.ts",
      "src/lib/parser.ts",
      "src/lib/aiAnalyzer.ts",
      "src/lib/scorer.ts",
    ],
  },
  {
    slug: "tanstack-query-control-room",
    name: "TanStack Query Control Room",
    repo: "TanStack-Query-Control-Room",
    field: "state",
    stack: ["React", "TanStack Query", "TypeScript", "Zustand"],
    sourcePaths: [
      "src/sim/api.ts",
      "src/events/cacheStore.ts",
      "src/events/timelineStore.ts",
      "src/mutations/posts.ts",
    ],
  },
  {
    slug: "vision-lab",
    name: "VISION-LAB",
    repo: "VISION-LAB",
    field: "visualization",
    stack: ["Babylon.js", "Transformers.js", "WebGPU", "Web Workers"],
    sourcePaths: [
      "src/main.js",
      "src/detector.js",
      "src/detector.worker.js",
      "src/scene.js",
    ],
  },
] as const;

export type Project = (typeof projects)[number];
export type ProjectSlug = Project["slug"];

export const roles = [
  { title: "Software Engineer II", start: "2025-06" },
  { title: "Software Engineer I", start: "2023-04", end: "2025-06" },
  { title: "Software Engineer Intern", start: "2021-07", end: "2023-04" },
] as const;

export const lenovoProjects = [
  {
    id: "skillmatrix",
    name: "SkillMatrix",
    start: "2026-08",
    stack: ["Next.js", "TypeScript", "NestJS", "TanStack Query"],
  },
  {
    id: "service-central",
    name: "Service Central",
    start: "2025-04",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Recharts",
      "Google Analytics",
    ],
  },
  {
    id: "qr-code-scan",
    name: "QR Code Scan",
    start: "2025-05",
    end: "2026-10",
    stack: ["Next.js", "TypeScript", "REST APIs"],
  },
  {
    id: "resolute",
    name: "Resolute",
    start: "2024-04",
    end: "2025-04",
    stack: [
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Java",
      "JSP",
      "amCharts",
      "Google Analytics",
    ],
  },
  {
    id: "sra",
    name: "Smart Remote Assistance",
    start: "2021-07",
    end: "2024-04",
    stack: [
      "TypeScript",
      "Angular",
      "Angular Material",
      "Babylon.js",
      "TensorFlow",
    ],
  },
] as const;

export type LenovoId = (typeof lenovoProjects)[number]["id"];
