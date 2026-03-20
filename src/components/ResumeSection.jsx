import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { useState } from 'react';
import { PdfThumbnailImage } from './PdfThumbnailImage';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './SectionShell';

export function ResumeSection({ resume, resumeTabs, highlights }) {
  const [activeTab, setActiveTab] = useState(resumeTabs[0].id);
  const currentTab = resumeTabs.find((tab) => tab.id === activeTab) ?? resumeTabs[0];
  const downloadName = resume.fileName || 'resume.pdf';
  const getOpenUrl = (item) =>
    item.fileType === 'pdf' && item.fileUrl ? `${item.fileUrl}#zoom=140` : item.fileUrl;

  return (
    <SectionShell id="resume">
      <SectionHeading
        eyebrow="Resume"
        title="Resume section designed for both quick scanning and deeper review"
        description="The CV is available as a direct PDF download, while tabs organize education, skills, projects, and certifications for cleaner review."
      />

      <div className="grid items-start gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.4rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-4">
          <div className="overflow-hidden rounded-[1.2rem] border border-[var(--border-soft)] bg-[var(--surface-tertiary)]">
            {resume.preview ? (
              <a href={resume.fileType === 'pdf' ? `${resume.downloadUrl}#zoom=140` : resume.downloadUrl} target="_blank" rel="noreferrer" className="block">
                {resume.fileType === 'pdf' ? (
                  <PdfThumbnailImage
                    fileUrl={resume.downloadUrl}
                    alt="Resume preview"
                    className="h-[440px] w-full bg-white object-cover object-top p-1"
                    scale={2.1}
                  />
                ) : (
                  <img src={resume.preview} alt="Resume preview" loading="lazy" className="h-[440px] w-full object-contain bg-white p-2" />
                )}
              </a>
            ) : (
              <a
                href={resume.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[260px] w-full items-center justify-center p-6"
              >
                <div className="w-full max-w-sm rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    <FileText size={20} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">{resume.fileName || 'Resume Document'}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">Click to open preview</p>
                </div>
              </a>
            )}
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">{resume.title}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{resume.subtitle}</p>
          </div>

          <a
            href={resume.downloadUrl}
            download={downloadName}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-3 text-sm font-semibold text-white"
          >
            Download Resume <Download size={17} />
          </a>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-[1rem] border border-[var(--border-soft)] bg-[var(--surface-tertiary)] p-3">
                <div className="mb-2 inline-flex rounded-xl border border-[var(--border-soft)] bg-[var(--accent-soft)] p-2 text-[var(--accent)]">
                  <Icon size={18} />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{label}</p>
                <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.4rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-4">
          <div className="flex flex-wrap gap-2">
            {resumeTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                    : 'border border-[var(--border-soft)] bg-[var(--surface-tertiary)] text-[var(--text-secondary)] hover:border-[var(--accent)]'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid gap-3"
            >
              {currentTab.items.map((item) => (
                <article key={`${currentTab.id}-${item.title}`} className="rounded-[1.2rem] border border-[var(--border-soft)] bg-[var(--surface-tertiary)] p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    {item.image ? (
                      <div className="shrink-0">
                        {item.fileUrl ? (
                          <a href={getOpenUrl(item)} target="_blank" rel="noreferrer">
                            <img
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              className="h-14 w-20 rounded-lg border border-[var(--border-soft)] object-cover shadow-md"
                            />
                          </a>
                        ) : (
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="h-14 w-20 rounded-lg border border-[var(--border-soft)] object-cover shadow-md"
                          />
                        )}
                      </div>
                    ) : item.fileUrl && item.fileType === 'pdf' ? (
                      <a href={getOpenUrl(item)} target="_blank" rel="noreferrer" className="block shrink-0">
                        <PdfThumbnailImage fileUrl={item.fileUrl} alt={`${item.title} preview`} className="h-14 w-20 rounded-lg border border-[var(--border-soft)] bg-white object-contain p-1 shadow-md" />
                      </a>
                    ) : item.fileUrl ? (
                      <a
                        href={getOpenUrl(item)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-primary)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)]"
                      >
                        <FileText size={14} />
                        Preview
                      </a>
                    ) : null}
                    <div className="flex-1">
                      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold leading-tight text-[var(--text-primary)] sm:text-2xl">{item.title}</h3>
                          <p className="mt-1 text-sm text-[var(--accent)]">{item.subtitle}</p>
                        </div>
                        <span className="shrink-0 whitespace-nowrap rounded-full border border-[var(--border-soft)] bg-[var(--surface-primary)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
                          {item.meta || item.date}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
                      {item.fileUrl ? (
                        <a
                          href={getOpenUrl(item)}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--surface-primary)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--text-secondary)] transition hover:border-[var(--accent)]"
                        >
                          Open File
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
