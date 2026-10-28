import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, filterTags, type Project, type PlatformTag } from "../data/projects";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ProjectModal } from "../components/ui/ProjectModal";

export function Work() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterTags)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const secondary = useMemo(() => projects.filter((p) => !p.featured), []);

  const filterProjects = (list: Project[]) =>
    activeFilter === "All" ? list : list.filter((p) => p.tags.includes(activeFilter as PlatformTag));

  const filteredFeatured = filterProjects(featured);
  const filteredSecondary = filterProjects(secondary);

  return (
    <section id="work" className="section-y">
      <div className="container-content">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
              Selected products and shipped apps
            </h2>
            <p className="mt-2 max-w-xl text-text-secondary">
              25+ apps shipped across location intelligence, marketplaces, and communication tools.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                activeFilter === tag
                  ? "bg-gradient-to-r from-teal to-blue text-[#04110e] font-medium"
                  : "glass-card text-text-secondary hover:text-text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {filteredFeatured.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-text-muted">Case studies</h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {filteredFeatured.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <ProjectCard project={project} onOpen={() => setSelectedProject(project)} featured />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {filteredSecondary.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-text-muted">More shipped apps</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filteredSecondary.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                >
                  <ProjectCard project={project} onOpen={() => setSelectedProject(project)} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {filteredFeatured.length === 0 && filteredSecondary.length === 0 && (
          <p className="mt-10 text-text-muted">No projects match this filter yet.</p>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
