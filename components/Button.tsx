import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'filled' | 'secondary' | 'text';
  className?: string;
}

const base =
  'inline-flex items-center gap-2 font-sans font-semibold text-[14px] transition-colors duration-fast ease-out min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2';

const variants: Record<string, string> = {
  filled: 'bg-ink text-open-board px-5 py-3 rounded-md hover:bg-ink-hover',
  secondary: 'bg-transparent text-ink border border-rule px-5 py-3 rounded-md hover:border-ink',
  text: 'text-emboss-link underline decoration-1 underline-offset-[3px] decoration-emboss-link/40 hover:decoration-emboss-link',
};

export default function Button({ href, children, variant = 'filled', className = '' }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
