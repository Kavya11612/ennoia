import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = { title: 'Terms of use' };

export default function TermsPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Terms of use" />
      <section className="page-x pb-6 max-w-container mx-auto">
        <div className="max-w-prose flex flex-col gap-5 font-sans text-body text-ink">
          <p>
            This page is a placeholder pending final copy from the studio (§14) and legal review.
          </p>
          <h2 className="font-sans font-semibold text-h3 text-ink mt-2">Hypothetical work</h2>
          <p>
            Projects under Hypotheticals are self-initiated concept work created by Ennoia. The
            brands shown do not exist. Nothing on those pages should be read as a claim about a
            real client relationship, outcome, or endorsement.
          </p>
          <h2 className="font-sans font-semibold text-h3 text-ink mt-2">Intellectual property</h2>
          <p>
            All content on this site, including identity work shown under Hypotheticals, is the
            property of Ennoia Branding Private Limited unless otherwise credited.
          </p>
        </div>
      </section>
    </>
  );
}
