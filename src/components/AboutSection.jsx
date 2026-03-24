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
      <span key={`${part}-${index}`} className="rounded-md bg-[rgba(20,184,166,0.18)] px-1.5 py-0.5 font-medium text-[#2dd4bf]">
        {part}
      </span>
    );
  });
}

export function AboutSection({ data }) {
  return (
    <SectionShell
      id="about"
      className="border-white/10 bg-[rgba(4,6,10,0.82)] shadow-[0_18px_50px_rgba(0,0,0,0.42)]"
    >
      <SectionHeading
        eyebrow="About Me"
        title="A journey shaped by curiosity, product thinking, and steady execution"
        description="Each block captures a part of how I work, what I build, and the mindset I bring into modern full stack projects."
        className="max-w-[62rem]"
        titleClassName="text-[2.3rem] leading-[1.05] sm:text-[3.1rem]"
        descriptionClassName="mx-auto max-w-4xl text-base leading-8 text-[#c3cad7] sm:text-[1.04rem]"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ icon: Icon, key, title }) => (
          <article
            key={key}
            className="group relative h-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-[rgba(7,9,14,0.96)] p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#22d3ee] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_18px_40px_rgba(0,0,0,0.32)] sm:p-5"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_42%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="relative mb-4 inline-flex rounded-[1rem] border border-white/10 bg-[rgba(13,17,24,0.96)] p-2.5 text-[#2dd4bf] transition duration-300 group-hover:scale-105 group-hover:border-[#22d3ee]/40">
              <Icon size={18} />
            </div>
            <h3 className="relative text-[1.38rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-[1.55rem]">{title}</h3>
            <div className="relative mt-3 text-[0.96rem] leading-9 text-[#c3cad7] sm:text-[0.995rem]">
              {Array.isArray(data[key]) ? (
                <ul className="list-inside list-disc space-y-2.5 marker:text-[var(--text-primary)]">
                  {data[key].map((item, idx) => (
                    <li key={idx}>{emphasizeKeywords(item)}</li>
                  ))}
                </ul>
              ) : (
                <p className="whitespace-pre-line">{emphasizeKeywords(data[key])}</p>
              )}
              {key === 'myApproach' ? (
                <ul className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
                  {data.myApproachPoints.map((point) => (
                    <li
                      key={point}
                      className="rounded-[1rem] border border-white/10 bg-[rgba(15,17,22,0.98)] px-4 py-3 text-[0.92rem] text-[var(--text-primary)] transition duration-300 group-hover:border-white/15"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
