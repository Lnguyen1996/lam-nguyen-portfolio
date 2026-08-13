import type { CurrentExperience } from "../content/portfolio";

const waystarLogoSrc = new URL("../assets/waystar-logo.png", import.meta.url)
  .href;

export function createExperience(experience: CurrentExperience): HTMLElement {
  const section = document.createElement("section");
  section.id = "experience";
  section.className = "experience";
  section.setAttribute("aria-labelledby", "experience-title");

  section.innerHTML = [
    '<div class="experience__header">',
    `<img class="experience__logo" data-company-logo src="${waystarLogoSrc}" alt="" width="632" height="106">`,
    '<div class="experience__identity">',
    '<h2 id="experience-title">Current experience</h2>',
    `<p><strong>${experience.role}</strong><span>${experience.employer} · ${experience.employmentType}</span></p>`,
    "</div>",
    `<p class="experience__meta">${experience.dates}<span>${experience.location}</span></p>`,
    "</div>",
    '<div class="experience__body">',
    `<p class="experience__summary">${experience.summary}</p>`,
    '<ul class="experience__highlights">',
    experience.highlights.map((item) => `<li>${item}</li>`).join(""),
    "</ul>",
    `<a class="text-link" href="${experience.href}" target="_blank" rel="noreferrer">View experience on LinkedIn <span aria-hidden="true">↗</span></a>`,
    "</div>"
  ].join("");

  return section;
}
