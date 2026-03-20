import { motion } from 'framer-motion';
import { Award, CalendarDays, FileText, Trophy } from 'lucide-react';
import { PdfThumbnailImage } from './PdfThumbnailImage';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './SectionShell';

export function AchievementsSection({ data, certificates }) {
  const getOpenUrl = (item) =>
    item.fileType === 'pdf' && item.fileUrl ? `${item.fileUrl}#zoom=page-fit` : item.fileUrl ?? item.image;

  return (
    <>
      <SectionShell id="certificates">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications"
          description="Credentials and event outcomes that reflect continuous learning and practical implementation."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-[1.8rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)]"
            >
              <a href={getOpenUrl(item)} target="_blank" rel="noreferrer" className="block">
                {item.fileType === 'pdf' ? (
                  <div className="relative">
                    <PdfThumbnailImage fileUrl={item.fileUrl} alt={`${item.title} preview`} className="h-44 w-full bg-white object-contain p-2" />
                    <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-[var(--border-soft)] bg-black/65 px-2 py-1 text-[10px] font-semibold tracking-wide text-white">
                      <FileText size={12} />
                      PDF
                    </div>
                  </div>
                ) : (
                  <img src={item.image} alt={item.title} loading="lazy" className="h-44 w-full object-cover" />
                )}
              </a>
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs text-[var(--accent)]">{item.meta}</span>
                  <span className="text-xs text-[var(--text-muted)]">{item.date}</span>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="achievements">
        <SectionHeading
          eyebrow="Achievements"
          title="Achievements"
          description="Milestones that show leadership, consistency, and problem-solving strength beyond coursework."
        />

        <div className="grid gap-5">
          {data.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.8rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    {index % 2 === 0 ? <Trophy size={22} /> : <Award size={22} />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
                    <p className="mt-2 text-base leading-8 text-[var(--text-secondary)]">{item.description}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-tertiary)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)]">
                  <CalendarDays size={15} />
                  {item.date}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
