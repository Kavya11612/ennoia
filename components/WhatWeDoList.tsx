'use client';

import { useEffect, useRef } from 'react';
import type { Practice } from '@/lib/data/types';

/**
 * Studio S2 — expanded practices accordion.
 * Native <details> so open/close works without controlled React state.
 * Home H4 uses `HomePractices` instead (one-liners only per §9.1).
 */
export default function WhatWeDoList({ practices }: { practices: Practice[] }) {
  const firstRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (firstRef.current) firstRef.current.open = true;
  }, []);

  return (
    <ul className="flex flex-col border-t border-rule">
      {practices.map((practice, i) => {
        const panelId = `practice-${practice.slug}`;
        return (
          <li key={practice.slug} className="border-b border-rule">
            <details
              ref={i === 0 ? firstRef : undefined}
              name="studio-what-we-do"
              className="group"
            >
              <summary
                aria-controls={panelId}
                className="w-full grid grid-cols-[3rem,1fr,auto] md:grid-cols-[4rem,1fr,auto] gap-4 py-4 text-left min-h-[44px] items-baseline cursor-pointer list-none [&::-webkit-details-marker]:hidden"
              >
                <span className="font-mono text-[13px] text-gambit-text tabular-nums">
                  0{i + 1}
                </span>
                <span className="min-w-0 font-sans font-semibold text-h3 text-ink/80 group-open:text-ink transition-colors duration-fast ease-out">
                  {practice.name}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-[20px] text-gambit-text shrink-0 leading-none transition-transform duration-base ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div
                id={panelId}
                className="grid grid-cols-[3rem,1fr] md:grid-cols-[4rem,1fr] gap-4 pb-5"
              >
                <div className="col-start-2 min-w-0 flex flex-col gap-3">
                  <p className="font-sans text-body text-ink break-words">
                    {practice.description}
                  </p>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-meta uppercase tracking-[0.1em] text-gambit-text">
                    {practice.services.map((service, idx) => (
                      <span key={service} className="inline-flex items-baseline gap-3 min-w-0">
                        {idx > 0 && (
                          <span aria-hidden="true" className="select-none">
                            ·
                          </span>
                        )}
                        <span className="break-words">{service}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          </li>
        );
      })}
    </ul>
  );
}
