import { describe, expect, it } from "vitest";
import { renderApp } from "../../src/app";

describe("renderApp", () => {
  it("renders the approved employer-profile regions", () => {
    document.body.innerHTML = '<div id="app"></div>';
    renderApp(document.querySelector<HTMLElement>("#app")!);

    expect(document.querySelector("header")).not.toBeNull();
    expect(document.querySelector("main #experience")).not.toBeNull();
    expect(document.querySelector("#experience h2")?.textContent).toBe(
      "Current experience"
    );
    expect(document.querySelector("#experience")?.textContent).toContain(
      "Advanced Application Engineer"
    );
    expect(document.querySelectorAll("#experience li")).toHaveLength(4);
    expect(
      document.querySelector("#experience a")?.getAttribute("target")
    ).toBe("_blank");
    expect(document.querySelector("main #work")).not.toBeNull();
    expect(document.querySelector("main #about")).not.toBeNull();
    expect(document.querySelector("footer#contact")).not.toBeNull();
  });
});
