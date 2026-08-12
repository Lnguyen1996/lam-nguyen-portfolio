import { describe, expect, it } from "vitest";
import { createHero } from "../../src/components/hero";
import { portfolioContent } from "../../src/content/portfolio";
import { bindPortraitFallback } from "../../src/interactions/portrait";

describe("createHero", () => {
  it("renders the approved introduction and monogram without a portrait", () => {
    const hero = createHero({ ...portfolioContent, portraitSrc: null });
    expect(hero.querySelector("h1")?.textContent).toBe(
      "Full-stack and AI engineer building dependable distributed systems."
    );
    expect(hero.querySelectorAll(".hero__intro")).toHaveLength(3);
    expect(hero.querySelector("img")).toBeNull();
    expect(hero.querySelector("[data-profile-fallback]")?.textContent).toBe("LN");
  });

  it("keeps a hidden monogram fallback when a portrait exists", () => {
    const hero = createHero({
      ...portfolioContent,
      portraitSrc: "/portrait.webp"
    });
    expect(hero.querySelector("img")?.getAttribute("src")).toBe("/portrait.webp");
    expect(
      hero.querySelector("[data-profile-fallback]")?.hasAttribute("hidden")
    ).toBe(true);
  });

  it("reveals the monogram fallback after an image error", () => {
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
      hero.querySelector<HTMLElement>("[data-profile-fallback]")!.hidden
    ).toBe(false);
  });
});
