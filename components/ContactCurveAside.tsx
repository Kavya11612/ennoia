import Image from 'next/image';
import ContactDirectLinks from '@/components/ContactDirectLinks';
import { site } from '@/lib/site';

const nextSteps = [
  {
    title: 'We read it',
    body: 'Your note is read by us — no form routing, no account manager.',
  },
  {
    title: 'If it’s a fit',
    body: 'We reply within three working days with clear next steps.',
  },
  {
    title: 'If it’s not',
    body: 'We’ll say so plainly, and why, wherever we can.',
  },
];

function NextRoadmap() {
  return (
    <ol className="mt-6 relative flex flex-col pl-3 sm:pl-4">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[1.875rem] sm:left-[2.125rem] top-4 bottom-4 w-px -translate-x-1/2 bg-rule"
      />

      {nextSteps.map((step, i) => {
        const n = String(i + 1).padStart(2, '0');

        return (
          <li
            key={step.title}
            className={`relative grid grid-cols-[2rem_1fr] items-start gap-x-4 sm:gap-x-5 ${
              i === 0 ? '' : 'mt-7'
            }`}
          >
            <div className="relative z-[1] flex justify-center pt-1">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[9px] tracking-[0.04em] text-open-board tabular-nums shadow-[0_0_0_4px_var(--c-open-board)]">
                {n}
              </span>
            </div>
            <div className="min-w-0 pt-0.5 max-w-[28ch] sm:max-w-[32ch]">
              <h3 className="font-sans font-semibold text-[1.05rem] leading-snug tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-[0.92rem] leading-[1.55] text-gambit-text">
                {step.body}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function CurvedPhoto({
  src,
  clipId,
  priority = false,
  minClass = 'min-h-[200px] sm:min-h-[240px] md:min-h-[280px]',
}: {
  src: string;
  clipId: string;
  priority?: boolean;
  minClass?: string;
}) {
  return (
    <div
      className={`relative w-full aspect-[5/4] sm:aspect-auto ${minClass} overflow-hidden bg-open-board rounded-md sm:rounded-none`}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0.16 0 C0.04 0.28 0.04 0.72 0.16 1 L1 1 L1 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        className="absolute inset-0 max-sm:[clip-path:none]"
        style={{ clipPath: `url(#${clipId})` }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 42vw"
          className="object-cover object-[center_40%] sm:object-[58%_center]"
          priority={priority}
        />
      </div>
    </div>
  );
}

/**
 * Contact aside — curved photo + Direct / next / fit / location.
 */
export default function ContactCurveAside() {
  return (
    <aside className="min-w-0 flex flex-col gap-8 pt-2 sm:pt-0 pl-2 sm:pl-4 md:pl-5 pb-2">
      <CurvedPhoto src="/contact/workspace.jpg" clipId="contact-curve-top" priority />

      <div>
        <p className="font-mono text-[11px] tracking-[0.04em] text-gambit-text border-b border-rule pb-3">
          Direct
        </p>
        <div className="mt-5">
          <ContactDirectLinks tone="badge" />
        </div>
      </div>

      <div>
        <p className="font-mono text-[11px] tracking-[0.04em] text-gambit-text border-b border-rule pb-3">
          What happens next?
        </p>
        <NextRoadmap />
      </div>

      <div>
        <p className="font-mono text-[11px] tracking-[0.04em] text-gambit-text border-b border-rule pb-3">
          Fit
        </p>
        <div className="mt-5 flex flex-col gap-5 font-sans text-body text-ink leading-relaxed max-w-[42ch]">
          <p>
            <strong className="font-semibold">We take on:</strong> founders who need a position
            before a logo, and are willing to think deeper.
          </p>
          <p>
            <strong className="font-semibold">We don&rsquo;t take on:</strong> price shoppers,
            one-off logo seekers, or anyone unwilling to engage with strategy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 items-start">
        <div className="min-w-0">
          <p className="font-mono text-[11px] tracking-[0.04em] text-gambit-text border-b border-rule pb-3">
            Based in
          </p>
          <p className="mt-4 font-sans text-[0.95rem] leading-7 text-ink">{site.city}</p>
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[11px] tracking-[0.04em] text-gambit-text border-b border-rule pb-3">
            Elsewhere
          </p>
          <div className="mt-4">
            <ContactDirectLinks tone="badge" channels={['linkedin', 'instagram']} compact />
          </div>
        </div>
      </div>
    </aside>
  );
}
