import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  reversed?: boolean;
  compact?: boolean;
}

/**
 * §6 — the mark. Rendered from the canonical SVG asset, never reconstructed
 * in CSS. §6.4/§5.6.5: static, always — no hover animation beyond the
 * 150ms/80% opacity permitted on the header logo. §6.3: never below 24px
 * mark-alone / 120px full lockup.
 *
 * `compact` renders the mark alone (favicon-scale / tight contexts only).
 * Header always uses the full lockup — mark + wordmark.
 */
export default function Logo({ reversed = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Ennoia — home"
      className="inline-flex items-center gap-2.5 sm:gap-3 opacity-100 transition-opacity duration-fast ease-out hover:opacity-80"
    >
      <Image src="/ennoia-mark.svg" alt="" aria-hidden="true" width={32} height={32} priority />
      {!compact && (
        <span
          className={`font-sans font-bold text-[1.25rem] sm:text-[22px] leading-none tracking-[-0.02em] ${
            reversed ? 'text-open-board' : 'text-ink'
          }`}
        >
          Ennoia
        </span>
      )}
    </Link>
  );
}
