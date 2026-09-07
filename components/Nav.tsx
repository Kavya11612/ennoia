'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

/** Global nav — Home + PRD sections. Mark also links home. */
const links = [
  { href: '/', label: 'Home' },
  { href: '/hypotheticals', label: 'Hypotheticals' },
  { href: '/studio', label: 'Studio' },
  { href: '/notions', label: 'Notions' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    const firstLink = menuRef.current?.querySelector<HTMLElement>('a[href]');
    firstLink?.focus();

    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-open-board shadow-nav isolate">
        <nav
          aria-label="Primary"
          className="relative z-[101] flex items-center justify-between page-x py-4 max-w-container mx-auto bg-open-board"
        >
          <Logo />

          <ul className="hidden md:flex items-center gap-7">
            {links.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname?.startsWith(link.href + '/');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative font-mono text-[13px] uppercase tracking-[0.1em] text-ink hover:text-emboss-link transition-colors duration-fast ease-out"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 w-full bg-emboss-link origin-left transition-transform duration-base ease-out"
                      style={{
                        height: '2px',
                        bottom: '-4px',
                        transform: active ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 min-w-[44px] min-h-[44px] items-center justify-center"
          >
            <span
              aria-hidden="true"
              className="block h-px w-6 bg-ink transition-transform duration-base ease-out"
              style={menuOpen ? { transform: 'translateY(3px) rotate(45deg)' } : undefined}
            />
            <span
              aria-hidden="true"
              className="block h-px w-6 bg-ink transition-transform duration-base ease-out"
              style={menuOpen ? { transform: 'translateY(-3px) rotate(-45deg)' } : undefined}
            />
          </button>
        </nav>
      </header>

      <div
        id={menuId}
        ref={menuRef}
        hidden={!menuOpen}
        className={`md:hidden fixed inset-0 z-[90] bg-ink ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-center px-8 gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-semibold text-h3 text-open-board"
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
