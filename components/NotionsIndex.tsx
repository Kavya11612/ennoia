import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ArticleCard from '@/components/ArticleCard';
import ContactCTA from '@/components/ContactCTA';
import { articles } from '@/lib/data/articles';

const SHOW_DATES = true;
const PAGE_SIZE = 10;

const categories = Array.from(new Set(articles.map((a) => a.category))).sort();

const chipBase =
  'inline-flex items-center font-mono text-[12px] uppercase tracking-[0.16em] min-h-[44px] px-3 py-2 border transition-colors duration-fast ease-out';
const chipActive = 'border-ink text-ink bg-card';
const chipIdle = 'border-rule text-gambit-text hover:border-ink hover:text-ink';

function categorySlug(name: string) {
  return name.toLowerCase();
}

export default function NotionsIndex({
  category = 'all',
  page = 1,
}: {
  category?: string;
  page?: number;
}) {
  const active = category.toLowerCase();

  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const filtered =
    active === 'all'
      ? sorted
      : sorted.filter((a) => categorySlug(a.category) === active);

  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a.slug !== featured?.slug);
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const pageItems = rest.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const hrefFor = (cat: string, p = 1) => {
    const params = new URLSearchParams();
    if (cat !== 'all') params.set('category', cat);
    if (p > 1) params.set('page', String(p));
    const q = params.toString();
    return q ? `/notions?${q}` : '/notions';
  };

  return (
    <>
      <PageHeader
        kicker="Notions"
        title="Notions"
        standfirst="From ennoia — idea, concept, strategic thought — the root of the studio name. Writing on strategy, naming, and craft."
      />

      <section className="page-x pb-5 max-w-container mx-auto">
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by category">
          <Link
            href={hrefFor('all')}
            aria-current={active === 'all' ? 'page' : undefined}
            className={`${chipBase} ${active === 'all' ? chipActive : chipIdle}`}
          >
            All
          </Link>
          {categories.map((cat) => {
            const slug = categorySlug(cat);
            const isActive = active === slug;
            return (
              <Link
                key={cat}
                href={hrefFor(slug)}
                aria-current={isActive ? 'page' : undefined}
                className={`${chipBase} ${isActive ? chipActive : chipIdle}`}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </section>

      {featured ? (
        <section className="page-x py-4 max-w-container mx-auto">
          <div className="max-w-prose">
            <ArticleCard article={featured} showDate={SHOW_DATES} />
          </div>
        </section>
      ) : (
        <section className="page-x py-4 max-w-container mx-auto">
          <p className="font-sans text-body text-gambit-text">No notions in this category yet.</p>
        </section>
      )}

      {pageItems.length > 0 && (
        <section className="page-x py-4 pb-6 max-w-container mx-auto">
          <div className="max-w-prose">
            {pageItems.map((article) => (
              <ArticleCard key={article.slug} article={article} showDate={SHOW_DATES} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-5 flex items-center gap-4">
              {safePage > 1 ? (
                <Link
                  href={hrefFor(active, safePage - 1)}
                  className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink min-h-[44px] inline-flex items-center"
                >
                  Previous
                </Link>
              ) : (
                <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-gambit-text min-h-[44px] inline-flex items-center">
                  Previous
                </span>
              )}
              <span className="font-mono text-[12px] text-gambit-text tabular-nums">
                {safePage} / {totalPages}
              </span>
              {safePage < totalPages ? (
                <Link
                  href={hrefFor(active, safePage + 1)}
                  className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink min-h-[44px] inline-flex items-center"
                >
                  Next
                </Link>
              ) : (
                <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-gambit-text min-h-[44px] inline-flex items-center">
                  Next
                </span>
              )}
            </div>
          )}
        </section>
      )}

      <ContactCTA headline="Have a position that needs finding?" action="Find your move" />
    </>
  );
}
