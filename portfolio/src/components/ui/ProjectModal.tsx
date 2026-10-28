import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../../data/projects";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { CloseIcon, ArrowUpRightIcon } from "./icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            className="glass-card max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <ImageWithSkeleton
                  src={project.logo}
                  alt=""
                  fallbackLabel={project.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-md"
                />
                <div>
                  <h2 id="project-modal-title" className="font-display text-xl font-semibold text-text-primary">
                    {project.name}
                  </h2>
                  <p className="text-sm text-text-secondary">{project.tagline}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="rounded-full p-2 text-text-secondary hover:bg-bg-card-hover hover:text-text-primary"
              >
                <CloseIcon />
              </button>
            </div>

            {project.screenshots.length > 0 && (
              <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                {project.screenshots.map((src, i) => (
                  <ImageWithSkeleton
                    key={src}
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    fallbackLabel={project.name}
                    width={180}
                    height={360}
                    className="aspect-[9/18] w-32 shrink-0 rounded-lg border border-border sm:w-40"
                  />
                ))}
              </div>
            )}

            {project.caseStudy ? (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-text-muted">Problem</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{project.caseStudy.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-text-muted">Solution</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{project.caseStudy.solution}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-text-muted">My role</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{project.caseStudy.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-text-muted">Tech stack</h3>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.caseStudy.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-bg-card px-2.5 py-0.5 text-xs text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <h3 className="text-sm font-medium uppercase tracking-wide text-text-muted">Results</h3>
                  <ul className="mt-1.5 space-y-1">
                    {project.caseStudy.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="mt-6 text-sm text-text-secondary">{project.description}</p>
            )}

            {project.caseStudy?.storeUrl ? (
              <a
                href={project.caseStudy.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-blue px-5 py-2.5 text-sm font-medium text-[#04110e]"
              >
                View on App Store <ArrowUpRightIcon width={16} height={16} />
              </a>
            ) : (
              <p className="mt-6 text-xs text-text-muted">App Store link placeholder — add when available.</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
