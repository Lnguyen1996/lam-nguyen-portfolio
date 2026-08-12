import { describe, expect, it } from "vitest";
import { renderApp } from "../../src/app";

describe("renderApp", () => {
  it("renders the four approved homepage regions", () => {
    document.body.innerHTML = '<div id="app"></div>';
    renderApp(document.querySelector<HTMLElement>("#app")!);

    expect(document.querySelector("header")).not.toBeNull();
    expect(document.querySelector("main #work")).not.toBeNull();
    expect(document.querySelector("main #about")).not.toBeNull();
    expect(document.querySelector("footer#contact")).not.toBeNull();
  });
});
