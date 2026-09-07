import Link from 'next/link';

const pillars = [
  {
    n: '01',
    label: 'Who we are',
    lines: ['Designers.', 'Strategists.', 'Brand Builders.'],
    body: 'We are a creative studio that believes in the power of thoughtful design, clear strategy and authentic storytelling to build brands that last.',
  },
  {
    n: '02',
    label: 'What we do',
    lines: ['Brand strategy.', 'Visual identity.', 'Experience design.'],
    body: 'We shape brands with purpose — from strategy and identity to digital experiences that connect, inspire and create lasting value.',
  },
  {
    n: '03',
    label: 'Why we do it',
    lines: ['To create clarity.', 'To inspire connection.', 'To build lasting value.'],
    body: 'Because great brands do more than look good — they make people feel, think and believe.',
  },
];

/** Studio philosophy — clean editorial columns, Brandkit palette. */
export default function StudioPhilosophy() {
  return (
    <section
      id="about-ennoia"
      className="philosophy relative overflow-hidden scroll-mt-24"
      aria-labelledby="philosophy-heading"
    >
      <div className="philosophy-atmosphere absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 page-x max-w-container mx-auto py-7 md:py-8">
        <header className="philosophy-rise max-w-[36rem]">
          <h2
            id="philosophy-heading"
            className="font-sans font-bold text-[1.85rem] md:text-[2.15rem] text-ink tracking-[-0.02em] text-balance leading-[1.12]"
          >
            Ideas. Strategy. Design.
          </h2>
          <p className="mt-3 font-sans text-[1.1rem] md:text-body-l italic text-emboss max-w-[30ch] leading-snug">
            We turn visions into meaningful brands.
          </p>
        </header>

        <div className="philosophy-rise philosophy-rise--delay mt-7 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-0">
          {pillars.map((p, i) => (
            <article
              key={p.n}
              className={`flex flex-col gap-4 md:px-5 lg:px-7 first:md:pl-0 last:md:pr-0 ${
                i > 0 ? 'md:border-l md:border-rule/90' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[13px] md:text-[14px] tabular-nums tracking-[0.04em] text-emboss">
                  {p.n}
                </span>
                <span className="font-mono text-[13px] md:text-[14px] tracking-[0.04em] text-gambit-text">
                  {p.label}
                </span>
                <span className="h-px min-w-[1.5rem] flex-1 bg-rule" aria-hidden="true" />
              </div>

              <h3 className="font-sans font-semibold text-[1.35rem] md:text-[1.5rem] leading-[1.3] tracking-[-0.015em] text-ink">
                {p.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              <p className="font-sans text-[1rem] md:text-[1.05rem] leading-[1.65] text-gambit-text max-w-[36ch]">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <div className="philosophy-rise philosophy-rise--late mt-7 md:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-rule/70 pt-5">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-mono text-[13px] md:text-[14px] tracking-[0.04em] text-ink hover:text-emboss-link transition-colors duration-fast ease-out min-h-[44px]"
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center border border-rule text-emboss transition-colors duration-fast group-hover:border-emboss"
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Let&rsquo;s create something meaningful
          </Link>

          <div className="flex items-center gap-3 self-end sm:self-auto" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 14 14" className="text-emboss" fill="currentColor">
              <path d="M7 0.5 L8.2 5.8 L13.5 7 L8.2 8.2 L7 13.5 L5.8 8.2 L0.5 7 L5.8 5.8 Z" />
            </svg>
            <span className="h-px w-16 md:w-28 bg-rule" />
          </div>
        </div>
      </div>
    </section>
  );
}
