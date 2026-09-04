export type ProjectType = 'hypothetical' | 'client';

export interface Project {
  slug: string;
  title: string;
  brandName: string;
  projectType: ProjectType;
  sector: string;
  practices: string[];
  oneLiner: string;
  featuredOrder: number;
  selfSetBrief: string;
  categoryResearch: string[];
  findings: string[];
  direction: string;
  systemBody: string[];
  appliedBody: string[];
  whatWeWouldMeasure: string[];
  scope: string[];
}

export interface Article {
  slug: string;
  title: string;
  standfirst: string;
  date: string;
  category: string;
  author: string;
  featured?: boolean;
  body: string[];
}

export interface Practice {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  services: string[];
}

export interface Sector {
  slug: string;
  name: string;
  description: string;
}
