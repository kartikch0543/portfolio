import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';

function useTypingRoles(roles) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentRole) {
          window.setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const nextText = displayText.slice(0, -1);
        setDisplayText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((index) => (index + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : 90);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return displayText;
}

export function HeroSection({ data }) {
  const roleText = useTypingRoles(data.roles);

  return (
    <section
      id="home"
      className="grid min-h-[calc(100vh-7rem)] items-center gap-10 px-1 pb-10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1"
      >
        <p className="mb-4 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--accent-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          {data.status}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
            {data.name}
          </span>
        </h1>
        <div className="mt-5 h-9 text-lg font-medium text-[var(--accent)] sm:text-2xl">
          <span>{roleText}</span>
          <span className="ml-1 inline-block h-6 w-px animate-pulse bg-[var(--accent)] align-middle sm:h-7" />
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">{data.headline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-2 text-sm text-[var(--text-secondary)]">
            <MapPin size={16} className="text-[var(--accent)]" />
            {data.location}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-2 text-sm text-[var(--text-secondary)]">
            <GraduationCap size={16} className="text-[var(--accent)]" />
            {data.college}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-tertiary)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]"
          >
            Contact Me <Mail size={18} />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-2 text-sm text-[var(--text-secondary)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        whileHover={{ y: -4 }}
        className="order-1 flex justify-center lg:order-2 lg:justify-end"
      >
        <div className="relative w-full max-w-md">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-4 backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.26)]">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-3">
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Focus Area</p>
                  <p className="font-medium text-[var(--text-primary)]">Modern Full Stack Projects</p>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400 dark:text-emerald-300">
                  Open to work
                </div>
              </div>

              <div className="flex justify-center px-6 py-5">
                <div className="relative group">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-cyan-500/10 to-teal-500/8 blur-xl opacity-10 transition duration-500 group-hover:opacity-15" />
                  <img
                    src={data.image}
                    alt={data.name}
                    className="relative z-10 mx-auto aspect-square w-full max-w-[14rem] rounded-full border-[3px] border-slate-800/80 object-cover shadow-[0_8px_18px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-[1.01] dark:border-slate-900/90"
                    style={{ filter: 'brightness(0.9) saturate(0.84) contrast(0.92) blur(0.8px)', opacity: 0.9 }}
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {data.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-3 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{metric.label}</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
