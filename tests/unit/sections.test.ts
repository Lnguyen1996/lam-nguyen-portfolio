import { describe, expect, it } from "vitest";
import { createAbout } from "../../src/components/about";
import { createFooter } from "../../src/components/footer";
import { createProjectList } from "../../src/components/projects";
import { portfolioContent } from "../../src/content/portfolio";

describe("portfolio sections", () => {
  it("renders ordered rows and does not link unavailable work", () => {
    const section = createProjectList(portfolioContent.projects);
    expect(section.querySelectorAll(".project-row")).toHaveLength(3);
    expect(section.querySelectorAll("a.project-row")).toHaveLength(0);
    expect(section.querySelector(".project-row__number")?.textContent).toBe("01");
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
    const footer = createFooter([]);
    expect(footer.querySelector("h2")?.textContent).toBe(
      "Have a thoughtful problem to solve?"
    );
  });
});
