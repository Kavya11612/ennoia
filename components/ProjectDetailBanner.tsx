import type { Project } from '@/lib/data/types';
import { getProjectSurface } from '@/components/projectSurfaces';

/**
 * Project detail hero — same Brandkit banner surface as listing cards.
 */
export default function ProjectDetailBanner({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const surface = getProjectSurface(index);

  return (
    <div
      className={`relative overflow-hidden rounded-md ${surface.shell} min-h-[240px] md:min-h-[320px] aspect-[16/9] md:aspect-auto`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {surface.deco}
      </div>

      <div className="relative z-[1] flex h-full min-h-[inherit] w-full flex-col justify-between gap-5 p-5 md:flex-row md:items-end md:gap-6 md:p-7 lg:p-8">
        <div className="flex min-w-0 flex-col gap-2 md:gap-3">
          {project.projectType === 'hypothetical' && (
            <span className={`font-mono text-[12px] uppercase tracking-[0.16em] ${surface.mute}`}>
              Hypothetical
            </span>
          )}
          <h1
            className={`font-sans font-bold text-h1 max-w-[16ch] text-balance ${surface.ink}`}
          >
            {project.brandName}
          </h1>
          <p className={`font-sans text-body-l max-w-[42ch] ${surface.mute}`}>{project.oneLiner}</p>
          <p className={`font-mono text-meta uppercase tracking-[0.12em] ${surface.mute}`}>
            <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span>{project.sector}</span>
              <span className="text-current/40" aria-hidden="true">
                ·
              </span>
              <span>{project.practices.join(' · ')}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
