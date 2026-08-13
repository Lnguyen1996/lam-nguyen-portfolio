import { describe, expect, it } from "vitest";
import { portfolioContent } from "../../src/content/portfolio";

describe("portfolioContent", () => {
  it("positions Lam as a full-stack and AI engineer", () => {
    expect(portfolioContent.role).toBe(
      "Full-stack and AI engineer · Distributed systems builder"
    );
    expect(portfolioContent.headline).toBe(
      "Full-stack and AI engineer building dependable distributed systems."
    );
    expect(portfolioContent.intro).toHaveLength(3);
    expect(portfolioContent.portraitSrc).toContain(
      "lam-nguyen-suit-portrait.png"
    );
    expect(portfolioContent.portraitAlt).toBe(
      "Lam Nguyen wearing a dark navy suit"
    );
  });

  it("contains the approved current Waystar experience", () => {
    expect(portfolioContent.currentExperience).toMatchObject({
      role: "Advanced Application Engineer",
      employer: "Waystar",
      employmentType: "Full-time",
      dates: "August 2024–Present",
      location: "Kentucky, United States · Hybrid",
      href: "https://www.linkedin.com/in/lam-nguyen-engineer/details/experience/"
    });
    expect(portfolioContent.currentExperience.highlights).toHaveLength(4);
  });

  it("contains five ordered public GitHub projects", () => {
    expect(portfolioContent.projects.map((project) => project.title)).toEqual([
      "LinkedPush",
      "AI Integration for .NET",
      ".NET Microservices — Clean Architecture",
      "Claude Mission Panel",
      "Blazor Intelligent Dashboard"
    ]);
    expect(
      portfolioContent.projects.every((project) =>
        (project.href ?? "").startsWith("https://github.com/Lnguyen1996/")
      )
    ).toBe(true);
    expect(portfolioContent.repositoriesHref).toBe(
      "https://github.com/Lnguyen1996?tab=repositories"
    );
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
