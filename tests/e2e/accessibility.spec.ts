import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage has no detectable WCAG A or AA violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("keyboard focus reaches work, about, and contact", async ({ page }) => {
  await page.goto("/");
  for (const label of ["Work", "About", "Contact"]) {
    const link = page.getByRole("link", { name: label, exact: true });
    await link.focus();
    await expect(link).toBeFocused();
  }
});

test("essential identity remains available without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Useful software, thoughtfully made." })
  ).toBeVisible();
  await expect(page.getByText("Lam Nguyen is a full-stack engineer.")).toBeVisible();
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  await context.close();
});
