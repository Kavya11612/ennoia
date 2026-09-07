import Image from 'next/image';
import Button from '@/components/Button';

/**
 * Home H1 — split composition (copy + CTA | hero illustration).
 * Illustration recolored toward Brandkit clay / emboss / ink.
 */
export default function HomeHero() {
  return (
    <section className="hero-atmosphere relative z-0 overflow-hidden">
      <div className="hero-orb hero-orb--a" aria-hidden="true" />
      <div className="hero-orb hero-orb--b" aria-hidden="true" />

      <div className="relative page-x max-w-container mx-auto min-h-[min(88vh,820px)] flex items-center py-8 md:py-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 lg:items-center">
          <div className="lg:col-span-6 flex flex-col gap-5 hero-rise">
            <p className="font-sans font-bold text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-ink">
              Ennoia.
            </p>

            <h1 className="font-sans font-semibold text-h2 md:text-h1 text-ink max-w-[22ch] text-balance">
              For founders who need a position, not just a logo.
            </h1>

            <p className="font-sans text-body-l text-ink max-w-[40ch]">
              We find the move competitors miss and build the brand around it — because we read the
              whole board before we move.
            </p>

            <div className="pt-1">
              <Button href="/contact" variant="filled">
                Find your move
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 hero-rise hero-rise--delay">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[min(62vh,560px)] overflow-hidden bg-ink hero-block rounded-sm">
              <Image
                src="/hero-illustration.jpg"
                alt="Strategist at a desk facing a board with a chess knight — insight, strategy, and brand converging into ideas, execution, and meaningful outcomes"
                fill
                priority
                quality={92}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
