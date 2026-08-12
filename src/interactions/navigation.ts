export function bindNavigation(root: ParentNode): void {
  const button = root.querySelector<HTMLButtonElement>("[data-menu-button]");
  const nav = root.querySelector<HTMLElement>("[data-nav-links]");
  if (!button || !nav) return;

  const close = (returnFocus = false) => {
    button.setAttribute("aria-expanded", "false");
    nav.hidden = true;
    if (returnFocus) button.focus();
  };

  button.addEventListener("click", () => {
    const opening = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(opening));
    nav.hidden = !opening;
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => close());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      close(true);
    }
  });

  if (typeof window.matchMedia === "function") {
    const mobile = window.matchMedia("(max-width: 640px)");
    const sync = () => {
      button.setAttribute("aria-expanded", "false");
      nav.hidden = mobile.matches;
    };
    sync();
    mobile.addEventListener("change", sync);
  }
}
