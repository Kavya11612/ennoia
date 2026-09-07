import type { ReactNode } from 'react';

interface PageHeaderProps {
  kicker?: string;
  title: string;
  standfirst?: ReactNode;
}

/** §8 PageHeader — H1, Body L standfirst ≤60ch. Padding s-9 / s-8. */
export default function PageHeader({ title, standfirst }: PageHeaderProps) {
  return (
    <header className="pt-6 pb-5 page-x max-w-container mx-auto">
      <div className="flex flex-col gap-3 max-w-[900px]">
        <h1 className="font-sans font-bold text-h1 text-ink text-balance">{title}</h1>
        {standfirst && (
          <p className="font-sans text-body-l text-ink max-w-standfirst">{standfirst}</p>
        )}
      </div>
    </header>
  );
}
