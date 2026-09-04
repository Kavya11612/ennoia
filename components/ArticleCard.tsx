import Link from 'next/link';
import type { Article } from '@/lib/data/types';
import { readingTime } from '@/lib/data/articles';

export default function ArticleCard({ article, showDate = true }: { article: Article; showDate?: boolean }) {
  const date = new Date(article.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link href={`/notions/${article.slug}`} className="group block py-5 border-b border-rule first:pt-0">
      <div className="flex flex-col gap-3 max-w-[68ch]">
        <p className="font-mono text-meta uppercase tracking-[0.12em] text-gambit-text">
          {article.category}
          {showDate && ` · ${date}`} · {readingTime(article.body)} min read
        </p>
        <h3 className="font-sans font-semibold text-h3 text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out">
          {article.title}
        </h3>
        <p className="font-sans text-body text-ink">{article.standfirst}</p>
      </div>
    </Link>
  );
}
