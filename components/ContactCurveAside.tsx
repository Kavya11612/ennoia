import Image from 'next/image';
import ContactDirectLinks from '@/components/ContactDirectLinks';
import { site } from '@/lib/site';

const nextSteps = [
  'We read your note ourselves — no form routing, no account manager.',
  'If it’s a fit, we reply within three working days with next steps.',
  'If it’s not, we’ll tell you that too, and why, where we can.',
];

function CurvedPhoto({
  src,
  clipId,
  priority = false,
  minClass = 'min-h-[260px] sm:min-h-[300px] md:min-h-[340px]',
}: {
  src: string;
  clipId: string;
  priority?: boolean;
  minClass?: string;
}) {
  return (
    <div className={`relative w-full ${minClass} overflow-hidden bg-open-board`}>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0.16 0 C0.04 0.28 0.04 0.72 0.16 1 L1 1 L1 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="absolute inset-0" style={{ clipPath: `url(#${clipId})` }}>
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 42vw"
          className="object-cover object-[58%_center]"
          priority={priority}
        />
      </div>
    </div>
  );
}

/**
 * Contact aside — curved photo edge (mockup scoop) + Direct / next / fit.
 */
export default function ContactCurveAside() {
  return (
    <aside className="min-w-0 flex flex-col gap-8">
      <div className="relative flex gap-4 items-stretch">
        <p
          className="hidden sm:flex shrink-0 self-start pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-gambit-text leading-[2.2]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          aria-hidden="true"
        >
          Ideas
          <br />
          Brands
          <br />
          People
        </p>

        <div className="flex-1 min-w-0">
          <CurvedPhoto src="/contact/workspace.jpg" clipId="contact-curve-top" priority />
        </div>
      </div>

      <div>
        <p className="font-mono text-eyebrow font-medium uppercase tracking-[0.16em] text-gambit-text border-b border-rule pb-2.5">
          Direct
        </p>
        <div className="mt-5">
          <ContactDirectLinks tone="badge" />
        </div>
      </div>

      <div>
        <p className="font-mono text-eyebrow font-medium uppercase tracking-[0.16em] text-gambit-text border-b border-rule pb-2.5">
          What happens next?
        </p>
        <ol className="mt-5 flex flex-col gap-4">
          {nextSteps.map((step, i) => (
            <li key={step} className="flex gap-5 items-start font-sans text-body text-ink">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-landing-stone/80 font-mono text-[11px] text-ink">
                {i + 1}
              </span>
              <span className="min-w-0 pt-0.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="font-mono text-eyebrow font-medium uppercase tracking-[0.16em] text-gambit-text border-b border-rule pb-2.5">
          Fit
        </p>
        <div className="mt-5 flex flex-col gap-3.5 font-sans text-body text-ink leading-relaxed">
          <p>
            <strong className="font-semibold">We take on:</strong> founders who need a position
            before a logo, and are willing to think deeper.
          </p>
          <p>
            <strong className="font-semibold">We don&rsquo;t take on:</strong> price shoppers,
            one-off logo seekers, or anyone unwilling to engage with strategy — including briefs
            where the name is already decided and only needs designing.
          </p>
        </div>
      </div>

      <div>
        <p className="font-mono text-eyebrow font-medium uppercase tracking-[0.16em] text-gambit-text border-b border-rule pb-2.5">
          Based in
        </p>
        <p className="mt-4 font-sans text-body text-ink">{site.city}</p>
      </div>

      <div>
        <p className="font-mono text-eyebrow font-medium uppercase tracking-[0.16em] text-gambit-text border-b border-rule pb-2.5">
          Elsewhere
        </p>
        <div className="mt-5">
          <ContactDirectLinks tone="badge" channels={['linkedin', 'instagram']} />
        </div>
      </div>

      <CurvedPhoto
        src="/contact/desk-plants.jpg"
        clipId="contact-curve-bottom"
        minClass="min-h-[220px] sm:min-h-[260px]"
      />
    </aside>
  );
}
