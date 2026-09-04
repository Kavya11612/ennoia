import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy policy' };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Privacy policy" />
      <section className="page-x pb-6 max-w-container mx-auto">
        <div className="max-w-prose flex flex-col gap-5 font-sans text-body text-ink">
          <p>
            This page is a placeholder pending final copy from the studio (§14). It is written to
            be consistent with the Digital Personal Data Protection Act, 2023 and should be
            replaced with counsel-reviewed language before launch.
          </p>
          <h2 className="font-sans font-semibold text-h3 text-ink mt-2">What we collect</h2>
          <p>
            Information submitted through the contact form — name, email, and anything you tell us
            about your enquiry — plus, where provided, company, phone or WhatsApp number, and
            answers to the optional fields on that form.
          </p>
          <h2 className="font-sans font-semibold text-h3 text-ink mt-2">How we use it</h2>
          <p>
            Solely to respond to your enquiry. We do not add enquiry data to a marketing list or
            any third-party tool without separate, explicit consent, and no third-party tracking
            fires before consent is given.
          </p>
          <h2 className="font-sans font-semibold text-h3 text-ink mt-2">Retention</h2>
          <p>
            [Retention period to be confirmed by the studio.] You may request erasure of your data
            at any time by writing to{' '}
            <a href={site.mailto} className="text-emboss-link underline underline-offset-[3px]">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
