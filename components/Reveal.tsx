'use client';

import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: 0 | 60 | 120;
  className?: string;
}

/**
 * Optional scroll reveal. Content is always visible by default (SSR-safe).
 * Animation only engages after mount for below-fold nodes.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current as HTMLElement | null;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      setVisible(true);
      setAnimate(false);
      return;
    }

    // Below fold — enable hide-then-reveal once
    setVisible(false);
    setAnimate(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);

    const fallback = window.setTimeout(() => setVisible(true), 1000);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={`reveal ${animate ? 'js-animate' : ''} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
