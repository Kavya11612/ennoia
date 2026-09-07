import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import DisclosureBanner from '@/components/DisclosureBanner';
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

function Section({ children }: { children: React.ReactNode }) {
  return (
    <Reveal as="section" className="page-x py-5 md:py-6 max-w-container mx-auto">
      <div className="max-w-prose">
        <div className="flex flex-col gap-4 font-sans text-body text-ink">{children}</div>
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

      <Section>
        <p>{project.selfSetBrief}</p>
      </Section>

      <Section>
        {project.categoryResearch.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section>
        {project.findings.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section>
        <p>{project.direction}</p>
      </Section>

      <Reveal as="section" className="page-x py-5 md:py-6 max-w-container mx-auto">
        <div className="flex flex-col gap-4 max-w-prose font-sans text-body text-ink">
          {project.systemBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-prose md:max-w-none">
          {['bg-emboss', 'bg-landing-stone', 'bg-gambit'].map((bg, i) => (
            <div key={i} className={`aspect-[16/10] rounded-sm ${bg}`} />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="page-x py-5 md:py-6 max-w-container mx-auto">
        <div className="flex flex-col gap-4 max-w-prose font-sans text-body text-ink">
          {project.appliedBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-prose md:max-w-none">
          {['bg-clay', 'bg-card border border-rule', 'bg-emboss', 'bg-landing-stone'].map((bg, i) => (
            <div key={i} className={`aspect-[5/4] rounded-sm ${bg}`} />
          ))}
        </div>
      </Reveal>

      <Section>
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
          <p className="font-mono text-[14px] tracking-[0.06em] text-gambit-text">
            {project.scope.join(' · ')}
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="page-x py-7 md:py-8 max-w-container mx-auto border-t border-rule">
        <Link
          href={`/hypotheticals/${next.slug}`}
          className="group flex items-start sm:items-center justify-between gap-4 sm:gap-6 min-w-0"
        >
          <div className="min-w-0">
            <span className="font-mono text-meta tracking-[0.08em] text-gambit-text">
              Next hypothetical
            </span>
            <h2 className="mt-2 font-sans font-bold text-h2 text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out text-balance">
              {next.brandName}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="font-sans text-h1 text-ink shrink-0 leading-none pt-1 sm:pt-0"
          >
            →
          </span>
        </Link>
      </Reveal>
    </>
  );
}
