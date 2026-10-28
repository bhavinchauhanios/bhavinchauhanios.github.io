import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GithubIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M6.94 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 10h4v10H5V10Zm6 0h3.8v1.4h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V20h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V20h-4V10Z" />
    </svg>
  );
}

export function StackOverflowIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M17.36 20.2v-5.6h1.87V22H4.68v-7.4h1.86v5.6h10.82Z" />
      <path d="M8.2 14.1l9.4 2 .4-1.84-9.4-2-.4 1.84Zm1.2-4.4l8.7 4.05.8-1.7-8.7-4.06-.8 1.7Zm2.35-4.2l7.4 6.16 1.2-1.44-7.4-6.17-1.2 1.45Zm4.24-4L19.4 6l1.5-1.14-3.4-4.55-1.5 1.14ZM8 18h9.4v-1.86H8V18Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.37-.5.08-1.1.1-1.78-.1a15.6 15.6 0 0 1-3.9-2.2 12.7 12.7 0 0 1-2.4-2.9c-.6-.85-.63-1.55-.4-2.15.2-.5.55-.66.8-.7.24-.05.5-.03.7.02.2.05.4.15.55.5l.6 1.4c.1.24.05.5-.1.7-.15.2-.35.4-.5.55-.15.15-.3.3-.15.6.4.85 1.1 1.6 1.9 2.15.8.55 1.6.85 1.9.95.3.1.5.05.7-.1.2-.15.8-.9.95-1.1.15-.2.35-.25.6-.15l1.5.7c.25.12.4.2.45.35.05.15.05.6-.19 1.28Z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M18.9 3H21l-4.6 5.3L21.7 21H16l-4.4-6-5.1 6H4.3l5-5.7L3 3h5.8l3.9 5.5L18.9 3Zm-1.6 16.2h1.5L7.9 4.7H6.3l11 14.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4m12.8-12.8 1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M4.5 4.5l2.8 2.8M16.7 16.7l2.8 2.8M3 12h4M17 12h4M4.5 19.5l2.8-2.8M16.7 7.3l2.8-2.8" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 8-4 4 4 4m6-8 4 4-4 4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
