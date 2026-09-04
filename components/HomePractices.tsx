import Link from 'next/link';
import type { Practice } from '@/lib/data/types';

/** Home H4 — four practices, one line each → /studio (§9.1). */
export default function HomePractices({ practices }: { practices: Practice[] }) {
  return (
    <ul className="flex flex-col border-t border-rule max-w-[60ch]">
      {practices.map((practice, i) => (
        <li key={practice.slug} className="border-b border-rule">
          <Link
            href="/studio"
            className="grid grid-cols-[3rem,1fr] md:grid-cols-[4rem,1fr] gap-4 py-4 group"
          >
            <span className="font-mono text-[13px] text-gambit-text tabular-nums">0{i + 1}</span>
            <span className="flex flex-col gap-1 min-w-0">
              <span className="font-sans font-semibold text-h3 text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out">
                {practice.name}
              </span>
              <span className="font-sans text-body text-ink">{practice.oneLiner}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
