import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon, StackOverflowIcon, WhatsappIcon } from "../ui/icons";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const iconMap = {
  github: GithubIcon,
  stackoverflow: StackOverflowIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-text-muted">
          © {year} {profile.name}. Crafted for modern web performance.
        </p>

        <div className="flex items-center gap-3">
          {profile.socials
            .filter((s) => s.icon in iconMap)
            .map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full p-2 text-text-secondary transition-colors hover:bg-bg-card-hover hover:text-text-primary"
                >
                  <Icon width={18} height={18} />
                </a>
              );
            })}
        </div>

        <button
          onClick={scrollToTop}
          className="text-sm text-text-secondary underline-offset-4 hover:text-text-primary hover:underline"
        >
          Back to top ↑
        </button>
      </div>
      <p className="pb-6 text-center text-xs text-text-muted">
        Built with React, TypeScript, Tailwind CSS &amp; Framer Motion.
      </p>
    </footer>
  );
}
