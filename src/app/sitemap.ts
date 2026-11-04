import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { localePath, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...projects.map((p) => `/work/${p.slug}`)].flatMap((path) =>
    (["en", "pt-br"] as const).map((locale) => ({
      url: `${site.url}${localePath(locale, path)}`,
      alternates: {
        languages: {
          en: `${site.url}${localePath("en", path)}`,
          "pt-BR": `${site.url}${localePath("pt-br", path)}`,
        },
      },
    })),
  );
}
