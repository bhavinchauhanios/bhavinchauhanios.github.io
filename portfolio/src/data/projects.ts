/**
 * Projects / Selected Work data.
 * `screenshots` point to /public/projects/<slug>/*.png (real assets already in repo).
 * `logo` points to /public/projects/<slug>/logo.png.
 * Case studies (featured: true) get the full Problem/Solution/Role/Stack/Result modal.
 * Everything else renders in the secondary grid.
 *
 * No invented clients, awards, or metrics — only numbers present in the resume/live site.
 * Fields marked "Placeholder" should be filled in with real store links when available.
 */

export type PlatformTag = "iPhone" | "iPad" | "Mac" | "AI" | "Location" | "Marketplace";

export interface CaseStudy {
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  results: string[];
  storeUrl?: string; // Placeholder until real App Store links are supplied
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: PlatformTag[];
  logo: string;
  screenshots: string[];
  featured: boolean;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "iquq",
    name: "iQuQ",
    tagline: "Music and party collaboration app",
    description:
      "Native iOS music discovery and streaming platform with Spotify and Apple Music integrations and real-time sync. Live at iquqapp.com.",
    tags: ["iPhone"],
    logo: "/projects/iquq/logo.png",
    screenshots: [],
    featured: true,
    caseStudy: {
      problem:
        "Groups wanted to collaborate on music at parties across different streaming providers, with smooth, state-driven UI and live sync between guests.",
      solution:
        "Built the native iOS app in SwiftUI on an MVVM foundation, integrating Spotify and Apple Music and using Swift concurrency for responsive networking.",
      role: "Lead Application Developer — architected and built the iOS app.",
      stack: ["SwiftUI", "MVVM", "Swift Concurrency", "Spotify", "Apple Music"],
      results: [
        "Multi-provider music integration with real-time sync",
        "Modular codebase that lets several engineers ship in parallel",
      ],
      storeUrl: "https://iquqapp.com",
    },
  },
  {
    slug: "lystloc",
    name: "Lystloc",
    tagline: "Real-time field-force location intelligence",
    description:
      "Location intelligence and workforce tracking platform used by field teams for attendance, live tracking, and reporting.",
    tags: ["iPhone", "Location"],
    logo: "/projects/lystloc/logo.png",
    screenshots: [
      "/projects/lystloc/1.png",
      "/projects/lystloc/2.png",
      "/projects/lystloc/3.png",
      "/projects/lystloc/4.png",
    ],
    featured: true,
    caseStudy: {
      problem:
        "Field teams needed reliable, battery-efficient live location tracking with offline support, plus a flexible way to capture attendance and daily activity — without draining devices or losing data on poor connectivity.",
      solution:
        "Built real-time GPS tracking with background location services in Swift and VIPER, plus dynamic attendance forms and reimbursement workflows, with offline data synchronization for poor-connectivity conditions.",
      role: "Senior iOS Developer — built core field-force features including live tracking, attendance forms, and reimbursements.",
      stack: ["Swift", "VIPER", "Core Location", "Background Services", "Firebase", "REST APIs"],
      results: [
        "Real-time GPS tracking with background location services",
        "Dynamic attendance forms and reimbursement workflows",
        "Optimized for battery efficiency, offline sync, and API performance",
      ],
    },
  },
  {
    slug: "doggie",
    name: "Doggie The App",
    tagline: "Pet-care platform with video calling & GPS",
    description:
      "Modular pet-care platform enabling food delivery, grooming bookings, video calling, and medical record management.",
    tags: ["iPhone", "Marketplace"],
    logo: "/projects/doggie/logo.png",
    screenshots: [
      "/projects/doggie/1.png",
      "/projects/doggie/2.png",
      "/projects/doggie/3.png",
      "/projects/doggie/4.png",
    ],
    featured: true,
    caseStudy: {
      problem:
        "The pet-care platform needed video calling, GPS tracking, and modular architecture to support fast-growing feature scope (bookings, delivery, medical records) without the codebase becoming unmanageable.",
      solution:
        "Led iOS development of the platform end to end, refactoring legacy code into protocol-oriented, modular components and implementing audio/video calling and Google Maps direction features, working closely with the backend team on clear, concise REST APIs.",
      role: "Lead iOS Developer — led architecture, mentored on modular refactors, owned major feature modules.",
      stack: ["Swift", "UIKit", "CallKit", "PushKit", "Google Maps SDK", "REST APIs"],
      results: [
        "Cut crash rates by 30% through targeted performance tuning",
        "Cut API latency by 25%",
        "Reduced time-to-ship on new features via protocol-oriented refactor",
      ],
    },
  },
  {
    slug: "vetolution",
    name: "VETolution",
    tagline: "Vet clinic scheduling & records system",
    description:
      "Veterinary-facing iOS app handling appointment scheduling, inventory, and health record modules.",
    tags: ["iPhone", "Marketplace"],
    logo: "/projects/vetolution/logo.png",
    screenshots: [
      "/projects/vetolution/1.png",
      "/projects/vetolution/2.png",
      "/projects/vetolution/3.png",
      "/projects/vetolution/4.png",
    ],
    featured: true,
    caseStudy: {
      problem:
        "Veterinary clinics needed a single app to manage appointment scheduling, inventory, and patient health records reliably, with local reminders for follow-ups.",
      solution:
        "Programmed appointment scheduling, inventory handling, and health record modules using Core Data for persistence and local notifications for reminders.",
      role: "iOS Developer — built core scheduling, inventory, and records modules.",
      stack: ["Swift", "Core Data", "Local Notifications", "UIKit"],
      results: [
        "Unified scheduling, inventory, and health records in one modular app",
        "Reliable offline-first data persistence via Core Data",
      ],
    },
  },
  {
    slug: "doggiewalker",
    name: "Doggie Walker",
    tagline: "Companion app for walker & pet-owner workflows",
    description: "Companion app to Doggie The App for coordinating dog walkers and pet owners.",
    tags: ["iPhone", "Marketplace"],
    logo: "/projects/doggiewalker/logo.png",
    screenshots: ["/projects/doggiewalker/1.png", "/projects/doggiewalker/2.png", "/projects/doggiewalker/3.png"],
    featured: false,
  },
  {
    slug: "callcozy",
    name: "CallCozy",
    tagline: "Service booking & communication utility",
    description: "Service booking and communication utility app built during freelance engagements.",
    tags: ["iPhone"],
    logo: "/projects/callcozy/logo.png",
    screenshots: ["/projects/callcozy/1.png", "/projects/callcozy/2.png", "/projects/callcozy/3.png"],
    featured: false,
  },
  {
    slug: "moraribapu",
    name: "Morari Bapu",
    tagline: "Devotional content & engagement app",
    description: "Devotional content and engagement experience for a large spiritual community.",
    tags: ["iPhone"],
    logo: "/projects/moraribapu/logo.png",
    screenshots: ["/projects/moraribapu/1.png", "/projects/moraribapu/3.png"],
    featured: false,
  },
  {
    slug: "gifcollage",
    name: "GIF Collage",
    tagline: "Create & share animated collage stories",
    description: "Interactive editor for composing animated GIF collages with real-time effects.",
    tags: ["iPhone"],
    logo: "/projects/gifcollage/logo.png",
    screenshots: ["/projects/gifcollage/1.png", "/projects/gifcollage/2.png", "/projects/gifcollage/3.png"],
    featured: false,
  },
  {
    slug: "photocollage",
    name: "Photo Collage",
    tagline: "Photo composition & social sharing",
    description: "Drag-and-drop photo editor with real-time filters, stickers, and social media integration.",
    tags: ["iPhone"],
    logo: "/projects/photocollage/logo.png",
    screenshots: ["/projects/photocollage/1.png", "/projects/photocollage/2.png", "/projects/photocollage/3.png"],
    featured: false,
  },
  {
    slug: "hawalatoday",
    name: "Hawala Today",
    tagline: "Finance-focused utility app",
    description: "Finance-focused utility app with fast, streamlined transaction actions.",
    tags: ["iPhone", "Mac"],
    logo: "/projects/hawalatoday/logo.png",
    screenshots: ["/projects/hawalatoday/1.png", "/projects/hawalatoday/2.png", "/projects/hawalatoday/imac_1.png"],
    featured: false,
  },
  {
    slug: "hawalawallet",
    name: "Hawala Wallet (macOS)",
    tagline: "Desktop finance suite for extended controls",
    description: "macOS companion for the Hawala finance suite, extending the mobile experience to desktop.",
    tags: ["Mac"],
    logo: "/projects/hawalatoday/mac_logo.png",
    screenshots: ["/projects/hawalatoday/imac_2.png", "/projects/hawalatoday/imac_3.png"],
    featured: false,
  },
  {
    slug: "justyap",
    name: "JustYap",
    tagline: "VOIP calling with HD voice & global sync",
    description: "Real-time voice calling app using CallKit, PushKit, and Twilio for HD-quality global calls.",
    tags: ["iPhone"],
    logo: "/projects/justyap/logo.png",
    screenshots: ["/projects/justyap/1.png", "/projects/justyap/2.png", "/projects/justyap/3.png"],
    featured: false,
  },
  {
    slug: "movir",
    name: "Movir",
    tagline: "On-demand moving service with live tracking",
    description: "On-demand moving service app with real-time driver tracking, instant quoting, and in-app chat.",
    tags: ["iPhone", "Location", "Marketplace"],
    logo: "/projects/movir/logo.png",
    screenshots: ["/projects/movir/1.png", "/projects/movir/2.png", "/projects/movir/3.png"],
    featured: false,
  },
  {
    slug: "openroost",
    name: "OpenRoost",
    tagline: "Contractor & homeowner collaboration",
    description: "Platform for contractor and homeowner communication and project management.",
    tags: ["iPhone", "Marketplace"],
    logo: "/projects/openroost/logo.png",
    screenshots: ["/projects/openroost/1.png", "/projects/openroost/2.png", "/projects/openroost/3.png"],
    featured: false,
  },
  {
    slug: "panicsos",
    name: "Panic SOS Button",
    tagline: "Emergency alert & trusted-contact notification",
    description: "Emergency alert app for instantly notifying trusted contacts in urgent situations.",
    tags: ["iPhone"],
    logo: "/projects/panicsos/logo.png",
    screenshots: ["/projects/panicsos/1.png", "/projects/panicsos/2.png", "/projects/panicsos/3.png"],
    featured: false,
  },
  {
    slug: "lahielera",
    name: "La Hielera",
    tagline: "On-demand delivery marketplace (Mexico)",
    description: "E-commerce marketplace app in Mexico with cart, catalog, and order tracking for regional logistics.",
    tags: ["iPhone", "Marketplace"],
    logo: "/projects/lahielera/logo.png",
    screenshots: ["/projects/lahielera/1.png", "/projects/lahielera/2.png", "/projects/lahielera/3.png"],
    featured: false,
  },
  {
    slug: "thoughty",
    name: "Thoughty",
    tagline: "Real-time community conversations",
    description: "Real-time community app for instant conversations and local-interest discovery.",
    tags: ["iPhone"],
    logo: "/projects/thoughty/logo.png",
    screenshots: ["/projects/thoughty/1.png", "/projects/thoughty/2.png", "/projects/thoughty/3.png"],
    featured: false,
  },
  {
    slug: "dressplus",
    name: "DressPlus",
    tagline: "Fashion utility app",
    description: "Fashion utility app with modern browsing and styling flows.",
    tags: ["iPhone"],
    logo: "/projects/dressplus/logo.png",
    screenshots: ["/projects/dressplus/1.png", "/projects/dressplus/2.png", "/projects/dressplus/3.png"],
    featured: false,
  },
  {
    slug: "focusmrs",
    name: "Focus MRS",
    tagline: "iOS productivity & workflow app",
    description: "Productivity and workflow enhancement app for iOS.",
    tags: ["iPhone"],
    logo: "/projects/focus_mrs/logo.png",
    screenshots: ["/projects/focus_mrs/1.png", "/projects/focus_mrs/2.png", "/projects/focus_mrs/3.png"],
    featured: false,
  },
];

export const filterTags: (PlatformTag | "All")[] = ["All", "iPhone", "iPad", "Mac", "AI", "Location", "Marketplace"];
