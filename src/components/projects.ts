import type { Project } from "../content/portfolio";

function createProjectRow(project: Project, index: number): HTMLElement {
  const row = document.createElement(
    project.available && project.href ? "a" : "article"
  );
  row.className = "project-row";
  if (row instanceof HTMLAnchorElement && project.href) {
    row.href = project.href;
  } else {
    row.setAttribute("aria-disabled", "true");
  }

  const meta = project.meta
    ? `<span class="project-row__meta">${project.meta}</span>`
    : "";
  row.innerHTML = [
    `<span class="project-row__number">${String(index + 1).padStart(2, "0")}</span>`,
    '<span class="project-row__body">',
    `<strong>${project.title}</strong>`,
    `<span>${project.summary}</span>`,
    "</span>",
    meta,
    `<span class="project-row__arrow" aria-hidden="true">${project.available ? "↗" : "—"}</span>`
  ].join("");
  return row;
}

export function createProjectList(projects: readonly Project[]): HTMLElement {
  const section = document.createElement("section");
  section.id = "work";
  section.className = "work";
  section.setAttribute("aria-labelledby", "work-title");
  section.innerHTML = [
    '<div class="section-heading">',
    '<h2 id="work-title">Selected work</h2>',
    "<p>Three strong projects, written as outcomes and decisions.</p>",
    "</div>",
    '<ol class="project-list"></ol>'
  ].join("");

  const list = section.querySelector<HTMLOListElement>(".project-list")!;
  projects.forEach((project, index) => {
    const item = document.createElement("li");
    item.append(createProjectRow(project, index));
    list.append(item);
  });
  return section;
}
