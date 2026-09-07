import type { ReactNode } from 'react';

export type ProjectSurface = {
  shell: string;
  ink: string;
  mute: string;
  cta: string;
  deco: ReactNode;
};

export const projectSurfaces: ProjectSurface[] = [
  {
    shell: 'bg-clay',
    ink: 'text-ink',
    mute: 'text-ink/70',
    cta: 'border-ink/40 text-ink hover:bg-ink hover:text-open-board',
    deco: (
      <>
        <div className="absolute -right-[10%] -top-[20%] w-[55%] h-[70%] rounded-full bg-emboss/35" />
        <div className="absolute right-[8%] bottom-[-15%] w-[40%] h-[50%] rounded-full bg-open-board/40" />
      </>
    ),
  },
  {
    shell: 'bg-landing-stone',
    ink: 'text-ink',
    mute: 'text-ink/65',
    cta: 'border-ink/35 text-ink hover:bg-ink hover:text-open-board',
    deco: (
      <>
        <div className="absolute left-[45%] -top-[30%] w-[50%] h-[80%] rounded-full bg-clay/45" />
        <div className="absolute -right-[5%] bottom-[-20%] w-[45%] h-[55%] bg-emboss/30" />
      </>
    ),
  },
  {
    shell: 'bg-ink',
    ink: 'text-open-board',
    mute: 'text-landing-stone',
    cta: 'border-open-board/50 text-open-board hover:bg-open-board hover:text-ink',
    deco: (
      <>
        <div className="absolute right-[5%] top-[10%] w-[42%] h-[70%] bg-gambit/50" />
        <div className="absolute -right-[8%] -bottom-[25%] w-[48%] h-[60%] rounded-full bg-clay/35" />
      </>
    ),
  },
  {
    shell: 'bg-emboss',
    ink: 'text-open-board',
    mute: 'text-open-board/75',
    cta: 'border-open-board/45 text-open-board hover:bg-open-board hover:text-ink',
    deco: (
      <>
        <div className="absolute right-[12%] -top-[15%] w-[38%] h-[55%] rounded-full bg-clay/40" />
        <div className="absolute right-0 bottom-0 w-[55%] h-[45%] bg-ink/25" />
      </>
    ),
  },
];

export function getProjectSurface(index: number): ProjectSurface {
  return projectSurfaces[index % projectSurfaces.length];
}
