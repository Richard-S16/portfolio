import { test, expect } from "@playwright/test";
import { projects } from "../src/data/portfolio";

test("public repositories and source citations respond", async ({
  request,
}) => {
  test.setTimeout(120000);
  for (const project of projects) {
    expect(
      (
        await request.get(`https://github.com/Richard-S16/${project.repo}`)
      ).ok(),
    ).toBe(true);
    for (const path of project.sourcePaths) {
      expect(
        (
          await request.get(
            `https://raw.githubusercontent.com/Richard-S16/${project.repo}/main/${path}`,
          )
        ).ok(),
        `${project.repo}/${path}`,
      ).toBe(true);
    }
  }
});

test("Google export returns an actual PDF through the redirect", async ({
  request,
}) => {
  test.setTimeout(60000);
  const response = await request.get("/resume.pdf", { timeout: 45000 });
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("social links are reachable where bot access is allowed", async ({
  request,
}) => {
  expect((await request.get("https://github.com/Richard-S16")).ok()).toBe(true);
  const linkedIn = await request.get(
    "https://www.linkedin.com/in/richard-schmidt16/",
  );
  // LinkedIn rejects automation; a blocked request is not evidence of a broken profile.
  expect([200, 999, 403, 429]).toContain(linkedIn.status());
  if (linkedIn.status() !== 200) {
    console.warn(`LinkedIn blocked automated verification (HTTP ${linkedIn.status()}); profile availability is not confirmed by this test.`);
  }
});

test("resume link downloads a PDF in the browser", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto("/");
  const downloadPromise = page.waitForEvent("download", { timeout: 45000 });
  await page.locator(".header-resume").click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/resume\.pdf$/i);
  expect(await download.failure()).toBeNull();
});
