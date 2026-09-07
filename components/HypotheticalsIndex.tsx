'use client';

import { useMemo, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ProjectBannerCard from '@/components/ProjectBannerCard';
import SectionKicker from '@/components/SectionKicker';
import Button from '@/components/Button';
import type { Project } from '@/lib/data/types';
import { practices } from '@/lib/data/practices';
import { sectors } from '@/lib/data/sectors';

const FILTER_THRESHOLD = 8;

/**
 * §9.2 W3 — practice + sector filter with URL query params.
 * Render filter row only when published projects ≥ 8; otherwise hide entirely.
 */
export default function HypotheticalsIndex({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const practice = searchParams.get('practice') ?? 'all';
  const sector = searchParams.get('sector') ?? 'all';

  const setParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === 'all') params.delete(key);
      else params.set(key, value);
      const q = params.toString();
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const clientWork = projects.filter((p) => p.projectType === 'client');
  const hypotheticals = useMemo(
    () =>
      [...projects.filter((p) => p.projectType === 'hypothetical')].sort(
        (a, b) => a.featuredOrder - b.featuredOrder,
      ),
    [projects],
  );

  const filtered = useMemo(() => {
    return hypotheticals.filter((p) => {
      const practiceMatch =
        practice === 'all' ||
        p.practices.some((name) => practices.find((x) => x.name === name)?.slug === practice);
      const sectorMatch =
        sector === 'all' || sectors.find((s) => s.slug === sector)?.name === p.sector;
      return practiceMatch && sectorMatch;
    });
  }, [hypotheticals, practice, sector]);

  const showFilters = projects.length >= FILTER_THRESHOLD;

  return (
    <>
      {showFilters && (
        <section className="page-x pb-5 max-w-container mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by practice">
              <FilterChip
                active={practice === 'all'}
                onClick={() => setParam('practice', 'all')}
                label="All practices"
              />
              {practices.map((pr) => (
                <FilterChip
                  key={pr.slug}
                  active={practice === pr.slug}
                  onClick={() => setParam('practice', pr.slug)}
                  label={pr.name}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
              <FilterChip
                active={sector === 'all'}
                onClick={() => setParam('sector', 'all')}
                label="All sectors"
              />
              {sectors.map((s) => (
                <FilterChip
                  key={s.slug}
                  active={sector === s.slug}
                  onClick={() => setParam('sector', s.slug)}
                  label={s.name}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {clientWork.length > 0 && (
        <section className="page-x py-6 max-w-container mx-auto">
          <SectionKicker>Client work</SectionKicker>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-5">
            {clientWork.map((project, i) => (
              <ProjectBannerCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>
      )}

      <section className="page-x py-5 md:py-6 max-w-container mx-auto">
        <SectionKicker>Hypotheticals</SectionKicker>
        <p className="mt-4 font-sans text-body-l text-ink max-w-standfirst">
          Self-initiated projects. The brands are invented; the problems are not.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-5">
          {filtered.map((project, i) => (
            <ProjectBannerCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-6 font-sans text-body text-ink">No projects match these filters.</p>
        )}
      </section>

      <section className="page-x py-5 md:py-6 max-w-container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-t border-rule pt-5">
          <p className="font-sans text-h3 font-semibold text-ink max-w-[36ch]">
            Have a real position that needs finding?
          </p>
          <Button href="/contact" variant="filled">
            Find your move
          </Button>
        </div>
      </section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-mono text-[12px] uppercase tracking-[0.16em] min-h-[44px] px-3 py-2 border transition-colors duration-fast ease-out ${
        active ? 'border-ink text-ink bg-card' : 'border-rule text-gambit-text hover:border-ink'
      }`}
    >
      {label}
    </button>
  );
}
