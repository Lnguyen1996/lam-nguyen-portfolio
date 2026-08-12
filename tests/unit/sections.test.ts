import { describe, expect, it } from "vitest";
import { createAbout } from "../../src/components/about";
import { createFooter } from "../../src/components/footer";
import { createProjectList } from "../../src/components/projects";
import { portfolioContent } from "../../src/content/portfolio";

describe("portfolio sections", () => {
  it("renders five safe repository links and the GitHub profile action", () => {
    const section = createProjectList(
      portfolioContent.projects,
      portfolioContent.repositoriesHref
    );
    expect(section.querySelectorAll("a.project-row")).toHaveLength(5);
    expect(section.querySelectorAll('a.project-row[target="_blank"][rel="noreferrer"]')).toHaveLength(5);
    expect(section.querySelector(".project-row__number")?.textContent).toBe("01");
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

  it("renders the approved contact invitation", () => {
    const footer = createFooter(portfolioContent.contacts);
    expect(footer.querySelector("h2")?.textContent).toBe(
      "Have a thoughtful problem to solve?"
    );
    expect(footer.querySelectorAll('a[target="_blank"][rel="noreferrer"]')).toHaveLength(2);
  });
});
