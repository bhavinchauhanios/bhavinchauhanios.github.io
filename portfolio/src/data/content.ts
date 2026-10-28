/**
 * AI Edge section content — bento cards describing the AI differentiator.
 */

export interface AiEdgeCard {
  title: string;
  description: string;
  icon: "sparkles" | "eye" | "code" | "shield";
}

export const aiEdgeCards: AiEdgeCard[] = [
  {
    title: "AI Integration for Mobile",
    description:
      "Shaping mobile flows that support LLM assistants, smart search, and recommendations with structured prompts — without sacrificing UX quality or performance.",
    icon: "sparkles",
  },
  {
    title: "On-device Intelligence",
    description:
      "Core ML and Vision for privacy-first mobile features: camera-driven experiences, classification flows, and responsive intelligence directly on device.",
    icon: "eye",
  },
  {
    title: "AI-assisted Development",
    description:
      "Daily workflow with Cursor, Claude, GitHub Copilot, and ChatGPT — faster iteration without cutting corners on review or testing.",
    icon: "code",
  },
  {
    title: "Engineering Maturity",
    description:
      "12+ years shipping mobile products across startups, freelance delivery, and team leadership, now leading four products at Junkies Coder. Buildable product thinking, not just demos.",
    icon: "shield",
  },
];

export const blogPosts = [
  {
    title: "Migrating to Swift Concurrency",
    excerpt: "Practical notes on moving a production VIPER codebase to async/await without breaking everything at once.",
    isPlaceholder: true,
  },
  {
    title: "On-device ML in iOS",
    excerpt: "Where Core ML and Vision actually earn their keep in a mobile product — and where they don't.",
    isPlaceholder: true,
  },
  {
    title: "Building Real-time Location at Scale",
    excerpt: "Lessons from powering location tracking for a 10,000+ user field-force product.",
    isPlaceholder: true,
  },
];

export const techMarquee: string[] = [
  "Swift",
  "SwiftUI",
  "Objective-C",
  "Flutter",
  "React Native",
  "Kotlin",
  "Firebase",
  "Core Data",
  "AWS",
  "Xcode",
  "VIPER",
  "MVVM",
  "Core ML",
];
