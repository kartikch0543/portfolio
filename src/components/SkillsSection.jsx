import { useMemo, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './SectionShell';

function SkillLogo({ name }) {
  const commonProps = {
    className: 'h-6 w-6',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
  };

  const logos = {
    'C++': <span className="text-sm font-bold">C++</span>,
    Java: (
      <svg {...commonProps}>
        <path d="M8.2 17.7c0 1.6 2.2 2.3 4.9 2.3 2.5 0 4.4-.6 4.4-1.6 0-.8-.8-1.1-2.7-1.3l-1.8-.2c-2.5-.2-4.8-.8-4.8-2.7 0-1.4 1.4-2.5 3.4-3.1-.5.5-.8 1-.8 1.6 0 1.2 1.3 1.9 3.3 2.2l1.9.2c2.3.2 4.1.8 4.1 2.8 0 2.2-2.8 3.5-6.9 3.5-3.8 0-6.3-1.2-6.3-3.1 0-.5.3-1.1 1.3-1.8-.1.4 0 .8 0 1.2Zm5.8-13.5c1.5 1.1-1.2 2.8-1.2 4.2 0 .6.3 1.1 1 1.7-1.7-1-2.4-1.9-2.4-2.8 0-1.7 2.4-2.6 2.6-3.9Zm1.7 5c2.2 1.3 3.5 2.6 3.5 4.3 0 2.4-2.6 4.1-6.6 4.1-.8 0-1.5-.1-2.2-.2 1 .5 2.2.8 3.7.8 3.5 0 6.3-1.8 6.3-4.6 0-1.8-1.3-3.2-4.7-4.4Z" />
      </svg>
    ),
    C: <span className="text-base font-bold">C</span>,
    JavaScript: (
      <svg {...commonProps}>
        <path d="M1.5 1.5h21v21h-21Zm11.5 16.7c.4.7 1 1.3 2.1 1.3.9 0 1.5-.4 1.5-1.1 0-.8-.6-1.1-1.7-1.6l-.6-.3c-1.8-.8-3-1.8-3-4 0-2 1.5-3.5 3.8-3.5 1.6 0 2.8.6 3.7 2l-2 1.3c-.4-.7-.9-1-1.6-1-.7 0-1.2.5-1.2 1 0 .7.5 1 1.5 1.4l.6.3c2.1.9 3.2 1.9 3.2 4.2 0 2.4-1.9 3.7-4.4 3.7-2.5 0-4.1-1.2-4.9-2.8Zm-8.6.2c.4.7.8 1.2 1.6 1.2.8 0 1.3-.3 1.3-1.5V9h2.6v9.1c0 2.8-1.6 4.1-4 4.1-2.1 0-3.3-1.1-3.9-2.4Z" />
      </svg>
    ),
    Python: (
      <svg {...commonProps}>
        <path d="M11.8 2c-4.1 0-3.8 1.8-3.8 1.8v1.9h3.9v.6H6.5S4 6 4 9.6c0 3.6 2.2 3.5 2.2 3.5h1.3v-1.8s-.1-2.2 2.2-2.2h3.8s2.1 0 2.1-2.1V4.2S16 2 11.8 2Zm-2.1 1.2c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8Zm2.5 18.8c4.1 0 3.8-1.8 3.8-1.8v-1.9h-3.9v-.6h5.4S20 18 20 14.4c0-3.6-2.2-3.5-2.2-3.5h-1.3v1.8s.1 2.2-2.2 2.2h-3.8s-2.1 0-2.1 2.1v2.8S8 22 12.2 22Zm2.1-1.2c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8Z" />
      </svg>
    ),
    React: (
      <svg {...commonProps}>
        <path d="M12 14.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Zm0 0c-3.1 0-5.7 4.5-4.3 6 1.4 1.4 6-1.2 6-4.3 0-3.1-4.6-5.7-6-4.3-1.4 1.4 1.2 6 4.3 6Zm0 0c3.1 0 5.7-4.5 4.3-6-1.4-1.4-6 1.2-6 4.3 0 3.1 4.6 5.7 6 4.3 1.4-1.4-1.2-6-4.3-6Zm0 0c0-3.1-4.5-5.7-6-4.3-1.4 1.4 1.2 6 4.3 6 3.1 0 5.7-4.6 4.3-6-1.4-1.4-6 1.2-6 4.3Z" />
      </svg>
    ),
    HTML: (
      <svg {...commonProps}>
        <path d="M3.2 2 4.8 20.5 12 22l7.2-1.5L20.8 2H3.2Zm13.4 5.4H9.1l.2 2.3h7.1l-.6 7.1L12 18l-3.8-1.2-.3-3.2h1.9l.2 1.6 2 .6 2-.6.2-2.7H7.5L7 5.7h9.8Z" />
      </svg>
    ),
    CSS: (
      <svg {...commonProps}>
        <path d="M3.2 2 4.8 20.5 12 22l7.2-1.5L20.8 2H3.2Zm13.2 4.1-.2 2.2H9.3l.2 2.3H16l-.6 6.4L12 18l-3.4-1-.2-2.8h1.8l.1 1.3 1.7.5 1.8-.5.2-2.3H7.8L7.2 6.1h9.2Z" />
      </svg>
    ),
    'Tailwind CSS': (
      <svg {...commonProps}>
        <path d="M12 6.5c-2.7 0-4.4 1.3-5.1 3.8.9-1.3 1.9-1.8 3.1-1.4.7.2 1.2.8 1.8 1.5.9 1.2 2 2.6 4.2 2.6 2.7 0 4.4-1.3 5.1-3.8-.9 1.3-1.9 1.8-3.1 1.4-.7-.2-1.2-.8-1.8-1.5-.9-1.2-2-2.6-4.2-2.6Zm-5.1 4.5C4.2 11 2.5 12.3 1.8 14.8c.9-1.3 1.9-1.8 3.1-1.4.7.2 1.2.8 1.8 1.5.9 1.2 2 2.6 4.2 2.6 2.7 0 4.4-1.3 5.1-3.8-.9 1.3-1.9 1.8-3.1 1.4-.7-.2-1.2-.8-1.8-1.5-.9-1.2-2-2.6-4.2-2.6Z" />
      </svg>
    ),
    'Framer Motion': (
      <svg {...commonProps}>
        <path d="M6 3h12v6H12l6 6h-6l-6-6Zm0 9h6v9H6Z" />
      </svg>
    ),
    'Node.js': (
      <svg {...commonProps}>
        <path d="m12 1.7 8.3 4.8v9.6L12 20.9l-8.3-4.8V6.5L12 1.7Zm0 2.2L5.6 7.1v7.8l6.4 3.2 6.4-3.2V7.1L12 3.9Zm-.7 3.7h1.6c2.5 0 4.2 1.6 4.2 4.1 0 2.7-1.7 4.2-4.2 4.2h-1.6Zm1.6 6.8c1.5 0 2.4-.9 2.4-2.7 0-1.7-.9-2.6-2.4-2.6H13v5.3Z" />
      </svg>
    ),
    Express: <span className="text-sm font-semibold">Ex</span>,
    MongoDB: (
      <svg {...commonProps}>
        <path d="M12.1 2.3c1 4.2.8 8.4-.3 12.6-.8-1.9-1.1-4.2-1.1-6.4 0-2.2.4-4.3 1.4-6.2Zm.2 14.1c.2.3.4.5.7.8 1.3 1.1 2.8 1.7 2.8 1.7s-1.7 1.2-3.1 1.2c-1.3 0-3-1.1-3-1.1s1.4-.8 2.6-2c.1-.2.1-.4 0-.6Z" />
      </svg>
    ),
    MySQL: (
      <svg {...commonProps}>
        <path d="M19.3 15.4c-.5-.3-1-.7-1.3-1.3-.4-.7-.6-1.4-1-2.1-.8-1.5-2.2-2.7-3.9-3.2-1.7-.5-3.7-.3-5.1.8-.7.5-1.2 1.1-1.6 1.9.4-.2.9-.3 1.4-.2 1.2.1 2.3.9 2.9 1.9.7 1.1 1 2.3 1.6 3.4.9 1.7 2.5 3 4.4 3.4 1.3.3 2.8.2 3.9-.6-.4-.1-.8-.3-1.3-.6Zm-7.1-7.7c.7-.5 1.6-.9 2.5-1 .9-.1 1.8 0 2.6.4-.7-1.3-2.1-2.2-3.6-2.2-1.5-.1-3 .7-3.8 2 .8 0 1.6.3 2.3.8Z" />
      </svg>
    ),
    Firebase: (
      <svg {...commonProps}>
        <path d="m5.3 15.9 2.1-13 5.6 10.5-7.7 2.5Zm1.2 1.3 11.2-3.6-2.3-4.3-8.9 7.9Zm1.9 3.2L19.7 14l-1.3 7.1c-.1.5-.6.8-1.1.6l-8.9-1.3Z" />
      </svg>
    ),
    GitHub: (
      <svg {...commonProps}>
        <path d="M12 .8a11.2 11.2 0 0 0-3.5 21.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1.1-.4 3.5 1.2a12 12 0 0 1 6.4 0c2.4-1.6 3.5-1.2 3.5-1.2.7 1.6.3 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .5.4.9 1.1.9 2.3v3.4c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z" />
      </svg>
    ),
    Vercel: (
      <svg {...commonProps}>
        <path d="M12 3 22 20H2L12 3Z" />
      </svg>
    ),
    Postman: (
      <svg {...commonProps}>
        <path d="M17.8 7.5a4.3 4.3 0 1 0-8.4 1.5 4.3 4.3 0 0 0 4.2 5.2 4.3 4.3 0 0 0 4.2-3.1h2.8v-1.5h-2.8Zm-4.2 5.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm-8.2 7.1 6-6 1.1 1.1-6 6-2.4.6.6-2.4Z" />
      </svg>
    ),
    'REST APIs': <span className="text-xs font-bold tracking-[0.12em]">API</span>,
    Netlify: (
      <svg {...commonProps}>
        <path d="M6 7.3 8.7 4.6 11.4 7.3 8.7 10ZM12.6 7.3l2.7-2.7L18 7.3l-2.7 2.7ZM6 16.7l2.7-2.7 2.7 2.7-2.7 2.7Zm9.3 0L18 14l2.7 2.7-2.7 2.7ZM9.8 11.1h4.4v1.8H9.8Z" />
      </svg>
    ),
  };

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] text-[var(--accent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {logos[name] ?? <span className="text-sm font-semibold">{name.slice(0, 2)}</span>}
    </div>
  );
}

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
                <div className="flex items-center gap-3">
                  <SkillLogo name={skill.name} />
                  <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{skill.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">{skill.category}</p>
                  </div>
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
