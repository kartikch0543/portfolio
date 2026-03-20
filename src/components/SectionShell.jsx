import { motion } from 'framer-motion';

export function SectionShell({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className={`scroll-mt-24 rounded-[1.6rem] border border-[var(--border-soft)] bg-[var(--surface-primary)] p-4 shadow-[0_6px_18px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-5 lg:p-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}
