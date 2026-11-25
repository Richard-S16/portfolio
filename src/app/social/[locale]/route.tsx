import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt-br" }];
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "pt-br") notFound();
  const { hero } = getDictionary(locale);
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#171719",
        color: "#fff",
        padding: "66px 76px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          fontSize: 28,
        }}
      >
        <span style={{ color: "#ff6767" }}>r.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 68,
          fontWeight: 700,
          letterSpacing: "-2px",
          lineHeight: 1.1,
        }}
      >
        <span>{site.name}</span>
        <span style={{ color: "#ff6767", fontSize: 44 }}>{hero.role}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#b8b8bf",
          fontSize: 23,
        }}
      >
        <span>{hero.location}</span>
        <span>React / Next.js / TypeScript</span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
