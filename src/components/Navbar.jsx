import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navSurface = scrolled
    ? 'border-[var(--border-strong)] bg-[var(--surface-secondary)] shadow-[0_6px_18px_rgba(0,0,0,0.24)] backdrop-blur-xl'
    : 'border-[var(--border-soft)] bg-[var(--surface-primary)] backdrop-blur-lg';

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-6 ${navSurface}`}>
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--text-primary)]">
          Kartik
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-transparent bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 md:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            className="inline-flex rounded-full border border-[var(--border-soft)] p-2 text-[var(--text-secondary)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-secondary)] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-tertiary)] hover:text-[var(--text-primary)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
