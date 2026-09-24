import type { PortfolioContent } from "../content/portfolio";

export function createFooter(
  contacts: PortfolioContent["contacts"]
): HTMLElement {
  const footer = document.createElement("footer");
  footer.id = "contact";
  footer.className = "contact";
  const email = contacts.find(({ href }) => href.startsWith("mailto:"));
  const links = contacts
    .map(({ label, href }, index) => {
      const external = href.startsWith("http");
      const attrs = external ? ' target="_blank" rel="noreferrer"' : "";
      const arrow = external ? '<span aria-hidden="true"> ↗</span>' : "";
      return `<a${index === 0 ? ' class="contact__primary"' : ""} href="${href}"${attrs}>${label}${arrow}</a>`;
    })
    .join("");
  const cta = email
    ? `<a class="contact__cta" href="${email.href}">Email me</a>`
    : "";
  footer.innerHTML = [
    '<div class="contact__inner">',
    '<p class="contact__lead">Let’s make something useful.</p>',
    "<h2>Have a thoughtful problem to solve?</h2>",
    cta,
    '<div class="contact__row">',
    `<div class="contact__links">${links}</div>`,
    `<span>© ${new Date().getFullYear()} Lam Nguyen</span>`,
    "</div>",
    "</div>"
  ].join("");
  return footer;
}
