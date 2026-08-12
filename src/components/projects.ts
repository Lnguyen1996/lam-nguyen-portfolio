import type { Project } from "../content/portfolio";

export function createProjectList(
  projects: readonly Project[],
  repositoriesHref: string
): HTMLElement {
  const section = document.createElement("section");
  section.id = "work";
  section.className = "work";
  section.setAttribute("aria-labelledby", "work-title");

  const rows = projects
    .map(
      (project, index) => [
        `<a class="project-row" href="${project.href}" target="_blank" rel="noreferrer">`,
        '<span class="project-row__number" aria-hidden="true">',
        String(index + 1).padStart(2, "0"),
        "</span>",
        '<span class="project-row__content">',
        `<strong>${project.title}</strong>`,
        `<span>${project.summary}</span>`,
        "</span>",
        `<span class="project-row__meta">${project.meta}</span>`,
        '<span class="project-row__arrow" aria-hidden="true">↗</span>',
        "</a>"
      ].join("")
    )
    .join("");

  section.innerHTML = [
    '<div class="section-heading">',
    '<div><p class="eyebrow">Selected work</p><h2 id="work-title">Featured GitHub projects</h2></div>',
    "<p>Five repositories that show how I approach AI-enabled products, dependable services, and practical engineering tools.</p>",
    "</div>",
    `<div class="project-list">${rows}</div>`,
    `<a class="work__all text-link" href="${repositoriesHref}" target="_blank" rel="noreferrer">View all GitHub repositories <span aria-hidden="true">↗</span></a>`
  ].join("");

  return section;
}
