import Link from 'next/link';

/** Shared end-of-page contact CTA — primary label locked to §7. */
export default function ContactCTA({
  headline = 'Find your move.',
  action = 'Find your move',
}: {
  headline?: string;
  action?: string;
}) {
  return (
    <section className="page-x py-5 md:py-6 max-w-container mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-t border-rule pt-5">
        <h2 className="font-sans font-bold text-h2 text-ink max-w-[20ch]">{headline}</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 self-start md:self-auto shrink-0 bg-ink text-open-board px-5 py-3 rounded-md font-sans font-semibold text-[14px] hover:bg-ink-hover transition-colors duration-fast ease-out min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          {action}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
