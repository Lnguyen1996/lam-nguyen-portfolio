import type { PortfolioContent } from "../content/portfolio";

export function createHeader(
  name: string,
  contacts: PortfolioContent["contacts"]
): HTMLElement {
  const header = document.createElement("header");
  header.className = "site-header";
  const externalLinks = contacts
    .map(
      ({ label, href }) =>
        `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`
    )
    .join("");

  header.innerHTML = [
    `<a class="site-header__identity" href="#hero" aria-label="${name}, back to top"><span aria-hidden="true">LN</span>${name}</a>`,
    '<button class="site-header__menu" type="button" data-menu-button aria-expanded="false" aria-controls="primary-nav">Menu</button>',
    '<nav id="primary-nav" data-nav-links aria-label="Primary">',
    '<a href="#experience">Experience</a><a href="#work">Projects</a><a href="#about">About</a>',
    externalLinks,
    "</nav>"
  ].join("");
  return header;
}
