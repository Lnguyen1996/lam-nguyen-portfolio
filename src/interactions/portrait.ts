export function bindPortraitFallback(root: ParentNode): void {
  root.querySelectorAll<HTMLImageElement>("[data-portrait]").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        image.hidden = true;
        image.parentElement
          ?.querySelector<HTMLElement>("[data-profile-fallback]")
          ?.removeAttribute("hidden");
      },
      { once: true }
    );
  });
}
