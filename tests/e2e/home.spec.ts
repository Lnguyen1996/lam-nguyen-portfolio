import { expect, test } from "@playwright/test";

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`homepage has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);
    const background = await page.locator("body").evaluate(
      (node) => getComputedStyle(node).backgroundColor
    );
    expect(background).toBe("rgb(238, 243, 247)");
  });
}

test("uses the recruiter-first blue system and sans-serif display type", async ({
  page
}) => {
  await page.goto("/");

  const primaryButton = page.getByRole("link", { name: "View projects" });
  await expect(primaryButton).toHaveCSS("background-color", "rgb(10, 102, 194)");

  const headingFont = await page
    .getByRole("heading", { level: 1 })
    .evaluate((node) => getComputedStyle(node).fontFamily.toLowerCase());
  expect(headingFont).not.toContain("georgia");
  expect(headingFont).toMatch(/segoe ui|arial|sans-serif/);
  const portrait = page.getByRole("img", {
    name: "Lam Nguyen wearing a dark navy suit"
  });
  await expect(portrait).toBeVisible();
  const portraitSize = await portrait.evaluate((node) => {
    const bounds = node.getBoundingClientRect();
    return { width: bounds.width, height: bounds.height };
  });
  expect(Math.abs(portraitSize.width - portraitSize.height)).toBeLessThanOrEqual(
    1
  );
});

test("reduced motion removes transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const duration = await page
    .locator(".project-row")
    .first()
    .evaluate((node) => getComputedStyle(node).transitionDuration);
  expect(duration).toBe("0s");
});

test("200% text scaling does not create horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/");
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(overflow).toBe(false);
});
