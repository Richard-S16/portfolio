import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { getDictionary } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/site";
import { CaseStudy } from "@/components/CaseStudy";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return pageMetadata(
    "pt-br",
    project.name,
    getDictionary("pt-br").projects[project.slug].description,
    `/work/${project.slug}`,
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <CaseStudy locale="pt-br" project={project} />;
}
