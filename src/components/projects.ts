import type { Project } from "../content/portfolio";

function renderRow(project: Project, index: number): string {
  const live = project.liveHref
    ? `<a class="project-row__live" href="${project.liveHref}" target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a>`
    : "";
  return [
    `<article class="project-row" aria-label="${project.title}">`,
    '<span class="project-row__number" aria-hidden="true">',
    String(index + 1).padStart(2, "0"),
    "</span>",
    '<span class="project-row__content">',
    `<strong><a class="project-row__title" href="${project.href}" target="_blank" rel="noreferrer">${project.title}</a></strong>`,
    `<span>${project.summary}</span>`,
    live,
    "</span>",
    `<span class="project-row__meta">${project.meta}</span>`,
    `<a class="project-row__arrow" href="${project.href}" target="_blank" rel="noreferrer" aria-label="${project.title} on GitHub"><span aria-hidden="true">↗</span></a>`,
    "</article>"
  ].join("");
}

export function createProjectList(
  projects: readonly Project[],
  repositoriesHref: string
): HTMLElement {
  const section = document.createElement("section");
  section.id = "work";
  section.className = "work";
  section.setAttribute("aria-labelledby", "work-title");

  const rows = projects.map(renderRow).join("");

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
