export interface Project {
  slug: string;
  title: string;
  summary: string;
  meta: string;
  href: string;
  liveHref?: string;
}

export interface ExperienceEntry {
  role: string;
  employer: string;
  employmentType: string;
  dates: string;
  location: string;
  summary: string;
}

export interface CurrentExperience extends ExperienceEntry {
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
  previousExperience: readonly ExperienceEntry[];
  projects: readonly Project[];
  repositoriesHref: string;
  about: readonly string[];
  principles: readonly string[];
  contacts: ReadonlyArray<{ label: string; href: string }>;
}

const portraitSrc = new URL(
  "../assets/lam-nguyen-suit-portrait.png",
  import.meta.url
).href;

export const portfolioContent: PortfolioContent = {
  name: "Lam Nguyen",
  role: "Full stack and AI engineer · Distributed systems builder",
  headline: "Full stack and AI engineer building dependable distributed systems.",
  intro: [
    "Hi, I'm Lam Nguyen, a full stack and AI engineer who enjoys building software where intelligent capabilities, dependable architecture, and practical user experiences come together. My experience spans the full delivery lifecycle: designing APIs and data models, developing responsive frontend applications, building backend services with .NET and TypeScript, and integrating AI technologies such as large language models, RAG pipelines, semantic search, embeddings, and automated workflows.",
    "I care most about distributed systems and the engineering decisions that keep them reliable. I have built microservice architectures, event driven services, background processing, caching layers, and real time features on containerized, cloud ready infrastructure. In every project I aim for clear boundaries, honest trade offs, and code the next engineer can understand and extend.",
    "The projects below demonstrate how I apply these principles across AI engineering, backend architecture, frontend development, developer tooling, and end to end product delivery."
  ],
  portraitSrc,
  portraitAlt: "Lam Nguyen wearing a dark navy suit",
  currentExperience: {
    role: "Advanced Application Engineer",
    employer: "Waystar",
    employmentType: "Full-time",
    dates: "August 2024 to Present",
    location: "Kentucky, United States · Hybrid",
    summary:
      "At Waystar, I architect and extend high-performance microservices and distributed systems, with an emphasis on concurrency, query optimization, locking behavior, throughput, and reliability under demanding workloads. I contribute across technical planning, service architecture, implementation, and quality engineering, using unit, automation, QA, and end to end testing to reduce regression risk and support dependable delivery.",
    highlights: [
      "Led the technical planning and end to end service architecture for a new product offering that created an additional revenue stream.",
      "Applied LangChain, large language models, GitHub Copilot, and agentic tooling to accelerate engineering workflows and make AI assisted development more accessible to the team.",
      "Earned the Google Cloud Digital Leader certification, covering cloud fundamentals, data and ML concepts, and modernizing with Google Cloud.",
      "Helped introduce an Agentic OS platform that automated internal documentation and simplified agentic development for other engineers."
    ],
    href: "https://www.linkedin.com/in/lam-nguyen-engineer/details/experience/"
  },
  previousExperience: [
    {
      role: "Software Engineer",
      employer: "Mortenson Dental Partners",
      employmentType: "Full-time",
      dates: "February 2023 to August 2024",
      location: "Kentucky, United States · Hybrid",
      summary:
        "Integrated business visualization systems into Blazor modules with role based access control, built microservices for remote hardware monitoring with .NET 8 Blazor endpoints and WPF clients, and led Open Dental cloud migration and T-Mobile system integrations."
    },
    {
      role: "Software Engineer",
      employer: "Bryco, LLC",
      employmentType: "Full-time",
      dates: "November 2022 to January 2023",
      location: "New Jersey, United States",
      summary:
        "Built a full stack leaderboard web application on the OutSystems platform and led daily code reviews in an agile environment."
    },
    {
      role: "Software Engineer",
      employer: "Mortenson Dental Partners",
      employmentType: "Full-time",
      dates: "October 2022 to November 2022",
      location: "Kentucky, United States",
      summary:
        "Built Blazor applications for virtual meetings with real time comments and approval workflows, plus an internal benefits portal later extended with T-Mobile."
    },
    {
      role: "Software Engineer Intern",
      employer: "Mortenson Dental Partners",
      employmentType: "Internship",
      dates: "April 2021 to October 2022",
      location: "Kentucky, United States",
      summary:
        "Automated authorization processes and database maintenance across multiple systems, and built Blazor applications with MySQL, third party components, and SignalR for real time scheduling."
    },
    {
      role: "Software Engineer Intern",
      employer: "New American Business Association Inc",
      employmentType: "Internship",
      dates: "August 2020 to April 2021",
      location: "Louisville, Kentucky, United States",
      summary:
        "Built a full stack multi tier texting application with React, ASP.NET Core, Azure SQL, and the Twilio API."
    }
  ],
  projects: [
    {
      slug: "linkedpush",
      title: "LinkedPush",
      summary:
        "A live, end to end LinkedIn scheduling product with a React frontend, ASP.NET Core backend, PostgreSQL persistence, OAuth, background publishing, analytics, and AI assisted writing.",
      meta: "React · .NET · PostgreSQL · AI",
      href: "https://github.com/Lnguyen1996/linkedpush",
      liveHref: "https://linkedpush.seonavigatorplus.com"
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
      title: ".NET Microservices: Clean Architecture",
      summary:
        "A distributed systems reference architecture using Clean Architecture, CQRS, domain driven design, messaging, multiple data stores, caching, and containerized services.",
      meta: ".NET · CQRS · RabbitMQ · Docker",
      href: "https://github.com/Lnguyen1996/dotnet-microservices-clean-architecture"
    },
    {
      slug: "claude-mission-panel",
      title: "Claude Mission Panel",
      summary:
        "A cross platform AI assistant overlay in the style of JARVIS, combining screen interaction, annotations, voice, and agent powered workflows.",
      meta: "Rust · AI agents · Desktop · Voice",
      href: "https://github.com/Lnguyen1996/claude-mission-panel"
    },
    {
      slug: "blazor-dashboard",
      title: "Blazor Intelligent Dashboard",
      summary:
        "A real time analytics dashboard with live data updates, role based access, interactive visualization, reporting, and responsive UI.",
      meta: "Blazor · SignalR · Chart.js · .NET",
      href: "https://github.com/Lnguyen1996/blazor-intelligent-dashboard"
    }
  ],
  repositoriesHref: "https://github.com/Lnguyen1996?tab=repositories",
  about: [
    "I connect product goals to system design, translating uncertain requirements into clear interfaces, reliable services, and experiences people can use with confidence.",
    "I communicate trade offs early, test the paths that matter, and leave systems easier for the next engineer to understand and extend."
  ],
  principles: ["Clear over clever", "Useful over flashy", "Durable over trendy"],
  contacts: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lam-nguyen-engineer"
    },
    { label: "Email", href: "mailto:lnguyen4e@gmail.com" },
    { label: "GitHub", href: "https://github.com/Lnguyen1996" }
  ]
};
