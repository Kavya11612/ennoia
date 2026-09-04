import Link from 'next/link';
import type { Project } from '@/lib/data/types';
import HypotheticalTag from './HypotheticalTag';

/**
 * A tactile flat-lay is described via composed CSS blocks (clay / stone /
 * ink) rather than photography — PRD bans stock imagery, and no real
 * project photography exists for self-initiated work.
 */
function ProjectVisual({ index }: { index: number }) {
  const palette = ['bg-clay', 'bg-landing-stone', 'bg-gambit', 'bg-emboss'];
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden ${palette[index % palette.length]}`}>
      <div className="absolute inset-0 flex items-end p-5">
        <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink/70">
          0{index + 1}
        </span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/hypotheticals/${project.slug}`} className="group flex flex-col gap-3">
      <div className="overflow-hidden">
        <div className="transition-transform duration-base ease-out group-hover:scale-[1.02]">
          <ProjectVisual index={index} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          {project.projectType === 'hypothetical' && <HypotheticalTag />}
          <span className="font-mono text-meta uppercase tracking-[0.12em] text-gambit-text">
            {project.sector}
          </span>
        </div>
        <h3 className="font-sans font-semibold text-h3 text-ink group-hover:text-emboss-link transition-colors duration-fast ease-out">
          {project.brandName}
        </h3>
        <p className="font-sans text-body text-ink max-w-[48ch]">{project.oneLiner}</p>
        <p className="font-mono text-meta uppercase tracking-[0.1em] text-gambit-text">
          {project.practices.join(' · ')}
        </p>
      </div>
    </Link>
  );
}
