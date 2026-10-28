/**
 * Skills data — grouped chip clusters, no percentage bars.
 * `usedIn` and `years` back the hover tooltip ("Used in X projects / Y years").
 */

export interface Skill {
  name: string;
  usedIn?: number; // number of projects (omit if unknown; tooltip is hidden)
  years?: number;
}

export interface SkillGroup {
  group: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    skills: [
      { name: "Swift", usedIn: 20, years: 10 },
      { name: "Objective-C", usedIn: 10, years: 12 },
      { name: "Dart" },
      { name: "Kotlin" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    group: "Mobile Frameworks",
    skills: [
      { name: "SwiftUI", usedIn: 8, years: 3 },
      { name: "UIKit", usedIn: 20, years: 12 },
      { name: "Combine", usedIn: 6, years: 4 },
      { name: "Core Data", usedIn: 10, years: 12 },
      { name: "Core Location" },
      { name: "AVFoundation" },
      { name: "CallKit / PushKit" },
      { name: "React Native", usedIn: 3, years: 2 },
      { name: "Flutter", usedIn: 3, years: 2 },
    ],
  },
  {
    group: "Architecture & Design",
    skills: [
      { name: "MVVM", usedIn: 12, years: 6 },
      { name: "MVC", usedIn: 8, years: 12 },
      { name: "VIPER", usedIn: 4, years: 5 },
      { name: "Clean Architecture" },
      { name: "Modular Architecture" },
      { name: "SOLID Principles" },
      { name: "Dependency Injection" },
    ],
  },
  {
    group: "API & Integration",
    skills: [
      { name: "REST APIs", usedIn: 20, years: 12 },
      { name: "JSON" },
      { name: "WebSockets" },
      { name: "GraphQL" },
      { name: "OAuth 2.0" },
      { name: "Google Maps SDK" },
      { name: "Twilio" },
      { name: "Firebase", usedIn: 8, years: 6 },
    ],
  },
  {
    group: "Development Tools",
    skills: [
      { name: "Xcode" },
      { name: "Android Studio" },
      { name: "Git / GitHub / GitLab" },
      { name: "CI/CD" },
      { name: "Fastlane" },
      { name: "TestFlight" },
    ],
  },
  {
    group: "AI-Assisted Development",
    skills: [
      { name: "Cursor" },
      { name: "Claude" },
      { name: "GitHub Copilot" },
      { name: "ChatGPT" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    group: "Leadership",
    skills: [
      { name: "Technical Architecture" },
      { name: "Code Reviews" },
      { name: "Mentoring" },
      { name: "Requirements Analysis" },
      { name: "Client Communication" },
      { name: "Agile / Scrum" },
    ],
  },
];

export const currentlyLearning: string[] = [
  "Swift 6 strict concurrency",
  "On-device LLMs (Apple Intelligence / MLX)",
  "Advanced Core ML model optimization",
];
