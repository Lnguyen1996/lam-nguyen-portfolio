import type { PortfolioContent } from "../content/portfolio";

export function createFooter(
  contacts: PortfolioContent["contacts"]
): HTMLElement {
  const footer = document.createElement("footer");
  footer.id = "contact";
  footer.className = "contact";
  const links = contacts
    .map(
      ({ label, href }, index) =>
        `<a${index === 0 ? ' class="contact__primary"' : ""} href="${href}" target="_blank" rel="noreferrer">${label}<span aria-hidden="true"> ↗</span></a>`
    )
    .join("");
  footer.innerHTML = [
    '<div class="contact__inner">',
    '<p class="contact__lead">Let’s make something useful.</p>',
    "<h2>Have a thoughtful problem to solve?</h2>",
    '<div class="contact__row">',
    `<div class="contact__links">${links}</div>`,
    `<span>© ${new Date().getFullYear()} Lam Nguyen</span>`,
    "</div>",
    "</div>"
  ].join("");
  return footer;
}
