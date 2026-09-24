import { describe, expect, it } from "vitest";
import { createAbout } from "../../src/components/about";
import { createFooter } from "../../src/components/footer";
import { createExperience } from "../../src/components/experience";
import { createProjectList } from "../../src/components/projects";
import { portfolioContent } from "../../src/content/portfolio";

describe("portfolio sections", () => {
  it("renders Waystar's official company logo", () => {
    const section = createExperience(portfolioContent.currentExperience);
    const logo = section.querySelector<HTMLImageElement>("[data-company-logo]");
    expect(logo?.getAttribute("src")).toContain("waystar-logo.png");
    expect(logo?.getAttribute("alt")).toBe("");
    expect(logo?.getAttribute("width")).toBe("632");
    expect(logo?.getAttribute("height")).toBe("106");
  });

  it("renders five project articles with safe repository links and a live site link", () => {
    const section = createProjectList(
      portfolioContent.projects,
      portfolioContent.repositoriesHref
    );
    expect(section.querySelectorAll("article.project-row")).toHaveLength(5);
    expect(
      section.querySelectorAll(
        'a.project-row__title[target="_blank"][rel="noreferrer"]'
      )
    ).toHaveLength(5);
    expect(
      section.querySelectorAll(
        'a.project-row__arrow[target="_blank"][rel="noreferrer"]'
      )
    ).toHaveLength(5);
    expect(section.querySelector(".project-row__number")?.textContent).toBe("01");
    const live = section.querySelector(".project-row__live");
    expect(live?.getAttribute("href")).toBe(
      "https://linkedpush.seonavigatorplus.com"
    );
    expect(section.querySelector(".work__all")?.getAttribute("href")).toBe(
      portfolioContent.repositoriesHref
    );
    expect(section.querySelector(".work__all")?.getAttribute("rel")).toBe("noreferrer");
  });

  it("renders all approved principles", () => {
    const section = createAbout(
      portfolioContent.about,
      portfolioContent.principles
    );
    expect(
      Array.from(section.querySelectorAll("li"), (node) => node.textContent)
    ).toEqual(["Clear over clever", "Useful over flashy", "Durable over trendy"]);
  });

  it("renders the approved contact invitation with an email call to action", () => {
    const footer = createFooter(portfolioContent.contacts);
    expect(footer.querySelector("h2")?.textContent).toBe(
      "Have a thoughtful problem to solve?"
    );
    expect(footer.querySelectorAll('a[target="_blank"][rel="noreferrer"]')).toHaveLength(2);
    expect(footer.querySelector(".contact__cta")?.getAttribute("href")).toBe(
      "mailto:lnguyen4e@gmail.com"
    );
  });

  it("renders the previous experience entries", () => {
    const section = createExperience(
      portfolioContent.currentExperience,
      portfolioContent.previousExperience
    );
    expect(
      section.querySelectorAll(".experience__previous-item")
    ).toHaveLength(5);
  });
});
