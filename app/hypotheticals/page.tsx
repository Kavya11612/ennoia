import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import HypotheticalsIndex from '@/components/HypotheticalsIndex';
import { projects } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Hypotheticals',
  description:
    'Self-initiated concept work for brands that do not exist. The brands are invented; the problems are not.',
};

export default function HypotheticalsPage() {
  return (
    <>
      <PageHeader
        kicker="Hypotheticals"
        title="Self-initiated work. Real problems, invented brands."
        standfirst="Every project here is built for a company that does not exist. We set the brief ourselves, do the category research a client would pay for, and hold the work to the same standard — without the metrics, quotes, or press mentions a real engagement would produce."
      />

      <section className="page-x py-5 max-w-container mx-auto">
        <p className="font-sans text-body-l text-ink max-w-standfirst">
          The working method is the same one we use for paying clients: read the category, find the
          position nobody else has claimed, then build naming, identity, and experience around it.
          What differs is what we can honestly say happened after — nothing, because nothing shipped
          to a real market.
        </p>
      </section>

      <Suspense fallback={null}>
        <HypotheticalsIndex projects={projects} />
      </Suspense>
    </>
  );
}
