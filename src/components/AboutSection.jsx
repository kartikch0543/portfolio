import { Compass, Rocket, Sparkles, UserRound, Code2, Target } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './SectionShell';

const cards = [
  { icon: UserRound, key: 'whoIAm', title: 'Who I Am' },
  { icon: Compass, key: 'myJourney', title: 'My Journey' },
  { icon: Code2, key: 'whatIDo', title: 'What I Do' },
  { icon: Target, key: 'careerGoals', title: 'Career Goals' },
  { icon: Sparkles, key: 'beyondCoding', title: 'Beyond Coding' },
  { icon: Rocket, key: 'myApproach', title: 'My Approach' },
];

function emphasizeKeywords(text) {
  const keywords = ['React', 'Node.js', 'MongoDB', 'MERN', 'AI', 'full stack', 'UI', 'UX'];

  return text.split(/(\b(?:React|Node\.js|MongoDB|MERN|AI|full stack|UI|UX)\b)/g).map((part, index) => {
    const match = keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase());
    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <span key={`${part}-${index}`} className="rounded-md bg-[var(--accent-soft)] px-1.5 py-0.5 font-medium text-[var(--accent)]">
        {part}
      </span>
    );
  });
}

export function AboutSection({ data }) {
  return (
    <SectionShell id="about">
      <SectionHeading
        eyebrow="About Me"
        title="A journey shaped by curiosity, product thinking, and steady execution"
        description="Each block captures a part of how I work, what I build, and the mindset I bring into modern full stack projects."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ icon: Icon, key, title }) => (
          <article
            key={key}
            className="h-full rounded-[1.35rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-4 transition hover:border-[var(--accent)]"
          >
            <div className="mb-3 inline-flex rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-tertiary)] p-2.5 text-[var(--accent)]">
              <Icon size={18} />
            </div>
            <h3 className="text-[1.3rem] font-semibold text-[var(--text-primary)]">{title}</h3>
            <div className="mt-2.5 text-sm leading-7 text-[var(--text-secondary)]">
              {Array.isArray(data[key]) ? (
                <ul className="list-inside list-disc space-y-1.5">
                  {data[key].map((item, idx) => (
                    <li key={idx}>{emphasizeKeywords(item)}</li>
                  ))}
                </ul>
              ) : (
                <p className="whitespace-pre-line">{emphasizeKeywords(data[key])}</p>
              )}
              {key === 'myApproach' ? (
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                  {data.myApproachPoints.map((point) => (
                    <li key={point} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-3">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}

        <article className="h-full rounded-[1.35rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-5 md:col-span-2 xl:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">Snapshot</p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">Academic and career direction at a glance</h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {data.journeyStats.map((item) => (
              <div key={item.label} className="rounded-[1.1rem] border border-[var(--border-soft)] bg-[var(--surface-tertiary)] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">{item.label}</p>
                <p className="mt-2 text-lg font-medium text-[var(--text-primary)]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[1.1rem] border border-[var(--border-soft)] bg-[var(--accent-soft)] p-4 text-sm leading-7 text-[var(--text-secondary)]">
            I care about building interfaces that feel smooth, readable, and complete on both desktop and mobile.
            That blend of problem solving and presentation is what I want to bring into placement and internship opportunities.
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
