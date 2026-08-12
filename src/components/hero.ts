import type { PortfolioContent } from "../content/portfolio";

export function createHero(content: PortfolioContent): HTMLElement {
  const hero = document.createElement("section");
  hero.id = "hero";
  hero.className = "hero";

  const linkedIn = content.contacts.find(({ label }) => label === "LinkedIn");
  const image = content.portraitSrc
    ? `<img data-portrait src="${content.portraitSrc}" alt="${content.portraitAlt}" width="600" height="600">`
    : "";
  const fallbackHidden = content.portraitSrc ? " hidden" : "";
  const introduction = content.intro
    .map((paragraph) => `<p class="hero__intro">${paragraph}</p>`)
    .join("");

  hero.innerHTML = [
    '<div class="hero__copy">',
    `<p class="hero__role">${content.role}</p>`,
    `<h1>${content.headline}</h1>`,
    `<div class="hero__introduction">${introduction}</div>`,
    '<div class="hero__actions">',
    '<a class="button button--primary" href="#work">View projects</a>',
    linkedIn
      ? `<a class="button button--secondary" href="${linkedIn.href}" target="_blank" rel="noreferrer">View LinkedIn <span aria-hidden="true">↗</span></a>`
      : "",
    "</div>",
    "</div>",
    '<div class="hero__profile">',
    `<div class="hero__monogram" data-profile-fallback${fallbackHidden} aria-hidden="true">LN</div>`,
    image,
    '<p class="hero__profile-note">AI engineering · Full-stack delivery · Distributed systems</p>',
    "</div>"
  ].join("");

  return hero;
}
