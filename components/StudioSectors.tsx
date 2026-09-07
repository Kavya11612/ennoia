import Image from 'next/image';
import Link from 'next/link';
import { sectors } from '@/lib/data/sectors';

const sectorImages: Record<string, string> = {
  'consumer-cpg': '/sectors/consumer-cpg.jpg',
  'fintech-b2b': '/sectors/fintech-b2b.jpg',
  'hospitality-travel': '/sectors/hospitality-travel.jpg',
  'climate-industrial': '/sectors/climate-industrial.jpg',
  'lifestyle-wellness': '/sectors/lifestyle-wellness.jpg',
};

const icons = [
  <svg key="bag" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
    <path
      d="M7 8V7a5 5 0 0 1 10 0v1M6 8h12l-.8 11.2a2 2 0 0 1-2 1.8H8.8a2 2 0 0 1-2-1.8L6 8Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="bank" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
    <path
      d="M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 18h18M12 4l9 6H3l9-6Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="bulb" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
    <path
      d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.8c.6.5 1 1.2 1.1 2v.2h4.8v-.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="leaf" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
    <path
      d="M5 19c8-1 12-6 13-14-7 1-13 5-13 14Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M5 19c3-4 7-7 12-9" stroke="currentColor" strokeWidth="1.4" />
  </svg>,
  <svg key="people" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
    <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M4 18c.4-2.8 2.4-4.2 5-4.2s4.6 1.4 5 4.2M13.5 13.6c1.5-.4 3.2 0 4.5 1.8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>,
];

/**
 * Studio S6 — Industries We Serve (mockup grid, compact).
 * Uses sector images from the provided mockup. No third-party studio mark.
 */
export default function StudioSectors() {
  return (
    <section className="page-x py-7 md:py-8 max-w-container mx-auto">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <header className="max-w-[34rem]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-eyebrow font-medium uppercase tracking-[0.16em] text-gambit-text">
              Sectors
            </span>
            <span className="h-px w-14 md:w-20 bg-emboss/50" aria-hidden="true" />
          </div>
          <h2 className="mt-3 font-sans font-bold text-[1.5rem] md:text-[1.85rem] text-ink tracking-[-0.02em] text-balance">
            Industries we serve
          </h2>
          <p className="mt-2 font-sans text-[0.95rem] leading-relaxed text-gambit-text max-w-standfirst">
            Different industries. Same goal — stronger brands. We create design and strategy that
            works across sectors.
          </p>
        </header>

        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-gambit-text lg:pt-1 lg:max-w-[16ch] lg:text-right">
          <svg
            width="10"
            height="10"
            viewBox="0 0 14 14"
            className="shrink-0 text-emboss"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7 0.5 L8.2 5.8 L13.5 7 L8.2 8.2 L7 13.5 L5.8 8.2 L0.5 7 L5.8 5.8 Z" />
          </svg>
          Different sectors. One creative vision.
        </p>
      </div>

      <ul className="mt-7 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 max-w-[860px]">
        {sectors.map((sector, i) => {
          const src = sectorImages[sector.slug];
          return (
            <li key={sector.slug} className="flex flex-col max-w-[240px]">
              <div
                className="relative aspect-[4/5] w-full max-w-[168px] overflow-hidden bg-landing-stone"
                style={{ borderRadius: '999px 999px 6px 6px' }}
              >
                {src ? (
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="168px"
                    className="object-cover object-center"
                  />
                ) : null}
              </div>

              <div className="mt-3 flex flex-col gap-1.5">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-rule text-emboss">
                  {icons[i % icons.length]}
                </span>
                <h3 className="font-sans font-semibold text-[1.05rem] leading-snug text-ink text-balance">
                  {sector.name}
                </h3>
                <p className="font-sans text-[0.875rem] leading-relaxed text-gambit-text">
                  {sector.description}
                </p>
                <Link
                  href={`/hypotheticals?sector=${sector.slug}`}
                  className="mt-0.5 inline-flex h-8 w-8 items-center justify-center text-emboss hover:text-ink transition-colors duration-fast ease-out"
                  aria-label={`View ${sector.name} work`}
                >
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M3 9h12M10 4l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </li>
          );
        })}

        <li className="relative flex min-h-[200px] max-w-[240px] flex-col justify-end overflow-hidden rounded-md bg-card px-4 py-5">
          <div
            className="pointer-events-none absolute -right-6 -top-4 h-28 w-28 rounded-full border border-rule"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-4 -right-3 h-20 w-16 text-emboss/45"
            aria-hidden="true"
          >
            <svg viewBox="0 0 80 100" className="h-full w-full" fill="currentColor">
              <path d="M36 95 C34 70 28 48 40 16 C52 10 62 28 54 48 C70 52 74 70 62 82 C50 92 38 90 36 95Z" />
            </svg>
          </div>
          <p className="relative font-sans text-[1.15rem] italic font-semibold text-ink leading-snug max-w-[11ch]">
            Strategy meets creativity.
          </p>
        </li>
      </ul>

      <div className="mt-7 md:mt-8 flex justify-end border-t border-rule pt-4 max-w-[860px]">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gambit-text">
          Brands / Strategy / Design / Digital
        </p>
      </div>
    </section>
  );
}
