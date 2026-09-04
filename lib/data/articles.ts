import type { Article } from './types';

export const articles: Article[] = [
  {
    slug: 'the-name-is-not-the-strategy',
    title: 'The name is not the strategy',
    standfirst:
      'Most founders come to a branding studio wanting a name. The name is downstream of a decision nobody has made yet — this is that decision, made in public.',
    date: '2026-06-02',
    category: 'Strategy',
    author: 'Manreet',
    featured: true,
    body: [
      'Every naming conversation we have starts the same way: a founder arrives with a shortlist, sometimes twenty names deep, asking us to pick the best one. The honest answer, most of the time, is that none of the twenty are wrong — and none of them matter yet, because the decision that actually determines whether a name works has not been made.',
      'A name is a container. It only reads as strong or weak once you know what it is supposed to hold. "Clarity," "growth," and "north" are not bad words — they are unowned words, available to any brand in any category, which means they carry no position on their own. The name does work only after the position exists to give it meaning.',
      'This is why we build the position first and screen names against it, not the other way round. A cleared, available, pleasant-sounding name attached to no strategy is still a coin flip. The same name, tested against a specific claim the brand is willing to defend, stops being a coin flip and starts being a decision.',
      'The practical consequence: if you are choosing a name before you have written down, in one sentence, the one thing your competitors cannot say without contradicting themselves — you are choosing too early. Write the sentence first.',
    ],
  },
  {
    slug: 'reading-the-whole-board',
    title: 'Reading the whole board before the first move',
    standfirst:
      'Non-linear thinking sounds like a virtue until you have to explain what it actually means in a working session. Here is what it means in ours.',
    date: '2026-05-18',
    category: 'Process',
    author: 'Manreet',
    body: [
      'Every strategy studio claims to think differently. Ours is specific about what that means in practice: before we propose a direction, we map every claim the category has already made — not just direct competitors, but adjacent categories a customer might mentally compare against — and we refuse to add another brand to a pile of near-identical claims.',
      'This takes longer than starting with mood boards. It is also the only reliable way we have found to avoid producing a brand that looks confident in isolation and disappears on the actual shelf, website, or pitch deck it will sit next to.',
      'The output of this stage is rarely exciting to look at — a grid of what everyone else already owns. But it is the only honest starting point for a position, because a position is defined by what it is not, as much as by what it is.',
    ],
  },
  {
    slug: 'matte-not-chrome',
    title: 'Matte, never chrome — on restraint as a design decision',
    standfirst:
      'A flat identity is not an unfinished one. Why we build without gradients, shadows, or gloss on principle, not by default.',
    date: '2026-04-30',
    category: 'Craft',
    author: 'Manreet',
    body: [
      'A gradient is often the fastest way to make something look expensive in five minutes and forgettable in five months. Chrome, gloss, and depth read as premium in isolation and identical in a category where every competitor reached for the same effects at the same time.',
      'We build flat on purpose — flat fills, hairline rules, no drop shadows, no blur. It is a harder constraint than it sounds, because flat design has nowhere to hide a weak decision. Every colour, every proportion, every piece of spacing has to be right on its own, without a soft shadow doing the work of making it look intentional.',
      'The seal at the centre of our own mark is pressed clay, not polished metal, for the same reason. Clay holds an impression. Chrome reflects whatever is standing in front of it. We would rather build brands that hold an impression.',
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function readingTime(body: string[]): number {
  const words = body.join(' ').split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
