import { expect, it } from "vitest";
import { bindNavigation } from "../../src/interactions/navigation";

it("toggles aria-expanded and closes after a choice", () => {
  document.body.innerHTML =
    '<button data-menu-button aria-expanded="false"></button><nav data-nav-links hidden><a href="#work">Work</a></nav>';
  bindNavigation(document);
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]")!;
  const nav = document.querySelector<HTMLElement>("[data-nav-links]")!;
  button.click();
  expect(button.getAttribute("aria-expanded")).toBe("true");
  expect(nav.hidden).toBe(false);
  nav.querySelector("a")!.click();
  expect(button.getAttribute("aria-expanded")).toBe("false");
  expect(nav.hidden).toBe(true);
});

it("closes with Escape and returns focus to the menu control", () => {
  document.body.innerHTML =
    '<button data-menu-button aria-expanded="true"></button><nav data-nav-links><a href="#work">Work</a></nav>';
  bindNavigation(document);
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]")!;
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  expect(button.getAttribute("aria-expanded")).toBe("false");
  expect(button).toBe(document.activeElement);
});
