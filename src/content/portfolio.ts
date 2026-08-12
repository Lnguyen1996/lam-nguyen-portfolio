export interface Project {
  slug: string;
  title: string;
  summary: string;
  meta?: string;
  href: string | null;
  available: boolean;
}

export interface PortfolioContent {
  name: string;
  role: string;
  headline: string;
  intro: string;
  portraitSrc: string | null;
  portraitAlt: string;
  projects: readonly Project[];
  about: readonly string[];
  principles: readonly string[];
  contacts: ReadonlyArray<{ label: string; href: string }>;
}

export const portfolioContent: PortfolioContent = {
  name: "Lam Nguyen",
  role: "Full-stack engineer · product-minded builder",
  headline: "Useful software, thoughtfully made.",
  intro:
    "I turn complex ideas into dependable web products across .NET, TypeScript, intelligent systems, and cloud infrastructure.",
  portraitSrc: null,
  portraitAlt: "Lam Nguyen",
  projects: [
    {
      slug: "document-platform",
      title: "Intelligent document platform",
      summary: "Making complex knowledge searchable, useful, and trustworthy.",
      meta: ".NET · RAG · Vector search",
      href: null,
      available: false
    },
    {
      slug: "linkedpush",
      title: "LinkedPush",
      summary: "A calmer publishing workflow for consistent professional content.",
      meta: "TypeScript · Automation",
      href: null,
      available: false
    },
    {
      slug: "platform-foundations",
      title: "Platform foundations",
      summary: "Reliable systems and interfaces designed to keep teams moving.",
      meta: "Cloud · APIs · Product",
      href: null,
      available: false
    }
  ],
  about: [
    "I care about the whole product: what users need, what the system can sustain, and what the team can confidently maintain.",
    "The portfolio stays concise, while project pages carry the deeper technical stories."
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
