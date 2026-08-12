import { describe, expect, it } from "vitest";
import { createHero } from "../../src/components/hero";
import { portfolioContent } from "../../src/content/portfolio";
import { bindPortraitFallback } from "../../src/interactions/portrait";

describe("createHero", () => {
  it("renders approved copy and an abstract fallback without a portrait", () => {
    const hero = createHero({ ...portfolioContent, portraitSrc: null });
    expect(hero.querySelector("h1")?.textContent).toBe(
      "Useful software, thoughtfully made."
    );
    expect(hero.querySelector("img")).toBeNull();
    expect(hero.querySelector("[data-portrait-fallback]")).not.toBeNull();
  });

  it("keeps a hidden fallback when a portrait exists", () => {
    const hero = createHero({
      ...portfolioContent,
      portraitSrc: "/portrait.webp"
    });
    expect(hero.querySelector("img")?.getAttribute("src")).toBe("/portrait.webp");
    expect(
      hero.querySelector("[data-portrait-fallback]")?.hasAttribute("hidden")
    ).toBe(true);
  });

  it("reveals the abstract fallback after an image error", () => {
    const hero = createHero({
      ...portfolioContent,
      portraitSrc: "/missing.webp"
    });
    document.body.replaceChildren(hero);
    bindPortraitFallback(document);
    const image = hero.querySelector<HTMLImageElement>("[data-portrait]")!;
    image.dispatchEvent(new Event("error"));
    expect(image.hidden).toBe(true);
    expect(
      hero.querySelector<HTMLElement>("[data-portrait-fallback]")!.hidden
    ).toBe(false);
  });
});
