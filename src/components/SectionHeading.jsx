import { motion } from 'framer-motion';

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`mx-auto mb-7 max-w-3xl text-center ${className}`}
    >
      <p className="mb-3 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--accent-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-[2.1rem] ${titleClassName}`}>{title}</h2>
      <p className={`mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base ${descriptionClassName}`}>{description}</p>
    </motion.div>
  );
}
