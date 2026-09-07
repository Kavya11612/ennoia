'use client';

import { useState } from 'react';
import type { Practice } from '@/lib/data/types';

/**
 * Studio S2 — interactive practice steps: rail + stacked panels.
 * One step expanded at a time. Home H4 uses `HomePractices` instead.
 */
export default function WhatWeDoList({ practices }: { practices: Practice[] }) {
  const [active, setActive] = useState(Math.max(0, practices.length - 1));

  return (
    <ol className="relative flex flex-col gap-2">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[2.25rem] sm:left-[2.5rem] top-4 bottom-4 w-px -translate-x-1/2 bg-rule"
      />

      {practices.map((practice, i) => {
        const n = String(i + 1).padStart(2, '0');
        const isActive = i === active;
        const panelId = `practice-panel-${practice.slug}`;
        const tabId = `practice-tab-${practice.slug}`;

        return (
          <li
            key={practice.slug}
            className="relative grid grid-cols-[3.25rem_1fr] sm:grid-cols-[3.75rem_1fr] gap-x-3 sm:gap-x-4 md:gap-x-5 items-start"
          >
            {/* Rail — number + node */}
            <div
              className={`relative z-[1] flex items-center justify-end gap-2 pr-1 ${
                isActive ? 'pt-5' : 'pt-3.5'
              }`}
            >
              <span
                className={`font-mono tabular-nums leading-none transition-[font-size,color,font-weight] duration-fast ease-out ${
                  isActive
                    ? 'text-[1.5rem] sm:text-[1.65rem] font-semibold text-ink'
                    : 'text-[11px] text-gambit-text'
                }`}
              >
                {n}
              </span>
              <span
                className={`shrink-0 rounded-full border transition-colors duration-fast ease-out ${
                  isActive
                    ? 'h-3 w-3 border-ink bg-ink'
                    : 'h-2 w-2 border-landing-stone bg-open-board'
                }`}
              />
            </div>

            {/* Panel */}
            {isActive ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={tabId}
                className="relative min-w-0 border border-rule bg-card rounded-md px-5 py-5 sm:px-6 sm:py-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-2 top-6 h-3 w-3 rotate-45 border-l border-b border-rule bg-card"
                />

                <h3
                  id={tabId}
                  className="font-sans font-semibold text-[1.25rem] sm:text-[1.4rem] md:text-[1.5rem] leading-snug tracking-[-0.015em] text-ink"
                >
                  <span className="font-mono text-[0.8em] text-gambit-text tabular-nums">
                    {n}
                  </span>
                  <span className="text-rule mx-2 font-normal" aria-hidden="true">
                    |
                  </span>
                  {practice.name}
                </h3>

                <p className="mt-2 font-sans text-[1.02rem] leading-snug text-emboss">
                  {practice.oneLiner}
                </p>
                <p className="mt-4 font-sans text-body text-ink leading-relaxed max-w-[58ch]">
                  {practice.description}
                </p>
                <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[12px] tracking-[0.04em] text-gambit-text">
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
            ) : (
              <button
                type="button"
                id={tabId}
                aria-expanded={false}
                aria-controls={panelId}
                onClick={() => setActive(i)}
                className="flex w-full min-w-0 items-center border border-rule bg-card px-4 py-3 text-left min-h-[44px] rounded-md transition-colors duration-fast ease-out hover:border-emboss/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                <span className="min-w-0 font-sans font-semibold text-[0.98rem] sm:text-[1.05rem] text-ink tracking-[-0.01em]">
                  <span className="font-mono text-[12px] text-gambit-text tabular-nums">
                    {n}
                  </span>
                  <span className="text-rule mx-2 font-normal" aria-hidden="true">
                    |
                  </span>
                  {practice.name}
                </span>
              </button>
            )}
          </li>
        );
      })}
    </ol>
  );
}
