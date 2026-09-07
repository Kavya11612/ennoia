import type { Metadata } from 'next';
import StudioHero from '@/components/StudioHero';
import StudioPhilosophy from '@/components/StudioPhilosophy';
import Button from '@/components/Button';
import WhatWeDoList from '@/components/WhatWeDoList';
import ProcessStages from '@/components/ProcessStages';
import StudioSectors from '@/components/StudioSectors';
import { practices } from '@/lib/data/practices';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Ennoia is a design and strategy studio that crafts brands with clarity, intention, and timelessness — based in Hyderabad.',
};

const engagements = [
  {
    name: 'Project',
    body: 'A defined scope — usually strategy plus identity, or identity plus experience — with a fixed brief and a fixed end date. Most first engagements start here.',
  },
  {
    name: 'Retainer',
    body: 'Ongoing strategic and design support for a brand already in motion — new categories, new products, or a system that needs to keep pace with the company.',
  },
  {
    name: 'Sprint',
    body: 'A short, focused engagement to answer one question — a position, a name, a single piece of the system — when the rest of the brand is already settled.',
  },
];

export default function StudioPage() {
  return (
    <>
      <StudioHero />

      {/* S1 — Philosophy (mockup layout; no third-party studio mark) */}
      <StudioPhilosophy />

      {/* S2 Practices */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <header className="max-w-[36rem] mb-7 md:mb-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-rule shrink-0" aria-hidden="true" />
            <p className="font-mono text-[13px] md:text-[14px] tracking-[0.04em] text-gambit-text">
              What we do
            </p>
          </div>
          <h2 className="mt-3 font-sans font-bold text-[1.75rem] md:text-[2rem] text-ink tracking-[-0.02em] text-balance leading-[1.15]">
            Four practices. One position.
          </h2>
          <p className="mt-2 font-sans text-body md:text-body-l leading-relaxed text-gambit-text">
            Strategy through experience — each step builds on the last.
          </p>
        </header>
        <WhatWeDoList practices={practices} />
      </section>

      {/* S3 Five-stage methodology — Website PRD */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <header className="max-w-[36rem]">
          <h2 className="font-sans font-bold text-[1.75rem] md:text-[2rem] text-ink text-balance tracking-[-0.02em] leading-[1.15]">
            From insight to impact.
          </h2>
          <p className="mt-3 font-sans text-body md:text-body-l text-gambit-text">
            Five stages. The named methodology is still in development — until it exists, this is the
            process as it actually runs.
          </p>
        </header>
        <div className="mt-6 md:mt-8">
          <ProcessStages />
        </div>
      </section>

      {/* S4 Engagement */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagements.map((e) => (
            <div key={e.name} className="border-t border-rule pt-4 flex flex-col gap-3">
              <h3 className="font-sans font-semibold text-h3 text-ink">{e.name}</h3>
              <p className="font-sans text-body text-ink">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S6 Sectors */}
      <StudioSectors />

      {/* S8 CTA */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-t border-rule pt-6">
          <p className="font-sans text-h3 font-semibold text-ink max-w-[36ch]">
            If this sounds like how you want to build, let&rsquo;s talk.
          </p>
          <Button href="/contact" variant="filled" className="self-start md:self-auto shrink-0">
            Find your move
          </Button>
        </div>
      </section>
    </>
  );
}
