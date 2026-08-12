# Employer Introduction and GitHub Projects Design

## Goal

Reframe Lam Nguyen's portfolio for potential employers by giving the homepage a substantial first-person introduction and replacing placeholder work with five representative public GitHub repositories.

The update must preserve the existing Quiet Botanical visual direction, responsive behavior, accessibility, no-JavaScript fallback, and automatic GitHub Pages deployment.

## Audience and Positioning

The primary audience is hiring managers and engineering interviewers looking for evidence of full-stack development, AI engineering, and distributed-systems experience.

The page will position Lam as a full-stack and AI engineer who builds dependable distributed systems. It will avoid unsupported claims about years of experience, employers, availability, or production scale.

## Hero and Introduction

The hero role line will be:

> Full-stack and AI engineer · Distributed systems builder

The hero headline will be:

> Full-stack and AI engineer building dependable distributed systems.

The introduction will contain three paragraphs:

> Hi, I'm Lam Nguyen—a full-stack and AI engineer who enjoys building software where intelligent capabilities, dependable architecture, and practical user experiences come together. My experience spans the full delivery lifecycle: designing APIs and data models, developing responsive frontend applications, building backend services with .NET and TypeScript, and integrating AI technologies such as large language models, RAG pipelines, semantic search, embeddings, and automated workflows.

> I'm especially interested in distributed systems and the engineering decisions that make them reliable and maintainable. My work includes microservice-oriented architectures, event-driven communication, background processing, caching, real-time updates, containerized services, databases, and cloud-ready infrastructure. Whether I'm developing an AI-assisted product or a full-stack platform, I focus on clear boundaries, thoughtful trade-offs, maintainable code, and systems that teams can confidently operate and extend.

> The projects below demonstrate how I apply these principles across AI engineering, backend architecture, frontend development, developer tooling, and end-to-end product delivery.

The existing “View selected work” link will remain and continue to move focus toward the project section.

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

Static, typed content will remain the single source of truth in `src/content/portfolio.ts`. The project content model will continue to contain a title, summary, technology metadata, and URL. Because every featured repository is available, project rendering will no longer need disabled placeholder rows for the production content.

The hero component will render the introduction as multiple semantic paragraphs instead of one string. The project component will render five linked rows followed by the profile-level repositories link. No runtime GitHub API request will be added; repository details are curated at build time so the portfolio remains fast and dependable.

## Error Handling and Resilience

- The static no-JavaScript HTML will contain the revised identity statement, a condensed introduction, and the same five repository links.
- External links will remain usable if JavaScript fails.
- If the optional portrait is absent or fails, the existing botanical fallback will remain unchanged.
- The page will not depend on GitHub API availability at runtime.

## Accessibility and Responsive Requirements

- Preserve semantic heading order and the existing Work, About, and Contact navigation landmarks.
- Give external repository links descriptive accessible names through visible project titles.
- Preserve visible keyboard focus and reduced-motion behavior.
- Maintain no horizontal overflow from 320 to 1440 pixels and at 200% text scaling.
- Keep all text readable with JavaScript disabled.
- Do not add an email address or `mailto:` link.

## Testing and Acceptance Criteria

- Unit tests verify the approved headline, three introduction paragraphs, five projects, exact repository URLs, and the all-repositories link.
- Component tests verify that all five project rows are anchors and external-link attributes are present.
- Browser tests continue to cover responsive widths, 200% text scaling, keyboard navigation, reduced motion, no-JavaScript content, and WCAG A/AA automated checks.
- The production build uses the GitHub Pages base path.
- After publishing, the GitHub Actions deployment must succeed and the live site must show the revised introduction and five functioning repository links.
