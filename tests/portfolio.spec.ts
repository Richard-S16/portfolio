import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { projects } from "../src/data/portfolio";

for (const locale of ["en", "pt-br"] as const) {
  const prefix = locale === "en" ? "" : "/pt-br";
  test(`${locale}: content, metadata, language switch and accessibility`, async ({
    page,
    baseURL,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(prefix || "/");
    await expect(page.locator("html")).toHaveAttribute(
      "lang",
      locale === "en" ? "en" : "pt-BR",
    );
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".project-card")).toHaveCount(4);
    await expect(page.locator(".lenovo-project")).toHaveCount(5);
    await expect(page.locator(".timeline h4").first()).toHaveText(
      locale === "en" ? "Software Engineer II" : "Engenheiro de Software II",
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://portfolio-rschmidt.vercel.app${prefix}`,
    );
    await expect(page.locator('link[hreflang="pt-BR"]')).toHaveCount(1);
    const anchors = await page
      .locator('a[href*="#"]')
      .evaluateAll((links) =>
        links.map((link) => (link as HTMLAnchorElement).hash),
      );
    for (const hash of new Set(anchors))
      await expect(page.locator(hash)).toHaveCount(1);
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
    const other = locale === "en" ? "/pt-br" : "/";
    await page.locator(".language-switch").click();
    await expect(page).toHaveURL(new URL(other, baseURL).toString());
    await page.locator(".theme-toggle").click();
    const otherTheme = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(otherTheme.violations).toEqual([]);
  });

  test(`${locale}: every case study, sources, metadata and route-preserving switch`, async ({
    page,
  }) => {
    for (const project of projects) {
      const response = await page.goto(`${prefix}/work/${project.slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveText(project.name);
      await expect(page.locator("html")).toHaveAttribute(
        "lang",
        locale === "en" ? "en" : "pt-BR",
      );
      await expect(page.locator(".case-sources a")).toHaveCount(
        project.sourcePaths.length,
      );
      const target = `${locale === "en" ? "/pt-br" : ""}/work/${project.slug}`;
      await expect(page.locator(".language-switch")).toHaveAttribute(
        "href",
        target,
      );
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(accessibility.violations).toEqual([]);
  });
}

test("theme persists, follows system without a saved choice, and tolerates denied storage", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.locator(".theme-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.locator(".language-switch").click();
  // Locale changes cross root layouts and perform a full document navigation.
  await page.waitForURL("**/pt-br", { waitUntil: "load" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.evaluate(() => localStorage.removeItem("theme"));
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.emulateMedia({ colorScheme: "light" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.addInitScript(() => {
    Object.defineProperty(Storage.prototype, "getItem", {
      value() {
        throw new DOMException("Denied", "SecurityError");
      },
    });
    Object.defineProperty(Storage.prototype, "setItem", {
      value() {
        throw new DOMException("Denied", "SecurityError");
      },
    });
  });
  await page.reload();
  await page.locator(".theme-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("keyboard access, mobile menu and narrow layout", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
  if (isMobile) {
    await page.locator(".mobile-nav summary").click();
    await expect(page.locator(".mobile-nav nav")).toBeVisible();
    await page.locator('.mobile-nav a[href="/#contact"]').click();
    await expect(page).toHaveURL(/#contact$/);
  }
  for (const width of [320, 390, 768, 1024, 1440, 1496]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/", "/pt-br"]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${path} at ${width}`,
      ).toBe(true);
    }
  }
});

test("404, sitemap, robots, localized social images and resume redirect", async ({
  request,
}) => {
  for (const path of [
    "/does-not-exist",
    "/work/does-not-exist",
    "/pt-br/work/does-not-exist",
  ]) {
    const response = await request.get(path);
    expect(response.status()).toBe(404);
  }
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("/pt-br/work/archlens");
  expect((await request.get("/robots.txt")).ok()).toBe(true);
  for (const locale of ["en", "pt-br"]) {
    const image = await request.get(`/social/${locale}`);
    expect(image.ok()).toBe(true);
    expect(image.headers()["content-type"]).toContain("image/png");
  }
  const resume = await request.get("/resume.pdf", { maxRedirects: 0 });
  expect(resume.status()).toBe(307);
  expect(resume.headers().location).toMatch(
    /^https:\/\/docs\.google\.com\/document\/d\/[^/]+\/export\?format=pdf$/,
  );
});
