import type { ReactNode } from 'react';
import { site } from '@/lib/site';

const helpOptions = [
  'Brand strategy',
  'Naming & verification',
  'Visual identity',
  'Experience design',
  'Not sure yet',
];
const stageOptions = ['Pre-launch', 'Raised, early-stage', 'Scaling', 'Established'];
const budgetOptions = ['Under ₹3L', '₹3L–₹8L', '₹8L+', 'Prefer not to say'];
const sourceOptions = ['LinkedIn', 'Instagram', 'Referral', 'Search', 'Other'];

const inputClasses =
  'w-full min-h-[48px] bg-card border border-rule rounded-sm px-3 py-3 font-sans text-[16px] text-ink placeholder:text-gambit-text/70 caret-ink focus:border-ink focus:ring-2 focus:ring-ink focus:ring-offset-2 outline-none transition-colors duration-fast ease-out';

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 relative z-10">
      <label htmlFor={htmlFor} className="font-mono text-[12px] uppercase tracking-[0.1em] text-gambit-text">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="font-sans text-[14px] text-error">
          {error}
        </p>
      )}
    </div>
  );
}

/** Contact form — mockup fields. Page owns the “Tell us…” headline (once). */
export default function ContactForm({
  sent = false,
  errors = {},
}: {
  sent?: boolean;
  errors?: Record<string, string>;
}) {
  if (sent) {
    return (
      <div role="status" aria-live="polite" className="bg-card border border-rule rounded-md p-7">
        <p className="font-sans font-semibold text-h3 text-ink mb-2">Received.</p>
        <p className="font-sans text-body text-ink max-w-prose">
          We read every enquiry ourselves. Expect a reply within three working days.
        </p>
      </div>
    );
  }

  return (
    <form method="POST" action="/api/contact" className="relative z-10 flex flex-col gap-6">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="fax_number">Fax</label>
        <input id="fax_number" type="text" name="fax_number" tabIndex={-1} autoComplete="off" />
      </div>

      {(errors.form || errors.name || errors.email || errors.problem || errors.consent) && (
        <div
          role="alert"
          className="bg-card border border-error rounded-sm px-4 py-3 font-sans text-[14px] text-error"
        >
          {errors.form ?? 'Please fix the highlighted fields and try again.'}
        </div>
      )}

      <Field label="Name *" htmlFor="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className={inputClasses}
        />
      </Field>

      <Field label="Email *" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className={inputClasses}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company / brand" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or brand"
            className={inputClasses}
          />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="text"
            inputMode="tel"
            autoComplete="tel"
            placeholder={site.phoneDisplay}
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="What are you trying to solve? *" htmlFor="problem" error={errors.problem}>
        <textarea
          id="problem"
          name="problem"
          rows={5}
          required
          placeholder="Tell us about your goals, challenges, or the problem you’re facing…"
          className={inputClasses}
        />
      </Field>

      <fieldset className="flex flex-col gap-3">
        <legend className="font-mono text-[12px] uppercase tracking-[0.1em] text-gambit-text">
          What kind of help?
        </legend>
        <div className="flex flex-col gap-2.5">
          {helpOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-3 font-sans text-body text-ink cursor-pointer">
              <input type="checkbox" name="help" value={opt} className="h-4 w-4 accent-ink" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Stage" htmlFor="stage">
          <select id="stage" name="stage" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {stageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Indicative budget" htmlFor="budget">
          <select id="budget" name="budget" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="How did you find us?" htmlFor="source">
        <select id="source" name="source" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {sourceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <div className="flex flex-col gap-2 relative z-10">
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" value="on" required className="mt-1 h-4 w-4 accent-ink" />
          <span className="font-sans text-body-s text-ink">
            I agree that Ennoia can use this information to respond to my enquiry. See our{' '}
            <a href="/privacy" className="text-emboss-link underline underline-offset-[3px]">
              privacy policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="font-sans text-[14px] text-error">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          className="self-start inline-flex items-center gap-2 bg-ink text-open-board px-6 py-3 rounded-md font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-ink-hover transition-colors duration-fast ease-out min-h-[44px]"
        >
          Send message
          <span aria-hidden="true">→</span>
        </button>
        <p className="font-sans text-[0.875rem] text-gambit-text max-w-[32ch]">
          We&rsquo;ll get back to you within 1–2 working days. No spam. Just a meaningful conversation.
        </p>
      </div>
    </form>
  );
}
