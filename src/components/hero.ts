import type { PortfolioContent } from "../content/portfolio";

export function createHero(content: PortfolioContent): HTMLElement {
  const hero = document.createElement("section");
  hero.id = "hero";
  hero.className = "hero";
  const image = content.portraitSrc
    ? `<img data-portrait src="${content.portraitSrc}" alt="${content.portraitAlt}" width="600" height="800">`
    : "";
  const fallbackHidden = content.portraitSrc ? " hidden" : "";
  hero.innerHTML = [
    '<div class="hero__copy">',
    `<p class="eyebrow">${content.role}</p>`,
    `<h1>${content.headline}</h1>`,
    `<p class="hero__intro">${content.intro}</p>`,
    '<a class="text-link" href="#work"><span class="text-link__label">View selected work</span><span aria-hidden="true">↘</span></a>',
    "</div>",
    '<div class="hero__visual" aria-hidden="true">',
    '<span class="hero__stem"></span>',
    `<div class="hero__fallback" data-portrait-fallback${fallbackHidden}></div>`,
    image,
    "</div>",
    '<p class="hero__note">Built with clarity, care, and a healthy respect for the details.</p>'
  ].join("");
  return hero;
}
