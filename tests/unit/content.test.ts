import { describe, expect, it } from "vitest";
import { portfolioContent } from "../../src/content/portfolio";

describe("portfolioContent", () => {
  it("contains three ordered projects with honest link availability", () => {
    expect(portfolioContent.projects.map((project) => project.title)).toEqual([
      "Intelligent document platform",
      "LinkedPush",
      "Platform foundations"
    ]);
    expect(
      portfolioContent.projects.every(
        (project) => project.available || project.href === null
      )
    ).toBe(true);
  });

  it("contains the approved identity and working principles", () => {
    expect(portfolioContent.headline).toBe("Useful software, thoughtfully made.");
    expect(portfolioContent.principles).toEqual([
      "Clear over clever",
      "Useful over flashy",
      "Durable over trendy"
    ]);
  });

  it("uses only the approved public contact destinations", () => {
    expect(portfolioContent.contacts).toEqual([
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/lam-nguyen-engineer"
      },
      { label: "GitHub", href: "https://github.com/Lnguyen1996" }
    ]);
    expect(portfolioContent.contacts.some(({ href }) => href.startsWith("mailto:"))).toBe(false);
  });
});
