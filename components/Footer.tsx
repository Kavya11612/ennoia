import Link from 'next/link';
import Logo from './Logo';
import ContactDirectLinks from './ContactDirectLinks';
import { site } from '@/lib/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hypotheticals', label: 'Hypotheticals' },
  { href: '/studio', label: 'Studio' },
  { href: '/notions', label: 'Notions' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-open-board">
      <div className="max-w-container mx-auto page-x py-6 md:py-7">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-5">
          <div className="md:col-span-4 flex flex-col gap-3 min-w-0">
            <Logo reversed />
            <p className="font-sans text-body-s text-landing-stone max-w-[40ch]">
              For founders who need a position, not just a logo, Ennoia is the strategy-led branding
              studio that finds the move competitors miss and builds the brand around it — because we
              read the whole board before we move.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 flex flex-col gap-3 min-w-0">
            <span className="font-mono text-meta tracking-[0.08em] text-landing-stone mb-1">
              Site
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-body-s text-open-board hover:text-clay-on-ink transition-colors duration-fast ease-out"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:col-span-3 flex flex-col gap-3 min-w-0">
            <span className="font-mono text-meta tracking-[0.08em] text-landing-stone mb-1">
              Direct
            </span>
            <ContactDirectLinks
              tone="dark"
              channels={['email', 'whatsapp', 'phone', 'linkedin', 'instagram']}
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-3 min-w-0">
            <span className="font-mono text-meta tracking-[0.08em] text-landing-stone mb-1">
              Legal
            </span>
            <Link
              href="/privacy"
              className="font-sans text-body-s text-open-board hover:text-clay-on-ink transition-colors duration-fast ease-out"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-body-s text-open-board hover:text-clay-on-ink transition-colors duration-fast ease-out"
            >
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-5 pt-6 pb-2 border-t border-landing-stone/20">
          <p className="font-mono text-[12px] text-landing-stone">
            Ennoia Branding Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
