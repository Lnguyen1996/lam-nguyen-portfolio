# Employer Introduction and GitHub Projects Design

## Goal

Reframe Lam Nguyen's portfolio for potential employers by giving the homepage a substantial first-person introduction, highlighting his current work experience, and replacing placeholder work with five representative public GitHub repositories.

The update will replace the existing Quiet Botanical treatment with the approved recruiter-first, LinkedIn-inspired profile direction while preserving responsive behavior, accessibility, the no-JavaScript fallback, and automatic GitHub Pages deployment.

## Audience and Positioning

The primary audience is hiring managers and engineering interviewers looking for evidence of full-stack development, AI engineering, and distributed-systems experience.

The page will position Lam as a full-stack and AI engineer who builds dependable distributed systems. It will avoid unsupported claims about years of experience, employers, availability, or production scale.

## Approved Visual Direction

The interface will use the selected “Recruiter-first profile” direction. It should feel familiar to LinkedIn users without reproducing LinkedIn's application chrome or profile page.

**Visual language**

- LinkedIn-inspired blue `#0A66C2` is the primary action, link, focus, and emphasis color.
- White content surfaces sit on a pale blue-gray `#EEF3F7` page background.
- Dark slate `#182431` is the primary text color and muted slate `#5B6670` is used for secondary copy while maintaining WCAG AA contrast.
- Pale blue `#E7F3FF` is reserved for quiet emphasis, current-experience identity marks, and selected states.
- The typography uses a deliberate system sans-serif stack throughout for a clean professional profile character. The previous editorial serif treatment will be removed.
- Corners remain restrained at 8–14 pixels. Full pills are limited to buttons and compact labels. Shadows remain shallow and are never combined with ornamental borders.

**Page structure**

1. Compact header with Lam's identity and About, Experience, Projects, LinkedIn, and GitHub destinations.
2. Recruiter-first hero with the approved role, headline, three-paragraph introduction, an `LN` profile monogram, and primary project and LinkedIn actions.
3. Current Waystar experience.
4. Five featured GitHub projects followed by the all-repositories action.
5. Employer-oriented about and working principles.
6. Contact footer containing LinkedIn and GitHub only.

The hero uses a two-column composition on wide screens and stacks copy before the monogram on small screens. Projects remain full-width rows rather than a repeated card grid. Hover and focus treatments use restrained blue surface changes and small directional-arrow movement. No content is hidden pending animation.

## Hero and Introduction

The hero role line will be:

> Full-stack and AI engineer · Distributed systems builder

The hero headline will be:

> Full-stack and AI engineer building dependable distributed systems.

The introduction will contain three paragraphs:

> Hi, I'm Lam Nguyen—a full-stack and AI engineer who enjoys building software where intelligent capabilities, dependable architecture, and practical user experiences come together. My experience spans the full delivery lifecycle: designing APIs and data models, developing responsive frontend applications, building backend services with .NET and TypeScript, and integrating AI technologies such as large language models, RAG pipelines, semantic search, embeddings, and automated workflows.

> I'm especially interested in distributed systems and the engineering decisions that make them reliable and maintainable. My work includes microservice-oriented architectures, event-driven communication, background processing, caching, real-time updates, containerized services, databases, and cloud-ready infrastructure. Whether I'm developing an AI-assisted product or a full-stack platform, I focus on clear boundaries, thoughtful trade-offs, maintainable code, and systems that teams can confidently operate and extend.

> The projects below demonstrate how I apply these principles across AI engineering, backend architecture, frontend development, developer tooling, and end-to-end product delivery.

The primary “View projects” action will continue to move focus toward the project section. A secondary “View LinkedIn” action will open Lam's LinkedIn profile in a new tab with `rel="noreferrer"`.

## Current Experience

A focused “Current experience” section will appear between the introduction and featured projects. It will show only Lam's latest LinkedIn position rather than reproducing his full employment history.

**Role details**

- Advanced Application Engineer
- Waystar · Full-time
- August 2024–Present
- Kentucky, United States · Hybrid

**Summary**

> At Waystar, I architect and extend high-performance microservices and distributed systems, with an emphasis on concurrency, query optimization, locking behavior, throughput, and reliability under demanding workloads. I contribute across technical planning, service architecture, implementation, and quality engineering, using unit, automation, QA, and end-to-end testing to reduce regression risk and support dependable delivery.

**Highlights**

- Led the technical planning and end-to-end service architecture for a new product offering that created an additional revenue stream.
- Applied LangChain, large language models, GitHub Copilot, and agentic tooling to accelerate engineering workflows and make AI-assisted development more accessible to the team.
- Earned the Google Cloud AI DevOps certification, covering LLM integration, model deployment pipelines, and machine-learning operations.
- Helped introduce an Agentic OS platform that automated internal documentation and simplified agentic development for other engineers.

The section will include a “View experience on LinkedIn” link to `https://www.linkedin.com/in/lam-nguyen-engineer/details/experience/`. The link will open in a new tab with `rel="noreferrer"`.

## Featured Repositories

The work section will be renamed “Featured GitHub projects” and will show these repositories in this order:

1. **LinkedPush** — An end-to-end LinkedIn scheduling product with a React frontend, ASP.NET Core backend, PostgreSQL persistence, OAuth, background publishing, analytics, and AI-assisted writing.
   - Stack: React · .NET · PostgreSQL · AI
   - Link: `https://github.com/Lnguyen1996/linkedpush`
2. **AI Integration for .NET** — A .NET API demonstrating multi-provider AI integration, document processing, RAG, semantic search, vector storage, streaming responses, and conversation memory.
   - Stack: .NET · RAG · Vector search · Redis
   - Link: `https://github.com/Lnguyen1996/ai-integration-dotnet`
3. **.NET Microservices — Clean Architecture** — A distributed-systems reference architecture using Clean Architecture, CQRS, domain-driven design, messaging, multiple data stores, caching, and containerized services.
   - Stack: .NET · CQRS · RabbitMQ · Docker
   - Link: `https://github.com/Lnguyen1996/dotnet-microservices-clean-architecture`
4. **Claude Mission Panel** — A cross-platform, JARVIS-style AI assistant overlay combining screen interaction, annotations, voice, and agent-powered workflows.
   - Stack: Rust · AI agents · Desktop · Voice
   - Link: `https://github.com/Lnguyen1996/claude-mission-panel`
5. **Blazor Intelligent Dashboard** — A real-time analytics dashboard with live data updates, role-based access, interactive visualization, reporting, and responsive UI.
   - Stack: Blazor · SignalR · Chart.js · .NET
   - Link: `https://github.com/Lnguyen1996/blazor-intelligent-dashboard`

Every row will be a real link. Links will open GitHub in a new tab and use `rel="noreferrer"`. The section will end with a “View all repositories on GitHub” link to `https://github.com/Lnguyen1996?tab=repositories`.

## About Section

The existing principles will remain:

- Clear over clever
- Useful over flashy
- Durable over trendy

The about copy will reinforce employer-relevant working style without repeating the hero introduction. It will focus on connecting product needs to system design, communicating trade-offs, and building software that remains understandable as it grows.

## Architecture and Data Flow

Static, typed content will remain the single source of truth in `src/content/portfolio.ts`. A typed current-experience record will contain the role, employer, employment type, dates, location, summary, highlights, and LinkedIn URL. The project content model will continue to contain a title, summary, technology metadata, and URL. Because every featured repository is available, project rendering will no longer need disabled placeholder rows for the production content.

The hero component will render the introduction as multiple semantic paragraphs instead of one string. A dedicated experience component will render the current role as a semantic section with a heading, role metadata, summary, highlights, and external LinkedIn link. The project component will render five linked rows followed by the profile-level repositories link. No runtime LinkedIn or GitHub API request will be added; professional and repository details are curated at build time so the portfolio remains fast and dependable.

## Error Handling and Resilience

- The static no-JavaScript HTML will contain the revised identity statement, a condensed introduction, and the same five repository links.
- The no-JavaScript content will also include the current Waystar role, dates, a concise experience summary, and the LinkedIn experience link.
- External links will remain usable if JavaScript fails.
- If the optional portrait is absent or fails, the hero will show the approved `LN` profile monogram instead of an empty or broken image.
- The page will not depend on GitHub API availability at runtime.

## Accessibility and Responsive Requirements

- Preserve semantic heading order and the existing Work, About, and Contact navigation landmarks.
- Add an Experience navigation destination and ensure every header target remains keyboard reachable.
- Give external repository links descriptive accessible names through visible project titles.
- Preserve visible keyboard focus and reduced-motion behavior.
- Maintain no horizontal overflow from 320 to 1440 pixels and at 200% text scaling.
- Keep all text readable with JavaScript disabled.
- Do not add an email address or `mailto:` link.
- Meet WCAG AA contrast for the approved blue, slate, white, and pale blue-gray palette.

## Testing and Acceptance Criteria

- Unit tests verify the approved headline, three introduction paragraphs, five projects, exact repository URLs, and the all-repositories link.
- Unit tests verify the exact current role, employer, dates, four approved highlights, and LinkedIn experience URL.
- Component tests verify the experience section's semantic heading, visible role metadata, highlight list, and safe external-link attributes.
- Component tests verify that all five project rows are anchors and external-link attributes are present.
- Browser tests continue to cover responsive widths, 200% text scaling, keyboard navigation, reduced motion, no-JavaScript content, and WCAG A/AA automated checks.
- Browser tests verify that the Experience navigation target, GitHub project links, profile-level repository link, and LinkedIn actions are reachable.
- The production build uses the GitHub Pages base path.
- After publishing, the GitHub Actions deployment must succeed and the live site must show the revised introduction, current Waystar experience, and five functioning repository links.
