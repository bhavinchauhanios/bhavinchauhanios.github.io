/**
 * Testimonials — verbatim from live site / client feedback. Add LinkedIn
 * recommendation placeholders as they come in; do not invent quotes.
 */

export interface Testimonial {
  name: string;
  initials: string;
  quote: string;
  isPlaceholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Thomas T.",
    initials: "TT",
    quote: "If this freelancer keeps performing perfect work, I may never need another developer again.",
  },
  {
    name: "Nikhil S.",
    initials: "NS",
    quote: "Working with Bhavin and his team was a great experience. Highly recommended.",
  },
  {
    name: "Daniil Z.",
    initials: "DZ",
    quote: "Very fast response and handled things quickly with quality.",
  },
  {
    name: "LinkedIn Recommendation",
    initials: "??",
    quote: "Placeholder — add a real LinkedIn recommendation here.",
    isPlaceholder: true,
  },
];
