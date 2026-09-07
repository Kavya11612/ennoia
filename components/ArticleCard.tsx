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
  return new Date(iso)
    .toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    .toUpperCase();
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
          <p className="font-mono text-meta uppercase tracking-[0.12em] text-gambit-text">
            {article.category}
            {showDate && ` · ${dateShort}`} · {mins} min read
          </p>
          <h3 className="font-sans font-semibold text-h3 text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out">
            {article.title}
          </h3>
          <p className="font-sans text-body text-ink">{article.standfirst}</p>
        </div>
      </Link>
    );
  }

  const cover = coverBySlug[article.slug];
  const meta = [
    article.category.toUpperCase(),
    showDate ? formatDate(article.date) : null,
    `${mins} MIN READ`,
  ]
    .filter(Boolean)
    .join(' · ');

  const media = cover ? (
    <div className="relative w-full sm:w-[140px] md:w-[160px] aspect-[5/4] shrink-0 overflow-hidden rounded-md bg-landing-stone">
      <Image src={cover} alt="" fill sizes="160px" className="object-cover object-center" />
    </div>
  ) : (
    <div className="w-full sm:w-[140px] md:w-[160px] aspect-[5/4] shrink-0 rounded-md bg-landing-stone/60" />
  );

  const copy = (
    <div className="flex flex-1 flex-col gap-2 min-w-0 py-0.5">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gambit-text">{meta}</p>
      <h3 className="font-sans font-semibold text-[1.15rem] md:text-[1.25rem] leading-snug text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out text-balance">
        {article.title}
      </h3>
      <p className="font-sans text-[0.9rem] leading-relaxed text-gambit-text line-clamp-2 md:line-clamp-3">
        {article.standfirst}
      </p>
      <span className="mt-1 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
        Read the article
        <span className="h-px w-10 md:w-14 bg-ink/50" aria-hidden="true" />
        <span aria-hidden="true">→</span>
      </span>
    </div>
  );

  return (
    <Link
      href={`/notions/${article.slug}`}
      className="group flex flex-col sm:flex-row sm:items-center gap-4 md:gap-5 rounded-lg bg-card/80 border border-rule/70 px-3.5 py-3.5 md:px-4 md:py-4 transition-colors duration-fast ease-out hover:border-emboss/40"
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
