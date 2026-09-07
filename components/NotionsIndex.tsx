import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/data/articles';

const SHOW_DATES = true;
const PAGE_SIZE = 10;

const categories = Array.from(new Set(articles.map((a) => a.category))).sort();

const chipBase =
  'inline-flex items-center font-mono text-[11px] tracking-[0.04em] min-h-[40px] px-4 py-2 rounded-full transition-colors duration-fast ease-out';
const chipActive = 'bg-ink text-open-board';
const chipIdle = 'bg-landing-stone/55 text-ink hover:bg-landing-stone';

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
    active === 'all' ? sorted : sorted.filter((a) => categorySlug(a.category) === active);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const pageItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const hrefFor = (cat: string, p = 1) => {
    const params = new URLSearchParams();
    if (cat !== 'all') params.set('category', cat);
    if (p > 1) params.set('page', String(p));
    const q = params.toString();
    return q ? `/notions?${q}` : '/notions';
  };

  return (
    <>
      <header className="page-x pt-6 pb-4 max-w-container mx-auto">
        <h1 className="font-sans font-bold text-[2rem] md:text-h1 text-ink tracking-[-0.02em]">
          Notions
        </h1>
        <p className="mt-3 font-sans text-body-l text-gambit-text max-w-standfirst">
          From ennoia — idea, concept, strategic thought — the root of the studio name. Writing on
          strategy, naming, and craft.
        </p>

        <div
          className="mt-5 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by category"
        >
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
      </header>

      <section className="page-x pb-6 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 lg:items-start overflow-visible">
          <div className="lg:col-span-7 flex flex-col gap-5 md:gap-6">
            {pageItems.length === 0 ? (
              <p className="font-sans text-body text-gambit-text">No notions in this category yet.</p>
            ) : (
              pageItems.map((article, i) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  showDate={SHOW_DATES}
                  variant="card"
                  imageSide={i % 2 === 0 ? 'left' : 'right'}
                />
              ))
            )}

            {totalPages > 1 && (
              <div className="mt-2 flex items-center gap-4">
                {safePage > 1 ? (
                  <Link
                    href={hrefFor(active, safePage - 1)}
                    className="font-mono text-[12px] tracking-[0.04em] text-ink min-h-[44px] inline-flex items-center"
                  >
                    Previous
                  </Link>
                ) : (
                  <span className="font-mono text-[12px] tracking-[0.04em] text-gambit-text min-h-[44px] inline-flex items-center">
                    Previous
                  </span>
                )}
                <span className="font-mono text-[12px] text-gambit-text tabular-nums">
                  {safePage} / {totalPages}
                </span>
                {safePage < totalPages ? (
                  <Link
                    href={hrefFor(active, safePage + 1)}
                    className="font-mono text-[12px] tracking-[0.04em] text-ink min-h-[44px] inline-flex items-center"
                  >
                    Next
                  </Link>
                ) : (
                  <span className="font-mono text-[12px] tracking-[0.04em] text-gambit-text min-h-[44px] inline-flex items-center">
                    Next
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Right visual — HD aside; padding so circle + badge never clip */}
          <aside className="hidden lg:flex lg:col-span-5 relative min-h-[480px] items-center justify-center overflow-visible px-4 py-8">
            <p className="absolute left-0 top-4 z-20 font-sans text-[1.25rem] italic text-emboss max-w-[12ch] leading-snug">
              Ideas shape what&rsquo;s next.
            </p>

            <div className="relative h-[320px] w-[320px] shrink-0">
              <div className="absolute inset-0 overflow-hidden rounded-full border border-rule bg-open-board shadow-[0_12px_40px_rgba(67,62,63,0.08)]">
                <Image
                  src="/notions/aside-visual.jpg"
                  alt=""
                  fill
                  sizes="320px"
                  quality={95}
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Badge sits outside the clip — fully visible */}
              <div className="absolute -right-3 bottom-8 z-10 flex h-[6.5rem] w-[6.5rem] items-center justify-center rounded-full bg-emboss px-3 text-center shadow-sm">
                <p className="font-mono text-[9px] tracking-[0.04em] text-open-board leading-relaxed">
                  Thoughts
                  <br />
                  Ideas
                  <br />
                  Perspective
                </p>
              </div>
            </div>

            <p className="absolute bottom-2 right-2 max-w-[11ch] font-mono text-[10px] tracking-[0.04em] text-gambit-text text-right">
              A more meaningful tomorrow
            </p>
          </aside>
        </div>
      </section>

      {/* Bottom CTA — mockup */}
      <section className="page-x py-8 md:py-10 max-w-container mx-auto border-t border-rule">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:items-end">
          <div className="md:col-span-6 flex flex-col gap-4">
            <span className="block h-px w-10 bg-emboss" aria-hidden="true" />
            <h2 className="font-sans font-bold text-[1.5rem] md:text-h2 text-ink max-w-[18ch] text-balance">
              Have a position your brand is finding?
            </h2>
            <p className="font-sans text-body text-gambit-text max-w-[42ch]">
              We help founders turn ideas into clear, differentiated brands. Let&rsquo;s talk about
              what&rsquo;s next.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start bg-ink text-open-board px-5 py-3 rounded-md font-mono text-[12px] tracking-[0.04em] hover:bg-ink-hover transition-colors duration-fast ease-out min-h-[44px]"
            >
              Get in touch
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="md:col-span-6 md:pb-2">
            <p className="font-sans text-[1.5rem] md:text-[1.85rem] italic text-emboss leading-snug max-w-[16ch] md:ml-auto md:text-right">
              Better brands for a clearer tomorrow.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
