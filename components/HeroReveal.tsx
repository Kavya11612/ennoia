'use client';

import type { ReactNode, ElementType } from 'react';

interface HeroRevealProps {
  children: ReactNode;
  as?: ElementType;
  delayMs?: number;
  className?: string;
}

/**
 * Hero content — always visible. Delays kept for API compatibility but
 * never hide content (blank homepage bug).
 */
export default function HeroReveal({
  children,
  as: Tag = 'div',
  className = '',
}: HeroRevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return <Component className={className}>{children}</Component>;
}
