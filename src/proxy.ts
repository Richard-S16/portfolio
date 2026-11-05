import { NextResponse, type NextRequest } from "next/server";
import { projects } from "@/data/portfolio";

const portuguesePages = new Set([
  "/pt-br",
  ...projects.map((project) => `/pt-br/work/${project.slug}`),
]);

export function proxy(request: NextRequest) {
  if (portuguesePages.has(request.nextUrl.pathname)) return NextResponse.next();
  // Render a complete localized document, avoiding Next's client-only error fallback.
  const target = request.nextUrl.clone();
  target.pathname = "/pt-br/404";
  return NextResponse.rewrite(target, { status: 404 });
}

export const config = { matcher: "/pt-br/:path*" };
