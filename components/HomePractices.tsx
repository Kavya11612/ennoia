import Image from 'next/image';
import Link from 'next/link';
import type { Practice } from '@/lib/data/types';
import type { ReactNode } from 'react';

const practiceImages: Record<string, string> = {
  'brand-strategy': '/practices/brand-strategy.jpg',
  'naming-verification': '/practices/naming-verification.jpg',
  'visual-identity': '/practices/visual-identity.jpg',
  'experience-design': '/practices/experience-design.jpg',
};

const practiceIcons: Record<string, ReactNode> = {
  'brand-strategy': (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.8c.6.5 1 1.2 1.1 2v.2h4.8v-.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'naming-verification': (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M7 3.5h7l3 3V20a1.5 1.5 0 0 1-1.5 1.5h-8.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M14 3.5V7h3.5M8 11h8M8 14.5h8M8 18h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  'visual-identity': (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <circle cx="9" cy="10" r="4.25" stroke="currentColor" strokeWidth="1.4" />
      <rect
        x="11.25"
        y="8.25"
        width="8.5"
        height="8.5"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  ),
  'experience-design': (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="11.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 20.5h8M12 16.5v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

function ArchImage({ src }: { src: string }) {
  return (
    <div
      className="relative aspect-[4/5] w-[5rem] sm:w-[6.5rem] md:w-[clamp(7.25rem,14.5vh,9rem)] shrink-0 overflow-hidden bg-landing-stone shadow-[0_12px_28px_-20px_rgba(40,32,24,0.4)]"
      style={{ borderRadius: '999px 999px 8px 8px' }}
    >
      <Image src={src} alt="" fill sizes="(max-width: 768px) 104px, 160px" className="object-cover object-center" />
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <div className="flex items-center shrink-0 px-1 sm:px-1.5 lg:px-3">
      <span className="hidden sm:block h-px w-4 md:w-6 lg:w-9 bg-rule" aria-hidden="true" />
      <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[10px] sm:text-[11px] tracking-[0.06em] text-open-board tabular-nums">
        {String(n).padStart(2, '0')}
      </span>
      <span className="hidden sm:block h-px w-4 md:w-6 lg:w-9 bg-rule" aria-hidden="true" />
    </div>
  );
}

/** Home H4 — What we do zigzag practices (same layout mobile + desktop). */
export default function HomePractices({ practices }: { practices: Practice[] }) {
  return (
    <div>
      <header className="max-w-[36rem]">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-rule" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gambit-text">What we do</p>
        </div>
        <h2 className="mt-3 font-sans font-bold text-[1.45rem] md:text-[1.7rem] text-ink tracking-[-0.02em] text-balance max-w-[16ch]">
          Ideas that build stronger brands.
        </h2>
        <p className="mt-3 font-sans text-[0.98rem] md:text-body leading-relaxed text-gambit-text max-w-standfirst">
          From strategy to real-world experience, we shape brands that make a difference.
        </p>
      </header>

      <ul className="mt-7 md:mt-8 flex flex-col gap-5 sm:gap-6 md:gap-[clamp(0.9rem,2vh,1.35rem)]">
        {practices.map((practice, i) => {
          const n = i + 1;
          const src = practiceImages[practice.slug];
          const imageLeft = i % 2 === 0;

          return (
            <li key={practice.slug}>
              <Link
                href="/studio"
                className={`flex items-center gap-2 sm:gap-0 group ${
                  imageLeft ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div
                  className={`flex flex-1 min-w-0 ${
                    imageLeft ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {src ? <ArchImage src={src} /> : null}
                </div>

                <StepNumber n={n} />

                <div
                  className={`flex flex-1 min-w-0 items-center ${
                    imageLeft ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`flex flex-col gap-1 sm:gap-1.5 max-w-[14rem] sm:max-w-[18rem] md:max-w-[22rem] ${
                      imageLeft ? 'items-start text-left' : 'items-end text-right'
                    }`}
                  >
                    <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-rule bg-card text-emboss">
                      {practiceIcons[practice.slug]}
                    </span>
                    <h3 className="font-sans font-semibold text-[0.95rem] sm:text-[1.06rem] md:text-[1.12rem] leading-snug text-ink text-balance group-hover:text-emboss-link transition-colors duration-fast ease-out">
                      {practice.name}
                    </h3>
                    <p className="font-sans text-[0.8rem] sm:text-[0.9rem] md:text-[0.94rem] leading-snug text-gambit-text">
                      {practice.oneLiner}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
