import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SectionKicker from '@/components/SectionKicker';
import ContactForm from '@/components/ContactForm';
import ContactDirectLinks from '@/components/ContactDirectLinks';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us what you are trying to solve. We read every enquiry ourselves.',
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const sent = searchParams?.sent === '1';
  const errors: Record<string, string> = {};
  for (const key of ['name', 'email', 'problem', 'consent', 'form'] as const) {
    const value = searchParams?.[`e_${key}`];
    if (typeof value === 'string' && value) errors[key] = value;
  }
  if (searchParams?.error === '1' && Object.keys(errors).length === 0) {
    errors.form = 'Please check the form and try again.';
  }

  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Tell us what you're trying to solve."
        standfirst="Not what you think you need built — the actual problem underneath it. That is the only field on this form we cannot work without."
      />

      <section className="page-x pt-0 pb-6 max-w-container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-6 items-start">
          <div className="xl:col-span-7 min-w-0 w-full relative z-10">
            <ContactForm sent={sent} errors={errors} />
          </div>

          <aside className="xl:col-span-5 min-w-0 w-full max-w-prose xl:max-w-none flex flex-col gap-5 relative z-0">
            <div className="min-w-0">
              <SectionKicker>Direct</SectionKicker>
              <div className="mt-4">
                <ContactDirectLinks />
              </div>
            </div>

            <div className="min-w-0">
              <SectionKicker>What happens next</SectionKicker>
              <ol className="mt-4 flex flex-col gap-3 font-sans text-body text-ink">
                <li className="break-words">
                  <strong className="font-semibold">1.</strong> We read your note ourselves — no
                  form routing, no account manager.
                </li>
                <li className="break-words">
                  <strong className="font-semibold">2.</strong> If it&rsquo;s a fit, we reply within
                  three working days with next steps.
                </li>
                <li className="break-words">
                  <strong className="font-semibold">3.</strong> If it&rsquo;s not, we&rsquo;ll tell
                  you that too, and why, where we can.
                </li>
              </ol>
            </div>

            <div className="min-w-0">
              <SectionKicker>Fit</SectionKicker>
              <div className="mt-4 flex flex-col gap-3 font-sans text-body text-ink">
                <p className="break-words">
                  <strong className="font-semibold">We take on:</strong> founders who need a
                  position before a logo, and are willing to sit through the category research to
                  get there.
                </p>
                <p className="break-words">
                  <strong className="font-semibold">We don&rsquo;t take on:</strong> price shoppers,
                  one-off logo seekers, or anyone unwilling to engage with strategy — including
                  briefs where the name is already decided and only needs designing.
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <SectionKicker>Studio</SectionKicker>
              <p className="mt-4 font-sans text-body text-ink break-words">{site.city}</p>
            </div>

            <div className="min-w-0">
              <SectionKicker>Elsewhere</SectionKicker>
              <div className="mt-4">
                <ContactDirectLinks channels={['linkedin', 'instagram']} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
