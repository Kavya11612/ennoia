import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import Reveal from '@/components/Reveal';
import ContactCTA from '@/components/ContactCTA';
import { articles, getArticleBySlug, readingTime } from '@/lib/data/articles';

const SHOW_DATES = true;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.standfirst,
    openGraph: { title: article.title, description: article.standfirst, type: 'article' },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
  const date = new Date(article.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.standfirst,
    datePublished: article.date,
    author: { '@type': 'Person', name: article.author },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="page-x pt-7 pb-6 max-w-container mx-auto">
        <div className="max-w-prose flex flex-col gap-4">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] tracking-[0.04em] text-gambit-text leading-relaxed">
            <span>{article.category}</span>
            {SHOW_DATES && (
              <>
                <span className="text-rule" aria-hidden="true">
                  ·
                </span>
                <span>{date}</span>
              </>
            )}
            <span className="text-rule" aria-hidden="true">
              ·
            </span>
            <span>{readingTime(article.body)} min read</span>
          </p>
          <h1 className="font-sans font-bold text-h1 text-ink">{article.title}</h1>
          <p className="font-sans text-body-l text-ink">{article.standfirst}</p>
          <p className="font-mono text-meta tracking-[0.04em] text-gambit-text">
            By {article.author}
          </p>
        </div>
      </header>

      <Reveal as="article" className="page-x pb-8 max-w-container mx-auto">
        <div className="max-w-prose flex flex-col gap-5 font-sans text-body text-ink">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>

      {related.length > 0 && (
        <Reveal as="section" className="page-x py-5 max-w-container mx-auto border-t border-rule">
          <div className="max-w-prose">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} showDate={SHOW_DATES} />
            ))}
          </div>
        </Reveal>
      )}

      <Reveal>
        <ContactCTA
          headline="Working on a position of your own?"
          action="Find your move"
        />
      </Reveal>
    </>
  );
}
