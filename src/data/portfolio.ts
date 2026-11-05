export const projects = [
  {
    slug: "core-web-vitals-playground",
    name: "Core Web Vitals Playground",
    repo: "Core-Web-Vitals-Playground",
    field: "performance",
    image: { src: "/projects/core-web-vitals-playground.webp", width: 1600, height: 898 },
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
    image: { src: "/projects/archlens.webp", width: 1134, height: 1079 },
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
    image: { src: "/projects/tanstack-query-control-room.webp", width: 1600, height: 857 },
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
    image: { src: "/projects/vision-lab.webp", width: 1600, height: 900 },
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
    image: { src: "/projects/skillmatrix-f89e857e.webp", width: 1600, height: 899 },
    name: "SkillMatrix",
    start: "2026-08",
    stack: ["Next.js", "TypeScript", "NestJS", "TanStack Query"],
  },
  {
    id: "service-central",
    image: { src: "/projects/service-central-dc961ecf.webp", width: 1600, height: 896 },
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
    image: { src: "/projects/qr-code-scan-f1ec71a6.webp", width: 1600, height: 894 },
    name: "QR Code Scan",
    start: "2025-05",
    end: "2026-10",
    stack: ["Next.js", "TypeScript", "REST APIs"],
  },
  {
    id: "resolute",
    image: { src: "/projects/resolute-4136ee0c.webp", width: 1600, height: 900 },
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
    image: { src: "/projects/sra.webp", width: 1600, height: 900 },
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
