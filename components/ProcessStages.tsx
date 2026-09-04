const stages = [
  {
    title: 'Read the board',
    oneLiner: 'Category research — direct, adjacent, and every claim already made.',
    body: 'Category research — direct competitors, adjacent categories, and every claim already made. We map what exists before we propose what should.',
  },
  {
    title: 'Find the move',
    oneLiner: 'The position a competitor cannot copy without contradicting themselves.',
    body: 'The position: the one claim this brand can own that a competitor cannot copy without contradicting themselves.',
  },
  {
    title: 'Name and verify',
    oneLiner: 'Trademark, domain, and search collision screened before attachment.',
    body: 'Naming screened for trademark conflict, domain availability, and search collision before a founder gets attached to it.',
  },
  {
    title: 'Build the system',
    oneLiner: 'Mark, type, colour, and the rules that govern them.',
    body: 'Mark, typography, colour, and the rules that govern them — a system with edge cases already solved.',
  },
  {
    title: 'Apply it',
    oneLiner: 'The strategy carried into the surfaces a customer actually touches.',
    body: 'The strategy carried into the surfaces a customer actually touches, held to the same discipline as the identity that introduced it.',
  },
];

/**
 * @param compact — Home H5: numbered one-liners only (§9.1). Studio keeps full bodies.
 */
export default function ProcessStages({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="flex flex-col">
      {stages.map((stage, i) => (
        <li
          key={stage.title}
          className="grid grid-cols-[3rem,1fr] md:grid-cols-[4rem,1fr] gap-4 py-4 border-t border-rule last:border-b"
        >
          <span className="font-mono text-[13px] text-gambit-text tabular-nums">0{i + 1}</span>
          <div className="flex flex-col gap-2 max-w-[60ch]">
            <h3 className="font-sans font-semibold text-h3 text-ink">{stage.title}</h3>
            <p className="font-sans text-body text-ink">
              {compact ? stage.oneLiner : stage.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
