import type { Practice } from './types';

export const practices: Practice[] = [
  {
    slug: 'brand-strategy',
    name: 'Brand strategy',
    oneLiner: 'The position, before anything is designed.',
    description:
      'We read the category before we read the brief — competitors, adjacent categories, and the claims everyone else has already made. The output is a position: the one thing this brand can own that a competitor cannot copy without contradicting themselves.',
    services: ['Category & competitive research', 'Positioning', 'Messaging architecture', 'Brand personality'],
  },
  {
    slug: 'naming-verification',
    name: 'Naming & verification',
    oneLiner: 'A name is only as good as its clearance.',
    description:
      'We do not hand over a shortlist of names we have not checked. Every name we present is screened for trademark conflict in-class, domain availability, and search collision before a founder is allowed to get attached to it. This is the differentiator most branding studios skip.',
    services: ['Naming', 'Trademark & domain screening', 'Verbal identity', 'Tagline development'],
  },
  {
    slug: 'visual-identity',
    name: 'Visual identity',
    oneLiner: 'The system that carries the position.',
    description:
      'Mark, typography, colour, and the rules that govern them — built as a system with edge cases already solved, not a logo and a hope. Every identity ships with a locked usage document, the same discipline we hold ourselves to.',
    services: ['Logo & mark design', 'Typography & colour systems', 'Brand guidelines', 'Packaging & print'],
  },
  {
    slug: 'experience-design',
    name: 'Experience design',
    oneLiner: 'Where the brand is actually used.',
    description:
      'A position that only lives in a PDF is not a position. We take the strategy into the surfaces a customer actually touches — websites, product interfaces, physical and print — and hold it to the same discipline as the identity that introduced it.',
    services: ['Website design', 'Product & interface design', 'Signage & environmental', 'Editorial systems'],
  },
];
