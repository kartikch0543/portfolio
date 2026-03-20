import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './SectionShell';

const contactItems = [
  { key: 'email', label: 'Email', icon: Mail },
  { key: 'phone', label: 'Phone', icon: Phone },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'github', label: 'GitHub', icon: Github },
];

export function ContactSection({ data }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete all fields before sending your message.');
      return;
    }

    setError('');
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${data.formRecipient}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionShell id="contact" className="mb-8">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let&apos;s build something meaningful together"
        description="If you have an internship opportunity, project idea, or collaboration in mind, I&apos;d love to hear from you."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          onSubmit={handleSubmit}
          className="rounded-[1.8rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-6"
        >
          <div className="grid gap-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-4 outline-none transition focus:border-[var(--accent)]"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-4 outline-none transition focus:border-[var(--accent)]"
                placeholder="your.email@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="8"
                className="w-full rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-4 outline-none transition focus:border-[var(--accent)]"
                placeholder="Your message..."
              />
            </label>
          </div>

          {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4 text-lg font-semibold text-white"
          >
            Send Message <Send size={18} />
          </button>
        </motion.form>

        <div className="rounded-[1.8rem] border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-6">
          <h3 className="text-3xl font-semibold text-[var(--text-primary)]">Contact Information</h3>
          <div className="mt-8 space-y-5">
            {contactItems.map(({ key, label, icon: Icon }) => {
              const href =
                key === 'email'
                  ? `mailto:${data.email}`
                  : key === 'phone'
                    ? `tel:${data.phone}`
                    : data[key];
              const value =
                key === 'email' ? data.email : key === 'phone' ? data.phone : data[key].replace('https://', '');

              return (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' || key === 'phone' ? undefined : '_blank'}
                  rel={key === 'email' || key === 'phone' ? undefined : 'noreferrer'}
                  className="flex items-center gap-4 rounded-[1.4rem] border border-[var(--border-soft)] bg-[var(--surface-tertiary)] px-4 py-4 transition hover:border-[var(--accent)]"
                >
                  <span className="inline-flex rounded-full bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-sm text-[var(--text-muted)]">{label}</span>
                    <span className="block text-base font-medium text-[var(--text-primary)]">{value}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-tertiary)] p-6 text-center text-lg text-[var(--text-secondary)]">
            Looking forward to hearing from you!
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
