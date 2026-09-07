import type { Metadata } from 'next';
import SectionKicker from '@/components/SectionKicker';
import ProjectBannerCard from '@/components/ProjectBannerCard';
import ArticleCard from '@/components/ArticleCard';
import Button from '@/components/Button';
import { projects } from '@/lib/data/projects';
import { practices } from '@/lib/data/practices';
import { sectors } from '@/lib/data/sectors';
import { articles } from '@/lib/data/articles';
import HomePractices from '@/components/HomePractices';
import ProcessStages from '@/components/ProcessStages';
import ContactCTA from '@/components/ContactCTA';
import HomeHero from '@/components/HomeHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Ennoia — Strategy-led branding for founders',
  description:
    'For founders who need a position, not just a logo, Ennoia is the strategy-led branding studio that finds the move competitors miss and builds the brand around it — because we read the whole board before we move.',
};

export default function HomePage() {
  const selected = [...projects].sort((a, b) => a.featuredOrder - b.featuredOrder).slice(0, 4);
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ennoia',
    url: 'https://ennoiabranding.com',
    logo: 'https://ennoiabranding.com/ennoia-mark.svg',
    description:
      'Ennoia is a strategy-led branding studio for founders, based in Hyderabad, India.',
    sameAs: [
      site.linkedin,
      site.instagram,
    ],
    email: site.email,
    telephone: '+91 6305206827',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* H1 Hero — split Brandkit composition */}
      <HomeHero />

      {/* H2 Positioning — locked Website PRD statement + Brandkit board language */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <div className="max-w-standfirst">
          <SectionKicker>Positioning</SectionKicker>
          <p className="mt-4 font-sans text-body-l text-ink">
            For founders who need a position, not just a logo, Ennoia is the strategy-led branding
            studio that finds the move competitors miss and builds the brand around it — because we
            read the whole board before we move.
          </p>
          <p className="mt-4 font-sans text-body text-ink">
            We don&rsquo;t follow the obvious path. We read the whole board, see what others miss,
            and make the move that changes the outcome.
          </p>
        </div>
      </section>

      {/* H3 Selected hypotheticals */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <SectionKicker>Selected hypotheticals</SectionKicker>
        <p className="mt-4 font-sans text-body-l text-ink max-w-standfirst">
          Self-initiated projects. The brands are invented; the problems are not.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-5">
          {selected.map((project, i) => (
            <ProjectBannerCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-6">
          <Button href="/hypotheticals" variant="secondary">
            All hypotheticals
          </Button>
        </div>
      </section>

      {/* H4 What we do */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <SectionKicker>What we do</SectionKicker>
        <div className="mt-5">
          <HomePractices practices={practices} />
        </div>
      </section>

      {/* H5 How we work */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <SectionKicker>How we work</SectionKicker>
        <h2 className="mt-4 font-sans font-bold text-h2 text-ink max-w-[20ch] text-balance">
          From insight to impact.
        </h2>
        <p className="mt-3 font-sans text-body-l text-ink max-w-standfirst">
          Five stages — from reading the category to applying the brand where customers actually meet
          it.
        </p>
        <div className="mt-6">
          <ProcessStages compact />
        </div>
        <div className="mt-5">
          <Button href="/studio" variant="text">
            More on our process
          </Button>
        </div>
      </section>

      {/* H6 Proof */}
      <section className="bg-ink py-7 md:py-8">
        <div className="page-x max-w-container mx-auto">
          <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-landing-stone">
            Proof
          </span>
          <h2 className="mt-4 font-sans font-bold text-h2 text-open-board max-w-[28ch]">
            We verify a name before you fall in love with it.
          </h2>
          <p className="mt-4 font-sans text-body-l text-landing-stone max-w-standfirst">
            Most studios hand over a shortlist and let the founder discover, weeks later, that the
            name is already trademarked in-class or the domain is gone. We screen trademark
            conflict, domain availability, and search collision before a name reaches you. In the
            Northfield hypothetical, that meant rejecting two strong candidates before they entered
            the shortlist — both functionally unregisterable in a crowded fintech class.
          </p>
          <div className="mt-5">
            <Button
              href="/hypotheticals/northfield"
              variant="text"
              className="!text-clay-on-ink !decoration-clay-on-ink/40 hover:!decoration-clay-on-ink"
            >
              Read the Northfield case
            </Button>
          </div>
        </div>
      </section>

      {/* H7 Sectors */}
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

      {/* H8 Writing */}
      <section className="page-x py-7 md:py-8 max-w-container mx-auto">
        <SectionKicker>Writing</SectionKicker>
        <div className="mt-5 max-w-prose">
          {recentArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-5">
          <Button href="/notions" variant="secondary">
            All notions
          </Button>
        </div>
      </section>

      {/* H9 Close */}
      <ContactCTA />
    </>
  );
}
