import { useMemo, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './SectionShell';

export function SkillsSection({ data, softSkills }) {
  const [activeFilter, setActiveFilter] = useState('All Skills');

  const filters = useMemo(
    () => ['All Skills', ...data.map((category) => category.title)],
    [data],
  );

  const skillCards = useMemo(() => {
    const items = data.flatMap((category) =>
      category.skills.map((skill) => ({
        ...skill,
        category: category.title,
      })),
    );

    if (activeFilter === 'All Skills') {
      return items;
    }

    return items.filter((skill) => skill.category === activeFilter);
  }, [activeFilter, data]);

  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technical strengths grouped for faster recruiter scanning"
        description="From languages to backend systems and deployment tools, this section highlights practical capability with clear grouping and confidence levels."
      />

      <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-5 sm:p-7">
        <div className="flex flex-wrap justify-center gap-3">
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

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCards.map((skill) => (
            <article
              key={`${skill.category}-${skill.name}`}
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-tertiary)] p-5 transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_8px_20px_rgba(34,211,238,0.1)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{skill.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">{skill.category}</p>
                </div>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  {skill.level}%
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-400 shadow-[0_0_10px_rgba(34,211,238,0.22)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-[var(--border-soft)] pt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--text-muted)]">Also Bring</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Communication, teamwork, adaptability, ownership, and a consistent learning mindset.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill.title}
                  className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                  title={skill.description}
                >
                  {skill.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
