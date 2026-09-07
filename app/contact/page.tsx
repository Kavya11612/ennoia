import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ContactCurveAside from '@/components/ContactCurveAside';

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
      <section className="page-x pt-7 pb-16 md:pb-20 max-w-container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-14 gap-x-12 xl:gap-14 items-start">
          <div className="xl:col-span-7 min-w-0">
            <h1 className="font-sans font-bold text-[1.75rem] md:text-h1 text-ink tracking-[-0.02em] text-balance max-w-[18ch]">
              Tell us what you&rsquo;re trying to solve.
            </h1>
            <p className="mt-4 font-sans text-body-l text-gambit-text max-w-standfirst">
              Not what you think you need built — the actual problem underneath it. That is the only
              field on this form we cannot work without.
            </p>

            <div className="mt-9 md:mt-10">
              <ContactForm sent={sent} errors={errors} />
            </div>
          </div>

          <div className="xl:col-span-5 border-t border-rule pt-10 xl:border-t-0 xl:pt-0">
            <ContactCurveAside />
          </div>
        </div>

        <p className="mt-16 md:mt-20 pt-8 pb-2 border-t border-rule font-mono text-[13px] md:text-sm tracking-[0.04em] text-gambit-text leading-relaxed">
          Better brands for a clearer tomorrow
        </p>
      </section>
    </>
  );
}
