import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/data/types';
import { readingTime } from '@/lib/data/articles';

const coverBySlug: Record<string, string> = {
  'the-name-is-not-the-strategy': '/notions/name-not-strategy.jpg',
  'reading-the-whole-board': '/notions/whole-board.jpg',
  'matte-not-chrome': '/notions/craft-card.jpg',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function ArticleMeta({
  category,
  date,
  mins,
  showDate,
}: {
  category: string;
  date: string;
  mins: number;
  showDate: boolean;
}) {
  const parts = [category, showDate ? date : null, `${mins} min read`].filter(Boolean) as string[];

  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] tracking-[0.04em] text-gambit-text leading-relaxed">
      {parts.map((part, i) => (
        <span key={`${part}-${i}`} className="inline-flex items-center gap-x-2">
          {i > 0 && (
            <span className="text-rule select-none" aria-hidden="true">
              ·
            </span>
          )}
          <span>{part}</span>
        </span>
      ))}
    </p>
  );
}

export default function ArticleCard({
  article,
  showDate = true,
  variant = 'list',
  imageSide = 'left',
}: {
  article: Article;
  showDate?: boolean;
  /** `list` = text-only (home / related). `card` = mockup media row (Notions index). */
  variant?: 'list' | 'card';
  imageSide?: 'left' | 'right';
}) {
  const dateShort = new Date(article.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const mins = readingTime(article.body);

  if (variant === 'list') {
    return (
      <Link href={`/notions/${article.slug}`} className="group block py-5 border-b border-rule first:pt-0">
        <div className="flex flex-col gap-3 max-w-[68ch]">
          <ArticleMeta
            category={article.category}
            date={dateShort}
            mins={mins}
            showDate={showDate}
          />
          <h3 className="font-sans font-semibold text-h3 text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out">
            {article.title}
          </h3>
          <p className="font-sans text-body text-ink">{article.standfirst}</p>
        </div>
      </Link>
    );
  }

  const cover = coverBySlug[article.slug];

  const media = cover ? (
    <div className="relative w-full sm:w-[140px] md:w-[160px] aspect-[5/4] shrink-0 overflow-hidden rounded-md bg-landing-stone">
      <Image src={cover} alt="" fill sizes="160px" className="object-cover object-center" />
    </div>
  ) : (
    <div className="w-full sm:w-[140px] md:w-[160px] aspect-[5/4] shrink-0 rounded-md bg-landing-stone/60" />
  );

  const copy = (
    <div className="flex flex-1 flex-col gap-2 min-w-0 py-0.5">
      <ArticleMeta
        category={article.category}
        date={formatDate(article.date)}
        mins={mins}
        showDate={showDate}
      />
      <h3 className="font-sans font-semibold text-[1.15rem] md:text-[1.25rem] leading-snug text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out text-balance">
        {article.title}
      </h3>
      <p className="font-sans text-[0.9rem] leading-relaxed text-gambit-text line-clamp-2 md:line-clamp-3">
        {article.standfirst}
      </p>
      <span className="mt-2 inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.04em] text-ink">
        Read the article
        <span className="h-px w-12 md:w-16 bg-ink/40" aria-hidden="true" />
        <span aria-hidden="true">→</span>
      </span>
    </div>
  );

  return (
    <Link
      href={`/notions/${article.slug}`}
      className="group flex flex-col sm:flex-row sm:items-center gap-5 md:gap-6 rounded-lg bg-card/80 border border-rule/70 px-4 py-4 md:px-5 md:py-5 transition-colors duration-fast ease-out hover:border-emboss/40"
    >
      {imageSide === 'left' ? (
        <>
          {media}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {media}
        </>
      )}
    </Link>
  );
}
