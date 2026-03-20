import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useMemo, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './SectionShell';

const filterOrder = ['All', 'Full Stack', 'AI', 'Web Apps'];

function ProjectPreviewImage({ project }) {
  return (
    <img
      src={project.previewImage || project.image}
      alt={project.title}
      loading="lazy"
      className="h-52 w-full object-cover"
    />
  );
}

function getDomain(url) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
}

export function ProjectsSection({ data }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = useMemo(() => {
    const categories = new Set(data.flatMap((project) => project.filters ?? [project.category]));
    return filterOrder.filter((item) => item === 'All' || categories.has(item));
  }, [data]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return data;
    }

    return data.filter((project) => (project.filters ?? [project.category]).includes(activeFilter));
  }, [activeFilter, data]);

  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected products that combine engineering and user-focused execution"
        description="Each project includes a visual preview, stack context, and direct links for recruiters to review live output and source quickly."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-[0_6px_16px_rgba(34,211,238,0.22)]'
                : 'border border-[var(--border-soft)] bg-[var(--surface-tertiary)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5, scale: 1.015 }}
            className="group relative overflow-hidden rounded-[1.9rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] shadow-[0_8px_22px_rgba(0,0,0,0.24)] transition-shadow duration-300"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            </div>

            <div className="relative">
              <ProjectPreviewImage project={project} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
                {getDomain(project.liveUrl)}
              </div>
            </div>

            <div className="relative p-6">
              <span className="rounded-full border border-[var(--border-soft)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {project.category}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--text-secondary)]">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-3 text-sm font-semibold text-white transition hover:shadow-[0_8px_18px_rgba(34,211,238,0.28)]"
                >
                  Live Preview <ExternalLink size={16} />
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]"
                >
                  Source Code <Github size={16} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
