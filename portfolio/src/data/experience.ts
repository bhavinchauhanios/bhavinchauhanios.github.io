/**
 * Journey data — work experience timeline + education/certifications.
 * Sourced from the owner's latest resume (Lead Application Developer CV).
 */

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  issued: string;
  skills: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Lead Application Developer",
    company: "Junkies Coder",
    location: "Remote · Ahmedabad",
    period: "May 2025 – Present",
    bullets: [
      "Drive mobile development across four products, coordinating feature delivery, technical decisions, and release readiness.",
      "Built iQuQ, a native iOS music and party collaboration app using SwiftUI, MVVM, Spotify and Apple Music integrations, and Swift concurrency.",
      "Delivered cross-platform features for Etmad (Flutter) and Limba (React Native) across iOS and Android.",
      "Migrated Prime Chatting from a web-based product to mobile applications, adapting existing functionality for mobile experiences.",
      "Review code, mentor developers, troubleshoot complex issues, and use AI-assisted tools to improve development workflows.",
    ],
  },
  {
    role: "Senior iOS Developer",
    company: "Mindsbeam Technologies Pvt Ltd (Lystloc)",
    location: "Remote · Chennai",
    period: "Nov 2020 – Apr 2025",
    bullets: [
      "Developed and maintained the Lystloc iOS application, contributing to architecture, implementation, testing, and App Store releases.",
      "Built core field-force management features, including real-time GPS tracking, background location services, dynamic attendance forms, and reimbursement workflows.",
      "Improved reliability through battery optimization, offline data synchronization, API integration, debugging, and performance tuning.",
      "Collaborated with product, backend, and QA teams to translate business requirements into scalable mobile solutions.",
    ],
  },
  {
    role: "Freelance iOS Engineer",
    company: "Self-Employed",
    location: "Remote",
    period: "Feb 2020 – Oct 2020",
    bullets: [
      "Delivered iOS applications incorporating AR/VR experiences, live streaming, and real-time analytics for education and event use cases.",
      "Implemented media-processing and streaming functionality using Swift and AVFoundation, collaborating with clients to deliver project requirements.",
    ],
  },
  {
    role: "Lead iOS Developer",
    company: "Chien Technologies Pvt Ltd (DoggieTheApp)",
    location: "On-Site · Mumbai",
    period: "Jul 2018 – Jan 2020",
    bullets: [
      "Led iOS development for a pet-care platform featuring GPS tracking, video calling, service bookings, and pet-related information management.",
      "Coordinated feature development, code reviews, debugging, and application releases while maintaining code quality and modular architecture.",
      "Improved stability and responsiveness through performance optimization and protocol-oriented code refactoring, cutting crash rates by 30% and API latency by 25%.",
    ],
  },
  {
    role: "Senior iOS Developer",
    company: "WhiteOrange Technologies Ltd",
    location: "On-Site · Surat",
    period: "Feb 2016 – Jun 2018",
    bullets: [
      "Progressed into team leadership within one year, mentoring three developers and supporting technical decisions, code quality, and feature delivery.",
      "Developed applications spanning photo editing, location tracking, VoIP communication, and cryptocurrency wallets.",
      "Implemented image-processing features, real-time location services (used by 5,000+ field users), VoIP integration using CallKit, PushKit, and Twilio, and Ethereum wallet functionality.",
    ],
  },
  {
    role: "iOS Developer",
    company: "Creadigol Solution",
    location: "On-Site · Surat",
    period: "Jul 2015 – Jan 2016",
    bullets: [
      "Developed iOS applications across healthcare, music streaming, and cloud storage domains using Objective-C, UIKit, Core Data, and REST APIs.",
      "Implemented application features, data management, access controls, debugging, and UI improvements to enhance reliability and usability.",
    ],
  },
  {
    role: "iOS Developer",
    company: "WeeTech Solution Pvt Ltd",
    location: "On-Site · Surat",
    period: "Jun 2014 – Jun 2015",
    bullets: [
      "Built and maintained iOS applications using Objective-C, UIKit, MVC, and REST API integrations.",
      "Contributed to UI development, feature implementation, testing, debugging, and App Store delivery across multiple projects.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "Shree Devi Institute of Technology (VTU), Mangalore, Karnataka",
    period: "2011 – 2014",
  },
];

export const certifications: CertificationEntry[] = [
  {
    title: "Project Management Foundations",
    issuer: "LinkedIn Learning",
    issued: "Jun 2025",
    skills: ["Agile", "Planning", "Collaboration"],
  },
  {
    title: "SwiftUI Essential Training",
    issuer: "LinkedIn Learning",
    issued: "Jul 2025",
    skills: ["SwiftUI", "Declarative UI", "iOS Development"],
  },
  {
    title: "Generative AI Mastermind",
    issuer: "OutSkill Learning",
    issued: "Sep 2025",
    skills: ["Generative AI"],
  },
];
