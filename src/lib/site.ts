import type { Metadata } from "next";

export const site = {
  name: "Richard Schmidt",
  url: "https://portfolio-rschmidt.vercel.app",
  email: "richard_s16@protonmail.com",
  github: "https://github.com/Richard-S16",
  linkedin: "https://www.linkedin.com/in/richard-schmidt16/",
} as const;

export type Locale = "en" | "pt-br";

export function localePath(locale: Locale, path = "") {
  return `${locale === "en" ? "" : "/pt-br"}${path}` || "/";
}

export function pageMetadata(
  locale: Locale,
  title: string,
  description: string,
  path = "",
): Metadata {
  const canonical = localePath(locale, path);
  return {
    metadataBase: new URL(site.url),
    title: `${title} — Richard Schmidt`,
    description,
    alternates: {
      canonical,
      languages: {
        en: localePath("en", path),
        "pt-BR": localePath("pt-br", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      title: `${title} — Richard Schmidt`,
      description,
      url: canonical,
      siteName: site.name,
      locale: locale === "en" ? "en_US" : "pt_BR",
      alternateLocale: locale === "en" ? "pt_BR" : "en_US",
      images: [
        {
          url: `/social/${locale}`,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/social/${locale}`],
    },
  };
}

export function dateRange(locale: Locale, start: string, end?: string) {
  const format = (value: string) =>
    new Intl.DateTimeFormat(locale === "en" ? "en-US" : "pt-BR", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${value}-01T12:00:00Z`));
  return `${format(start)} – ${end ? format(end) : locale === "en" ? "Present" : "Atual"}`;
}
