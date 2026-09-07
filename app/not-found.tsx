import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-x py-7 max-w-container mx-auto min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-[560px] flex flex-col gap-6">
        <h1 className="font-sans font-bold text-h1 text-ink">This page doesn&rsquo;t exist.</h1>
        <p className="font-sans text-body-l text-ink">
          It may have moved, or the link was wrong. Here&rsquo;s where to go instead.
        </p>
        <div className="flex gap-6">
          <Link href="/" className="font-sans font-semibold text-body text-emboss-link underline underline-offset-[3px] decoration-emboss-link/40 hover:decoration-emboss-link">
            Home
          </Link>
          <Link href="/notions" className="font-sans font-semibold text-body text-emboss-link underline underline-offset-[3px] decoration-emboss-link/40 hover:decoration-emboss-link">
            Notions
          </Link>
          <Link href="/hypotheticals" className="font-sans font-semibold text-body text-emboss-link underline underline-offset-[3px] decoration-emboss-link/40 hover:decoration-emboss-link">
            Hypotheticals
          </Link>
        </div>
      </div>
    </section>
  );
}
