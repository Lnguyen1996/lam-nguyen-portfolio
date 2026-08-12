export interface Project {
  slug: string;
  title: string;
  summary: string;
  meta: string;
  href: string;
}

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

export interface PortfolioContent {
  name: string;
  role: string;
  headline: string;
  intro: readonly string[];
  portraitSrc: string | null;
  portraitAlt: string;
  currentExperience: CurrentExperience;
  projects: readonly Project[];
  repositoriesHref: string;
  about: readonly string[];
  principles: readonly string[];
  contacts: ReadonlyArray<{ label: string; href: string }>;
}

export const portfolioContent: PortfolioContent = {
  name: "Lam Nguyen",
  role: "Full-stack and AI engineer · Distributed systems builder",
  headline: "Full-stack and AI engineer building dependable distributed systems.",
  intro: [
    "Hi, I'm Lam Nguyen—a full-stack and AI engineer who enjoys building software where intelligent capabilities, dependable architecture, and practical user experiences come together. My experience spans the full delivery lifecycle: designing APIs and data models, developing responsive frontend applications, building backend services with .NET and TypeScript, and integrating AI technologies such as large language models, RAG pipelines, semantic search, embeddings, and automated workflows.",
    "I'm especially interested in distributed systems and the engineering decisions that make them reliable and maintainable. My work includes microservice-oriented architectures, event-driven communication, background processing, caching, real-time updates, containerized services, databases, and cloud-ready infrastructure. Whether I'm developing an AI-assisted product or a full-stack platform, I focus on clear boundaries, thoughtful trade-offs, maintainable code, and systems that teams can confidently operate and extend.",
    "The projects below demonstrate how I apply these principles across AI engineering, backend architecture, frontend development, developer tooling, and end-to-end product delivery."
  ],
  portraitSrc: null,
  portraitAlt: "Lam Nguyen",
  currentExperience: {
    role: "Advanced Application Engineer",
    employer: "Waystar",
    employmentType: "Full-time",
    dates: "August 2024–Present",
    location: "Kentucky, United States · Hybrid",
    summary:
      "At Waystar, I architect and extend high-performance microservices and distributed systems, with an emphasis on concurrency, query optimization, locking behavior, throughput, and reliability under demanding workloads. I contribute across technical planning, service architecture, implementation, and quality engineering, using unit, automation, QA, and end-to-end testing to reduce regression risk and support dependable delivery.",
    highlights: [
      "Led the technical planning and end-to-end service architecture for a new product offering that created an additional revenue stream.",
      "Applied LangChain, large language models, GitHub Copilot, and agentic tooling to accelerate engineering workflows and make AI-assisted development more accessible to the team.",
      "Earned the Google Cloud AI DevOps certification, covering LLM integration, model deployment pipelines, and machine-learning operations.",
      "Helped introduce an Agentic OS platform that automated internal documentation and simplified agentic development for other engineers."
    ],
    href: "https://www.linkedin.com/in/lam-nguyen-engineer/details/experience/"
  },
  projects: [
    {
      slug: "linkedpush",
      title: "LinkedPush",
      summary:
        "An end-to-end LinkedIn scheduling product with a React frontend, ASP.NET Core backend, PostgreSQL persistence, OAuth, background publishing, analytics, and AI-assisted writing.",
      meta: "React · .NET · PostgreSQL · AI",
      href: "https://github.com/Lnguyen1996/linkedpush"
    },
    {
      slug: "ai-integration-dotnet",
      title: "AI Integration for .NET",
      summary:
        "A .NET API demonstrating multi-provider AI integration, document processing, RAG, semantic search, vector storage, streaming responses, and conversation memory.",
      meta: ".NET · RAG · Vector search · Redis",
      href: "https://github.com/Lnguyen1996/ai-integration-dotnet"
    },
    {
      slug: "dotnet-microservices",
      title: ".NET Microservices — Clean Architecture",
      summary:
        "A distributed-systems reference architecture using Clean Architecture, CQRS, domain-driven design, messaging, multiple data stores, caching, and containerized services.",
      meta: ".NET · CQRS · RabbitMQ · Docker",
      href: "https://github.com/Lnguyen1996/dotnet-microservices-clean-architecture"
    },
    {
      slug: "claude-mission-panel",
      title: "Claude Mission Panel",
      summary:
        "A cross-platform, JARVIS-style AI assistant overlay combining screen interaction, annotations, voice, and agent-powered workflows.",
      meta: "Rust · AI agents · Desktop · Voice",
      href: "https://github.com/Lnguyen1996/claude-mission-panel"
    },
    {
      slug: "blazor-dashboard",
      title: "Blazor Intelligent Dashboard",
      summary:
        "A real-time analytics dashboard with live data updates, role-based access, interactive visualization, reporting, and responsive UI.",
      meta: "Blazor · SignalR · Chart.js · .NET",
      href: "https://github.com/Lnguyen1996/blazor-intelligent-dashboard"
    }
  ],
  repositoriesHref: "https://github.com/Lnguyen1996?tab=repositories",
  about: [
    "I connect product goals to system design, translating uncertain requirements into clear interfaces, reliable services, and experiences people can use with confidence.",
    "I communicate trade-offs early, test the paths that matter, and leave systems easier for the next engineer to understand and extend."
  ],
  principles: ["Clear over clever", "Useful over flashy", "Durable over trendy"],
  contacts: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lam-nguyen-engineer"
    },
    { label: "GitHub", href: "https://github.com/Lnguyen1996" }
  ]
};
