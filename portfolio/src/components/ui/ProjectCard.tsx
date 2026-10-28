import { motion } from "framer-motion";
import type { Project } from "../../data/projects";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { TiltCard } from "./TiltCard";
import { ArrowUpRightIcon } from "./icons";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
  featured?: boolean;
}

export function ProjectCard({ project, onOpen, featured }: ProjectCardProps) {
  return (
    <TiltCard maxTilt={4}>
      <motion.button
        layout
        onClick={onOpen}
        data-cursor-hover
        className={`glass-card group relative flex w-full flex-col overflow-hidden rounded-lg text-left transition-shadow hover:shadow-glow-teal ${
          featured ? "sm:col-span-2" : ""
        }`}
      >
        <ImageWithSkeleton
          src={project.screenshots[0]}
          alt={`${project.name} screenshot`}
          fallbackLabel={project.name}
          width={400}
          height={280}
          className={featured ? "aspect-[16/10]" : "aspect-[4/3]"}
        />
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-center gap-2">
            <ImageWithSkeleton
              src={project.logo}
              alt=""
              fallbackLabel={project.name}
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 rounded-md"
            />
            <h3 className="font-display text-base font-semibold text-text-primary">{project.name}</h3>
          </div>
          <p className="mt-1.5 text-sm text-text-secondary">{project.tagline}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-bg-card px-2.5 py-0.5 text-[11px] text-text-muted">
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm text-teal opacity-0 transition-opacity group-hover:opacity-100">
            View details <ArrowUpRightIcon width={14} height={14} />
          </span>
        </div>
      </motion.button>
    </TiltCard>
  );
}
