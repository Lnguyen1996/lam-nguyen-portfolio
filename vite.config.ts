import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/lam-nguyen-portfolio/",
  test: {
    environment: "jsdom",
    include: ["tests/unit/**/*.test.ts"]
  }
});
