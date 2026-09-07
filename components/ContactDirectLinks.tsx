import { site } from '@/lib/site';

function IconEmail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <path
        d="M7.5 3.75h3.2l1.1 4.1-2 1.2a12.5 12.5 0 005.15 5.15l1.2-2 4.1 1.1v3.2a1.5 1.5 0 01-1.5 1.5A15.75 15.75 0 016 5.25a1.5 1.5 0 011.5-1.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <path
        d="M12 3.5a8.5 8.5 0 00-7.3 12.85L4 20.5l4.3-.7A8.5 8.5 0 1012 3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .5-.2.6l-.5.4c-.1.1-.2.3-.1.5.3.6.9 1.2 1.5 1.5.2.1.4 0 .5-.1l.4-.5c.2-.2.4-.3.6-.2l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.6.1-1.5-.4-2.9-1.4-3.9-2.7-1-1.3-1.5-2.8-1.5-4.2 0-.6.2-1.1.5-1.4z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="8" r="0.9" fill="currentColor" />
      <path
        d="M11.5 16.5v-3.6c0-1.2.8-2 1.9-2 1.1 0 1.6.7 1.6 2v3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 10.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.75" cy="7.25" r="1" fill="currentColor" />
    </svg>
  );
}

type Channel = 'email' | 'whatsapp' | 'phone' | 'linkedin' | 'instagram';

/** Icon + label contact / social links. */
export default function ContactDirectLinks({
  tone = 'light',
  channels = ['email', 'whatsapp', 'phone'],
}: {
  tone?: 'light' | 'dark' | 'badge';
  channels?: Channel[];
}) {
  const items: Record<Channel, { href: string; label: string; value: string; Icon: typeof IconEmail }> = {
    email: { href: site.mailto, label: `Email ${site.email}`, value: site.email, Icon: IconEmail },
    whatsapp: {
      href: site.whatsapp,
      label: `WhatsApp ${site.phoneDisplay}`,
      value: site.phoneDisplay,
      Icon: IconWhatsApp,
    },
    phone: { href: site.tel, label: `Phone ${site.phoneDisplay}`, value: site.phoneDisplay, Icon: IconPhone },
    linkedin: { href: site.linkedin, label: 'LinkedIn', value: 'LinkedIn', Icon: IconLinkedIn },
    instagram: { href: site.instagram, label: 'Instagram', value: 'Instagram', Icon: IconInstagram },
  };

  if (tone === 'badge') {
    return (
      <ul className="flex flex-col gap-4">
        {channels.map((key) => {
          const item = items[key];
          return (
            <li key={key}>
              <a
                href={item.href}
                className="group flex items-center gap-5 font-sans text-[0.95rem] leading-snug text-ink break-all hover:text-emboss-link transition-colors duration-fast ease-out"
                aria-label={item.label}
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emboss text-open-board">
                  <item.Icon className="block h-3.5 w-3.5 shrink-0" />
                </span>
                <span className="min-w-0 underline underline-offset-[3px] decoration-emboss-link/40 group-hover:decoration-emboss-link">
                  {item.value}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  const dark = tone === 'dark';
  const row = dark
    ? 'group flex items-center gap-3 font-sans text-body-s text-open-board break-all hover:text-clay-on-ink transition-colors duration-fast ease-out'
    : 'group flex items-center gap-3 font-sans text-body text-ink break-all hover:text-emboss-link transition-colors duration-fast ease-out';
  const icon = dark
    ? 'w-5 h-5 shrink-0 text-landing-stone group-hover:text-clay-on-ink transition-colors duration-fast ease-out'
    : 'w-5 h-5 shrink-0 text-gambit-text group-hover:text-emboss-link transition-colors duration-fast ease-out';
  const valueClass = dark
    ? undefined
    : 'underline underline-offset-[3px] decoration-emboss-link/40 group-hover:decoration-emboss-link';

  return (
    <ul className="flex flex-col gap-3">
      {channels.map((key) => {
        const item = items[key];
        const underline = key === 'phone' ? undefined : valueClass;
        return (
          <li key={key}>
            <a href={item.href} className={row} aria-label={item.label}>
              <item.Icon className={icon} />
              <span className={underline}>{item.value}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
