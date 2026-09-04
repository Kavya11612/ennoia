export default function SectionKicker({ children }: { children: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span aria-hidden="true" className="block h-px w-6 bg-emboss" />
      <span className="font-mono text-eyebrow font-medium uppercase tracking-[0.16em] text-gambit-text">
        {children}
      </span>
    </div>
  );
}
