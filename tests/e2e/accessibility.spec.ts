import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage has no detectable WCAG A or AA violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("keyboard focus reaches every primary profile destination", async ({ page }) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Primary" });
  for (const label of ["Experience", "Projects", "About", "LinkedIn", "GitHub"]) {
    const link = navigation.getByRole("link", { name: label, exact: true });
    await link.focus();
    await expect(link).toBeFocused();
  }
});

test("essential identity remains available without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "Full-stack and AI engineer building dependable distributed systems."
    })
  ).toBeVisible();
  await expect(page.getByText("Advanced Application Engineer", { exact: true })).toBeVisible();
  await expect(page.getByText(/Waystar · Full-time/)).toBeVisible();
  for (const title of [
    "LinkedPush",
    "AI Integration for .NET",
    ".NET Microservices — Clean Architecture",
    "Claude Mission Panel",
    "Blazor Intelligent Dashboard"
  ]) {
    await expect(page.getByRole("link", { name: title, exact: true })).toBeVisible();
  }
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  await context.close();
});

test("external profile and project links open safely", async ({ page }) => {
  await page.goto("/");
  const externalLinks = page.locator('a[target="_blank"]');
  expect(await externalLinks.count()).toBeGreaterThanOrEqual(10);
  const safeLinks = await externalLinks.evaluateAll((links) =>
    links.every((link) => link.getAttribute("rel") === "noreferrer")
  );
  expect(safeLinks).toBe(true);
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
});
