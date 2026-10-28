/**
 * Core profile data — edit this file to update personal info, links, and hero copy.
 * All values here come from the owner's resume / live site content.
 * Replace placeholder-marked fields as needed.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "stackoverflow" | "linkedin" | "whatsapp" | "twitter" | "email";
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  eyebrow: string;
  location: string;
  email: string;
  phoneDisplay: string;
  whatsappHref: string;
  cvUrl: string;
  domain: string;
  headline: string;
  subCopy: string[];
  specialties: string[];
  availability: {
    isAvailable: boolean;
    label: string;
  };
  socials: SocialLink[];
  photo: string;
  aboutStory: string[];
  principles: { title: string; description: string }[];
  howIWork: { step: string; description: string }[];
}

export const profile: Profile = {
  name: "Bhavin Chauhan",
  shortName: "Bhavin",
  title: "Lead Application Developer + AI-Assisted Mobile Engineer",
  eyebrow: "Lead Application Developer",
  location: "Ahmedabad, India · Remote",
  email: "bhavinchauhan.tech@gmail.com",
  phoneDisplay: "+91 91577 16336",
  whatsappHref: "https://api.whatsapp.com/send?phone=919157716336",
  // Hosted on Google Drive — keep link sharing set to "Anyone with the link".
  cvUrl: "https://drive.google.com/file/d/1kj40xR0C2IOWWSewOwq3Hbci9OYO_8a6/view?usp=sharing",
  domain: "bhavinchauhan.in",
  headline: "I build mobile apps people love, powered by modern AI.",
  subCopy: [
    "12+ years shipping iOS, Flutter, and React Native products across music, location intelligence, fintech, healthcare, and real-time communication.",
    "Now bringing LLM integration, Core ML, and on-device intelligence into production mobile experiences.",
  ],
  specialties: ["SwiftUI", "LLM Integration", "Core ML", "Real-time Location", "React Native"],
  availability: {
    isAvailable: true,
    label: "Available for remote & freelance work",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/bhavinchauhanios", icon: "github" },
    {
      label: "Stack Overflow",
      href: "https://stackoverflow.com/users/2865534/bhavin-chauhan",
      icon: "stackoverflow",
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bhavin-chauhan-73008026/", icon: "linkedin" },
    { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=919157716336", icon: "whatsapp" },
  ],
  photo: "/profile.jpg",
  aboutStory: [
    "I'm a product-minded mobile engineer with 12+ years building native iOS and cross-platform apps — from early Objective-C UIKit projects to modern SwiftUI apps with Swift concurrency and AI-assisted workflows.",
    "I've contributed to 28+ apps on the App Store across music, location intelligence, pet care, fintech, and healthcare, working solo as a freelancer and inside teams as a lead. Today I lead mobile development across four products at Junkies Coder. My focus stays the same: stable performance, clean architecture (MVVM/VIPER), and fast iteration that keeps products shipping with confidence.",
    "Lately that means bringing LLM-powered flows, smart recommendations, and on-device intelligence (Core ML, Vision) into real mobile products — not demos, but features that ship to real users.",
  ],
  principles: [
    {
      title: "Stable performance",
      description: "Battery-efficient, crash-resistant apps built for real-world usage, not just demos.",
    },
    {
      title: "Fast iteration",
      description: "Modular architecture (MVVM/VIPER) and AI-assisted workflows that keep shipping velocity high.",
    },
    {
      title: "Product thinking",
      description: "Every technical decision ties back to a measurable outcome for the people using the app.",
    },
  ],
  howIWork: [
    { step: "Understand", description: "Clarify the problem, constraints, and success metrics before writing code." },
    { step: "Design", description: "Sketch architecture and data flow — MVVM/VIPER, module boundaries, API contracts." },
    { step: "Build", description: "Ship in small, testable increments with Swift concurrency and modern tooling." },
    { step: "Ship", description: "Instrument, monitor crash-free rate, and release with confidence." },
    { step: "Iterate", description: "Use real usage data and feedback to prioritize the next improvement." },
  ],
};
