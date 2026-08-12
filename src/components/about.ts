export function createAbout(
  paragraphs: readonly string[],
  principles: readonly string[]
): HTMLElement {
  const section = document.createElement("section");
  section.id = "about";
  section.className = "about";
  section.setAttribute("aria-labelledby", "about-title");
  section.innerHTML = [
    '<div class="about__heading">',
    '<p aria-hidden="true">How I work</p>',
    '<h2 id="about-title">Practical engineering, with a human point of view.</h2>',
    "</div>",
    '<div class="about__copy">',
    paragraphs.map((text) => `<p>${text}</p>`).join(""),
    '<ul aria-label="Working principles">',
    principles.map((text) => `<li>${text}</li>`).join(""),
    "</ul>",
    "</div>"
  ].join("");
  return section;
}
