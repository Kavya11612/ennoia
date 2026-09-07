const stages = [
  {
    category: 'Research',
    title: 'Read the board',
    oneLiner: 'Category research — direct, adjacent, and every claim already made.',
    body: 'Category research — direct competitors, adjacent categories, and every claim already made. We map what exists before we propose what should.',
  },
  {
    category: 'Strategy',
    title: 'Find the move',
    oneLiner: 'The position a competitor cannot copy without contradicting themselves.',
    body: 'The position: the one claim this brand can own that a competitor cannot copy without contradicting themselves.',
  },
  {
    category: 'Validation',
    title: 'Name and verify',
    oneLiner: 'Trademark, domain, and search collision screened before attachment.',
    body: 'Naming screened for trademark conflict, domain availability, and search collision before a founder gets attached to it.',
  },
  {
    category: 'Build',
    title: 'Build the system',
    oneLiner: 'Mark, type, colour, and the rules that govern them.',
    body: 'Mark, typography, colour, and the rules that govern them — a system with edge cases already solved.',
  },
  {
    category: 'Execution',
    title: 'Apply it',
    oneLiner: 'The strategy carried into the surfaces a customer actually touches.',
    body: 'The strategy carried into the surfaces a customer actually touches, held to the same discipline as the identity that introduced it.',
  },
];

/** Flat Brandkit compositions — no stock 3D icons. */
function StageVisual({ index }: { index: number }) {
  const panels = [
    // Research — stacked sheets + lens
    <div key="0" className="relative h-full w-full">
      <div className="absolute inset-[18%] rounded-md bg-landing-stone/80" />
      <div className="absolute left-[22%] top-[24%] h-[42%] w-[48%] bg-card border border-rule" />
      <div className="absolute left-[28%] top-[30%] h-[42%] w-[48%] bg-card border border-rule" />
      <div className="absolute right-[18%] bottom-[18%] h-[38%] w-[38%] rounded-full border-[3px] border-ink" />
      <div className="absolute right-[12%] bottom-[12%] h-[14%] w-[3px] rotate-45 bg-ink origin-top-left" />
    </div>,
    // Strategy — paper plane path
    <div key="1" className="relative h-full w-full">
      <div className="absolute inset-[20%] rounded-full bg-clay/50" />
      <svg className="absolute inset-[22%] text-ink" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M18 72 C40 55, 55 40, 78 28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M70 22 L86 30 L72 40 L70 22 Z" fill="currentColor" />
      </svg>
    </div>,
    // Validation — shield check
    <div key="2" className="relative h-full w-full">
      <div className="absolute inset-[18%] rounded-full bg-landing-stone/70" />
      <div className="absolute left-1/2 top-[20%] h-[58%] w-[42%] -translate-x-1/2 bg-card border border-rule [clip-path:polygon(50%_0%,100%_18%,100%_70%,50%_100%,0%_70%,0%_18%)]" />
      <div className="absolute left-1/2 top-[42%] h-3 w-6 -translate-x-1/2 border-b-2 border-l-2 border-ink rotate-[-45deg]" />
    </div>,
    // Build — type + swatches
    <div key="3" className="relative h-full w-full">
      <div className="absolute inset-[16%] bg-card border border-rule rounded-md p-3 flex flex-col gap-2">
        <div className="flex gap-1.5">
          <span className="h-4 w-4 bg-clay" />
          <span className="h-4 w-4 bg-emboss" />
          <span className="h-4 w-4 bg-ink" />
          <span className="h-4 w-4 bg-landing-stone" />
        </div>
        <span className="font-sans font-semibold text-[28px] leading-none text-ink">Aa</span>
        <div className="mt-auto space-y-1">
          <div className="h-1 w-full bg-rule" />
          <div className="h-1 w-4/5 bg-rule" />
          <div className="h-1 w-3/5 bg-rule" />
        </div>
      </div>
    </div>,
    // Execution — surface frame
    <div key="4" className="relative h-full w-full">
      <div className="absolute inset-[18%] rounded-full bg-clay/40" />
      <div className="absolute left-1/2 top-[16%] h-[68%] w-[36%] -translate-x-1/2 rounded-md border-2 border-ink bg-card p-2 flex flex-col gap-1.5">
        <div className="h-1.5 w-1/3 mx-auto rounded-full bg-rule" />
        <div className="flex-1 bg-landing-stone/60" />
        <div className="h-2 w-full bg-rule" />
        <div className="h-2 w-2/3 bg-rule" />
      </div>
    </div>,
  ];

  return (
    <div className="relative aspect-square w-full max-w-[160px] md:max-w-[180px] mx-auto md:mx-0 overflow-hidden bg-open-board">
      {panels[index % panels.length]}
    </div>
  );
}

/**
 * @param compact — Home: shorter bodies; Studio: full bodies.
 * Timeline + stage cards (mockup layout, Brandkit surfaces).
 */
export default function ProcessStages({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative flex flex-col gap-5">
      {stages.map((stage, i) => {
        const n = String(i + 1).padStart(2, '0');
        const dot = i % 2 === 0 ? 'bg-ink' : 'bg-clay';
        const isLast = i === stages.length - 1;
        return (
          <li
            key={stage.title}
            className="relative grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.5rem_1fr] gap-3 md:gap-5 items-stretch"
          >
            {/* Number clear of the line; line starts at the dot */}
            <div className="relative flex flex-col items-center pt-5">
              <span className="shrink-0 font-sans font-semibold text-h3 text-ink tabular-nums leading-none">
                {n}
              </span>
              <span
                className={`relative z-[1] mt-3 hidden h-2 w-2 shrink-0 rounded-full sm:block ${dot}`}
                aria-hidden="true"
              />
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="mt-0 hidden w-px flex-1 bg-rule sm:block"
                  style={{ marginBottom: '-24px' }}
                />
              )}
            </div>

            <div className="bg-card border border-rule rounded-md p-5 md:p-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 md:gap-6 items-center">
              <div className="flex flex-col gap-2 min-w-0">
                <span className="font-mono text-meta uppercase tracking-[0.16em] text-emboss">
                  {stage.category}
                </span>
                <h3 className="font-sans font-semibold text-h3 text-ink">{stage.title}</h3>
                <p className="font-sans text-body text-ink max-w-[48ch]">
                  {compact ? stage.oneLiner : stage.body}
                </p>
              </div>
              <StageVisual index={i} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
