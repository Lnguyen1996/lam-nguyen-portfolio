export function createHeader(name: string): HTMLElement {
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = [
    `<a class="site-header__identity" href="#hero" aria-label="${name}, back to top">${name}</a>`,
    '<button class="site-header__menu" type="button" data-menu-button aria-expanded="false" aria-controls="primary-nav">Menu</button>',
    '<nav id="primary-nav" data-nav-links aria-label="Primary">',
    '<a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>',
    "</nav>"
  ].join("");
  return header;
}
