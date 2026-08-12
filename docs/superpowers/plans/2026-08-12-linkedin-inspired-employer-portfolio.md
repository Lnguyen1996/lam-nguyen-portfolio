# LinkedIn-Inspired Employer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage as a recruiter-first, LinkedIn-inspired profile with a substantial full-stack/AI introduction, current Waystar experience, and five linked GitHub projects, then publish it through the existing GitHub Pages workflow.

**Architecture:** Keep the site static and content-driven. Typed records in `src/content/portfolio.ts` feed small semantic DOM components; `index.html` mirrors essential content for the no-JavaScript fallback. CSS tokens and focused section styles provide the selected professional-network visual system without adding runtime dependencies or API calls.

**Tech Stack:** TypeScript 5.9, Vite 7, Vitest 3, Playwright 1.62, axe-core, CSS, GitHub Actions, GitHub Pages

## Global Constraints

- Primary audience: recruiters, hiring managers, and engineering interviewers.
- Primary positioning: “Full-stack and AI engineer building dependable distributed systems.”
- Primary blue: `#0A66C2`; page background: `#EEF3F7`; primary text: `#182431`; muted text: `#5B6670`; pale blue: `#E7F3FF`.
- Use a system sans-serif stack throughout; remove the editorial serif and botanical treatment.
- Section order: Introduction, Current experience, Featured GitHub projects, About, Contact.
- Feature only the current Waystar role and the five repositories named in the approved design spec.
- Do not add runtime GitHub or LinkedIn API calls.
- Do not add an email address or `mailto:` link.
- Preserve semantic landmarks, keyboard access, reduced motion, WCAG AA contrast, and no-JavaScript content.
- Preserve responsive behavior from 320 to 1440 pixels and at 200% text scaling without horizontal overflow.
- External GitHub and LinkedIn links open in a new tab with `rel="noreferrer"`.
- Keep the GitHub Pages base path `/lam-nguyen-portfolio/` and automatic `main` deployment.

---

### Task 1: Employer-Focused Content Model

**Files:**
- Modify: `tests/unit/content.test.ts`
- Modify: `src/content/portfolio.ts`

**Interfaces:**
- Produces: `CurrentExperience`, `Project`, and `PortfolioContent` interfaces.
- Produces: `portfolioContent.intro: readonly string[]`, `portfolioContent.currentExperience: CurrentExperience`, and `portfolioContent.repositoriesHref: string`.
- Consumed by: hero, experience, project, header, footer, and no-JavaScript rendering tasks.

- [ ] **Step 1: Replace the existing content expectations with failing employer-content tests**

```ts
expect(portfolioContent.headline).toBe(
  "Full-stack and AI engineer building dependable distributed systems."
);
expect(portfolioContent.intro).toHaveLength(3);
expect(portfolioContent.currentExperience).toMatchObject({
  role: "Advanced Application Engineer",
  employer: "Waystar",
  dates: "August 2024–Present"
});
expect(portfolioContent.currentExperience.highlights).toHaveLength(4);
expect(portfolioContent.projects).toHaveLength(5);
expect(portfolioContent.projects.every(({ href }) =>
  href.startsWith("https://github.com/Lnguyen1996/")
)).toBe(true);
expect(portfolioContent.repositoriesHref).toBe(
  "https://github.com/Lnguyen1996?tab=repositories"
);
```

- [ ] **Step 2: Run the focused content test and confirm it fails for the old headline, scalar introduction, absent experience, and three placeholder projects**

Run: `npm test -- tests/unit/content.test.ts`

Expected: FAIL with content mismatches and missing `currentExperience` / `repositoriesHref`.

- [ ] **Step 3: Implement the approved typed content**

Define:

```ts
export interface CurrentExperience {
  role: string;
  employer: string;
  employmentType: string;
  dates: string;
  location: string;
  summary: string;
  highlights: readonly string[];
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  meta: string;
  href: string;
}
```

Populate the approved data verbatim:

```ts
intro: [
  "Hi, I'm Lam Nguyen—a full-stack and AI engineer who enjoys building software where intelligent capabilities, dependable architecture, and practical user experiences come together. My experience spans the full delivery lifecycle: designing APIs and data models, developing responsive frontend applications, building backend services with .NET and TypeScript, and integrating AI technologies such as large language models, RAG pipelines, semantic search, embeddings, and automated workflows.",
  "I'm especially interested in distributed systems and the engineering decisions that make them reliable and maintainable. My work includes microservice-oriented architectures, event-driven communication, background processing, caching, real-time updates, containerized services, databases, and cloud-ready infrastructure. Whether I'm developing an AI-assisted product or a full-stack platform, I focus on clear boundaries, thoughtful trade-offs, maintainable code, and systems that teams can confidently operate and extend.",
  "The projects below demonstrate how I apply these principles across AI engineering, backend architecture, frontend development, developer tooling, and end-to-end product delivery."
],
currentExperience: {
  role: "Advanced Application Engineer",
  employer: "Waystar",
  employmentType: "Full-time",
  dates: "August 2024–Present",
  location: "Kentucky, United States · Hybrid",
  summary: "At Waystar, I architect and extend high-performance microservices and distributed systems, with an emphasis on concurrency, query optimization, locking behavior, throughput, and reliability under demanding workloads. I contribute across technical planning, service architecture, implementation, and quality engineering, using unit, automation, QA, and end-to-end testing to reduce regression risk and support dependable delivery.",
  highlights: [
    "Led the technical planning and end-to-end service architecture for a new product offering that created an additional revenue stream.",
    "Applied LangChain, large language models, GitHub Copilot, and agentic tooling to accelerate engineering workflows and make AI-assisted development more accessible to the team.",
    "Earned the Google Cloud AI DevOps certification, covering LLM integration, model deployment pipelines, and machine-learning operations.",
    "Helped introduce an Agentic OS platform that automated internal documentation and simplified agentic development for other engineers."
  ],
  href: "https://www.linkedin.com/in/lam-nguyen-engineer/details/experience/"
},
projects: [
  { slug: "linkedpush", title: "LinkedPush", summary: "An end-to-end LinkedIn scheduling product with a React frontend, ASP.NET Core backend, PostgreSQL persistence, OAuth, background publishing, analytics, and AI-assisted writing.", meta: "React · .NET · PostgreSQL · AI", href: "https://github.com/Lnguyen1996/linkedpush" },
  { slug: "ai-integration-dotnet", title: "AI Integration for .NET", summary: "A .NET API demonstrating multi-provider AI integration, document processing, RAG, semantic search, vector storage, streaming responses, and conversation memory.", meta: ".NET · RAG · Vector search · Redis", href: "https://github.com/Lnguyen1996/ai-integration-dotnet" },
  { slug: "dotnet-microservices", title: ".NET Microservices — Clean Architecture", summary: "A distributed-systems reference architecture using Clean Architecture, CQRS, domain-driven design, messaging, multiple data stores, caching, and containerized services.", meta: ".NET · CQRS · RabbitMQ · Docker", href: "https://github.com/Lnguyen1996/dotnet-microservices-clean-architecture" },
  { slug: "claude-mission-panel", title: "Claude Mission Panel", summary: "A cross-platform, JARVIS-style AI assistant overlay combining screen interaction, annotations, voice, and agent-powered workflows.", meta: "Rust · AI agents · Desktop · Voice", href: "https://github.com/Lnguyen1996/claude-mission-panel" },
  { slug: "blazor-dashboard", title: "Blazor Intelligent Dashboard", summary: "A real-time analytics dashboard with live data updates, role-based access, interactive visualization, reporting, and responsive UI.", meta: "Blazor · SignalR · Chart.js · .NET", href: "https://github.com/Lnguyen1996/blazor-intelligent-dashboard" }
],
repositoriesHref: "https://github.com/Lnguyen1996?tab=repositories"
```

- [ ] **Step 4: Run the focused test and confirm it passes**

Run: `npm test -- tests/unit/content.test.ts`

Expected: all `portfolioContent` tests PASS.

- [ ] **Step 5: Commit the content model**

```bash
git add src/content/portfolio.ts tests/unit/content.test.ts
git commit -m "add employer-focused portfolio content"
```

### Task 2: Semantic Introduction, Experience, and Repository Components

**Files:**
- Modify: `tests/unit/hero.test.ts`
- Modify: `tests/unit/sections.test.ts`
- Modify: `src/components/hero.ts`
- Create: `src/components/experience.ts`
- Modify: `src/components/projects.ts`
- Modify: `src/components/header.ts`
- Modify: `src/components/footer.ts`
- Modify: `src/app.ts`
- Modify: `src/interactions/portrait.ts`

**Interfaces:**
- Consumes: `PortfolioContent`, `CurrentExperience`, and `Project` from Task 1.
- Produces: `createExperience(experience: CurrentExperience): HTMLElement`.
- Produces: `createProjectList(projects: readonly Project[], repositoriesHref: string): HTMLElement`.
- Produces: `createHeader(name: string, contacts: PortfolioContent["contacts"]): HTMLElement`.
- Produces: a hero containing three `.hero__intro` paragraphs and a `[data-profile-fallback]` monogram.

- [ ] **Step 1: Write failing component tests for the approved structure**

```ts
const hero = createHero(portfolioContent);
expect(hero.querySelectorAll(".hero__intro")).toHaveLength(3);
expect(hero.querySelector("[data-profile-fallback]")?.textContent).toBe("LN");

const experience = createExperience(portfolioContent.currentExperience);
expect(experience.id).toBe("experience");
expect(experience.querySelector("h2")?.textContent).toBe("Current experience");
expect(experience.querySelectorAll("li")).toHaveLength(4);
expect(experience.querySelector("a")?.getAttribute("target")).toBe("_blank");

const work = createProjectList(
  portfolioContent.projects,
  portfolioContent.repositoriesHref
);
expect(work.querySelectorAll("a.project-row")).toHaveLength(5);
expect(work.querySelector(".work__all")?.getAttribute("rel")).toBe("noreferrer");
```

Update `app.test.ts` to require `main #experience` alongside `#work` and `#about`.

- [ ] **Step 2: Run the focused component tests and confirm they fail because the new experience component and signatures do not exist**

Run: `npm test -- tests/unit/hero.test.ts tests/unit/sections.test.ts tests/unit/app.test.ts`

Expected: FAIL due to missing `createExperience`, old project count, and scalar hero introduction.

- [ ] **Step 3: Implement the minimal semantic components**

- Render each introduction paragraph separately.
- Render an optional portrait when configured and an `LN` monogram fallback otherwise.
- Render the Waystar record as `<section id="experience" aria-labelledby="experience-title">` with role metadata, summary, four-item list, and LinkedIn action.
- Render each project as an external `<a class="project-row" target="_blank" rel="noreferrer">`.
- Add the `.work__all` external profile link after the ordered list.
- Add Experience to the primary header and use external target attributes for LinkedIn/GitHub header and footer destinations.
- Insert `createExperience` between hero and project list in `renderApp`.
- Keep the portrait error handler, but reveal `[data-profile-fallback]` rather than the botanical fallback.

Core component shapes:

```ts
export function createExperience(experience: CurrentExperience): HTMLElement {
  const section = document.createElement("section");
  section.id = "experience";
  section.className = "experience";
  section.setAttribute("aria-labelledby", "experience-title");
  section.innerHTML = `
    <div class="experience__heading">
      <span class="experience__mark" aria-hidden="true">W</span>
      <div><h2 id="experience-title">Current experience</h2>
      <p>${experience.role} · ${experience.employer}</p></div>
    </div>
    <p class="experience__meta">${experience.employmentType} · ${experience.dates} · ${experience.location}</p>
    <p class="experience__summary">${experience.summary}</p>
    <ul>${experience.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
    <a class="text-link" href="${experience.href}" target="_blank" rel="noreferrer">View experience on LinkedIn <span aria-hidden="true">↗</span></a>`;
  return section;
}
```

```ts
row.href = project.href;
row.target = "_blank";
row.rel = "noreferrer";
```

- [ ] **Step 4: Run all unit tests and confirm they pass**

Run: `npm test`

Expected: all unit test files PASS.

- [ ] **Step 5: Commit the semantic page structure**

```bash
git add src/components src/interactions/portrait.ts src/app.ts tests/unit
git commit -m "build employer profile sections"
```

### Task 3: Recruiter-First LinkedIn-Inspired Visual System

**Files:**
- Modify: `src/styles/tokens.css`
- Modify: `src/styles/base.css`
- Modify: `src/styles/home.css`
- Modify: `PRODUCT.md`
- Modify: `DESIGN.md`

**Interfaces:**
- Consumes: class names and semantic structure from Task 2.
- Produces: responsive styles for `.site-header`, `.hero`, `.experience`, `.project-row`, `.about`, and `.contact`.

- [ ] **Step 1: Update the browser test expectations before styling**

In `tests/e2e/home.spec.ts`, replace the old paper background expectation with:

```ts
expect(background).toBe("rgb(238, 243, 247)");
```

Add assertions that the primary action computes to `rgb(10, 102, 194)` and that the hero heading uses a sans-serif family.

- [ ] **Step 2: Run the targeted browser test and confirm it fails against the botanical palette**

Run: `npx playwright test tests/e2e/home.spec.ts`

Expected: FAIL because the body remains `rgb(241, 241, 232)` and the old visual system is still active.

- [ ] **Step 3: Replace the visual tokens and section styling**

Implement tokens for the exact approved palette, a single system sans stack, 8–14 pixel surface radii, a shallow shadow scale, 44-pixel interaction targets, and 180–240 millisecond ease-out transitions.

Implement:

- White compact header with subtle bottom divider and blue identity mark.
- Two-column hero with pale blue emphasis area, readable 65–75 character introduction measure, circular `LN` monogram, filled “View projects” and outlined “View LinkedIn” actions.
- White experience surface with Waystar mark, role metadata, long summary, and scannable highlights.
- White project section with full-width linked rows, blue arrows, clear technology metadata, and a profile-level repository action.
- White/slate about section and dark navy contact footer using LinkedIn/GitHub only.
- Stacked small-screen layout below 800 pixels and accessible menu behavior below 640 pixels.
- Reduced-motion rules that remove transition duration without hiding content.

Start from these exact tokens:

```css
:root {
  --page: #eef3f7;
  --surface: #ffffff;
  --blue: #0a66c2;
  --blue-dark: #084f96;
  --blue-soft: #e7f3ff;
  --ink: #182431;
  --muted: #5b6670;
  --line: #d9e1e8;
  --navy: #123b5d;
  --light-ink: #f5f9fc;
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  --radius-sm: 8px;
  --radius-md: 14px;
  --shadow-sm: 0 4px 8px rgba(24, 36, 49, 0.08);
  --ease: 220ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

Use `max-width: 75ch` for long prose, `min-height: 44px` for actionable elements, `border-radius: 50%` only for the monogram, and never pair `--shadow-sm` with an ornamental border on the same surface.

Update `PRODUCT.md` and `DESIGN.md` to describe the recruiter-first professional-network direction and remove botanical/serif/three-project language.

- [ ] **Step 4: Run the targeted browser tests and unit tests**

Run: `npm test`

Run: `npx playwright test tests/e2e/home.spec.ts`

Expected: all tests PASS.

- [ ] **Step 5: Commit the visual system**

```bash
git add src/styles PRODUCT.md DESIGN.md tests/e2e/home.spec.ts
git commit -m "apply LinkedIn-inspired recruiter-first design"
```

### Task 4: Metadata and No-JavaScript Employer Profile

**Files:**
- Modify: `index.html`
- Modify: `tests/e2e/accessibility.spec.ts`

**Interfaces:**
- Produces: SEO metadata and resilient static content matching Tasks 1–3.
- Consumed by: Vite entry point and no-JavaScript browser verification.

- [ ] **Step 1: Write failing no-JavaScript and navigation tests**

```ts
await expect(page.getByRole("heading", {
  name: "Full-stack and AI engineer building dependable distributed systems."
})).toBeVisible();
await expect(page.getByText("Advanced Application Engineer")).toBeVisible();
await expect(page.getByText("Waystar")).toBeVisible();
await expect(page.locator('a[href*="github.com/Lnguyen1996/"]')).toHaveCount(5);
await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
```

Update the keyboard test labels to include `Experience`, `Projects`, `About`, `LinkedIn`, and `GitHub`.

- [ ] **Step 2: Run the accessibility suite and confirm it fails against the old fallback content and navigation**

Run: `npx playwright test tests/e2e/accessibility.spec.ts`

Expected: FAIL because the new headline, experience, and five repository links are absent.

- [ ] **Step 3: Update `index.html`**

- Set the title to `Lam Nguyen — Full-stack & AI engineer`.
- Set description and Open Graph copy to the approved full-stack, AI, and distributed-systems positioning.
- Set `theme-color` to `#0A66C2`.
- Mirror the new header navigation, approved headline, condensed introduction, current Waystar role, all five exact GitHub links, About summary, and LinkedIn/GitHub footer.
- Give every external link `target="_blank" rel="noreferrer"`.

Use these exact metadata values:

```html
<meta name="description" content="Lam Nguyen is a full-stack and AI engineer building dependable distributed systems across .NET, TypeScript, intelligent applications, and cloud-ready architecture.">
<meta name="theme-color" content="#0A66C2">
<meta property="og:title" content="Lam Nguyen — Full-stack &amp; AI engineer">
<meta property="og:description" content="Full-stack and AI engineering experience across distributed systems, intelligent applications, and dependable product delivery.">
<title>Lam Nguyen — Full-stack &amp; AI engineer</title>
```

- [ ] **Step 4: Run the accessibility suite and confirm it passes**

Run: `npx playwright test tests/e2e/accessibility.spec.ts`

Expected: keyboard, no-JavaScript, and axe WCAG A/AA tests PASS.

- [ ] **Step 5: Commit metadata and static fallback**

```bash
git add index.html tests/e2e/accessibility.spec.ts
git commit -m "update employer metadata and static fallback"
```

### Task 5: Full Verification, Publication, and Live-Site Check

**Files:**
- Verify: all project files
- Publish: branch `main` to `origin`

**Interfaces:**
- Consumes: the complete static site from Tasks 1–4.
- Produces: a verified GitHub Pages deployment at `https://lnguyen1996.github.io/lam-nguyen-portfolio/`.

- [ ] **Step 1: Run the complete local verification suite**

Run: `npm test`

Run: `npm run test:e2e`

Run: `npm run build`

Run: `npm audit --audit-level=moderate`

Expected: zero test failures, a successful `dist/` build, and zero moderate-or-higher audit vulnerabilities.

- [ ] **Step 2: Inspect the generated Pages paths and repository state**

Run: `Select-String -Path dist/index.html -Pattern '/lam-nguyen-portfolio/assets/'`

Run: `git diff --check`

Run: `git status -sb`

Expected: JavaScript and stylesheet assets use the repository base path, no whitespace errors exist, and only intended changes are present.

- [ ] **Step 3: Push all implementation commits to `origin/main`**

Run: `git push origin main`

Expected: remote `main` advances to the final local commit.

- [ ] **Step 4: Wait for the Pages workflow associated with the final commit**

Use the GitHub Actions API to confirm the `Deploy portfolio to GitHub Pages` run reaches `status: completed` and `conclusion: success`.

- [ ] **Step 5: Verify the live site**

Open `https://lnguyen1996.github.io/lam-nguyen-portfolio/` and verify:

- Page title identifies Lam as a full-stack and AI engineer.
- Approved three-paragraph introduction is present.
- Current Waystar experience and four highlights are visible.
- Five exact GitHub repository links and the all-repositories link are present.
- LinkedIn and GitHub actions work and no `mailto:` link exists.
- One stylesheet and the production JavaScript bundle load from `/lam-nguyen-portfolio/assets/`.
- Body background is `rgb(238, 243, 247)` and the primary blue is `rgb(10, 102, 194)`.

- [ ] **Step 6: Report the live URL, commit, verification counts, and deployment result**

Provide the public portfolio and repository links, state that the Pages workflow succeeded, and summarize the unit, browser, build, and audit evidence.
