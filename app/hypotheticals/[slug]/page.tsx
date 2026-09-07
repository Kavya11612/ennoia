import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import DisclosureBanner from '@/components/DisclosureBanner';
import SectionKicker from '@/components/SectionKicker';
import Reveal from '@/components/Reveal';
import ProjectDetailBanner from '@/components/ProjectDetailBanner';
import { projects, getProjectBySlug } from '@/lib/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: { title: project.title, description: project.oneLiner },
  };
}

function Section({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal as="section" className="page-x py-5 md:py-6 max-w-container mx-auto">
      <div className="max-w-prose">
        <SectionKicker>{kicker}</SectionKicker>
        <div className="mt-4 flex flex-col gap-4 font-sans text-body text-ink">{children}</div>
      </div>
    </Reveal>
  );
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const isHypothetical = project.projectType === 'hypothetical';
  const sorted = [...projects].sort((a, b) => a.featuredOrder - b.featuredOrder);
  const currentIndex = sorted.findIndex((p) => p.slug === project.slug);
  const next = sorted[(currentIndex + 1) % sorted.length];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.oneLiner,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {isHypothetical && <DisclosureBanner brandName={project.brandName} />}

      <section className="page-x pt-5 md:pt-6 pb-5 max-w-container mx-auto">
        <ProjectDetailBanner project={project} index={currentIndex >= 0 ? currentIndex : 0} />
      </section>

      <Section kicker="The brief we set ourselves">
        <p>{project.selfSetBrief}</p>
      </Section>

      <Section kicker="The category">
        {project.categoryResearch.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section kicker="What we found">
        {project.findings.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section kicker="The direction">
        <p>{project.direction}</p>
      </Section>

      <Reveal as="section" className="page-x py-5 md:py-6 max-w-container mx-auto">
        <div className="max-w-prose">
          <SectionKicker>The system</SectionKicker>
        </div>
        <div className="mt-4 flex flex-col gap-4 max-w-prose font-sans text-body text-ink">
          {project.systemBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
          {['bg-emboss', 'bg-landing-stone', 'bg-gambit'].map((bg, i) => (
            <div key={i} className={`aspect-[16/10] ${bg}`} />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="page-x py-5 md:py-6 max-w-container mx-auto">
        <div className="max-w-prose">
          <SectionKicker>Applied</SectionKicker>
        </div>
        <div className="mt-4 flex flex-col gap-4 max-w-prose font-sans text-body text-ink">
          {project.appliedBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {['bg-clay', 'bg-card border border-rule', 'bg-emboss', 'bg-landing-stone'].map((bg, i) => (
            <div key={i} className={`aspect-[5/4] ${bg}`} />
          ))}
        </div>
      </Reveal>

      <Section kicker="What we'd measure">
        <ul className="flex flex-col gap-3">
          {project.whatWeWouldMeasure.map((p, i) => (
            <li key={i} className="pl-5 relative">
              <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-emboss" />
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Reveal as="section" className="page-x py-5 md:py-6 max-w-container mx-auto">
        <div className="max-w-prose">
          <SectionKicker>Scope</SectionKicker>
          <p className="mt-4 font-mono text-[14px] uppercase tracking-[0.1em] text-gambit-text">
            {project.scope.join(' · ')}
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="page-x py-7 md:py-5 max-w-container mx-auto border-t border-rule">
        <Link href={`/hypotheticals/${next.slug}`} className="group flex items-center justify-between gap-6">
          <div>
            <span className="font-mono text-meta uppercase tracking-[0.16em] text-gambit-text">
              Next hypothetical
            </span>
            <h2 className="mt-2 font-sans font-bold text-h2 text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out">
              {next.brandName}
            </h2>
          </div>
          <span aria-hidden="true" className="font-sans text-h1 text-ink">
            →
          </span>
        </Link>
      </Reveal>
    </>
  );
}
