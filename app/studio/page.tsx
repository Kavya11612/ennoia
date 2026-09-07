import type { Metadata } from 'next';
import StudioHero from '@/components/StudioHero';
import StudioPhilosophy from '@/components/StudioPhilosophy';
import SectionKicker from '@/components/SectionKicker';
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
        <SectionKicker>What we do</SectionKicker>
        <div className="mt-5">
          <WhatWeDoList practices={practices} />
        </div>
      </section>

      {/* S3 Five-stage methodology — Website PRD */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <SectionKicker>How we work</SectionKicker>
        <h2 className="mt-4 font-sans font-bold text-h2 text-ink max-w-[20ch] text-balance">
          From insight to impact.
        </h2>
        <p className="mt-3 font-sans text-body-l text-ink max-w-standfirst">
          Five stages. The named methodology is still in development — until it exists, this is the
          process as it actually runs.
        </p>
        <div className="mt-6">
          <ProcessStages />
        </div>
      </section>

      {/* S4 Engagement */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <SectionKicker>How we engage</SectionKicker>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagements.map((e) => (
            <div key={e.name} className="border-t border-rule pt-4 flex flex-col gap-3">
              <h3 className="font-sans font-semibold text-h3 text-ink">{e.name}</h3>
              <p className="font-sans text-body text-ink">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S6 Sectors — Industries we serve (mockup; no third-party studio mark) */}
      <StudioSectors />

      {/* S7 Entity */}
      <section className="page-x py-6 max-w-container mx-auto">
        <div className="border-t border-rule pt-5 flex flex-col gap-1 font-mono text-[12px] text-gambit-text">
          <p>Ennoia Branding Private Limited</p>
          <p>Registered office: Hyderabad, Telangana, India</p>
          <p>CIN: [TO BE SUPPLIED]</p>
          <p>GSTIN: [TO BE SUPPLIED]</p>
        </div>
      </section>

      {/* S8 CTA */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-t border-rule pt-6">
          <p className="font-sans text-h3 font-semibold text-ink max-w-[36ch]">
            If this sounds like how you want to build, let&rsquo;s talk.
          </p>
          <Button href="/contact" variant="filled">
            Find your move
          </Button>
        </div>
      </section>
    </>
  );
}
