import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SectionKicker from '@/components/SectionKicker';
import Button from '@/components/Button';
import WhatWeDoList from '@/components/WhatWeDoList';
import ProcessStages from '@/components/ProcessStages';
import { practices } from '@/lib/data/practices';
import { sectors } from '@/lib/data/sectors';

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
      <PageHeader
        kicker="Studio"
        title="A strategy-led branding studio for founders."
        standfirst="We partner with forward-thinking businesses to build meaningful brands that are rooted in purpose and designed to last — because we read the whole board before we move."
      />

      {/* S1 — Brandkit About Ennoia (exact) */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <SectionKicker>About Ennoia</SectionKicker>
        <div className="mt-5 max-w-standfirst flex flex-col gap-4 font-sans text-body-l text-ink">
          <p>
            Ennoia is a design and strategy studio that crafts brands with clarity, intention, and
            timelessness.
          </p>
          <p>
            We believe that a strong identity is more than how a brand looks — it&rsquo;s how it
            thinks, communicates, and creates impact.
          </p>
          <p>
            We partner with forward-thinking businesses to build meaningful brands that are rooted
            in purpose and designed to last.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px]">
          <div className="border-t border-rule pt-4">
            <p className="font-mono text-meta uppercase tracking-[0.16em] text-gambit-text">
              Who we are
            </p>
            <p className="mt-3 font-sans text-body text-ink">
              Designers.
              <br />
              Strategists.
              <br />
              Brand builders.
            </p>
          </div>
          <div className="border-t border-rule pt-4">
            <p className="font-mono text-meta uppercase tracking-[0.16em] text-gambit-text">
              What we do
            </p>
            <p className="mt-3 font-sans text-body text-ink">
              Brand strategy.
              <br />
              Visual identity.
              <br />
              Experience design.
            </p>
          </div>
          <div className="border-t border-rule pt-4">
            <p className="font-mono text-meta uppercase tracking-[0.16em] text-gambit-text">
              Why we do it
            </p>
            <p className="mt-3 font-sans text-body text-ink">
              To create clarity.
              <br />
              To inspire connection.
              <br />
              To build lasting value.
            </p>
          </div>
        </div>
      </section>

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
        <p className="mt-4 font-sans text-body-l text-ink max-w-standfirst">
          Five stages. The named methodology is still in development — until it exists, this is the
          process as it actually runs.
        </p>
        <div className="mt-5">
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

      {/* S6 Sectors */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <SectionKicker>Sectors</SectionKicker>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-5 max-w-[900px]">
          {sectors.map((sector) => (
            <li key={sector.slug} className="border-t border-rule pt-4">
              <h3 className="font-sans font-semibold text-h3 text-ink">{sector.name}</h3>
              <p className="mt-2 font-sans text-body text-ink">{sector.description}</p>
            </li>
          ))}
        </ul>
      </section>

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
