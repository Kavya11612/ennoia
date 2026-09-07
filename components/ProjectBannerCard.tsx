import Link from 'next/link';
import type { Project } from '@/lib/data/types';
import { getProjectSurface } from '@/components/projectSurfaces';

/**
 * Wide banner project cards — home Selected Hypotheticals + /hypotheticals index.
 */
export default function ProjectBannerCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const surface = getProjectSurface(index);
  const n = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/hypotheticals/${project.slug}`}
      className={`group relative flex min-h-[168px] md:min-h-[200px] overflow-hidden rounded-md ${surface.shell} transition-transform duration-base ease-out hover:scale-[1.01]`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {surface.deco}
      </div>

      <div className="relative z-[1] flex w-full flex-col justify-between gap-5 p-5 md:flex-row md:items-end md:gap-6 md:p-6">
        <div className="flex min-w-0 flex-col gap-2">
          <span className={`font-mono text-[12px] uppercase tracking-[0.16em] ${surface.mute}`}>
            Project {n}
          </span>
          <h3 className={`font-sans font-semibold text-h3 max-w-[18ch] text-balance ${surface.ink}`}>
            {project.brandName}
          </h3>
          <p className={`font-sans text-body-s max-w-[36ch] ${surface.mute}`}>{project.oneLiner}</p>
          <span className={`mt-1 inline-flex ${surface.ink}`} aria-hidden="true">
            →
          </span>
        </div>

        <span
          className={`shrink-0 self-start md:self-end inline-flex items-center justify-center min-h-[44px] px-4 rounded-full border font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-fast ease-out ${surface.cta}`}
        >
          View project
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
